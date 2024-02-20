import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";
import NewTaskForm from "./NewTaskForm"; 

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredTasks, setFilteredTasks] = useState(TASKS);

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);

    // Filter tasks based on the selected category
    if (category === "All") {
      setFilteredTasks(TASKS); // If "All" is selected, display all tasks
    } else {
      const filteredTasks = TASKS.filter((task) => task.category === category);
      setFilteredTasks(filteredTasks);
    }
  };

  // Function to handle task form submission
  const handleTaskFormSubmit = (newTask) => {
    console.log(newTask)
    setFilteredTasks([...filteredTasks, newTask]); // Add the new task to the tasks array
    // Optionally, you can update the filtered tasks based on the selected category
    if (selectedCategory !== "All" && newTask.category !== selectedCategory) {
      // If the new task's category does not match the selected category, don't display it
      setFilteredTasks([...filteredTasks, newTask]);
    }
  };

  const handleDeleteTask = (index) => {
    // Create a new array excluding the task at the specified index
    const updatedTasksList = [...filteredTasks];
    updatedTasksList.splice(index, 1);
    // Update the state with the new array
    setFilteredTasks(updatedTasksList);
  };

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onSelectCategory={handleCategorySelect} />
      <NewTaskForm onTaskFormSubmit={handleTaskFormSubmit}  categories={CATEGORIES} /> {/* Pass the callback function */}
      <TaskList tasks={filteredTasks} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
