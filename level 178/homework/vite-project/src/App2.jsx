import React, { useState } from "react";

function LiveTextMirror() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Type something..."
      />
      <h1>{text}</h1>
    </div>
  );
}

export default LiveTextMirror;