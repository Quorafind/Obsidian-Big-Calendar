import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {fileService, eventService} from '@/services';
import {Notice} from 'obsidian';
import CalendarComponent, {EventRefActions} from '@/component/Calendar/Calendar';
import {View, SlotInfo} from 'react-big-calendar';
import {showEventInDailyNotes} from '@/obComponents/showEvent';
import {useEvents} from '@/hooks/useStore';
import useCalendarStore from '@/stores/calendarStore';

interface Props {}

const BigCalendar: React.FC<Props> = () => {
  // 使用 Zustand hook 来获取事件数据
  const events = useEvents();
  const [isFetching, setFetchStatus] = useState(false);
  const eventRef = useRef<EventRefActions>(null);

  const calendarView = useCalendarStore((state) => state.calendarView);
  const startDay = useCalendarStore((state) => state.startDay);

  useEffect(() => {
    // 获取所有事件和日记笔记
    Promise.all([eventService.fetchAllEvents(), fileService.getMyAllDailyNotes()])
      .then(() => {
        setFetchStatus(true);
      })
      .catch((err) => {
        console.error(err);
        new Notice('Failed to fetch data');
        setFetchStatus(false);
      });
  }, []);

  // 当事件变化时更新日历
  useEffect(() => {
    if (eventRef.current && events) {
      eventRef.current.setEvents(events);
    }
  }, [events]);

  // 处理事件双击
  const handleEventDoubleClick = useCallback(async (event: any) => {
    if (event.path === undefined) {
      await showEventInDailyNotes(event.id);
    }
  }, []);

  // 处理事件创建
  const handleEventSelect = useCallback(async (content: string, slotInfo: SlotInfo) => {
    try {
      const newEvent = await eventService.createEvent(content, slotInfo.start, slotInfo.end);
      eventService.pushEvent(newEvent);
    } catch (err) {
      console.error(err);
    }
  }, []);

  // 日历配置
  const calendarConfig = useMemo(
    () => ({
      selectable: true,
      resizeable: true,
      StartDate: startDay, // Use the startDay from the store
      defaultView: calendarView as View,
      popup: true,
      onEventDoubleClick: handleEventDoubleClick,
      onEventSelect: handleEventSelect,
    }),
    [handleEventDoubleClick, handleEventSelect, calendarView, startDay],
  );

  return (
    <div className="big-calendar-wrapper">
      {isFetching ? <div>Loading...</div> : <CalendarComponent ref={eventRef} {...calendarConfig} />}
    </div>
  );
};

export default BigCalendar;
