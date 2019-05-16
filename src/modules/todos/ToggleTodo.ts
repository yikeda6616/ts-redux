import { Action } from 'redux';

export type ToggleTodoPayload = {
  // todoをトグルするときに必要なのはどのtodoかの情報くらい
  id: number;
};

export interface ToggleTodoAction extends Action {
  type: 'TOGGLE_TODO';
  payload: ToggleTodoPayload;
}
