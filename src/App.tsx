import React from 'react';

import { TodoApp } from './components/todoApp';

import './App.css';

type Props = {};

export class App extends React.Component<Props> {
  render() {

    return (
      <TodoApp/>
    );
  }
}

export default App