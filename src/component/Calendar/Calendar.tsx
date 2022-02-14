import {forwardRef, ReactNode, useCallback, useContext, useEffect, useImperativeHandle, useRef} from 'react';
import {storage, remove} from '../../helpers/storage';
import useRefresh from '../../hooks/useRefresh';
import '../../less/Calendar.less';
import React from 'react';
import {Notice, TFile} from 'obsidian';
import appStore from '../../stores/appStore';
import {t} from '../../translations/helper';
import {Calendar, Event, momentLocalizer, SlotInfo, View} from 'react-big-calendar';
import {moment} from 'obsidian';
import withDragAndDrop, {withDragAndDropProps} from 'react-big-calendar/lib/addons/dragAndDrop';
import dailyNotesService from '../../services/dailyNotesService';
import GenericInputPrompt from '../../obComponents/GenericInputPrompt';
import {StartDate} from '../../bigCalendar';
import Only from '../common/OnlyWhen';
import useState from 'react-usestateref';
import appContext from '../../stores/appContext';
import useToggle from '../../hooks/useToggle';

export interface EventRefActions {
  setEvents: () => void;
}

interface CalendarProps {
  selectable: boolean;
  //   events: Model.Event[];
  resizeable: boolean;
  defaultView: View;
  popup: boolean;
  onEventDoubleClick: (event: Event) => void;
  onEventSelect: (content: string, slotInfo: SlotInfo) => void;
}

// eslint-disable-next-line react/display-name
const CalendarComponent = forwardRef((props: CalendarProps, ref: React.ForwardedRef<EventRefActions>) => {
  const {
    selectable,
    resizeable,
    defaultView,
    popup,
    onEventDoubleClick: handleDoubleClickEventCallback,
    onEventSelect: handleEventSelectCallback,
    // onContentChange: handleContentChangeCallback,
  } = props;
  const {
    eventState: {events},
  } = useContext(appContext);
  const refresh = useRefresh();
  const [newEvents, setNewEvents, eventRef] = useState(null);
  const [calendarView, setCalendarView, calendarViewRef] = useState(null);

  const DragAndDropCalendar = withDragAndDrop(Calendar as any);
  const localizer = momentLocalizer(moment);
  // const [value, setValue] = useState("")

  useEffect(() => {
    momentChange();
    const getView = getEditorContentCache();
    if (getView !== null && getView !== 'month') {
      handleViewChange(getView);
    }
    if (eventRef.current !== events) {
      setNewEvents(events);
      refresh();
    }
  }, [events]);

  useImperativeHandle(
    ref,
    () => ({
      setEvents: () => {
        if (eventRef.current !== events) {
          setNewEvents(events);
          refresh();
        }
      },
    }),
    [],
  );

  const momentChange = () => {
    moment.locale('en');
    if (StartDate == 'sunday') {
      moment.updateLocale('en', {
        week: {
          dow: 0,
        },
      });
      return moment;
    }
    if (StartDate == 'monday') {
      moment.updateLocale('en', {
        week: {
          dow: 1,
        },
      });
    }
    return moment;
  };

  const styleEvents = (event: any) => {
    const className = event.eventType;
    return {className: className};
  };

  const handleDoubleClickEvent = useCallback((event: Event) => {
    handleDoubleClickEventCallback(event);
  }, []);

  const handleEventSelect = useCallback(async (slotInfo: SlotInfo) => {
    const {app} = dailyNotesService.getState();
    const addEvent = await GenericInputPrompt.Prompt(app, 'Input Event', '', '');

    handleEventSelectCallback(addEvent, slotInfo);
  }, []);

  const handleViewChange = (view: View) => {
    setCalendarView(view);
    setEditorContentCache(view);
  };

  const onEventResize: withDragAndDropProps['onEventResize'] = (data) => {
    const {start, end} = data;

    console.log(data);

    // setEvents(currentEvents => {
    //   const firstEvent = {
    //     start: new Date(start),
    //     end: new Date(end),
    //   }
    //   return [...currentEvents, firstEvent]
    // })
  };

  const onEventDrop: withDragAndDropProps['onEventDrop'] = (data) => {
    console.log(data);
  };

  return (
    <Only when={newEvents !== undefined}>
      <DragAndDropCalendar
        selectable={selectable}
        localizer={localizer}
        events={eventRef.current}
        resizable={resizeable}
        defaultView={calendarViewRef.current || defaultView}
        style={{height: '90vh'}}
        eventPropGetter={styleEvents}
        popup={popup}
        onEventDrop={onEventDrop}
        onEventResize={onEventResize}
        // slotPropGetter={customSlotPropGetter}
        // onDragStart={console.log}
        // dragFromOutsideItem={
        //   this.state.displayDragItemInCell ? this.dragFromOutsideItem : null
        // }
        titleAccessor={(event) => event.title}
        tooltipAccessor={(event) => event.title}
        // onDropFromOutside={this.onDropFromOutside}
        // handleDragStart={this.handleDragStart}
        // onSelectEvent={event => alert(event.title)}
        onView={handleViewChange}
        onDoubleClickEvent={handleDoubleClickEvent}
        onSelectSlot={handleEventSelect}
      />
    </Only>
  );
});

function getEditorContentCache(): View {
  return storage.get(['viewCache']).viewCache ?? 'month';
}

function setEditorContentCache(view: View) {
  storage.set({
    viewCache: view,
  });
}

export default CalendarComponent;
