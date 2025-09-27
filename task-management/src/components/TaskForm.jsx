import React, { useState } from "react";

export default function TaskForm({ onSubmit, initialData }) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [status, setStatus] = useState(initialData?.status || "Pending");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Title is required");
      return;
    }
    onSubmit({ title, description, status });
  };

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "10px" }} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)} style={{ padding: "8px", fontSize: "16px" }}>
        <option value="Pending">Pending</option>
        <option value="Done">Done</option>
      </select>
      <button type="submit" style={{ padding: "10px", backgroundColor: "#2196F3", color: "white", border: "none", borderRadius: "4px" }}>
        Save Task
      </button>
    </form>
  );
}
