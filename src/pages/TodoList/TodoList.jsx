import { useState } from "react";
import { v4 } from "uuid";

export default function TodoList() {
  const [input, setInput] = useState("");
  const [toDoListArray, setToDoListArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!input) {
        return 
    }

    const obj = {
      id: v4(),
      text: input,
      done: false,
    };

    setToDoListArray([obj, ...toDoListArray]);
    setInput("");
  };

  const handleDelete = (id) => {
    const filtered = toDoListArray.filter((item) => item.id !== id);
    setToDoListArray(filtered);
  };

  const handleDone = (id, checked) => {
    const mapped = toDoListArray.map((item) => {
      if (item.id === id) {
        item.done = checked;
      }
      return item;
    });
    setToDoListArray(mapped);
  };

  console.log("toDoListArray", toDoListArray);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">add</button>
      </form>
      {toDoListArray.map((item, index) => (
        <div key={index}>
          <span style={item.done ? { textDecoration: "line-through" } : {}}>
            {item.text}
          </span>
          <input
            type="checkbox"
            onChange={(e) => handleDone(item.id, e.target.checked)}
          />

          <svg
            onClick={() => handleDelete(item.id)}
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="17"
            height="17"
            viewBox="0 0 24 24"
          >
            <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
          </svg>
        </div>
      ))}
    </div>
  );
}
