import React, {forwardRef, useCallback, useEffect, useMemo, memo} from 'react';
import '@/less/Calendar.less';
import {Calendar, Event, momentLocalizer, SlotInfo, View} from 'react-big-calendar';
import {moment} from 'obsidian';
import withDragAndDrop, {withDragAndDropProps} from 'react-big-calendar/lib/addons/dragAndDrop';
import dailyNotesService from '@/services/fileService';
import eventService from '@/services/eventService';
import useFileStore from '@/stores/fileStore';
import useCalendarStore from '@/stores/calendarStore';
import EventCreatePrompt, {EventCreateResult} from '@/obComponents/EventCreatePrompt';
import {useEvents} from '@/hooks/useStore';
import useEventStore from '@/stores/eventStore';
import {updateEvent} from '@/api';

export interface EventRefActions {
  updateEvents: (events: Model.Event[]) => void;
}

interface CalendarProps {
  selectable: boolean;
  resizeable: boolean;
  defaultView: View;
  StartDate: string;
  popup: boolean;
  onEventDoubleClick: (event: Event) => void;
  onEventSelect: (event: EventCreateResult, slotInfo: SlotInfo) => void;
}

// Create a memoized DragAndDropCalendar component
const DragAndDropCalendar = memo(withDragAndDrop(Calendar as any));

