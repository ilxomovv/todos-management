import { useEffect, useState } from "react";
import { Link } from "react-router";

function Notes() {
  document.title = "Qaydlar ilovasi | Qaydlar";
  const [task, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            id: 0,
            title: "Uyqudan turish",
            date: "2026-08-18",
            isCompleted: false,
          },
        ];
  });
  const [taskEnter, setTaskEnter] = useState("");
  const [date, setDate] = useState("");

  const addTask = () => {
    if (!taskEnter || !date) {
      alert("ogohlantirish inputlar bo'sh");
      return;
    }
    const newObj = {
      id: Date.now(),
      title: taskEnter,
      date: date,
      isCompleted: false,
    };
    setTask([...task, newObj]);
    setTaskEnter("");
    setDate("");
  };

  const toggleComplete = (id) => {
    setTask(
      task.map((item) =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item,
      ),
    );
  };

  const handleDelete = (id) => {
    const filtered = task.filter((e) => e.id !== id);
    setTask(filtered);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  return (
    <div>
      <Link to="/">Bosh sahifaga qaytish</Link>
      <br />
      <br />
      <div>
        <input
          type="text"
          value={taskEnter}
          onChange={(e) => setTaskEnter(e.target.value)}
          placeholder="Qayd kiritish"
        />{" "}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button onClick={() => addTask()}>Qo'shish</button>
      </div>
      {task.map((e) => (
        <div key={e.id}>
          <h3>{e.title}</h3>
          <h4>{e.date}</h4>
          <p style={{ color: e.isCompleted === true ? "gray" : "black" }}>
            {e.isCompleted === true ? "Bajarildi" : "Bajarilmadi"}
          </p>
          <button onClick={() => toggleComplete(e.id)}>Completed</button>
          {"  "}
          <button onClick={() => handleDelete(e.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Notes;
