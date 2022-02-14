// import * as React from 'react';
// import {forwardRef, ReactNode, useCallback, useContext, useEffect, useImperativeHandle, useRef, useState} from 'react';
// import {Calendar, momentLocalizer} from 'react-big-calendar';
// import moment from 'moment';
// import {outputResults} from '../../data/parseDailyNotes';
// import {TFile} from 'obsidian';
// import {InsertAfter, StartDate} from '../../bigCalendar';

// import {escapeRegExp, getLinesInString} from '../../utils';
// // import { BigCalendarSettings } from "src/setting";
// import {createDailyNote, getAllDailyNotes, getDailyNote} from 'obsidian-daily-notes-interface';
// import GenericInputPrompt from '../../obComponents/GenericInputPrompt';

// import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
// import {outputTasksResults} from '../../data/parseFileTasks';
// import {dailyNotesService} from '../../services';

// let localizer = momentLocalizer(moment);
// const DragAndDropCalendar = withDragAndDrop(Calendar as any);
// moment.locale('en');
// let time = 9;
// let tasktime = 9;
// export let closeTimerID = 0;
// export let closeTaskTimerID = 0;

// // const events = await outputResults();

// function momentChange() {
//   if (StartDate == 'sunday') {
//     moment.updateLocale('en', {
//       week: {
//         dow: 0,
//       },
//     });
//     return moment;
//   }
//   if (StartDate == 'monday') {
//     moment.updateLocale('en', {
//       week: {
//         dow: 1,
//       },
//     });
//   }
//   return moment;
// }

// const styleEvents = (event: any) => {
//   const style = {
//     // borderLeft: "0px solid",
//     // display: "block",
//     // border: '1px solid black'
//   };
//   const className = event.status;
//   return {className: className, style: style};
// };

// // const customSlotPropGetter = (date) => {
// //   if (date.getDate() === 7 || date.getDate() === 15)
// //     return {
// //       className: 'special-day',
// //     };
// //   else return {};
// // };

// function jumpToEvent(file: TFile, title: string, lineNum: number) {
//   const {app} = dailyNotesService.getState();
//   const leaf = app.workspace.splitActiveLeaf();
//   leaf.openFile(file, {eState: {line: lineNum}});
// }

// const onDoubleClickEvent = ({file, title, lineNum}) => {
//   jumpToEvent(file, title, lineNum);
// };

// async function waitForInput() {
//   // console.log("true");
//   const {app} = dailyNotesService.getState();
//   const addEvent = await GenericInputPrompt.Prompt(app, 'Input Event', '', '');
//   return addEvent;
// }

// async function waitForInsert(addEvent: string, start: Date) {
//   // const plugin = window.plugin;
//   const {app} = dailyNotesService.getState();
//   const date = moment(start);
//   const timeHour = date.format('HH');
//   const timeMinute = date.format('mm');

//   const newEvent = `- [ ] ` + String(timeHour) + `:` + String(timeMinute) + ` ` + addEvent;
//   const dailyNotes = await getAllDailyNotes();
//   const existingFile = getDailyNote(date, dailyNotes);
//   if (!existingFile) {
//     const file = await createDailyNote(date);
//     const fileContents = await app.vault.cachedRead(file);

//     const newFileContent = await insertAfterHandler(InsertAfter, newEvent, fileContents);
//     await app.vault.modify(file, newFileContent);
//   } else {
//     const fileContents = await app.vault.cachedRead(existingFile);

//     const newFileContent = await insertAfterHandler(InsertAfter, newEvent, fileContents);
//     await app.vault.modify(existingFile, newFileContent);
//   }
// }

// //credit to chhoumann, original code from: https://github.com/chhoumann/quickadd
// export async function insertAfterHandler(targetString: string, formatted: string, fileContent: string) {
//   // const targetString: string = plugin.settings.InsertAfter;
//   const targetRegex = new RegExp(`\s*${escapeRegExp(targetString)}\s*`);
//   let fileContentLines: string[] = getLinesInString(fileContent);

//   const targetPosition = fileContentLines.findIndex((line) => targetRegex.test(line));
//   const targetNotFound = targetPosition === -1;
//   if (targetNotFound) {
//     // if (this.choice.insertAfter?.createIfNotFound) {
//     //     return await createInsertAfterIfNotFound(formatted);
//     // }

//     console.log('unable to find insert after line in file.');
//   }

//   if (true) {
//     const nextHeaderPositionAfterTargetPosition = fileContentLines
//       .slice(targetPosition + 1)
//       .findIndex((line) => /^#+ |---/.test(line));
//     const foundNextHeader = nextHeaderPositionAfterTargetPosition !== -1;

