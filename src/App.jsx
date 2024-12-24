import React from 'react';
import './App.css';
import UserStoryHighlight from './UserStoryHighlight';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <div className="App">
      <h1>User Story Highlights</h1>
      <DndProvider backend={HTML5Backend}>
        <UserStoryHighlight />
      </DndProvider>
    </div>
  );
}

export default App;
