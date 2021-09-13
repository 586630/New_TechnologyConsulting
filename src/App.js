import React from 'react';
import './App.css';
import { DataFetcher } from './components/DataFetcher';
import Input from './components/Input';

import { ProfilePicker } from './components/ProfilePicker';
import { TodoDisplayer } from './components/TodoDisplayer';

function App() {
  return (
    <div className="app">
      <ProfilePicker />
      <DataFetcher />
      <div className="app__container">
        <Input />
        <TodoDisplayer />
      </div>
    </div>
  );
}

export default App;
