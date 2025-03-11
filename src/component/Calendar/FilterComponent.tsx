import React, {useEffect, useState} from 'react';
import {moment} from 'obsidian';
import locationService from '@/services/locationService';
import globalService from '@/services/globalService';
import {t} from '@/translations/helper';
import {WorkspaceFilter} from '@/setting';
import ObsidianIcon from '@/component/ObsidianIcon';

interface FilterComponentProps {
  onFilterChange: (filterType: 'metadata' | 'client') => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({onFilterChange}) => {
  const [activeFilter, setActiveFilter] = useState<string>('');
  const [contentRegex, setContentRegex] = useState<string>('');
  const [eventType, setEventType] = useState<string>('');
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
    setEventType(locationState.query.eventType || '');
  }, []);

  // Handle filter selection - may require metadata reload
  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);

    // Check if the filter involves metadata
    const filter = workspaceFilters.find((f) => f.id === filterId);
    const requiresMetadataReload =
      filter && (filter.metadataKeys.length > 0 || Object.keys(filter.metadataValues).length > 0);

    locationService.setEventFilter(filterId);
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

  // Handle event type change - client-side filtering only
  const handleEventTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as EventSpecType | '';
    setEventType(value);
    locationService.setEventTypeQuery(value);
    onFilterChange('client');
    setFiltering(true);
  };

  // Handle clear filters
  const handleClearFilters = () => {
    // Check if current filter uses metadata
    const currentFilter = workspaceFilters.find((f) => f.id === activeFilter);
    const hadMetadataFilter =
      currentFilter && (currentFilter.metadataKeys.length > 0 || Object.keys(currentFilter.metadataValues).length > 0);

    setActiveFilter('');
    setContentRegex('');
    setEventType('');
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
        <select
          value={eventType ? [eventType] : []}
          onChange={(e) => {
            // Get the selected option value
            const selectedValue = e.target.value as EventSpecType | '';
            handleEventTypeChange({target: {value: selectedValue}} as React.ChangeEvent<HTMLSelectElement>);
          }}
          className="filter-select"
        >
          <option value="">{t('All')}</option>
          <option value="default">{t('Default')}</option>
          <option value="TASK-TODO">{t('Task - Todo')}</option>
          <option value="TASK-DONE">{t('Task - Done')}</option>
          <option value="TASK-CANCELLED">{t('Task - Cancelled')}</option>
          <option value="TASK-FORWARDED">{t('Task - Forwarded')}</option>
          <option value="TASK-DEFERRED">{t('Task - Deferred')}</option>
          <option value="TASK-IN_PROGRESS">{t('Task - In Progress')}</option>
          <option value="TASK-QUESTION">{t('Task - Question')}</option>
          <option value="TASK-ADD">{t('Task - Add')}</option>
          <option value="TASK-REVIEWED">{t('Task - Reviewed')}</option>
          <option value="TASK-IMPORTANT">{t('Task - Important')}</option>
          <option value="TASK-INFO">{t('Task - Info')}</option>
          <option value="TASK-BOOKMARK">{t('Task - Bookmark')}</option>
          <option value="TASK-PRO">{t('Task - Pro')}</option>
          <option value="TASK-CON">{t('Task - Con')}</option>
          <option value="TASK-BRAINSTORMING">{t('Task - Brainstorming')}</option>
          <option value="TASK-EXAMPLE">{t('Task - Example')}</option>
          <option value="TASK-QUOTE">{t('Task - Quote')}</option>
          <option value="TASK-NOTE">{t('Task - Note')}</option>
          <option value="TASK-WIN">{t('Task - Win')}</option>
          <option value="TASK-LOSE">{t('Task - Lose')}</option>
        </select>
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
