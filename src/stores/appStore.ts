import combineReducers from '../labs/combineReducers';
import createStore from '../labs/createStore';
import * as globalStore from './globalStateStore';
import * as locationStore from './locationStore';
import * as eventStore from './eventStore';
import * as dailyNotesStore from './dailyNotesStore';

interface AppState {
  globalState: globalStore.State;
  locationState: locationStore.State;
  eventState: eventStore.State;
  dailyNotesState: dailyNotesStore.State;
}

type AppStateActions =
  | globalStore.Actions
  | locationStore.Actions
  | eventStore.Actions
  | dailyNotesStore.Actions;

const appStore = createStore<AppState, AppStateActions>(
  {
    globalState: globalStore.defaultState,
    locationState: locationStore.defaultState,
    eventState: eventStore.defaultState,
    dailyNotesState: dailyNotesStore.defaultState,
  },
  combineReducers<AppState, AppStateActions>({
    globalState: globalStore.reducer,
    locationState: locationStore.reducer,
    eventState: eventStore.reducer,
    dailyNotesState: dailyNotesStore.reducer,
  }),
);

export default appStore;
