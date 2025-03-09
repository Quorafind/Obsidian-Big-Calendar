import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {fileService, eventService} from '@/services';
import {Notice} from 'obsidian';
import CalendarComponent, {EventRefActions} from '@/component/Calendar/Calendar';
import {View, SlotInfo} from 'react-big-calendar';
import {showEventInDailyNotes} from '@/obComponents/showEvent';
import {useEvents} from '@/hooks/useStore';
import useCalendarStore from '@/stores/calendarStore';
import {EventCreateResult} from '@/obComponents/EventCreatePrompt';

interface Props {}

const BigCalendar: React.FC<Props> = () => {
  // Get events with memoization (already handled in the useEvents hook now)
  const events = useEvents();
  const [isLoading, setIsLoading] = useState(true);
  const eventRef = useRef<EventRefActions>(null);
  const eventsUpdated = useRef(false);

  // Get calendar state once and prevent re-renders
  const calendarView = useCalendarStore((state) => state.calendarView);
  const startDay = useCalendarStore((state) => state.startDay);

  // Fetch data only once when component mounts
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        await Promise.all([eventService.fetchAllEvents(), fileService.getMyAllDailyNotes()]);

        if (isMounted) {
          setIsLoading(false);
        }
      } catch (err) {
        console.error(err);
        if (isMounted) {
          new Notice('Failed to fetch data');
          setIsLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to prevent state updates if component unmounts
    return () => {
      isMounted = false;
    };
  }, []);

  // Update calendar events with a ref to avoid re-renders
  // Only update events if they've changed and we haven't already processed them
  useEffect(() => {
    if (!eventRef.current || !events || events.length === 0) return;

    if (!eventsUpdated.current) {
      // Mark that we've updated events to avoid repeated updates
      eventsUpdated.current = true;

      // Use a delayed update to break circular dependencies
      const timeoutId = setTimeout(() => {
        if (eventRef.current) {
          try {
            eventRef.current.setEvents(events);
          } catch (err) {
            console.error('Error setting events:', err);
          } finally {
            // Reset the flag after a delay to allow future updates
            setTimeout(() => {
              eventsUpdated.current = false;
            }, 500);
          }
        }
      }, 50);

      return () => clearTimeout(timeoutId);
    }
  }, [events]);

  // Handle event double click
  const handleEventDoubleClick = useCallback(async (event: any) => {
    if (event.path === undefined) {
      await showEventInDailyNotes(event.id);
    }
  }, []);

  // Handle event creation
  const handleEventSelect = useCallback(async (event: EventCreateResult, slotInfo: SlotInfo) => {
    try {
      const newEvent = await eventService.createEvent(event.content, event.startDate, event.endDate);
      eventService.pushEvent(newEvent);
    } catch (err) {
      console.error(err);
    }
  }, []);

  // Memoize calendar config
  const calendarConfig = useMemo(
    () => ({
      selectable: true,
      resizeable: true,
      StartDate: startDay,
      defaultView: calendarView as View,
      popup: true,
      onEventDoubleClick: handleEventDoubleClick,
      onEventSelect: handleEventSelect,
    }),
    [handleEventDoubleClick, handleEventSelect, calendarView, startDay],
  );

  return (
    <div className="big-calendar-wrapper">
      {isLoading ? <div>Loading...</div> : <CalendarComponent ref={eventRef} {...calendarConfig} />}
    </div>
  );
};

export default BigCalendar;
