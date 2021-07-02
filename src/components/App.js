import { useState } from 'react';

import '../css/App.css';

import Manager from './Manager.js';
import Form from './Form.js';
import Legend from './Legend.js';
import TaskList from './TaskList.js';

function App() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const toggleCreateForm = () => { setShowCreateForm(!showCreateForm) };

  return (
    <div className="App">
      <h1 className="App-header">Task Manager</h1>
      <Manager onClick={ toggleCreateForm } isClicked={ showCreateForm } />
      {showCreateForm && <Form/>}
      <Legend/>
      <TaskList/>
    </div>
  );
}

export default App;
