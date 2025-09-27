import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";

export default function EditTask() {
  const { id } = useParams();
  const { tasks, deleteTask, addTask } = useTasks();
  const navigate = useNavigate();

  const taskToEdit = tasks.find((t) => t.id === parseInt(id));

  const handleSubmit = (updatedTask) => {
    if (!taskToEdit) return;
    deleteTask(taskToEdit.id); // remove old task
    addTask({ ...updatedTask, id: taskToEdit.id }); // add updated task with same id
    navigate("/"); // go back to Home
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>Edit Task</h2>
      {taskToEdit ? (
        <TaskForm onSubmit={handleSubmit} initialData={taskToEdit} />
      ) : (
        <p>Task not found</p>
      )}
    </div>
  );
}
