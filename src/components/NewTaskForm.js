import React, { useState, useEffect } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [taskText, setTaskText] = useState("");
  const [taskCategory, setTaskCategory] = useState("");

  useEffect(() => {
    
    if (categories && categories.length > 0) {
      setTaskCategory(categories[0]);
    }
  }, [categories]); 

  const handleTaskTextChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleTaskCategoryChange = (event) => {
    setTaskCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Prevent form submission if taskText is empty
    if (!taskText.trim()) {
      return;
    }
    // Call the callback function with the new task data
    onTaskFormSubmit({ text: taskText, category: taskCategory });
    // Reset form fields after submission
    setTaskText("");
    // Reset task category to the default category if available
    if (categories && categories.length > 0) {
      setTaskCategory(categories[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Task:
        <input
          type="text"
          value={taskText}
          onChange={handleTaskTextChange}
          required
        />
      </label>
      <label>
        Category:
        <select value={taskCategory} onChange={handleTaskCategoryChange}>
          {categories &&
            categories.map((category, index) => (
              // Exclude the "All" category
              category !== "All" && (
                <option key={index} value={category}>
                  {category}
                </option>
              )
            ))}
        </select>
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
