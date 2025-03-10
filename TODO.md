# Refactoring TODO List

## State Management Refactoring

- [x] Install Zustand for state management
- [x] Replace custom Redux-like implementation in `src/labs/` with Zustand
- [x] Refactor all stores in `src/stores/` to use Zustand:
  - [x] `appStore.ts`
  - [x] `dailyNotesStore.ts`
  - [x] `eventStore.ts`
  - [x] `globalStateStore.ts`
  - [x] `locationStore.ts`
- [x] Remove unused `appContext.ts`

## Service Refactoring

- [x] Refactor all services in `src/services/` to work with Zustand:
  - [x] `dailyNotesService.ts`
  - [x] `eventService.ts`
  - [x] `globalStateService.ts`
  - [x] `locationService.ts`
  - [x] `resourceService.ts`
- [x] Fix the Moment import issue in `dailyNotesService.ts`

## Task Parsing Optimization

- [x] Optimize task parsing functionality
- [x] Implement efficient parsing algorithm for tasks
- [x] Add caching for parsed tasks

## Additional Improvements

- [x] Update dependencies to the latest versions
- [x] Fix TypeScript errors and linting issues in `App.tsx`
- [x] Fix remaining TypeScript errors and linting issues
- [x] Improve code organization and maintainability
- [x] Add proper documentation and comments
- [ ] Write unit tests for the refactored code

## Technical Debt

- [x] Remove commented-out code (e.g., in `dailyNotesStore.ts`)
- [x] Fix type definitions and ensure type safety
- [x] Standardize naming conventions across the codebase

## Component Refactoring

- [x] Refactor the Calendar component:
  - [x] Create a Zustand store for Calendar state management
  - [x] Fix storage-related linter errors
  - [x] Improve performance with memoization
  - [x] Clean up unused code and comments
- [x] Refactor the BigCalendar component:
  - [x] Fix linter errors related to dailyNotesService
  - [x] Fix StartDate prop usage
  - [x] Integrate with Zustand store for state management

## obComponents Refactoring

- [x] Create unified regex generators in `src/utils/regexGenerators.ts`:

  - [x] `createDueDateRegex()` - Generate regex for due dates
  - [x] `createTimeRegex()` - Generate regex for time recognition
  - [x] `createDateTimeExtractor()` - Extract date and time from text

- [x] Implement file parsing logic in `src/utils/fileParser.ts`:

  - [x] `getAllLinesFromFile(content: string): string[]`
  - [x] `extractEventTime(line: string): { hour: number, minute: number }`
  - [x] `extractDueDate(line: string): { hasDate: boolean, label: string, date: string }`

- [x] Enhance file operations in `src/services/fileService.ts`:

  - [x] `getFile(eventId: string): TFile`
  - [x] `getDailyNotePath(): string`
  - [x] `readFileContent(filePath: string): Promise<string>`
  - [x] `writeFileContent(filePath: string, content: string): Promise<void>`

- [x] Enhance `EventService` in `src/services/eventService.ts`:

  - [x] `parseEventFromLine(line: string): Partial<Model.Event>`
  - [x] `updateEventInFile(eventId: string, content: string): Promise<void>`
  - [x] `createEventInFile(content: string, date: Date): Promise<string>`
  - [x] `deleteEventFromFile(eventId: string): Promise<void>`

- [x] Create unified API in `src/api.ts`:

  - [x] Export all extracted functions from `obComponents`
  - [x] Provide unified interface for Obsidian API interactions
  - [x] Standardize error handling

- [x] Refactor individual components in `obComponents` directory:
  - [x] Update `updateEvent.ts` to use new API
  - [x] Update `createEvent.ts` to use new API
  - [x] Update `deleteEvent.ts` to use new API
  - [x] Update `getEvents.ts` to use new API
  - [x] Update `parseTask.ts` to use new API

## Next Steps

- [ ] Resolve any remaining TypeScript errors:
  - [ ] Fix export issues in `bigCalendar.ts` (`InsertAfter` and `DefaultEventComposition`)
  - [ ] Fix `dailyNotesState` issues in `appStore`
- [ ] Write unit tests for refactored code
- [ ] Update documentation to reflect new code structure and API usage
