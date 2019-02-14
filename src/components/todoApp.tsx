import React from 'react';

import { TodoAppInput } from './todoAppInput';
import { RenderOneTodo } from './renderOneTodo';

type Props = {};

interface todoElement {
  text: string;
  isCompleted: boolean;
}

interface ComponentState {
  todos: todoElement[];
}

type State = Readonly<ComponentState>;

export class TodoApp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const initialTodoList = [
      { text: "Learn about React",
        isCompleted: false },
      { text: "Order pizza for Pizza-péntek",
        isCompleted: false },
      { text: "Build really cool todo app with Hooks",
        isCompleted: false }
    ];

    this.state = { todos: initialTodoList };
  }

  addTodo = (text: string) => {
    const { todos } = this.state;
    const newTodo = { text: text, isCompleted: false };
    const newTodos = [...todos, newTodo];

    this.setState({ todos: newTodos });
  };

  completeTodo = (index: number) => {
    const { todos } = this.state;
    const originalTodos = [...todos];

    originalTodos[index].isCompleted = true;

    this.setState({ todos: originalTodos });
  };

  removeTodo = (index: number) => {
    const { todos } = this.state;
    const originalTodos = [...todos];

    originalTodos.splice(index, 1);
    this.setState({ todos: originalTodos });
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <RenderOneTodo
              key={index}
              index={index}
              todo={todo}
              completeTodo={this.completeTodo}
              removeTodo={this.removeTodo}
            />
          ))}
          <TodoAppInput addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}