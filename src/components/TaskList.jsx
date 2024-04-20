import Task from "./Task";

function TaskList({ tasks, setEditingTask, setIsModalOpen }) {
    return (
      <div className="p-4">
        {tasks.map((task) => (
          <Task key={task.id} task={task} setEditingTask={setEditingTask} setIsModalOpen={setIsModalOpen}/>
        ))}
      </div>
    );
  }

  export default TaskList;
  