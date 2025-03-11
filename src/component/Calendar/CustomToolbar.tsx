import React, {useCallback} from 'react';
import {App, Modal, moment, setIcon} from 'obsidian';
import useFileStore from '@/stores/fileStore';
import {ToolbarProps, View, NavigateAction} from 'react-big-calendar';
import '@/less/time-select.less';
import {t} from '@/translations/helper';

// Using the ToolbarProps interface from react-big-calendar
const CustomToolbar: React.FC<ToolbarProps<any, object>> = (props) => {
  const {
    localizer: {messages},
    label,
    view,
    views,
    onNavigate,
    onView,
    date, // Added date from ToolbarProps
  } = props;

  const app = useFileStore((state) => state.app);

  // Handle navigation actions (Today, Previous, Next)
  const handleNavigate = useCallback(
    (action: NavigateAction) => {
      onNavigate(action);
    },
    [onNavigate],
  );

  // Handle view changes (Month, Week, Day, Agenda)
  const handleView = useCallback(
    (newView: View) => {
      onView(newView);
    },
    [onView],
  );

  // Handle date label click - show date picker
  const handleDateLabelClick = useCallback(async () => {
    if (!app) return;

    // Create and show the date picker
    const datePicker = new DatePickerModal(app, (newDate) => {
      // Navigate to the selected date with the DATE action
      onNavigate('DATE' as NavigateAction, newDate);
    });

    // Initialize with current calendar date
    datePicker.setInitialDate(date);
    datePicker.open();
  }, [app, onNavigate, date]);

  // Render view buttons
  const renderViewButtons = useCallback(() => {
    // Convert views object to array of keys
    const viewNames = ['month', 'week', 'day', 'agenda'];

    if (viewNames.length > 1) {
      return viewNames.map((name) => (
        <button
          type="button"
          key={name}
          className={view === name ? 'rbc-active' : ''}
          onClick={() => handleView(name as View)}
        >
          {messages[name]}
        </button>
      ));
    }
    return null;
  }, [views, view, messages, handleView]);

  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button type="button" onClick={() => handleNavigate('TODAY' as NavigateAction)}>
          {messages.today}
        </button>
        <button type="button" onClick={() => handleNavigate('PREV' as NavigateAction)}>
          {messages.previous}
        </button>
        <button type="button" onClick={() => handleNavigate('NEXT' as NavigateAction)}>
          {messages.next}
        </button>
      </span>

      <span
        aria-label={t('Select a date')}
        className="rbc-toolbar-label"
        onClick={handleDateLabelClick}
        style={{cursor: 'pointer'}}
      >
        <span
          ref={(ref) => {
            if (!ref) return;

            setIcon(ref, 'calendar-search');
          }}
        ></span>
        {label}
      </span>

      <span className="rbc-btn-group">{renderViewButtons()}</span>
    </div>
  );
};

// Modal for Date Picker - properly extending Obsidian's Modal class
class DatePickerModal extends Modal {
  private onDateSelected: (date: Date) => void;
  private initialDate: Date;

  constructor(app: App, onDateSelected: (date: Date) => void) {
    super(app);
    this.onDateSelected = onDateSelected;
    this.initialDate = new Date();
  }

  setInitialDate(date: Date) {
    this.initialDate = date;
    return this;
  }

  onOpen() {
    // Set title
    this.titleEl.setText(t('Select a date'));

    // Add content container with the class from our CSS
    const containerEl = this.contentEl.createDiv();
    containerEl.className = 'date-picker-container';

    // Current date display
    const currentDateDisplay = containerEl.createDiv({cls: 'current-date-display'});

    // Update the display when date changes
    const updateDateDisplay = (date: Date) => {
      currentDateDisplay.setText(moment(date).format('dddd, MMMM D, YYYY'));
    };

    // Set initial date display
    updateDateDisplay(this.initialDate);

    // Date input
    const dateInput = containerEl.createEl('input', {cls: 'date-input'});
    dateInput.type = 'date';
    dateInput.value = moment(this.initialDate).format('YYYY-MM-DD');

    // Update display when date input changes
    dateInput.addEventListener('change', () => {
      updateDateDisplay(moment(dateInput.value).toDate());
    });

    // Today button
    const todayButton = containerEl.createEl('button', {
      text: t('Today'),
      cls: 'today-button mod-cta',
    });

    todayButton.addEventListener('click', () => {
      const today = new Date();
      dateInput.value = moment(today).format('YYYY-MM-DD');
      updateDateDisplay(today);
    });

    // Buttons container
    const buttonsContainer = containerEl.createDiv({cls: 'buttons-container'});

    // Cancel button
    const cancelButton = buttonsContainer.createEl('button', {
      text: t('Cancel'),
      cls: 'mod-warning',
    });

    cancelButton.addEventListener('click', () => {
      this.close();
    });

    // OK button
    const okButton = buttonsContainer.createEl('button', {
      text: t('Go to date'),
      cls: 'mod-cta',
    });

    okButton.addEventListener('click', () => {
      const selectedDate = moment(dateInput.value).toDate();
      this.onDateSelected(selectedDate);
      this.close();
    });

    // Add keyboard event for Enter key
    this.scope.register([], 'Enter', (evt) => {
      const selectedDate = moment(dateInput.value).toDate();
      this.onDateSelected(selectedDate);
      this.close();
      return false;
    });

    // Focus the date input
    setTimeout(() => {
      dateInput.focus();
    }, 10);
  }

  onClose() {
    // Clear the content to prevent memory leaks
    this.contentEl.empty();
  }
}

export default CustomToolbar;
