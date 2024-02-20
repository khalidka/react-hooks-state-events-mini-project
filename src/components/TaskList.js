import React, { useState } from "react";
import Task from './Task';

function TaskList({ tasks, handleDeleteTask }) {
  return (
    <div className="tasks">
      {/* Display a list of tasks using Task component */}
      {tasks.map((task, index) => (
        <Task key={index} task={task} deleteTask={() => handleDeleteTask(index)} />
      ))}
    </div>
  );
}

export default TaskList;
