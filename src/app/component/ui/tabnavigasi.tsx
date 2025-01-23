export default function TabNavigasi() {
  return (
    <div className="flex flex-row gap-2">
      <div className="flex flex-row gap-2">
        <button className="font-spotify w-20 text-sm bg-gray-600 p-2 rounded-full">
          Semua
        </button>
        <button className="font-spotify w-20 text-sm bg-gray-600 p-2 rounded-full">
          Musik
        </button>
        <button className="font-spotify w-20 text-sm bg-gray-600 p-2 rounded-full">
          Podcast
        </button>
      </div>
    </div>
  );
}
