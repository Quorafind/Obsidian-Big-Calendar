import React, {useCallback, useContext, useEffect, useMemo, useRef, useState} from 'react';
import appContext from '../stores/appContext';
import {dailyNotesService, eventService} from '../services';
import {Notice} from 'obsidian';
import CalendarComponent, {EventRefActions} from './Calendar/Calendar';
import {View, SlotInfo} from 'react-big-calendar';
import Only from './common/OnlyWhen';
import {showEventInDailyNotes} from '../obComponents/obShowEvent';
import {StartDate} from '../bigCalendar';

interface Props {}

// let allEvents;

const BigCalendar: React.FC<Props> = () => {
  const {
    eventState: {events},
  } = useContext(appContext);
  //   const prevGlobalStateRef = useRef(globalState);
  const [isFetching, setFetchStatus] = useState(false);
  const eventRef = useRef<EventRefActions>(null);
  //   const [change, setChange] = useState(true);

  //   allEvents = events;

  useEffect(() => {
    // eventService
    //   .fetchAllEvents()
    //   .then(() => {
    //     setFetchStatus(true);
    //   })
    //   .catch(() => {
    //     new Notice('😭 Fetch Error');
    //   });
    dailyNotesService
      .getMyAllDailyNotes()
      .then(() => {
        setFetchStatus(true);
      })
      .catch(() => {
        new Notice('😭 Fetch DailyNotes Error');
      });
    dailyNotesService.getState();
  }, [StartDate]);

  useMemo(() => {
    if (!eventRef.current) {
      return;
    }
    eventRef.current.setEvents(events);
    // setChange(false);
  }, [events]);

  const handleEventSelect = useCallback(
    async (content: string, slotInfo: SlotInfo) => {
      const newEvent = await eventService.createEvent(content, slotInfo.start, slotInfo.end);
      eventService.pushEvent(newEvent);
      // const events = appStore.getState().eventState.events;
      // eventRef.current?.setEvents(events);
    },
    [StartDate],
  );

  const handleEventDoubleClick = useCallback(
    async (event: any) => {
      if (event.path === undefined) {
        showEventInDailyNotes(event.id);
      }
      // const lineNum = parseInt(event.id.slice(14));
      // leaf.openFile(event.file, {eState: {line: lineNum}});
    },
    [StartDate],
  );

  const calendarConfig = useMemo(
    () => ({
      selectable: true,
      resizeable: true,
      //   events: events,
      StartDate: StartDate,
      defaultView: 'month' as View,
      popup: true,
      onEventDoubleClick: handleEventDoubleClick,
      onEventSelect: handleEventSelect,
    }),
    [StartDate],
  );

  return (
    <div className={`big-calendar-wrapper`}>
      {/* <Only when={isFetching}> */}
        {useMemo(
          () => (
            console.log("render twice"),
            <CalendarComponent ref={eventRef} {...calendarConfig} />
          ),
          [StartDate],
        )}
        {/* <CalendarComponent {...calendarConfig} /> */}
      {/* </Only> */}
    </div>
  );
};

export default BigCalendar;
