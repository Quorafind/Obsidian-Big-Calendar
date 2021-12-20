import * as React from "react";
import { Calendar ,  momentLocalizer } from "react-big-calendar";
import  moment  from "moment";
import { outputResults,clear } from "../data/parseFile";
import { events } from "../data/parseFile";
import { TFile} from "obsidian";

import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar as any);
moment.locale("en");
// const dailyEvents = [];

const styleEvents = (event: any) => {
  
//  const bgeventclr = event.bgColor;
 const style = {
    borderLeft: "0px solid",
    display: "block",
    // background: bgeventclr || '#edb6b4',
    border: '1px solid black'
  }
  const className = event.status;
  return{ className: className,style: style};
}

const customSlotPropGetter = date => {
  if (date.getDate() === 7 || date.getDate() === 15)
      return {
        className: 'special-day',
      }
    else return {}
}

function jumpToEvent( file: TFile, title: string, lineNum: number) {
  const app = window.app;
  const leaf = app.workspace.splitActiveLeaf();
  leaf.openFile(file, {eState: {line: lineNum}});
}

const onDoubleClickEvent = ({file,title,lineNum}) => {
  console.log(lineNum);
  jumpToEvent(file, title, lineNum);
};

export function reactPreview() {
  if(!events){
    return
  }else{
    return (<Dnd />);
  }
}

function successCallback(result) {
}

// 失败的回调函数
function failureCallback(error) {
}

function sleep (time) {
  return new Promise((resolve) => window.setTimeout(resolve, time));
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
    this.timerID = window.setInterval(() => this.tick(), 500);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    clear(true)
    if(!events.length){
      const dailyEvents = outputResults();
      const promise2 = dailyEvents.then(successCallback, failureCallback);
      sleep(200).then(async () => {
        if(dailyEvents != this.state.events){
          this.setState({
            events: [...await dailyEvents]
          },  
          ()=>{
          })
        }
        this.forceUpdate
      })
    }

  }

  render() {
    return (
        <div className="Big Calendar">
          <DragAndDropCalendar
            selectable={true}
            localizer={localizer}
            events={events}
            // onEventDrop={this.moveEvent}
            resizable={true}
            onDoubleClickEvent={onDoubleClickEvent}
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
            // onSelectEvent={event => alert(event.title)}
            // onSelectSlot={this.handleSelect}
          />
        </div>
    )
  }
}



