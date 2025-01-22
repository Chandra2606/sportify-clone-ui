import Navbar from "@/app/component/navbar";
import Card from "@/app/component/ui/card";
import { LibraryBig, Play, Plus, ArrowRight } from "lucide-react";
import { ButtonWhite } from "./component/ui/button";
export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div>
        <Card className="w-96 ml-4 mt-4 row-span-2">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <button className="flex items-center group transition-all duration-300 ease-in-out">
                <div className="rounded-full p-2">
                  <LibraryBig className="w-5 h-5 text-gray-400 group-hover:text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-white font-spotify text-md">
                  Koleksi Kamu
                </span>
              </button>
              <div className="flex items-center gap-2">
                <button className="items-center group transition-all duration-300 ease-in-out">
                  <div className="rounded-full p-2 cursor-pointer hover:bg-gray-900 transition-all duration-300 ease-in-out">
                    <Plus className="w-5 h-5 text-gray-400" />
                  </div>
                </button>
                <button className="items-center group transition-all duration-300 ease-in-out">
                  <div className="rounded-full p-2 cursor-pointer hover:bg-gray-900 transition-all duration-300 ease-in-out">
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </button>
              </div>
            </div>
            <Card className="w-full h-full bg-[rgb(31,31,31)]">
              <div className="flex items-center gap-2">
                <div className="rounded-full p-1">
                  <span className="font-spotify text-sm">
                    Buat playlist pertamamu
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full p-1">
                  <span className="font-spotifyreguler">
                    Cara mudah, kami akan membantumu
                  </span>
                </div>
              </div>
              <ButtonWhite className="w-32 h-9 mt-5">
                <span className="font-spotify">Buat playlist</span>
              </ButtonWhite>
            </Card>
            <Card className="w-full h-full bg-[rgb(31,31,31)]">
              <div className="flex items-center gap-2">
                <div className="rounded-full p-1">
                  <span className="font-spotify text-sm">
                    Ayo cari beberapa podcast untuk diikuti
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="rounded-full p-1">
                  <span className="font-spotifyreguler">
                    Kami akan terus mengabari tentang episode baru
                  </span>
                </div>
              </div>
              <ButtonWhite className="w-32 h-9 mt-5">
                <span className="font-spotify">Jelajahi podcast</span>
              </ButtonWhite>
            </Card>
          </div>
        </Card>
      </div>
    </>
  );
}
