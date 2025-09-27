import React from "react";
import { Link } from "react-router-dom";

export default function TaskTable({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <p>No tasks found.</p>;
  }

  return (
    <table border="1" width="100%" style={{ borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.status}</td>
            <td>
              <Link to={`/edit/${task.id}`} style={{ marginRight: "10px" }}>Edit</Link>
              <button onClick={() => deleteTask(task.id)} style={{ padding: "5px 10px", backgroundColor: "red", color: "white", border: "none" }}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
