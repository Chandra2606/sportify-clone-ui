import { Search, ArchiveRestore } from "lucide-react";

export default function Searchbar() {
  return (
    <div className="flex-grow max-w-96">
      <div className="flex items-center bg-[#121212] rounded-full px-4 py-2">
        <Search className="w-5 h-5 text-gray-400 mr-3" />
        <input
          type="text"
          placeholder="Apa yang ingin kamu putar?"
          className="bg-transparent w-full focus:outline-none text-white"
        />
        <ArchiveRestore className="w-5 h-5 text-gray-400 ml-3" />
      </div>
    </div>
  );
}
