import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {fileService, eventService} from '@/services';
import {Notice} from 'obsidian';
import CalendarComponent, {EventRefActions} from '@/component/Calendar/Calendar';
import {View, SlotInfo} from 'react-big-calendar';
import {showEventInDailyNotes} from '@/obComponents/showEvent';
import {useApp, useEvents} from '@/hooks/useStore';
import useCalendarStore from '@/stores/calendarStore';
import {EventCreateResult} from '@/obComponents/EventCreatePrompt';

interface Props {}

const BigCalendar: React.FC<Props> = () => {
  const app = useApp();
  const [isLoading, setIsLoading] = useState(true);
  const eventRef = useRef<EventRefActions>(null);

  // Get calendar state once and prevent re-renders
  const {calendarView, startDay} = useCalendarStore();

  // Fetch data only once when component mounts
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        await Promise.all([eventService.fetchAllEvents(app), fileService.getMyAllDailyNotes()]);

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
