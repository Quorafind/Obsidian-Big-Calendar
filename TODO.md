# Refactoring TODO List

## State Management Refactoring

- [x] Install Zustand for state management
- [x] Replace custom Redux-like implementation in `src/labs/` with Zustand
- [x] Refactor all stores in `src/stores/` to use Zustand:
  - [x] `appStore.ts`
  - [x] `dailyNotesStore.ts`
  - [x] `eventStore.ts`
  - [ ] `globalStateStore.ts`
  - [ ] `locationStore.ts`
- [ ] Remove unused `appContext.ts`

## Service Refactoring

- [x] Refactor all services in `src/services/` to work with Zustand:
  - [x] `dailyNotesService.ts`
  - [x] `eventService.ts`
  - [ ] `globalStateService.ts`
  - [ ] `locationService.ts`
  - [ ] `resourceService.ts`
- [x] Fix the Moment import issue in `dailyNotesService.ts`

## Task Parsing Optimization

- [x] Optimize task parsing functionality
- [x] Implement efficient parsing algorithm for tasks
- [x] Add caching for parsed tasks

## Additional Improvements

- [ ] Update dependencies to the latest versions
- [ ] Fix TypeScript errors and linting issues
- [x] Improve code organization and maintainability
- [x] Add proper documentation and comments
- [ ] Write unit tests for the refactored code

## Technical Debt

- [x] Remove commented-out code (e.g., in `dailyNotesStore.ts`)
- [x] Fix type definitions and ensure type safety
- [x] Standardize naming conventions across the codebase
