import utils from '../helpers/utils';

export interface State {
  events: Model.Event[];
  tags: string[];
}

interface SetEventsAction {
  type: 'SET_EVENTS';
  payload: {
    events: Model.Event[];
  };
}

interface SetTagsAction {
  type: 'SET_TAGS';
  payload: {
    tags: string[];
  };
}

interface InsertEventAction {
  type: 'INSERT_EVENT';
  payload: {
    event: Model.Event;
  };
}

interface DeleteEventByIdAction {
  type: 'DELETE_EVENT_BY_ID';
  payload: {
    id: string;
  };
}

interface EditEventByIdAction {
  type: 'EDIT_EVENT';
  payload: Model.Event;
}

export type Actions = SetEventsAction | SetTagsAction | InsertEventAction | DeleteEventByIdAction | EditEventByIdAction;

export function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case 'SET_EVENTS': {
      const events = utils.dedupeObjectWithId(
        action.payload.events.sort(
          (a, b) => utils.getTimeStampByDate(b.start) - utils.getTimeStampByDate(a.start),
        ),
      );

      // const events = action.payload.events.sort((a, b) => utils.getTimeStampByDate(b.createdAt) - utils.getTimeStampByDate(a.createdAt));

      return {
        ...state,
        events: [...events],
      };
    }
    case 'SET_TAGS': {
      return {
        ...state,
        tags: action.payload.tags,
      };
    }
    case 'INSERT_EVENT': {
      const events = utils.dedupeObjectWithId(
        [action.payload.event, ...state.events]
      );

      return {
        ...state,
        events,
      };
    }
    case 'DELETE_EVENT_BY_ID': {
      return {
        ...state,
        events: [...state.events].filter((event) => event.id !== action.payload.id),
      };
    }
    case 'EDIT_EVENT': {
      const events = state.events.map((m) => {
        if (m.id === action.payload.id) {
          return {
            ...m,
            ...action.payload,
          };
        } else {
          return m;
        }
      });

      return {
        ...state,
        events,
      };
    }
    default: {
      return state;
    }
  }
}

export const defaultState: State = {
  events: [],
  tags: [],
};
