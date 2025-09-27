import React, { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import TaskTable from "../components/TaskTable";
import { Link } from "react-router-dom";

export default function Home() {
  const { tasks, deleteTask } = useTasks();
  const [search, setSearch] = useState("");

  const filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Task Manager</h1>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, padding: "8px", fontSize: "16px", marginRight: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
        />
        <Link to="/create">
          <button style={{ padding: "8px 16px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "4px" }}>
            + Add Task
          </button>
        </Link>
      </div>

      <TaskTable tasks={filtered} deleteTask={deleteTask} />
    </div>
  );
}
