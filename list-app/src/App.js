import React from 'react';
import { AddItemForm } from './features/form/AddItemForm';
import { List } from './features/list/List'
import './App.css';

function App() {
  return (
    <div className="App">
      <AddItemForm />
      <List />
    </div>
  );
}

export default App;
