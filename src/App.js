import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Visit Shop",
      day: "Feb 5th at 18.00",
      reminder: true,
    },
    {
      id: 2,
      text: "Visit library",
      day: "Feb 6th at 14.00",
      reminder: true,
    },
    {
      id: 3,
      text: "Visit doctor",
      day: "Feb 7th at 10.00",
      reminder: true,
    },
  ]);
  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task,
      ),
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
};

export default App;
