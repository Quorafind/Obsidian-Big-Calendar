import {forwardRef, ReactNode, useCallback, useContext, useEffect, useImperativeHandle, useMemo, useRef} from 'react';
import {storage, remove} from '../../utils/storage';
// import useRefresh from '../../hooks/useRefresh';
import '../../less/Calendar.less';
import React from 'react';
// import {Notice, TFile} from 'obsidian';
// import appStore from '../../stores/appStore';
// import {t} from '../../translations/helper';
import {Calendar, Event, momentLocalizer, SlotInfo, View} from 'react-big-calendar';
import {moment} from 'obsidian';
import withDragAndDrop, {withDragAndDropProps} from 'react-big-calendar/lib/addons/dragAndDrop';
import dailyNotesService from '../../services/fileService';
import GenericInputPrompt from '../../obComponents/GenericInputPrompt';
import Only from '../common/OnlyWhen';
import useState from 'react-usestateref';
// import appContext from '../../stores/appContext';
// import useToggle from '../../hooks/useToggle';
import eventService from '../../services/eventService';
import useLoading from '../../hooks/useLoading';
// import {CALENDAR_VIEW_TYPE} from '../../constants';
// import useMemo from 'react';

export interface EventRefActions {
  setEvents: (events: Model.Event[]) => void;
}

interface CalendarProps {
  selectable: boolean;
  // events: Model.Event[];
  resizeable: boolean;
  defaultView: View;
  StartDate: string;
  popup: boolean;
  onEventDoubleClick: (event: Event) => void;
  onEventSelect: (content: string, slotInfo: SlotInfo) => void;
}

// let prevEvents: Model.Event[];
// let leafView;

