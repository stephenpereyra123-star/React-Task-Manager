export default function TaskDisplay({ tasks, setTasks, isActive }) {
  return (
    <>
      {isActive === 1 && (
        <ul className="h-125 max-w-full overflow-y-auto">
          {tasks.map((tas) => (
            <li key={tas.id} className="flex flex-col gap-2 text-black p-5">
              <p className="wrap-anywhere">
                <span className="block text-center text-xl font-bold">Task</span>
                {tas.taskDue}
              </p>
              <p className="font-medium">
                Due Date: <span className="text-red-400 pl-2">{tas.dueDate}</span>
              </p>
              <p className="font-medium">
                Time Due By: <span className="text-red-400 pl-2">{tas.timeDue}</span>
              </p>
              <span onClick={() => setTasks(tasks.filter((t) => t.id !== tas.id))} className="cursor-pointer w-[30px]">
                &#128465;
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
