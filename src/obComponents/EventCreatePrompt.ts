//credit to chhoumann and from https://github.com/chhoumann/quickadd
import {App, ButtonComponent, Modal, TextComponent, Setting, moment} from 'obsidian';
import {stringOrDate} from 'react-big-calendar';
import eventService from '@/services/eventService';

export interface EventCreateResult {
  content: string;
  startDate: Date;
  endDate: Date;
}

export default class EventCreatePrompt extends Modal {
  public waitForClose: Promise<EventCreateResult>;

  private resolvePromise: (result: EventCreateResult) => void;
  private rejectPromise: (reason?: any) => void;
  //eslint-disable-next-line
  private didSubmit: boolean = false;
  private contentComponent: TextComponent;
  private content: string;
  private startDate: Date;
  private endDate: Date;
  private readonly placeholder: string;

  public static Prompt(
    app: App,
    header: string,
    placeholder?: string,
    value?: string,
    presetStartDate?: Date,
    presetEndDate?: Date,
  ): Promise<EventCreateResult> {
    const newPromptModal = new EventCreatePrompt(app, header, placeholder, value, presetStartDate, presetEndDate);
    return newPromptModal.waitForClose;
  }

  protected constructor(
    app: App,
    private header: string,
    placeholder?: string,
    value?: string,
    presetStartDate?: Date,
    presetEndDate?: Date,
  ) {
    super(app);
    this.placeholder = placeholder;
    this.content = value || '';

    // Initialize with preset time or current time
    const now = new Date();
    this.startDate = presetStartDate || now;

    // Default end time is 1 hour after start if not preset
    if (presetEndDate) {
      this.endDate = presetEndDate;
    } else {
      this.endDate = new Date(this.startDate.getTime() + 60 * 60 * 1000);
    }

    this.waitForClose = new Promise<EventCreateResult>((resolve, reject) => {
      this.resolvePromise = resolve;
      this.rejectPromise = reject;
    });

    this.display();
    this.open();
  }

  private display() {
    this.contentEl.empty();
    this.titleEl.textContent = this.header;

    const mainContentContainer: HTMLDivElement = this.contentEl.createDiv();
    mainContentContainer.style.minWidth = '300px';

    // Event content input
    new Setting(mainContentContainer).setName('Event content').setDesc('Enter the content for your event');

    this.contentComponent = this.createInputField(mainContentContainer, this.placeholder, this.content);

    // Start date and time
    this.createDateTimePicker(mainContentContainer, 'Start date and time', this.startDate, (date) => {
      this.startDate = date;

      // If end time is before start time, update end time to start time + 1 hour
      if (this.endDate < this.startDate) {
        this.endDate = new Date(this.startDate.getTime() + 60 * 60 * 1000);
        const endDateInput = mainContentContainer.querySelector('#end-date-input') as HTMLInputElement;
        const endTimeInput = mainContentContainer.querySelector('#end-time-input') as HTMLInputElement;
        if (endDateInput && endTimeInput) {
          endDateInput.value = moment(this.endDate).format('YYYY-MM-DD');
          endTimeInput.value = moment(this.endDate).format('HH:mm');
        }
      }
    });

    // End date and time
    this.createDateTimePicker(
      mainContentContainer,
      'End date and time',
      this.endDate,
      (date) => {
        this.endDate = date;
      },
      true,
    );

    this.createButtonBar(mainContentContainer);
  }