// eslint-disable-next-line react/display-name
const CalendarComponent = forwardRef((props: CalendarProps, ref: React.ForwardedRef<EventRefActions>) => {
  const {
    selectable,
    // events,
    resizeable,
    defaultView,
    StartDate,
    popup,
    onEventDoubleClick: handleDoubleClickEventCallback,
    onEventSelect: handleEventSelectCallback,
    // onContentChange: handleContentChangeCallback,
  } = props;
  // const {
  //   eventState: {events},
  // } = useContext(appContext);
  // const refresh = useRefresh();
  const [allEvents, setNewEvents, eventRef] = useState<Event[]>([]);
  const [select, setSelect] = useState(true);
  const [resize, setResize] = useState(true);
  const [calendarPopup, setCalendarPopup] = useState(true);
  const [localizer, setLocalizer] = useState(null);
  const [calendarView, setCalendarView] = useState(null);
  const [calendarDate, setCalendarDate] = useState(null);
  const loadingState = useLoading();
  // const {app} = dailyNotesService.getState();

  const DragAndDropCalendar = withDragAndDrop(Calendar as any);
  // const {app} = dailyNotesService.getState();
  // const leaves = app.workspace.getLeavesOfType(CALENDAR_VIEW_TYPE);
  // const [value, setValue] = useState("")

  // if (leaves.length > 0) {
  //   const leaf = leaves[0];
  //   const leafView = leaf.view.containerEl?.querySelector('.rbc-time-content') as HTMLElement;
  //   if (leafView) {
  //     console.log(getViewScrollTop());
  //     leafView.scrollTo({top: getViewScrollTop()});
  //   }
  // }

  // useMemo(() => {
  //   // prevEvents = allEvents;
  //   if (events !== eventRef.current) {
  //     setNewEvents(events);
  //     // refresh();
  //   }
  // }, [events]);

  useMemo(() => {
    loadingState.setFinish();
  }, [defaultView]);

  useMemo(() => {
    console.log('render third');
    if (calendarView === null) {
      const getView = getEditorContentCache();
      if (getView !== null && getView !== 'month') {
        setCalendarView(getView);
      } else {
        setCalendarView(defaultView);
      }
    }
  }, [defaultView]);

  useMemo(() => {
    if (calendarDate === null) {
      const currentDate = getCurrentDate();
      if (currentDate !== null) {
        setCalendarDate(currentDate);
      } else {
        setCalendarDate(new Date());
      }
    }
  }, [calendarView]);

  // useMemo(() => {
  //   if (select !== selectable) {
  //     setSelect(selectable);
  //   }
  // }, [selectable]);

  // useMemo(() => {
  //   if (resize !== resizeable) {
  //     setResize(resizeable);
  //   }
  // }, [resizeable]);

  // useMemo(() => {
  //   if (calendarPopup !== popup) {
  //     setCalendarPopup(popup);
  //   }
  // }, [popup]);

  useMemo(() => {
    if (calendarPopup !== popup) {
      setCalendarPopup(popup);
    }

    if (resize !== resizeable) {
      setResize(resizeable);
    }

    if (select !== selectable) {
      setSelect(selectable);
    }

    if (localizer === null) {
      setLocalizer(momentLocalizer(moment));
    }
    // const momentChange = () => {
    //   moment.locale('en');
    if (StartDate == 'sunday') {
      moment.updateLocale('en', {
        week: {
          dow: 0,
        },
      });
      // return moment;
    }
    if (StartDate == 'monday') {
      moment.updateLocale('en', {
        week: {
          dow: 1,
        },
      });
    }
    //   return moment;
    // };
  }, [StartDate, popup, resizeable, selectable]);

  useImperativeHandle(
    ref,
    () => ({
      setEvents: (events: Model.Event[]) => {
        if (eventRef.current !== events) {
          setNewEvents(events);
          // refresh();
        }
      },
    }),
    [],
  );

  const styleEvents = (event: any) => {
    const className = event.eventType;
    return {className: className};
  };

  const handleDoubleClickEvent = useCallback(
    (event: Event) => {
      handleDoubleClickEventCallback(event);
    },
    [StartDate],
  );

  const handleEventSelect = useCallback(
    async (slotInfo: SlotInfo) => {
      const {app} = dailyNotesService.getState();
      const addEvent = await GenericInputPrompt.Prompt(app, 'Input Event', '', '');

      handleEventSelectCallback(addEvent, slotInfo);
    },
    [eventRef],
  );

  const handleViewChange = (view: View) => {
    if (calendarView !== view) {
      setCalendarView(view);
      setEditorContentCache(view);
    }
  };

  const handleNavigate = (date: Date) => {
    if (calendarDate !== date) {
      setCalendarDate(date);
      setCurrentDate(date);
    }
  };

  const onEventResize: withDragAndDropProps['onEventResize'] = (data) => {
    console.log(data);
    // const {start, end} = data;
    // const leaves = app.workspace.getLeavesOfType(CALENDAR_VIEW_TYPE);
    // let leafView;
    // if (leaves.length > 0) {
    //   const leaf = leaves[0];
    //   leafView = leaf.view.containerEl.querySelector('.rbc-time-content') as HTMLElement;
    //   // if (leafView) {
    //   //   leafView.scrollTo({top: getViewScrollTop()});
    //   // }
    // }
    // const viewHeight = leafView.scrollTop;
    // setViewScrollTop(viewHeight);
    const nextEvents = allEvents.map((existingEvent) => {
      if ((existingEvent as Model.Event).id == (data.event as Model.Event).id) {
        existingEvent.start = moment(data.start).toDate();
        existingEvent.end = moment(data.end).toDate();
        console.log(existingEvent);
      }
      return existingEvent;
    });
    setNewEvents(nextEvents);
    eventService.editEvent(data.event as Model.Event, data.start, data.end);
    // setEvents(currentEvents => {
    //   const firstEvent = {
    //     start: new Date(start),
    //     end: new Date(end),
    //   }
    //   return [...currentEvents, firstEvent]
    // })
  };

  const onEventDrop: withDragAndDropProps['onEventDrop'] = (data) => {
    // if (!data.event.allDay && droppedOnAllDaySlot) {
    //   allDay = true
    // } else if (event.allDay && !droppedOnAllDaySlot) {
    //   allDay = false
    // }
    const nextEvents = allEvents.map((existingEvent) => {
      if ((existingEvent as Model.Event).id == (data.event as Model.Event).id) {
        existingEvent.start = moment(data.start).toDate();
        existingEvent.end = moment(data.end).toDate();
        // existingEvent = await changeEvent((existingEvent as Model.Event).id,(existingEvent as Model.Event).originalContent, (existingEvent as Model.Event).title, (existingEvent as Model.Event).eventType, data.start, data.end, (existingEvent as Model.Event).end);
        console.log(existingEvent);
      }

      return existingEvent;
    });
    setNewEvents(nextEvents);
    eventService.editEvent(data.event as Model.Event, data.start, data.end);
  };

  return (
    <Only when={calendarView !== null && eventRef.current.length > 0}>
      {console.log('render')}
      <DragAndDropCalendar
        selectable={select}
        localizer={localizer}
        events={eventRef.current}
        resizable={resize}
        defaultView={calendarView}
        defaultDate={calendarDate}
        style={{height: '90vh'}}
        eventPropGetter={styleEvents}
        popup={calendarPopup}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        // slotPropGetter={customSlotPropGetter}
        // onDragStart={console.log}
        // dragFromOutsideItem={
        //   this.state.displayDragItemInCell ? this.dragFromOutsideItem : null
        // }
        titleAccessor={(event) => event.title}
        tooltipAccessor={(event) => event.title}
        // onRangeChange={onRangeChange}
        // onDropFromOutside={this.onDropFromOutside}
        // handleDragStart={this.handleDragStart}
        // onSelectEvent={event => alert(event.title)}
        onView={handleViewChange}
        onNavigate={handleNavigate}
        onDoubleClickEvent={handleDoubleClickEvent}
        onSelectSlot={handleEventSelect}
      />
    </Only>
  );
});

function getEditorContentCache(): View {
  return storage.get(['viewCache']).viewCache ?? 'month';
}

function getCurrentDate(): Date {
  return storage.get(['currentDate']).currentDate ?? null;
}

function setEditorContentCache(view: View) {
  storage.set({
    viewCache: view,
  });
}

function setCurrentDate(currentDate: Date) {
  storage.set({
    currentDate: currentDate,
  });
}

export default CalendarComponent;
