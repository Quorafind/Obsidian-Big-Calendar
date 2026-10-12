import React, {useEffect, useState} from 'react';
import {Menu, moment} from 'obsidian';
import locationService from '@/services/locationService';
import globalService from '@/services/globalService';
import {t} from '@/translations/helper';
import {WorkspaceFilter} from '@/setting';
import ObsidianIcon from '@/component/ObsidianIcon';

interface FilterComponentProps {
  onFilterChange: (filterType: 'metadata' | 'client') => void;
}

// Event types offered in the toolbar menu, in display order
const EVENT_TYPES: {value: string; label: Parameters<typeof t>[0]}[] = [
  {value: 'default', label: 'Default'},
  {value: 'TASK-TODO', label: 'Task - Todo'},
  {value: 'TASK-DONE', label: 'Task - Done'},
  {value: 'TASK-CANCELLED', label: 'Task - Cancelled'},
  {value: 'TASK-FORWARDED', label: 'Task - Forwarded'},
  {value: 'TASK-DEFERRED', label: 'Task - Deferred'},
  {value: 'TASK-IN_PROGRESS', label: 'Task - In Progress'},
  {value: 'TASK-QUESTION', label: 'Task - Question'},
  {value: 'TASK-ADD', label: 'Task - Add'},
  {value: 'TASK-REVIEWED', label: 'Task - Reviewed'},
  {value: 'TASK-IMPORTANT', label: 'Task - Important'},
  {value: 'TASK-INFO', label: 'Task - Info'},
  {value: 'TASK-BOOKMARK', label: 'Task - Bookmark'},
  {value: 'TASK-PRO', label: 'Task - Pro'},
  {value: 'TASK-CON', label: 'Task - Con'},
  {value: 'TASK-BRAINSTORMING', label: 'Task - Brainstorming'},
  {value: 'TASK-EXAMPLE', label: 'Task - Example'},
  {value: 'TASK-QUOTE', label: 'Task - Quote'},
  {value: 'TASK-NOTE', label: 'Task - Note'},
  {value: 'TASK-WIN', label: 'Task - Win'},
  {value: 'TASK-LOSE', label: 'Task - Lose'},
];

const FilterComponent: React.FC<FilterComponentProps> = ({onFilterChange}) => {
  const [activeFilter, setActiveFilter] = useState<string>('');
  const [contentRegex, setContentRegex] = useState<string>('');
  const [eventTypes, setEventTypes] = useState<string[]>([]);
  const [workspaceFilters, setWorkspaceFilters] = useState<WorkspaceFilter[]>([]);
  const [filtering, setFiltering] = useState<boolean>(false);

  // Load filters on component mount
  useEffect(() => {
    const settings = globalService.getState().pluginSetting;
    if (settings?.WorkspaceFilters) {
      setWorkspaceFilters(settings.WorkspaceFilters.filter((f) => f.isEnabled));
    }

    // Set initial filter values from URL
    const locationState = locationService.getState();
    setActiveFilter(locationState.query.filter || '');
    setContentRegex(locationState.query.contentRegex || '');
    setEventTypes(locationState.query.eventTypes || []);
  }, []);

  // Handle filter selection - may require metadata reload
  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);

    // Check if the filter involves metadata
    const filter = workspaceFilters.find((f) => f.id === filterId);
    const requiresMetadataReload =
      filter && (filter.metadataKeys.length > 0 || Object.keys(filter.metadataValues).length > 0);

    locationService.setEventFilter(filterId);
    // Show the workspace filter's types in the toolbar menu
    setEventTypes(locationService.getState().query.eventTypes || []);
    onFilterChange(requiresMetadataReload ? 'metadata' : 'client');
    setFiltering(true);
  };

  // Handle content regex change - client-side filtering only
  const handleContentRegexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setContentRegex(value);
    locationService.setContentRegex(value);
    onFilterChange('client');
    setFiltering(true);
  };

  // Handle event types change - client-side filtering only
  const applyEventTypes = (types: string[]) => {
    setEventTypes(types);
    locationService.setEventTypesQuery(types);
    onFilterChange('client');
    setFiltering(true);
  };

  // Menu with a checkmark per type; each click toggles one type
  const openEventTypeMenu = (e: React.MouseEvent) => {
    const menu = new Menu();
    EVENT_TYPES.forEach(({value, label}) => {
      menu.addItem((item) =>
        item
          .setTitle(t(label))
          .setChecked(eventTypes.includes(value))
          .onClick(() =>
            applyEventTypes(
              eventTypes.includes(value) ? eventTypes.filter((type) => type !== value) : [...eventTypes, value],
            ),
          ),
      );
    });
    menu.addSeparator();
    menu.addItem((item) => item.setTitle(t('All')).onClick(() => applyEventTypes([])));
    menu.showAtMouseEvent(e.nativeEvent);
  };

  const eventTypesLabel =
    eventTypes.length === 0
      ? t('All')
      : EVENT_TYPES.filter(({value}) => eventTypes.includes(value))
          .map(({label}) => t(label).replace(/^.* - /, ''))
          .join(', ');

  // Handle clear filters
  const handleClearFilters = () => {
    // Check if current filter uses metadata
    const currentFilter = workspaceFilters.find((f) => f.id === activeFilter);
    const hadMetadataFilter =
      currentFilter && (currentFilter.metadataKeys.length > 0 || Object.keys(currentFilter.metadataValues).length > 0);

    setActiveFilter('');
    setContentRegex('');
    setEventTypes([]);
    locationService.clearQuery();

    // Only reload data if we were using metadata filters
    onFilterChange(hadMetadataFilter ? 'metadata' : 'client');
    setFiltering(false);
  };

  return (
    <div className="calendar-filter-component">
      <div className="filter-section">
        <ObsidianIcon iconName="telescope" tooltip={t('Workspace Filter')} />
        <select value={activeFilter} onChange={(e) => handleFilterChange(e.target.value)} className="filter-select">
          <option value="">{t('None')}</option>
          {workspaceFilters.map((filter) => (
            <option key={filter.id} value={filter.id}>
              {filter.name}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-section">
        <ObsidianIcon iconName="calendar-fold" tooltip={t('Event Type')} />
        <button className="filter-select" onClick={openEventTypeMenu}>
          {eventTypesLabel}
        </button>
      </div>

      <div className="filter-section">
        <ObsidianIcon iconName="regex" tooltip={t('Content Regex')} />
        <input
          type="text"
          value={contentRegex}
          onChange={handleContentRegexChange}
          placeholder={t('Enter regex pattern')}
          className="filter-input"
        />
      </div>

      {filtering && (
        <button className="filter-button" onClick={handleClearFilters}>
          <ObsidianIcon iconName="filter-x" size={14} />
          {t('Clear Filters')}
        </button>
      )}
    </div>
  );
};

export default FilterComponent;
