import * as React from "react";
import { Calendar ,  momentLocalizer } from "react-big-calendar";
import  moment  from "moment";
import { events } from '../data/parseFile';
import { outputResults } from "../data/parseFile";

import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar as any);
moment.locale("en");
let lastState = null;

const styleEvents = (event: any) => {
 const bgeventclr = event.bgColor;
  const style = {
    borderLeft: "0px solid",
    display: "block",
    background: bgeventclr || '#edb6b4',
    border: '1px solid black'
  }
  return{ style: style};
}

const customSlotPropGetter = date => {
  if (date.getDate() === 7 || date.getDate() === 15)
      return {
        className: 'special-day',
      }
    else return {}
  }

export function reactPreview() {
  if(!events){
    return
  }else{
    return (<Dnd />);
  }
}

// TODO 
// eslint-disable-next-line @typescript-eslint/ban-types
class Dnd extends React.Component<any,any> {
  timerID: number;
  constructor(props) {
    super(props)
    this.state = {
      events: events,
      // displayDragItemInCell: true,
    }
    // this.moveEvent = this.moveEvent.bind(this)
  }

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      events: events
    });
  }

  
  // handleSelect = ({ start, end }) => {
  //   const title = NestedToolTip();
  //   if (title)
  //     this.setState({
  //       events: [
  //         ...this.state.events,
  //         {
  //           start,
  //           end,
  //           title,
  //         },
  //       ],
  //     })
  // }

  // handleDragStart = (event) => {
  //   this.setState({ draggedEvent: event })
  // }

  // dragFromOutsideItem = () => {
  //   return this.state.draggedEvent
  // }

  // onDropFromOutside = ({ start, end, allDay }) => {
  //   const { draggedEvent } = this.state

  //   const event = {
  //     id: draggedEvent.id,
  //     title: draggedEvent.title,
  //     start,
  //     end,
  //     allDay: allDay,
  //   }

  //   this.setState({ draggedEvent: null })
  //   this.moveEvent({ event, start, end })
  // }

  // moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }:{event, start, end, isAllDay?:any}) => {
  //   const { events } = this.state

  //   let allDay = event.allDay

  //   if (!event.allDay && droppedOnAllDaySlot) {
  //     allDay = true
  //   } else if (event.allDay && !droppedOnAllDaySlot) {
  //     allDay = false
  //   }

  //   const nextEvents = events.map(existingEvent => {
  //     return existingEvent.id == event.id
  //       ? { ...existingEvent, start, end, allDay }
  //       : existingEvent
  //   })

  //   this.setState({
  //     events: nextEvents,
  //   })

  //   // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  // }

  // resizeEvent = ({ event, start, end }) => {
  //   const { events } = this.state

  //   const nextEvents = events.map(existingEvent => {
  //     return existingEvent.id == event.id
  //       ? { ...existingEvent, start, end }
  //       : existingEvent
  //   })

  //   this.setState({
  //     events: nextEvents,
  //   })

  //   //alert(`${event.title} was resized to ${start}-${end}`)
  // }

  render() {
    return (
        <div className="Big Calendar">
          <DragAndDropCalendar
            selectable={true}
            localizer={localizer}
            events={this.state.events}
            // onEventDrop={this.moveEvent}
            resizable={true}
            // onEventResize={this.resizeEvent}
            slotPropGetter={customSlotPropGetter}
            // onDragStart={console.log}
            defaultView="month"
            style={{ height: "100vh" }}
            eventPropGetter={styleEvents} 
            popup={true}
            // dragFromOutsideItem={
            //   this.state.displayDragItemInCell ? this.dragFromOutsideItem : null
            // }
            titleAccessor={ (event) => (event.title)}
            tooltipAccessor= { (event) => (event.title)}
            // onDropFromOutside={this.onDropFromOutside}
            // handleDragStart={this.handleDragStart}
            onSelectEvent={event => alert(event.title)}
            // onSelectSlot={this.handleSelect}
          />
        </div>
    )
  }
}


// export default class showCalendar(): JSX.Element {
//   constructor(props){
    
//   }

//   const state = {
//     events: events,
//     displayDragItemInCell: true,
//   }

//   const handleDragStart = (event : any) => {
//     this.setState({ draggedEvent: event })
//   }

//   const dragFromOutsideItem = () => {
//     return this.state.draggedEvent
//   }

//   const onDropFromOutside = ({ start, end, allDay }:{start:any,end:any,allDay:any}) => {
//     const { draggedEvent } = this.state

//     const event = {
//       id: draggedEvent.id,
//       title: draggedEvent.title,
//       start,
//       end,
//       allDay: allDay,
//     }

//     this.setState({ draggedEvent: null })
//     this.moveEvent({ event, start, end, isAllDay: "" })
//   }

//   const moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }:{event:any,start:any,end:any,isAllDay:any}) => {
//     const { events } = this.state

//     let allDay = event.allDay

//     if (!event.allDay && droppedOnAllDaySlot) {
//       allDay = true
//     } else if (event.allDay && !droppedOnAllDaySlot) {
//       allDay = false
//     }

//     const nextEvents = events.map((existingEvent:any) => {
//       return existingEvent.id == event.id
//         ? { ...existingEvent, start, end, allDay }
//         : existingEvent
//     })

//     this.setState({
//       events: nextEvents,
//     })

//     // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
//   }

//   const resizeEvent = ({ event, start, end }:{start:any,end:any,event:any}) => {
//     const { events } = state

//     const nextEvents = events.map((existingEvent:any) => {
//       return existingEvent.id == event.id
//         ? { ...existingEvent, start, end }
//         : existingEvent
//     })

//     this.setState({
//       events: nextEvents,
//     })

//     //alert(`${event.title} was resized to ${start}-${end}`)
//   }

//   const element = (
//   <>
//     <div className="App">
//       <DragAndDropCalendar
//           selectable={true}
//           localizer={localizer}
//           events={events}
//           onEventDrop={moveEvent}
//           resizable={true}
//           onEventResize={resizeEvent}
//           onDragStart={console.log}
//           style={{ height: "100vh" }}
//           titleAccessor={ (event) => (event.title)}
//          tooltipAccessor= { (event) => (event.title)}
//           defaultView="month"
//           defaultDate={new Date(2021, 9, 1)}
//           popup={true}
//           eventPropGetter={styleEvents}
//           dragFromOutsideItem={
//             state.displayDragItemInCell ? dragFromOutsideItem : null
//           }
//           onDropFromOutside={onDropFromOutside}
//           handleDragStart={handleDragStart}
//         />
//     </div>
//   </>    );
//     //  <Calendar
//     //   defaultDate={moment().toDate()}
//     //   defaultView="month"
//     //   events={events}
//     //   localizer={localizer}
//     //   style={{ height: "100vh" }}
//     //   eventPropGetter={styleEvents} 
//     //   titleAccessor={ (event) => (event.title)}
//     //   tooltipAccessor= { (event) => (event.title)}
//     //   selectable={true}
//     //   onSelectSlot={(selectSlot)=>{
//     //     alert(`${selectSlot.start} and ${selectSlot.end}`)
//     //   }}
//     //   onDoubleClickEvent={ (event) => {
//     //     alert(`moment(event.resource)`);
//     //     openOrCreateDailyNote(
//     //       moment(event.resource),
//     //       true
//     //     );
//     //   }}
//     // />

//   return element;
// }



