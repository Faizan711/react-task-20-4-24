
// src/components/Task.js
import { useDispatch } from 'react-redux'
import { deleteTask } from '../redux/tasksSlice'

function Task({ task, setEditingTask, setIsModalOpen }) {
  const dispatch = useDispatch()

  const handleEdit = () => {
    setEditingTask(task)
    setIsModalOpen(true)
  }

  const handleDelete = () => {
    dispatch(deleteTask(task.id))
  }

  const priorityColor = task.priority === 'high' ? 'bg-red-500' : task.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'

  return (
    <div className="flex justify-between items-center bg-white p-4 my-2 rounded shadow">
      <div>
        <h2 className="text-lg font-bold">{task.title}</h2>
        <p className={`text-sm text-center px-2 text-white rounded-xl w-20 ${priorityColor}`}>{task.priority}</p>
      </div>
      <div>
        <button onClick={handleEdit} className="text-pink-600 mr-2">
          <i className="far fa-edit"></i>
        </button>
        <button onClick={handleDelete} className="text-pink-600">
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  )
}

export default Task
