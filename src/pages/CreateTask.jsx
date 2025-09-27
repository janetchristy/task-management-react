import React from "react";
import { useNavigate } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";
import TaskForm from "../components/TaskForm";

export default function CreateTask() {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleSubmit = (task) => {
    addTask(task);
    navigate("/"); // go back to Home after saving
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>Create Task</h2>
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
}



