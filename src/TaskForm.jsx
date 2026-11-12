export default function TaskForm({ onSubmit, isActive }) {
  return (
    <>
      {isActive === 0 && (
        <form onSubmit={onSubmit} className="flex flex-col p-5  min-h-[300px] gap-5 w-full">
          <div className="form-group">
            <label htmlFor="task" className="font-bold text-[#263B32]">
              My Task
            </label>
            <textarea
              name="task"
              id="task"
              rows={1}
              className="h-10 w-full resize-none rounded-lg bg-[#DCE8DF]"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="date" className="font-bold text-[#263B32]">
              Enter Due Date
            </label>
            <input type="date" name="date" id="date" className="bg-[#DCE8DF] rounded-lg" />
          </div>

          <div className="form-group">
            <label htmlFor="time" className="font-bold text-[#263B32]">
              Enter Time Due By
            </label>
            <input type="time" name="time" className="bg-[#DCE8DF] rounded-lg" />
          </div>

          <button
            type="submit"
            className="w-full bg-[#407B65] border p-2 w-[125px] text-center cursor-pointer  rounded-lg self-center text-white"
          >
            + Add Task
          </button>
        </form>
      )}
    </>
  );
}