  private createDateTimePicker(
    container: HTMLElement,
    name: string,
    initialDate: Date,
    onChange: (date: Date) => void,
    isEnd: boolean = false,
  ) {
    const dateTimeContainer = container.createDiv();
    dateTimeContainer.style.marginBottom = '1rem';

    new Setting(dateTimeContainer).setName(name);

    const inputContainer = dateTimeContainer.createDiv();
    inputContainer.style.display = 'flex';
    inputContainer.style.gap = '10px';

    // Date input
    const dateInput = inputContainer.createEl('input');
    dateInput.type = 'date';
    dateInput.id = isEnd ? 'end-date-input' : 'start-date-input';
    dateInput.value = moment(initialDate).format('YYYY-MM-DD');
    dateInput.style.flex = '1';

    // Time input
    const timeInput = inputContainer.createEl('input');
    timeInput.type = 'time';
    timeInput.id = isEnd ? 'end-time-input' : 'start-time-input';
    timeInput.value = moment(initialDate).format('HH:mm');
    timeInput.style.flex = '1';

    // Event listener for date and time changes
    const updateDateTime = () => {
      const dateValue = dateInput.value;
      const timeValue = timeInput.value;

      if (dateValue && timeValue) {
        const [hours, minutes] = timeValue.split(':').map(Number);
        const date = moment(dateValue).toDate();
        date.setHours(hours, minutes);
        onChange(date);
      }
    };

    dateInput.addEventListener('change', updateDateTime);
    timeInput.addEventListener('change', updateDateTime);
  }

  protected createInputField(container: HTMLElement, placeholder?: string, value?: string) {
    const textComponent = new TextComponent(container);

    textComponent.inputEl.style.width = '100%';
    textComponent.inputEl.style.marginBottom = '1rem';
    textComponent
      .setPlaceholder(placeholder ?? '')
      .setValue(value ?? '')
      .onChange((value) => (this.content = value))
      .inputEl.addEventListener('keydown', this.submitEnterCallback);

    return textComponent;
  }

  private createButton(container: HTMLElement, text: string, callback: (evt: MouseEvent) => any) {
    const btn = new ButtonComponent(container);
    btn.setButtonText(text).onClick(callback);

    return btn;
  }

  private createButtonBar(mainContentContainer: HTMLDivElement) {
    const buttonBarContainer: HTMLDivElement = mainContentContainer.createDiv();
    this.createButton(buttonBarContainer, 'Create', this.submitClickCallback).setCta().buttonEl.style.marginRight = '0';
    this.createButton(buttonBarContainer, 'Cancel', this.cancelClickCallback);

    buttonBarContainer.style.display = 'flex';
    buttonBarContainer.style.flexDirection = 'row-reverse';
    buttonBarContainer.style.justifyContent = 'flex-start';
    buttonBarContainer.style.marginTop = '1rem';
  }

  //eslint-disable-next-line
  private submitClickCallback = (evt: MouseEvent) => this.submit();
  //eslint-disable-next-line
  private cancelClickCallback = (evt: MouseEvent) => this.cancel();

  private submitEnterCallback = (evt: KeyboardEvent) => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      this.submit();
    }
  };

  private submit() {
    if (!this.content) {
      // Show error if no content
      const errorDiv = this.contentEl.createDiv();
      errorDiv.setText('Event content cannot be empty');
      errorDiv.style.color = 'red';
      errorDiv.style.marginTop = '10px';

      // Remove error message after 2 seconds
      setTimeout(() => {
        errorDiv.remove();
      }, 2000);

      return;
    }

    this.didSubmit = true;
    this.close();
  }

  private cancel() {
    this.close();
  }

  private resolveInput() {
    if (!this.didSubmit) this.rejectPromise('No input given.');
    else
      this.resolvePromise({
        content: this.content,
        startDate: this.startDate,
        endDate: this.endDate,
      });
  }

  private removeInputListener() {
    this.contentComponent.inputEl.removeEventListener('keydown', this.submitEnterCallback);
  }

  onOpen() {
    super.onOpen();

    this.contentComponent.inputEl.focus();
    this.contentComponent.inputEl.select();
  }

  onClose() {
    super.onClose();
    this.resolveInput();
    this.removeInputListener();
  }

  // Helper function to create an event using the eventService
  public static async createEvent(
    app: App,
    header: string,
    placeholder?: string,
    presetStartDate?: Date,
    presetEndDate?: Date,
  ): Promise<Model.Event | null> {
    try {
      const result = await EventCreatePrompt.Prompt(app, header, placeholder, '', presetStartDate, presetEndDate);
      return await eventService.createEvent(result.content, result.startDate, result.endDate);
    } catch (error) {
      console.error('Event creation cancelled or failed:', error);
      return null;
    }
  }
}
