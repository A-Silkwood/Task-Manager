import { useState } from 'react';

import '../css/elements.css'
import '../css/App.css';

import Manager from './Manager.js';
import Form from './Form.js';
import Legend from './Legend.js';
import TaskList from './TaskList.js';

function App() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const toggleCreateForm = () => { setShowCreateForm(!showCreateForm) };

  const getStatusColor= (status) => {
    switch(status) {
      case 'incomplete':
          return '#e07b00';
      case 'delayed':
          return '#00e0dc';
      case 'late':
          return '#ae00ff';
      case 'complete':
          return '#00e00b';
      case 'cancelled':
          return '#ff0000';
      default:
          return 'white';
    }
  };

  return (
    <div className="App">
      <h1 className="App-header">Task Manager</h1>
      <Manager onClick={ toggleCreateForm } isClicked={ showCreateForm } />
      {showCreateForm && <Form onClose={ toggleCreateForm }/>}
      <Legend getStatusColor={ getStatusColor }/>
      <TaskList/>
    </div>
  );
}

export default App;
