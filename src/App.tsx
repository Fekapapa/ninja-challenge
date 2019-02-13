import React from 'react';

import { TodoForm } from './components/todoForm';
import { RenderTodo } from './components/renderTodo';

import './App.css';

type Props = {};

interface todoUnit {
  text: string;
  isCompleted: boolean;
}

interface ComponentState {
  todos: todoUnit[];
}

type State = Readonly<ComponentState>;

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const initialTodoList = [
      { text: "Learn about React",
        isCompleted: false },
      { text: "Meet friend for lunch",
        isCompleted: false },
      { text: "Build really cool todo app",
        isCompleted: false }
    ];

    this.state = { todos: initialTodoList };
  }

  addTodo = (text: string) => {
    const { todos } = this.state;
    const newTodo = { text: text, isCompleted: false };
    const newTodos = [...todos, newTodo];

    this.setState({ todos: newTodos })
  };

  completeTodo = (index: number) => {
    const { todos } = this.state;
    const originalTodos = [...todos];

    originalTodos[index].isCompleted = true;

    this.setState({ todos: originalTodos })
  };

  removeTodo = (index: number) => {
    const { todos } = this.state;
    const originalTodos = [...todos];

    originalTodos.splice(index, 1);
    this.setState({ todos: originalTodos })
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <RenderTodo
              key={index}
              index={index}
              todo={todo}
              completeTodo={this.completeTodo}
              removeTodo={this.removeTodo}
            />
          ))}
          <TodoForm addTodo={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App