import { Action } from 'redux';

export type AddTodoPayload = {
  // todoを追加するときに必要なのはtodoの内容くらい
  text: string;
};

export interface AddTodoAction extends Action {
  type: 'ADD_TODO';
  payload: AddTodoPayload;
}

export const addTodo = (payload: AddTodoPayload): AddTodoAction => {
  return {
    type: 'ADD_TODO',
    payload
  };
};
