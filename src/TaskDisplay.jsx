export default function TaskDisplay({ tasks, isActive, deleteTask }) {
  return (
    <>
      {isActive === 1 && (
        <ul className="h-125 max-w-full overflow-y-auto">
          {tasks.map((tas) => (
            <li key={tas.id} className="flex flex-col gap-1 text-black p-3">
              <p className="wrap-anywhere">
                <span className="block text-md font-bold">Task</span>
                {tas.taskDue}
              </p>
              <p className="font-medium">
                Due Date: <span className="text-red-400 pl-2">{tas.dueDate}</span>
              </p>
              <p className="font-medium">
                Time Due By: <span className="text-red-400 pl-2">{tas.timeDue}</span>
              </p>
              <span onClick={() => deleteTask(tas)} className="cursor-pointer w-[30px]">
                &#128465;
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
