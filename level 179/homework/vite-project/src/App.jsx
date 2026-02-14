import React, { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handlePlusOne = () => {
    setCount(prev => prev + 1);
  };

  const handlePlusFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount(prev => prev + 1);
    }
  };

  return (
    <div>
      <h2>Counter Pro</h2>
      <p>Count: {count}</p>
      <button onClick={handlePlusOne}>+1</button>
      <button onClick={handlePlusFive}>+5</button>
    </div>
  );
}

function NameList() {
  const [names, setNames] = useState([]);

  const addJohn = () => {
    setNames(prev => [...prev, "John"]);
  };

  const removeName = (index) => {
    setNames(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Safe List Manager</h2>
      <button onClick={addJohn}>Add John</button>
      <ul>
        {names.map((name, index) => (
          <li key={index} onClick={() => removeName(index)}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function QuizController({ questions }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrevious = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const goNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, questions.length - 1));
  };

  return (
    <div>
      <h2>Quiz Navigator Plus</h2>
      <p>Question {currentIndex + 1} of {questions.length}</p>
      <p>{questions[currentIndex]}</p>
      <button onClick={goPrevious} disabled={currentIndex === 0}>
        Previous
      </button>
      <button onClick={goNext} disabled={currentIndex === questions.length - 1}>
        Next
      </button>
    </div>
  );
}

export default function App() {
  const sampleQuestions = [
    "What is the capital of France?",
    "What is 2 + 2?",
    "Who wrote 'Hamlet'?"
  ];

  return (
    <div>
      <ClickCounter />
      <NameList />
      <QuizController questions={sampleQuestions} />
    </div>
  );
}