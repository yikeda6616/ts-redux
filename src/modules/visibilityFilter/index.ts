import {
  SetVisibilityFilterAction,
  FilterType,
  showAll,
  setVisibilityFilter
} from './SetVisibilityFilter';

export {
  FilterType,
  showAll,
  showCompleted,
  showActive
} from './SetVisibilityFilter';

type Actions = SetVisibilityFilterAction;

export type State = {
  visibility: FilterType;
};

const init = (): State => ({
  visibility: showAll()
});

export const reducer = (state: State = init(), action: Actions) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        visibility: action.payload.filter
      };
    default:
      return state;
  }
};

export const actionCreator = {
  setVisibilityFilter
};
