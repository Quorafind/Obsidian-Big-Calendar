// import utils from "../helpers/utils";
import useLocationStore from '@/stores/locationStore';

class LocationService {
  constructor() {
    this.updateStateWithLocation();
    window.onpopstate = () => {
      this.updateStateWithLocation();
    };
  }

  public updateStateWithLocation = () => {
    const {pathname, search, hash} = window.location;
    const urlParams = new URLSearchParams(search);
    const state: AppLocation = {
      pathname: '/',
      hash: '',
      query: {
        tag: '',
        duration: null,
        text: '',
        type: '',
        filter: '',
      },
    };
    state.query.tag = urlParams.get('tag') ?? '';
    state.query.type = (urlParams.get('type') ?? '') as EventSpecType;
    state.query.text = urlParams.get('text') ?? '';
    state.query.filter = urlParams.get('filter') ?? '';
    const from = parseInt(urlParams.get('from') ?? '0');
    const to = parseInt(urlParams.get('to') ?? '0');
    if (to > from && to !== 0) {
      state.query.duration = {
        from,
        to,
      };
    }
    state.hash = hash;

    state.pathname = this.getValidPathname(pathname);

    useLocationStore.getState().setLocation(state);
  };

  public getState = () => {
    return useLocationStore.getState();
  };

  public clearQuery = () => {
    useLocationStore.getState().setQuery({
      tag: '',
      duration: null,
      text: '',
      type: '',
      filter: '',
    });
    this.updateLocationUrl();
  };

  public setQuery = (query: Query) => {
    useLocationStore.getState().setQuery(query);
    this.updateLocationUrl();
  };

  public setHash = (hash: string) => {
    useLocationStore.getState().setHash(hash);
    this.updateLocationUrl();
  };

  public setPathname = (pathname: AppRouter) => {
    useLocationStore.getState().setPathname(pathname);
    this.updateLocationUrl();
  };

  public pushHistory = (pathname: string) => {
    const locationState = this.getState();
    let queryString = this.transformObjectToParamsString(locationState.query);
    if (queryString) {
      queryString = '?' + queryString;
    }

    window.history.pushState(null, '', pathname + locationState.hash + queryString);
    this.updateStateWithLocation();
  };

  public replaceHistory = (pathname: string) => {
    const locationState = this.getState();
    let queryString = this.transformObjectToParamsString(locationState.query);
    if (queryString) {
      queryString = '?' + queryString;
    }

    window.history.replaceState(null, '', pathname + locationState.hash + queryString);
    this.updateStateWithLocation();
  };

  public setEventTypeQuery = (type: EventSpecType | '' = '') => {
    useLocationStore.getState().setType(type);
    this.updateLocationUrl();
  };

  public setEventFilter = (filterId: string) => {
    useLocationStore.getState().setQueryFilter(filterId);
    this.updateLocationUrl();
  };

  public setTextQuery = (text: string) => {
    useLocationStore.getState().setText(text);
    this.updateLocationUrl();
  };

  public setTagQuery = (tag: string) => {
    useLocationStore.getState().setTagQuery(tag);
    this.updateLocationUrl();
  };

  public setFromAndToQuery = (from: number, to: number) => {
    const duration = from && to ? {from, to} : null;
    useLocationStore.getState().setDurationQuery(duration);
    this.updateLocationUrl();
  };

  public getValidPathname = (pathname: string): AppRouter => {
    if (
      pathname === '/' ||
      pathname === '/explore' ||
      pathname === '/manage' ||
      pathname === '/event' ||
      pathname === '/setting'
    ) {
      return pathname as AppRouter;
    }
    return '/';
  };

  private updateLocationUrl = (method: 'replace' | 'push' = 'replace') => {
    const {query, pathname, hash} = this.getState();
    let queryString = this.transformObjectToParamsString(query);
    if (queryString) {
      queryString = '?' + queryString;
    }

    if (method === 'replace') {
      window.history.replaceState(null, '', pathname + hash + queryString);
    } else {
      window.history.pushState(null, '', pathname + hash + queryString);
    }
  };

  private transformObjectToParamsString = (query: Query): string => {
    const params = new URLSearchParams();
    if (query.tag) {
      params.set('tag', query.tag);
    }
    if (query.type) {
      params.set('type', query.type);
    }
    if (query.text) {
      params.set('text', query.text);
    }
    if (query.filter) {
      params.set('filter', query.filter);
    }
    if (query.duration) {
      params.set('from', query.duration.from.toString());
      params.set('to', query.duration.to.toString());
    }
    return params.toString();
  };
}

const locationService = new LocationService();
export default locationService;
