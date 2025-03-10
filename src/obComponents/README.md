# Improved Parser for Obsidian Big Calendar

This directory contains a completely refactored parser implementation for tasks and list items in Obsidian Big Calendar. The refactoring focuses on improving performance, readability, and maintainability.

## Key Features

### High-Performance Parsing

The new parser uses modern JavaScript features and optimized regular expressions to efficiently extract information from task and list items. It parses all relevant information in a single pass, reducing the need for multiple regex operations.

### Comprehensive Parsing

The parser can extract:

- Task status (with support for many custom status characters)
- List markers
- Time information (start and end times)
- Date information (start, due, scheduled, done dates)
- Recurrence rules
- Block links
- Content text

### Unified API

The parser provides a consistent API for both tasks and non-task list items, making it easier to handle different types of entries in a unified way.

## Main Components

### `parser.ts`

The core parser module containing:

- `TaskStatus` enum: Comprehensive set of task statuses
- `parseLine` function: Main entry point that parses a line of text
- Helper functions for extracting specific information:
  - `extractTimes`: Extracts start and end times
  - `extractDates`: Extracts all date information
  - `extractRecurrence`: Extracts recurrence rules
  - `extractBlockLink`: Extracts block links
  - `cleanContent`: Removes metadata from content text

### Integration with Existing Code

The parser has been integrated with:

- `getEvents.ts`: For extracting events from daily notes
- `parseTask.ts`: For maintaining backward compatibility with the existing Task system

## Benefits

1. **Performance**: Reduced redundant regex operations and optimized matching patterns
2. **Maintainability**: Clear separation of concerns with specialized functions
3. **Extensibility**: Easy to add support for new formats or metadata
4. **Reliability**: More robust parsing with better error handling
5. **Compatibility**: Maintains compatibility with existing code through adapters

## Usage Examples

### Basic Parsing

```typescript
import {parseLine} from './parser';

const line = '- [x] 10:30 Complete project report 📅 2023-09-15';
const parsed = parseLine(line);

console.log(parsed.isTask); // true
console.log(parsed.taskStatus); // TaskStatus.Done
console.log(parsed.startTime); // { hour: 10, minute: 30 }
console.log(parsed.dates[0].date); // "2023-09-15"
console.log(parsed.content); // "Complete project report"
```

### Converting to Events

```typescript
import {parseLine, convertToEvent} from './parser';
import {moment} from 'obsidian';

const line = '- [ ] 14:00 Team meeting ⏲ 15:30';
const parsed = parseLine(line);
const defaultDate = moment('2023-09-10');
const event = convertToEvent(parsed, defaultDate, 1);

console.log(event.title); // "Team meeting"
console.log(event.start); // 2023-09-10T14:00:00
console.log(event.end); // 2023-09-10T15:30:00
console.log(event.eventType); // "TASK-TODO"
```
