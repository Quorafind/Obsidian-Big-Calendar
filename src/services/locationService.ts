// import utils from "../helpers/utils";
import useLocationStore from '@/stores/locationStore';
import {globalService} from '@/services';

class LocationService {
  constructor() {}

  public getState = () => {
    return useLocationStore.getState();
  };

  public clearQuery = () => {
    useLocationStore.getState().setQuery({
      tag: '',
      duration: null,
      text: '',
      eventType: '',
      filter: '',
      contentRegex: '',
      folderPaths: [],
      metadataKeys: [],
      metadataValues: {},
    });
  };

  public setQuery = (query: Query) => {
    useLocationStore.getState().setQuery(query);
  };

  public setHash = (hash: string) => {
    useLocationStore.getState().setHash(hash);
  };

  public setEventTypeQuery = (eventType: EventSpecType | '' = '') => {
    useLocationStore.getState().setEventType(eventType);
  };

  public setEventFilter = (filterId: string) => {
    useLocationStore.getState().setQueryFilter(filterId);
    // Apply filter settings from the selected workspace filter
    this.applyWorkspaceFilter(filterId);
  };

  public setTextQuery = (text: string) => {
    useLocationStore.getState().setText(text);
  };

  public setTagQuery = (tag: string) => {
    useLocationStore.getState().setTagQuery(tag);
  };

  public setFromAndToQuery = (from: number, to: number) => {
    const duration = from && to ? {from, to} : null;
    useLocationStore.getState().setDurationQuery(duration);
  };

  // New filter methods
  public setContentRegex = (contentRegex: string) => {
    useLocationStore.getState().setContentRegex(contentRegex);
  };

  public setFolderPaths = (folderPaths: string[]) => {
    useLocationStore.getState().setFolderPaths(folderPaths);
  };

  public setMetadataKeys = (metadataKeys: string[]) => {
    useLocationStore.getState().setMetadataKeys(metadataKeys);
  };

  public setMetadataValues = (metadataValues: Record<string, string>) => {
    useLocationStore.getState().setMetadataValues(metadataValues);
  };

  // Apply a workspace filter by ID
  private applyWorkspaceFilter = (filterId: string) => {
    const settings = globalService.getState().pluginSetting;
    const filter = settings.WorkspaceFilters.find((f) => f.id === filterId && f.isEnabled);

    if (!filter) {
      return;
    }

    // Apply the filter settings to the query
    const locationStore = useLocationStore.getState();

    // Apply event type filter
    if (filter.eventTypes.length > 0) {
      locationStore.setEventType((filter.eventTypes[0] as EventSpecType) || '');
    } else {
      // Clear event type if none in the filter
      locationStore.setEventType('');
    }

    // Set content regex
    locationStore.setContentRegex(filter.contentRegex || '');

    // Set folder paths
    locationStore.setFolderPaths(filter.folderPaths || []);

    // Set metadata keys
    locationStore.setMetadataKeys(filter.metadataKeys || []);

    // Set metadata values
    locationStore.setMetadataValues(filter.metadataValues || {});
  };
}

const locationService = new LocationService();
export default locationService;
