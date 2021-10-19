import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'something 1',
        day: 'Feb 5th at 2:30pm',
        reminder: 'false',
    },
    {
        id: 2,
        text: 'something 2',
        day: 'Feb 5th at 4:30pm',
        reminder: 'false',
    },
    {
        id: 3,
        text: 'something 3',
        day: 'Feb 3th at 6:30pm',
        reminder: 'false',
    },
    ])

  // Delete Task
  const deleteTask = (id) => {
    //console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  
  return (
    <div className='container'>
      <Header />
      {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks To Show'}
    </div>
  )
}

export default App;
