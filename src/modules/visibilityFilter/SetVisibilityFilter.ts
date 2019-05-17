type ShowAll = {
  type: 'SHOW_ALL';
};

type ShowCompleted = {
  type: 'SHOW_COMPLETED';
};

type ShowActive = {
  type: 'SHOW_ACTIVE';
};

export type FilterType = ShowAll | ShowCompleted | ShowActive;

export const showAll = (): FilterType => ({
  type: 'SHOW_ALL'
});

export const showCompleted = (): FilterType => ({
  type: 'SHOW_COMPLETED'
});

export const showActive = (): FilterType => ({
  type: 'SHOW_ACTIVE'
});

export type SetVisibilityFilterPayload = {
  // とりあえずフィルターセット
  // プレゼンテーション層で見え方の調整をする
  filter: FilterType;
};

export interface SetVisibilityFilterAction extends Action {
  type: 'SET_VISIBILITY_FILTER';
  payload: SetVisibilityFilterPayload;
}

export const setVisibilityFilter = (
  payload: SetVisibilityFilterPayload
): SetVisibilityFilterAction => {
  return {
    payload,
    type: 'SET_VISIBILITY_FILTER'
  };
};
