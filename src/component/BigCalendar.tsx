import React, {useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react';
import appContext from '../stores/appContext';
import {dailyNotesService, eventService} from '../services';
import {Notice} from 'obsidian';
import CalendarComponent, {EventRefActions} from './Calendar/Calendar';
import {View, SlotInfo} from 'react-big-calendar';
import Only from './common/OnlyWhen';
import {showEventInDailyNotes} from '../obComponents/obShowEvent';

interface Props {}

let allEvents;

const BigCalendar: React.FC<Props> = () => {
  const {
    globalState,
    eventState: {events},
  } = useContext(appContext);
  const prevGlobalStateRef = useRef(globalState);
  const [isFetching, setFetchStatus] = useState(true);
  const eventRef = useRef<EventRefActions>(null);

  allEvents = events;

  useEffect(() => {
    eventService
      .fetchAllEvents()
      .then(() => {
        setFetchStatus(false);
      })
      .catch(() => {
        new Notice('😭 Fetch Error');
      });
    dailyNotesService
      .getMyAllDailyNotes()
      .then(() => {
        setFetchStatus(false);
      })
      .catch(() => {
        new Notice('😭 Fetch DailyNotes Error');
      });
    dailyNotesService.getState();
  }, []);

  const handleEventSelect = useCallback(async (content: string, slotInfo: SlotInfo) => {
    const newEvent = await eventService.createEvent(content, slotInfo.start);
    eventService.pushEvent(newEvent);
    // const events = appStore.getState().eventState.events;
    // eventRef.current?.setEvents(events);
  }, []);

  const handleEventDoubleClick = useCallback(async (event: any) => {
    if (event.path === undefined) {
      console.log(event.id);
      showEventInDailyNotes(event.id);
    }
    // const lineNum = parseInt(event.id.slice(14));
    // leaf.openFile(event.file, {eState: {line: lineNum}});
  }, []);

  const calendarConfig = useMemo(
    () => ({
      selectable: true,
      resizeable: true,
      defaultView: 'month' as View,
      popup: true,
      onEventDoubleClick: handleEventDoubleClick,
      onEventSelect: handleEventSelect,
    }),
    [],
  );

  return (
    <div className={`big-calendar-wrapper`}>
      <Only when={events.length > 0}>
        <CalendarComponent ref={eventRef} {...calendarConfig} />
      </Only>
    </div>
  );
};

export default BigCalendar;
