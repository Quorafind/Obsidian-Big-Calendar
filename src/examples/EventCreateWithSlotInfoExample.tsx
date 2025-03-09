import {App} from 'obsidian';
import {SlotInfo} from 'react-big-calendar';
import EventCreatePrompt from '../obComponents/EventCreatePrompt';
import React from 'react';
import fileService from '@/services/fileService'; // Using fileService as an example

/**
 * Example of creating an event using SlotInfo from react-big-calendar
 * This example shows how to use the EventCreatePrompt with preset times
 * from a calendar slot selection.
 */
export function createEventWithSlotInfo(app: App, slotInfo: SlotInfo) {
  // Extract start and end times from SlotInfo
  const startDate = slotInfo.start as Date;
  const endDate = slotInfo.end as Date;

  // Method 1: Using the helper method
  EventCreatePrompt.createEvent(app, 'Create New Event', 'Enter event details...', startDate, endDate).then((event) => {
    if (event) {
      console.log('Event created successfully:', event);
      // Handle the created event (e.g., refresh calendar view)
    }
  });

  // Method 2: Using the prompt directly
  EventCreatePrompt.Prompt(
    app,
    'Create New Event',
    'Enter event details...',
    '', // No default value for content
    startDate,
    endDate,
  )
    .then((result) => {
      console.log('Event data:', {
        content: result.content,
        startDate: result.startDate,
        endDate: result.endDate,
      });

      // Then manually create the event using eventService
      // eventService.createEvent(result.content, result.startDate, result.endDate);
    })
    .catch((error) => {
      console.error('Event creation was cancelled or failed:', error);
    });
}

/**
 * Example usage in a React component with react-big-calendar
 */
export const CalendarWithEventCreation: React.FC = () => {
  // This would be the handler for slot selection in react-big-calendar
  const handleSelectSlot = (slotInfo: SlotInfo) => {
    const {app} = fileService.getState(); // Using fileService as an example

    // Call EventCreatePrompt with preset times from slotInfo
    EventCreatePrompt.createEvent(
      app,
      'Create Event',
      "What's happening?",
      slotInfo.start as Date,
      slotInfo.end as Date,
    ).then((createdEvent) => {
      if (createdEvent) {
        // Handle the newly created event
        console.log('New event created:', createdEvent);
        // Refresh calendar or update state etc.
      }
    });
  };

  return (
    <div>
      {/* Your Calendar component would be here */}
      {/* <Calendar onSelectSlot={handleSelectSlot} /> */}
    </div>
  );
};
