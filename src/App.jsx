import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useSelector } from 'react-redux'
import './App.css'
import TaskForm from './components/TaskForm'
import Header from './components/Header';
import TaskList from './components/TaskList';
import AddTaskButton from './components/AddTaskButton';

function App() {
  const tasks = useSelector((state) => state.tasks)
  const [editingTask, setEditingTask] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="bg-gray-100 min-h-screen">
    <Header />
    <TaskList tasks={tasks} setEditingTask={setEditingTask} setIsModalOpen={setIsModalOpen}/>
    {isModalOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded p-4 relative">
        <button onClick={() => setIsModalOpen(false)} className="absolute top-2 right-2 text-red-500">
      <i className="fas fa-times"></i>
    </button>
          <TaskForm editingTask={editingTask} setEditingTask={setEditingTask} />
          
        </div>
      </div>
    )}
    <button onClick={() => {setIsModalOpen(true); setEditingTask(null);}} className="fixed bottom-4 right-4 bg-pink-500 text-white p-2 rounded-full shadow">
      <i className="fas fa-plus"></i>
    </button>
  </div>
  )
}

export default App
