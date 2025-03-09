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

- [ ] Update dependencies to the latest versions
- [x] Fix TypeScript errors and linting issues in `App.tsx`
- [ ] Fix remaining TypeScript errors and linting issues
- [x] Improve code organization and maintainability
- [x] Add proper documentation and comments
- [ ] Write unit tests for the refactored code

## Technical Debt

- [x] Remove commented-out code (e.g., in `dailyNotesStore.ts`)
- [x] Fix type definitions and ensure type safety
- [x] Standardize naming conventions across the codebase

# Obsidian Big Calendar Refactoring Plan

## 概述 (Overview)

将 `obComponents` 目录中的组件进行重构，将共用的正则表达式生成器、文件解析逻辑等抽取到 `api.ts` 中，并通过 `eventService` 提供统一的操作方法。

## 重构任务 (Refactoring Tasks)

### 1. 创建统一的正则表达式生成器 (Create Unified Regex Generators)

- [x] 在 `src/utils/regexGenerators.ts` 中创建以下函数：
  - [x] `createDueDateRegex()` - 生成识别截止日期的正则表达式 (📅|📆|@{|[due::)
  - [x] `createTimeRegex()` - 生成识别时间的正则表达式 (⏲)
  - [x] `createDateTimeExtractor()` - 从文本中提取日期和时间

### 2. 文件解析逻辑 (File Parsing Logic)

- [x] 在 `src/utils/fileParser.ts` 中创建以下函数：
  - [x] `getAllLinesFromFile(content: string): string[]` - 将文件内容分割为行
  - [x] `extractEventTime(line: string): { hour: number, minute: number }` - 从行中提取事件时间
  - [x] `extractDueDate(line: string): { hasDate: boolean, label: string, date: string }` - 从行中提取截止日期

### 3. 文件操作函数 (File Operations)

- [x] 在 `src/services/fileService.ts` 中添加以下函数：
  - [x] `getFile(eventId: string): TFile` - 根据事件 ID 获取文件
  - [x] `getDailyNotePath(): string` - 获取每日笔记路径
  - [x] `readFileContent(filePath: string): Promise<string>` - 读取文件内容
  - [x] `writeFileContent(filePath: string, content: string): Promise<void>` - 写入文件内容

### 4. 增强 eventService (Enhance eventService)

- [x] 扩展 `src/services/eventService.ts` 中的 `EventService` 类，添加以下方法：
  - [x] `parseEventFromLine(line: string): Partial<Model.Event>` - 从行中解析事件
  - [x] `updateEventInFile(eventId: string, content: string): Promise<void>` - 在文件中更新事件
  - [x] `createEventInFile(content: string, date: Date): Promise<string>` - 在文件中创建事件
  - [x] `deleteEventFromFile(eventId: string): Promise<void>` - 从文件中删除事件

### 5. 创建 API 文件 (Create API File)

- [x] 创建 `src/api.ts` 文件，提供以下功能：
  - [x] 导出所有从 `obComponents` 抽取出来的函数
  - [x] 提供统一的接口与 Obsidian API 交互
  - [x] 统一处理错误和异常

### 6. 重构 obComponents 中的文件 (Refactor obComponents Files)

- [ ] 修改 `updateEvent.ts` 使用新的工具函数
- [ ] 修改 `createEvent.ts` 使用新的工具函数
- [ ] 修改 `deleteEvent.ts` 使用新的工具函数
- [ ] 修改 `getEvents.ts` 使用新的工具函数
- [ ] 修改 `parseTask.ts` 使用新的工具函数

## 重构后的结构 (Post-Refactoring Structure)

```
src/
  ├── api.ts                   # 统一 API 入口 ✅
  ├── services/
  │   ├── eventService.ts      # 增强的事件服务 ✅
  │   └── fileService.ts       # 增强的文件服务 ✅
  ├── utils/
  │   ├── regexGenerators.ts   # 正则表达式生成器 ✅
  │   └── fileParser.ts        # 文件解析工具 ✅
  └── obComponents/            # 重构后的组件
      ├── updateEvent.ts       # 使用新 API 的更新事件组件 ⏳
      ├── createEvent.ts       # 使用新 API 的创建事件组件 ⏳
      └── ...
```

## 优势 (Benefits)

1. 代码复用 - 减少重复的正则表达式和解析逻辑
2. 可维护性 - 集中维护正则表达式和解析逻辑
3. 可测试性 - 单元测试更容易编写
4. 模块化 - 清晰的职责分离

## 下一步 (Next Steps)

1. 重构 `obComponents` 目录中的各个文件，使其使用新创建的 API：

   - 更新 `updateEvent.ts`
   - 更新 `createEvent.ts`
   - 更新 `deleteEvent.ts`
   - 更新 `getEvents.ts`
   - 更新 `parseTask.ts`

2. 编写单元测试以确保重构的代码正常工作

3. 更新文档，反映新的代码结构和 API 用法
