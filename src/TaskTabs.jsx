export default function TaskTabs({ title, onShow }) {
  return (
    <div>
      <h2
        onClick={onShow}
        className="border p-2 w-[250px] text-center cursor-pointer rounded-lg font-medium bg-[#407B65] text-white"
      >
        {title}
      </h2>
    </div>
  );
}
