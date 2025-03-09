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

export interface EventRefActions {
  setEvents: (events: Model.Event[]) => void;
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

  // Use individual selectors instead of the entire store
  // This prevents unnecessary re-renders when unrelated parts of the store change
  const events = useCalendarStore((state) => state.events);
  const calendarView = useCalendarStore((state) => state.calendarView);
  const calendarDate = useCalendarStore((state) => state.calendarDate);
  const select = useCalendarStore((state) => state.selectable);
  const resize = useCalendarStore((state) => state.resizable);
  const calendarPopup = useCalendarStore((state) => state.calendarPopup);

  // Get store actions
  const setEvents = useCalendarStore((state) => state.setEvents);
  const setCalendarView = useCalendarStore((state) => state.setCalendarView);
  const setCalendarDate = useCalendarStore((state) => state.setCalendarDate);
  const setSelectable = useCalendarStore((state) => state.setSelectable);
  const setResizable = useCalendarStore((state) => state.setResizable);
  const setCalendarPopup = useCalendarStore((state) => state.setCalendarPopup);
  const setStartDay = useCalendarStore((state) => state.setStartDay);
  const setLoading = useCalendarStore((state) => state.setLoading);
  const loadStoredPreferences = useCalendarStore((state) => state.loadStoredPreferences);
  const saveCalendarView = useCalendarStore((state) => state.saveCalendarView);
  const saveCalendarDate = useCalendarStore((state) => state.saveCalendarDate);
  const updateEvent = useCalendarStore((state) => state.updateEvent);

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

  // Forward ref implementation for event management - Memoize to prevent unnecessary updates
  useEffect(() => {
    if (!ref) return;

    // @ts-ignore - ForwardedRef type issue
    ref.current = {
      setEvents: (newEvents: Model.Event[]) => {
        if (newEvents && newEvents.length > 0 && newEvents !== events) {
          // Use setTimeout to break circular dependency
          setTimeout(() => {
            setEvents(newEvents);
          }, 0);
        }
      },
    };
  }, [ref, events, setEvents]);

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

        // Use setTimeout to prevent immediate state changes
        if (app) {
          setTimeout(() => {
            saveCalendarView(app);
          }, 0);
        }
      }
    },
    [calendarView, app, setCalendarView, saveCalendarView],
  );

  // Handle navigation (date changes)
  const handleNavigate = useCallback(
    (date: Date) => {
      if (calendarDate !== date) {
        setCalendarDate(date);

        // Use setTimeout to prevent immediate state changes
        if (app) {
          setTimeout(() => {
            saveCalendarDate(app);
          }, 0);
        }
      }
    },
    [calendarDate, app, setCalendarDate, saveCalendarDate],
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
  const onEventDrop = useCallback<withDragAndDropProps['onEventDrop']>(
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

  // Memoize calendar props to prevent unnecessary re-renders
  const calendarProps = useMemo(() => {
    return {
      selectable: select,
      localizer: localizer,
      events: events,
      resizable: resize,
      defaultView: calendarView,
      defaultDate: calendarDate,
      style: {height: '90vh'},
      eventPropGetter: styleEvents,
      popup: calendarPopup,
      onEventDrop: onEventDrop,
      onEventResize: onEventResize,
      titleAccessor: (event: any) => event.title as string,
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
    resize,
    calendarView,
    calendarDate,
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
