import * as React from "react";
import { Calendar ,  momentLocalizer } from "react-big-calendar";
import  moment  from "moment";
import { outputResults } from '../data/parseFile';
// import { output } from "../data/parseFile";
import { TFile} from "obsidian";
// import TimeLineComponent from "./TimeLineView";

import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar as any);
moment.locale("en");
let time = 0;

// const events = await outputResults();


const styleEvents = (event: any) => {

 const style = {
    borderLeft: "0px solid",
    display: "block",
    border: '1px solid black'
  }
  const className = event.status;
  return { className: className,style: style };
}

const customSlotPropGetter = date => {
  if (date.getDate() === 7 || date.getDate() === 15)
      return {
        className: 'special-day',
      }
    else return {}
}

function jumpToEvent( file: TFile, title: string, lineNum: number ) {
  const app = window.app;
  const leaf = app.workspace.splitActiveLeaf();
  leaf.openFile(file, {eState: {line: lineNum}});
}

const onDoubleClickEvent = ({file,title,lineNum}) => {
  jumpToEvent(file, title, lineNum);
};

export function reactPreview() {
  return (<Dnd />);
}

// TODO 
// eslint-disable-next-line @typescript-eslint/ban-types
class Dnd extends React.Component<any,any> {
  timerID: number;
  // timeOutID: number;
  output = [];
  constructor(props: any) {
    super(props)
    this.state = {
      events: this.output,
      // displayDragItemInCell: true,
    }
    // this.moveEvent = this.moveEvent.bind(this)
  }

  componentDidMount() {
    this.timerID = window.setInterval(() => this.tick(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    this.state = null;
    this.output = null;
  }

  async tick() {
    time += 1;
    if(time == 10){
      this.output.splice(0, this.output.length);
      clearInterval(this.timerID);
      console.log(this.timerID);
      this.timerID = window.setInterval(() => this.tick(), 2000);
      console.log(this.timerID);
      time = 0;
    }
    this.output = await outputResults();
    if(this.state.events != this.output){
      this.setState({events: this.output})
    }
  }

  // handleSelect = ({ start, end }) => {
  //   const title = window.prompt('New Event name')
  //   if (title)
  //     this.setState({
  //       events: [
  //         ...this.state.events,
  //         {
  //           start,
  //           end,
  //           title,
  //         },
  //     ],
  //   })
  // }

  render() {
    return (
        <div className="Big Calendar">
          <DragAndDropCalendar
            selectable={true}
            localizer={localizer}
            events={this.output}
            // onEventDrop={this.moveEvent}
            resizable={true}
            onDoubleClickEvent={onDoubleClickEvent}
            // onEventResize={this.resizeEvent}
            slotPropGetter={customSlotPropGetter}
            // onDragStart={console.log}
            defaultView="month"
            style={{ height: "auto" }}
            eventPropGetter={styleEvents} 
            popup={true}
            // dragFromOutsideItem={
            //   this.state.displayDragItemInCell ? this.dragFromOutsideItem : null
            // }
            titleAccessor={ (event) => (event.title)}
            tooltipAccessor= { (event) => (event.title)}
            // onDropFromOutside={this.onDropFromOutside}
            // handleDragStart={this.handleDragStart}
            // onSelectEvent={event => alert(event.title)}
            // onSelectSlot={this.handleSelect}
          />
        </div>
    )
  }
}



