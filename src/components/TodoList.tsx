import React from 'react';
import Todo from './Todo';

type Props = {
  todos: {
    id: number;
    text: string;
    completed: boolean;
  }[]; // ASK: この鉤括弧は？
  toggleTodo: (id: number) => void;
};

const TodoList: React.FC<Props> = (props: Props) => {
  return (
    <ul>
      {props.todos.map(todo => {
        return (
          <Todo
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onClick={() => {
              props.toggleTodo(todo.id);
            }}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
