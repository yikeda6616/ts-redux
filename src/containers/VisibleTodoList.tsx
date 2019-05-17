import { Action, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { RootState, actionCreator } from '../modules';
import TodoList from '../components/TodoList';

// ReduxのStateからPropsを取り出す`mapStateToProps`をかく
// ReduxのDispatch ActionをPropsに入れる`mapDispatchToProps`をかく
// `connect` する

// connectがコンパイルエラーになる場合は、
// - 引数の数
// - 引数名
// - 引数の型
// - 渡すコンポーネント
// をチェックする

// mapDispatchToPropsからはStateに触れないことに注意

const mapStateToProps = (state: RootState) => {
  const filter = () => {
    switch (state.visibilityFilter.visibility.type) {
      case 'SHOW_ALL':
        return state.todos.todos;
      case 'SHOW_COMPLETED':
        return state.todos.todos.filter(e => e.completed);
      case 'SHOW_ACTIVE':
        return state.todos.todos.filter(e => !e.completed);
      default:
        throw new Error('Unknown filter');
    }
  };
  return {
    todos: filter()
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    toggleTodo: (id: number) => {
      dispatch(actionCreator.todos.toggleTodo({ id: id }));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
