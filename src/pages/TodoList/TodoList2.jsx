import { useState } from "react";
import { toast } from "react-toastify";
import { v4 } from "uuid";

export default function TodoList2() {
  const [input, setInput] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!input){
        toast.error('Empty input')
        return
    }

    const obj = {
      id: v4(),
      text: input,
      done: false,
      date: new Date()
    };

    setToDoList([obj, ...toDoList]);
    setInput("");

    toast.success('Todo created!')
  };

  const handleDone = (id, checked) => {
    const newList = toDoList.map((item) => {
      if (item.id === id) {
        item.done = checked;
      }

      return item;
    });

    setToDoList(newList);
  };

  const handleDelete = (id) => {
    const deleted = toDoList.filter((item) => item.id !== id )
    setToDoList(deleted)
  }

  console.log("toDoList", toDoList);

  const pod = (value) => String(value).length === 1 ? `0${value}` : value

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button> add </button>
      </form>
      {toDoList.map((item) => {
        const hours = item.date.getHours()
        const minutes = item.date.getMinutes()
        const seconds = item.date.getSeconds()
        const date = item.date.toLocaleDateString()

        const fullTime = `${date} ${pod(hours)}:${pod(minutes)}:${pod(seconds)}`
        return (
        <div key={item.id}>
          <input
            type="checkbox"
            onChange={(e) => handleDone(item.id, e.target.checked)}
          />
          <span style={item.done ? { textDecoration: "line-through" } : {}}>
            {item.text}
          </span>
          
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
          <span>{fullTime}</span>
        </div>
        )
})}
    </div>
  );
}
