import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
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

  //Add Task 
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000)+1

    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    //console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id))
  }
  
  //Togle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  
  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length >0 ?
      ( <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> 
        ) : ( 
          'No Tasks npmTo Show'
          )}
    </div>
  )
}

export default App;
