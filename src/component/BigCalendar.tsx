import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {dailyNotesService, eventService} from '../services';
import {Notice} from 'obsidian';
import CalendarComponent, {EventRefActions} from './Calendar/Calendar';
import {View, SlotInfo} from 'react-big-calendar';
import {showEventInDailyNotes} from '../obComponents/showEvent';
import {useEvents} from '../hooks/useStore';
import useGlobalStateStore from 'src/stores/globalStateStore';

interface Props {}

const BigCalendar: React.FC<Props> = () => {
  // 使用 Zustand hook 来获取事件数据
  const events = useEvents();
  const settings = useGlobalStateStore((state) => state.pluginSetting);
  const [isFetching, setFetchStatus] = useState(false);
  const eventRef = useRef<EventRefActions>(null);

  useEffect(() => {
    // 获取所有事件和日记笔记
    Promise.all([eventService.fetchAllEvents(), dailyNotesService.getMyAllDailyNotes()])
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
      StartDate: StartDate,
      defaultView: 'month' as View,
      popup: true,
      onEventDoubleClick: handleEventDoubleClick,
      onEventSelect: handleEventSelect,
    }),
    [handleEventDoubleClick, handleEventSelect],
  );

  return (
    <div className="big-calendar-wrapper">
      <Only when={isFetching}>
        <CalendarComponent ref={eventRef} {...calendarConfig} />
      </Only>
    </div>
  );
};

export default BigCalendar;