//     if (foundNextHeader) {
//       let endOfSectionIndex: number;

//       for (let i = nextHeaderPositionAfterTargetPosition + targetPosition; i > targetPosition; i--) {
//         const lineIsNewline: boolean = /^[\s\n ]*$/.test(fileContentLines[i]);
//         if (!lineIsNewline) {
//           endOfSectionIndex = i;
//           break;
//         }
//       }

//       if (!endOfSectionIndex) endOfSectionIndex = targetPosition;

//       return insertTextAfterPositionInBody(formatted, fileContent, endOfSectionIndex);
//     } else {
//       return insertTextAfterPositionInBody(formatted, fileContent, fileContentLines.length - 1);
//     }
//   }

//   // return insertTextAfterPositionInBody(formatted, fileContent, targetPosition);
// }

// function insertTextAfterPositionInBody(text: string, body: string, pos: number): string {
//   if (pos === -1) {
//     return `${text}\n${body}`;
//   }

//   const splitContent = body.split('\n');
//   const pre = splitContent.slice(0, pos + 1).join('\n');
//   const post = splitContent.slice(pos + 1).join('\n');

//   return `${pre}\n${text}\n${post}`;
// }

// // eslint-disable-next-line @typescript-eslint/ban-types
// export default class Dnd extends React.Component<any, any> {
//   timerID: number;
//   taskTimeID: number;
//   output = [];
//   taskOutput = [];
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       events: this.output,
//       // displayDragItemInCell: true,
//     };
//     // this.moveEvent = this.moveEvent.bind(this)
//   }

//   componentDidMount() {
//     this.timerID = window.setInterval(() => this.tick(), 500);
//     this.taskTimeID = window.setInterval(() => this.tickTask(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//     clearInterval(this.taskTimeID);
//     this.state = null;
//     this.output = null;
//   }

//   async tick() {
//     localizer = momentLocalizer(momentChange());
//     time += 1;
//     if (time == 10) {
//       this.output.splice(0, this.output.length);
//       clearInterval(this.timerID);
//       this.timerID = window.setInterval(() => this.tick(), 2000);
//       time = 0;
//       closeTimerID = this.timerID;
//     }
//     closeTimerID = this.timerID;
//     this.output = await outputResults();
//     this.output = this.output.concat(this.taskOutput);
//     if (this.state.events != this.output) {
//       this.setState({events: this.output});
//     }
//   }

//   async tickTask() {
//     tasktime += 1;
//     if (tasktime == 10) {
//       this.taskOutput.splice(0, this.output.length);
//       clearInterval(this.taskTimeID);
//       this.taskTimeID = window.setInterval(() => this.tickTask(), 15000);
//       tasktime = 0;
//       closeTaskTimerID = this.taskTimeID;
//     }
//     closeTaskTimerID = this.taskTimeID;
//     this.taskOutput = await outputTasksResults();
//     // if( this.state.events != this.taskOutput ){
//     //   this.setState({events: this.taskOutput})
//     // }
//   }

//   handleSelect = async ({start, end}) => {
//     const addEvent = await waitForInput();
//     if (addEvent) {
//       // await this.plugin.loadSettings();
//       clearInterval(this.timerID);
//       // console.log(plugin.settings.StartDate);
//       waitForInsert(addEvent, start);
//       this.timerID = window.setInterval(() => this.tick(), 2000);
//     }
//   };

//   render() {
//     return (
//       <div className="Big Calendar">
//         <DragAndDropCalendar
//           selectable={true}
//           localizer={localizer}
//           events={this.output}
//           // onEventDrop={this.moveEvent}
//           resizable={true}
//           onDoubleClickEvent={onDoubleClickEvent}
//           // onEventResize={this.resizeEvent}
//           // slotPropGetter={customSlotPropGetter}
//           // onDragStart={console.log}
//           defaultView="month"
//           style={{height: '100vh'}}
//           eventPropGetter={styleEvents}
//           popup={true}
//           // dragFromOutsideItem={
//           //   this.state.displayDragItemInCell ? this.dragFromOutsideItem : null
//           // }
//           titleAccessor={(event) => event.title}
//           tooltipAccessor={(event) => event.title}
//           // onDropFromOutside={this.onDropFromOutside}
//           // handleDragStart={this.handleDragStart}
//           // onSelectEvent={event => alert(event.title)}
//           onSelectSlot={this.handleSelect}
//         />
//       </div>
//     );
//   }
// }
