// src/components/TaskForm.js
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask, editTask } from '../redux/tasksSlice'

function TaskForm({ editingTask, setEditingTask }) {
  const [title, setTitle] = useState(editingTask ? editingTask.title : '')
  const [priority, setPriority] = useState(editingTask ? editingTask.priority : '')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (editingTask) {
      dispatch(editTask({ id: editingTask.id, title, priority }))
      setEditingTask(null)
    } else {
      dispatch(addTask({ id: Date.now(), title, priority }))
    }
    setTitle('')
    setPriority('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col p-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
        className="mb-2 p-2 border rounded"
      />
      <label htmlFor="priority">Priority:</label>
      <select
        name='priority'
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="mb-2 p-2 border rounded"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  )
}

export default TaskForm
