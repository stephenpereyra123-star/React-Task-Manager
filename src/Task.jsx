import { useState } from "react";
import TaskForm from "./TaskForm";
import TaskDisplay from "./TaskDisplay";
import TaskTabs from "./TaskTabs";
import TaskCount from "./TaskCount";
import DateAndTime from "./DateAndTime";
import { v4 as uuid } from "uuid";

export default function Task() {
  const [tasks, setTasks] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const tasksCount = tasks.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const task = formData.get("task");
    const date = formData.get("date");
    const time = formData.get("time");

    setTasks((curr) => {
      return [...curr, { taskDue: task, dueDate: date, timeDue: time, id: uuid() }];
    });

    e.target.reset();
  };

  const deleteTask = (tas) => {
    setTasks(tasks.filter((t) => t.id !== tas.id));
  };

  return (
    <div className="flex flex-col w-2xl  min-h-[500px] rounded-lg bg-[#FFFFFF]">
      <section className="p-5 flex self-center gap-20">
        <TaskTabs title={"Add a task"} onShow={() => setActiveIndex(0)} />
        <TaskTabs title={"All Task"} onShow={() => setActiveIndex(1)} />
      </section>
      <section className="flex items-center justify-center gap-10">
        <DateAndTime />
        <TaskCount tasksCount={tasksCount} />
      </section>

      <section className="grow-2 flex flex-col">
        <TaskForm onSubmit={handleSubmit} isActive={activeIndex} />
        <TaskDisplay tasks={tasks} setTasks={setTasks} isActive={activeIndex} deleteTask={deleteTask} />
      </section>
    </div>
  );
}
