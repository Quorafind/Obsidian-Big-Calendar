import React, {forwardRef, useCallback, useEffect, useMemo, memo} from 'react';
import '../../less/Calendar.less';
import {Calendar, Event, momentLocalizer, SlotInfo, View} from 'react-big-calendar';
import {moment} from 'obsidian';
import withDragAndDrop, {withDragAndDropProps} from 'react-big-calendar/lib/addons/dragAndDrop';
import dailyNotesService from '../../services/fileService';
import GenericInputPrompt from '../../obComponents/GenericInputPrompt';
import eventService from '../../services/eventService';
import useFileStore from '../../stores/fileStore';
import useCalendarStore, {CalendarState} from '../../stores/calendarStore';

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
  onEventSelect: (content: string, slotInfo: SlotInfo) => void;
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

  // Use the Zustand store for state management
  const calendarState = useCalendarStore();
  const {
    events,
    calendarView,
    calendarDate,
    selectable: select,
    resizable: resize,
    calendarPopup,
    setEvents,
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
    updateEvent,
  } = calendarState;

  // Create a memoized localizer
  const localizer = useMemo(() => momentLocalizer(moment), []);

  // Initialize the component
  useEffect(() => {
    if (app) {
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
    }
  }, [app, defaultView, selectable, resizeable, popup, StartDate]);

  // Forward ref implementation for event management
  useEffect(() => {
    if (ref) {
      // @ts-ignore - ForwardedRef type issue
      ref.current = {
        setEvents: (newEvents: Model.Event[]) => {
          if (newEvents !== events) {
            setEvents(newEvents);
          }
        },
      };
    }
  }, [ref, setEvents, events]);

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
      const addEvent = await GenericInputPrompt.Prompt(app, 'Input Event', '', '');

      handleEventSelectCallback(addEvent, slotInfo);
    },
    [handleEventSelectCallback],
  );

  // Handle view changes
  const handleViewChange = useCallback(
    (view: View) => {
      if (calendarView !== view) {
        setCalendarView(view);
        if (app) {
          saveCalendarView(app);
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
        if (app) {
          saveCalendarDate(app);
        }
      }
    },
    [calendarDate, setCalendarDate, app, saveCalendarDate],
  );

  // Handle event resize
  const onEventResize = useCallback<withDragAndDropProps['onEventResize']>(
    (data) => {
      const {event, start, end} = data;
      const eventId = (event as Model.Event).id;

      // Update the event in the store
      updateEvent(eventId, {
        start: moment(start).toDate(),
        end: moment(end).toDate(),
      });

      // Update the event using the service
      eventService.editEvent(event as Model.Event, start, end);
    },
    [updateEvent],
  );

  // Handle event drop
  const onEventDrop = useCallback<withDragAndDropProps['onEventDrop']>(
    (data) => {
      const {event, start, end} = data;
      const eventId = (event as Model.Event).id;

      // Update the event in the store
      updateEvent(eventId, {
        start: moment(start).toDate(),
        end: moment(end).toDate(),
      });

      // Update the event using the service
      eventService.editEvent(event as Model.Event, start, end);
    },
    [updateEvent],
  );

  return (
    <DragAndDropCalendar
      selectable={select}
      localizer={localizer}
      events={events}
      resizable={resize}
      defaultView={calendarView}
      defaultDate={calendarDate}
      style={{height: '90vh'}}
      eventPropGetter={styleEvents}
      popup={calendarPopup}
      onEventDrop={onEventDrop}
      onEventResize={onEventResize}
      titleAccessor={(event) => event.title as string}
      tooltipAccessor={(event) => event.title as string}
      onView={handleViewChange}
      onNavigate={handleNavigate}
      onDoubleClickEvent={handleDoubleClickEvent}
      onSelectSlot={handleEventSelect}
    />
  );
});

export default memo(CalendarComponent);
