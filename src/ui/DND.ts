// import React from 'react'
// import {events} from '../events'
// import { Calendar, Views} from 'react-big-calendar'
// import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

// import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'

// const DragAndDropCalendar = withDragAndDrop(Calendar as any);

// class Dnd extends React.Component<{},any> {
//   constructor(props : any) {
//     super(props)
//     this.state = {
//       events: events,
//       displayDragItemInCell: true,
//     }

//     this.moveEvent = this.moveEvent.bind(this)
//   }

//   handleDragStart = (event : any) => {
//     this.setState({ draggedEvent: event })
//   }

//   dragFromOutsideItem = () => {
//     return this.state.draggedEvent
//   }

//   onDropFromOutside = ({ start, end, allDay }:{start:any,end:any,allDay:any}) => {
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

//   moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }:{event:any,start:any,end:any,isAllDay:any}) => {
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

//   resizeEvent = ({ event, start, end }:{start:any,end:any,event:any}) => {
//     const { events } = this.state

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

//   render() {
//     return (
//       <DragAndDropCalendar
//         selectable
//         localizer={this.props.localizer}
//         events={this.state.events}
//         onEventDrop={this.moveEvent}
//         resizable
//         onEventResize={this.resizeEvent}
//         onSelectSlot={this.newEvent}
//         onDragStart={console.log}
//         defaultView={Views.MONTH}
//         defaultDate={new Date(2015, 3, 12)}
//         popup={true}
//         dragFromOutsideItem={
//           this.state.displayDragItemInCell ? this.dragFromOutsideItem : null
//         }
//         onDropFromOutside={this.onDropFromOutside}
//         handleDragStart={this.handleDragStart}
//       />
//     )
//   }
// }

// export default Dnd