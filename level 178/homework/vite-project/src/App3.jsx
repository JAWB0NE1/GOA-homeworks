import React, { useState } from "react";

function SimpleListAdder() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      setList([...list, task]);
      setTask(""); // clear input
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SimpleListAdder;