// eslint-disable-next-line react/display-name
const CalendarComponent = forwardRef((props: CalendarProps, ref: React.ForwardedRef<EventRefActions>) => {
  const {
    selectable,
    resizeable,
    defaultView,
    StartDate,
    popup,
    onEventDoubleClick: handleDoubleClickEventCallback,
    onEventSelect: handleEventSelectCallback,
  } = props;

  // Get app from fileStore
  const app = useFileStore((state) => state.app);

  const events = useEvents();
  const updateEvent = useEventStore((state) => state.updateEvent);
  // Get state and actions from the calendar store
  const {
    calendarView,
    calendarDate,
    selectable: select,
    resizable: resize,
    calendarPopup,
    setCalendarView,
    setCalendarDate,
    setSelectable,
    setResizable,
    setCalendarPopup,
    setStartDay,
    setLoading,
    loadStoredPreferences,
    saveCalendarView,
    saveCalendarDate,
  } = useCalendarStore();

  // Create a memoized localizer
  const localizer = useMemo(() => momentLocalizer(moment), []);

  // Initialize the component - Only run once when app is available
  useEffect(() => {
    if (!app) return;

    // Use a timeout to defer these operations, breaking potential circular dependencies
    const timeoutId = setTimeout(() => {
      // Load stored preferences
      loadStoredPreferences(app);

      // Set initial values from props if they don't match stored values
      if (defaultView && defaultView !== calendarView) {
        setCalendarView(defaultView);
      }

      if (selectable !== select) {
        setSelectable(selectable);
      }

      if (resizeable !== resize) {
        setResizable(resizeable);
      }

      if (popup !== calendarPopup) {
        setCalendarPopup(popup);
      }

      // Set start day and update moment locale
      setStartDay(StartDate === 'sunday' ? 'sunday' : 'monday');

      // Mark loading as complete
      setLoading(false);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [
    app,
    defaultView,
    calendarView,
    selectable,
    select,
    resizeable,
    resize,
    popup,
    calendarPopup,
    StartDate,
    loadStoredPreferences,
    setCalendarView,
    setSelectable,
    setResizable,
    setCalendarPopup,
    setStartDay,
    setLoading,
  ]);

  // Style events based on their type
  const styleEvents = useCallback((event: any) => {
    const className = event.eventType;
    return {className: className};
  }, []);

  // Handle double click on events
  const handleDoubleClickEvent = useCallback(
    (event: Event) => {
      handleDoubleClickEventCallback(event);
    },
    [handleDoubleClickEventCallback],
  );

  // Handle event selection
  const handleEventSelect = useCallback(
    async (slotInfo: SlotInfo) => {
      const {app} = dailyNotesService.getState();

      // Pass the start and end times from slotInfo to EventCreatePrompt
      const addEvent = await EventCreatePrompt.Prompt(
        app,
        'Input Event',
        '',
        '',
        slotInfo.start as Date,
        slotInfo.end as Date,
      );

      handleEventSelectCallback(addEvent, slotInfo);
    },
    [handleEventSelectCallback],
  );

  // Handle view changes
  const handleViewChange = useCallback(
    (view: View) => {
      if (calendarView !== view) {
        setCalendarView(view);
        // Save the view change to storage
        if (app) {
          setTimeout(() => {
            saveCalendarView(app);
          }, 0);
        }
      }
    },
    [calendarView, setCalendarView, app, saveCalendarView],
  );

  // Handle navigation (date changes)
  const handleNavigate = useCallback(
    (date: Date) => {
      if (calendarDate !== date) {
        setCalendarDate(date);

        // Save the date change to storage
        if (app) {
          setTimeout(() => {
            saveCalendarDate(app);
          }, 0);
        }
      }
    },
    [calendarDate, setCalendarDate, app, saveCalendarDate],
  );

  // Handle event resize - Memoize the implementation
  const onEventResize = useCallback<withDragAndDropProps['onEventResize']>(
    (data) => {
      const {event, start, end} = data;
      const eventId = (event as Model.Event).id;

      // Update the event in the store
      updateEvent(eventId, {
        start: moment(start).toDate(),
        end: moment(end).toDate(),
      });

      // Update the event using the service - use setTimeout to defer
      setTimeout(() => {
        eventService.editEvent(event as Model.Event, start, end);
      }, 0);
    },
    [updateEvent],
  );

  // Handle event drop - Memoize the implementation
  const onEventDrop = useCallback<withDragAndDropProps['onEventDrop']>((data) => {
    const {event, start, end} = data;

    // 移除本地更新，让状态更新统一由 editEvent 处理
    // 这样可以避免状态更新和文件更新不同步

    // 直接调用 editEvent，移除 setTimeout
    eventService
      .editEvent(event as Model.Event, start, end)
      .then((updatedEvent) => {
        if (updatedEvent) {
          console.log('Event updated successfully:', updatedEvent.id);
        } else {
          console.error('Failed to update event');
        }
      })
      .catch((error) => {
        console.error('Error updating event:', error);
      });
  }, []);

  console.log('events', events);

  // Memoize calendar props to prevent unnecessary re-renders
  const calendarProps = useMemo(() => {
    return {
      selectable: select,
      localizer: localizer,
      events: events,
      resizable: resize,
      defaultView: calendarView,
      defaultDate: calendarDate,
      date: calendarDate,
      view: calendarView,
      style: {height: '90vh'},
      eventPropGetter: styleEvents,
      popup: calendarPopup,
      onEventDrop: onEventDrop,
      onEventResize: onEventResize,
      titleAccessor: (event: any) => {
        // Remove time patterns from the title for display
        const title = event.title as string;
        return title
          .replace(/\d{1,2}:\d{2}(-\d{1,2}:\d{2})?/g, '') // Remove time ranges like 10:00-11:00
          .replace(/⏲\s?\d{1,2}:\d{2}/g, '') // Remove end time emoji patterns
          .replace(/📅\s?\d{4}-\d{2}-\d{2}/g, '') // Remove date patterns
          .trim();
      },
      tooltipAccessor: (event: any) => event.title as string,
      onView: handleViewChange,
      onNavigate: handleNavigate,
      onDoubleClickEvent: handleDoubleClickEvent,
      onSelectSlot: handleEventSelect,
    };
  }, [
    select,
    localizer,
    events,
    calendarDate,
    resize,
    calendarView,
    styleEvents,
    calendarPopup,
    onEventDrop,
    onEventResize,
    handleViewChange,
    handleNavigate,
    handleDoubleClickEvent,
    handleEventSelect,
  ]);

  return <DragAndDropCalendar {...calendarProps} />;
});

export default memo(CalendarComponent);
