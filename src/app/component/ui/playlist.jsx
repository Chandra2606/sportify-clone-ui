import Card from "@/app/component/ui/card";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

export default function Playlist() {
  const dummy = [
    {
      image: "/image/viera.jpg",
      title: "Vierra,D'Masiv,Dewa,dan lainnya",
    },
    {
      image: "/image/02.jpg",
      title: "Bruno Mars, Lady Gaga, Rose dan lainnya",
    },
    {
      image: "/image/03.jpg",
      title: "Ariana Grande, Justin Bieber, dan lainnya",
    },
    {
      image: "/image/04.jpg",
      title: "Ed Sheeran, Dua Lipa, dan lainnya",
    },
    {
      image: "/image/04.jpg",
      title: "Coldplay, Adele, dan lainnya",
    },
  ];
  return (
    <>
      <div className="flex flex-row justify-between">
        <h1 className="font-spotify text-2xl">Dibuat Untuk anda</h1>
        <h1 className="font-spotify text-sm">Tampilkan Semua</h1>
      </div>
      <div className="w-full group/swiper">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={4}
          spaceBetween={20}
          className="mySwiper relative !pl-0"
        >
          <div className="swiper-button-prev after:content-[''] absolute left-0 z-10 bg-black/70 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover/swiper:opacity-100 transition-opacity duration-300">
            <ChevronLeft className="w-6 h-6 text-white" />
          </div>

          <div className="swiper-button-next after:content-[''] absolute right-0 z-10 bg-black/70 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover/swiper:opacity-100 transition-opacity duration-300">
            <ChevronRight className="w-6 h-6 text-white" />
          </div>

          {dummy.map((item, index) => (
            <SwiperSlide key={index}>
              <Card className="w-[12rem] h-full hover:bg-[rgb(31,31,31)] p-4 group relative transition-all duration-200 cursor-pointer">
                <div className="relative">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full aspect-square object-cover rounded-md"
                    />
                    <button
                      className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center 
      opacity-0 group-hover:opacity-100 group-hover:bottom-4 translate-y-2 group-hover:translate-y-0
      transition-all duration-300 hover:scale-105 shadow-xl"
                    >
                      <Play className="w-6 h-6 text-black fill-black" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col text-gray-300 mt-4">
                  <span className="font-spotifyreguler text-sm">
                    {item.title}
                  </span>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-row justify-between">
        <h1 className="font-spotify text-2xl">Dibuat Untuk anda</h1>
        <h1 className="font-spotify text-sm">Tampilkan Semua</h1>
      </div>
      <div className="w-full group/swiper">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={4}
          spaceBetween={20}
          className="mySwiper relative !pl-0"
        >
          <div className="swiper-button-prev after:content-[''] absolute left-0 z-10 bg-black/70 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover/swiper:opacity-100 transition-opacity duration-300">
            <ChevronLeft className="w-6 h-6 text-white" />
          </div>

          <div className="swiper-button-next after:content-[''] absolute right-0 z-10 bg-black/70 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover/swiper:opacity-100 transition-opacity duration-300">
            <ChevronRight className="w-6 h-6 text-white" />
          </div>

          {dummy.map((item, index) => (
            <SwiperSlide key={index}>
              <Card className="w-[12rem] h-full hover:bg-[rgb(31,31,31)] p-4 group relative transition-all duration-200 cursor-pointer">
                <div className="relative">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt=""
                      className="w-full aspect-square object-cover rounded-md"
                    />
                    <button
                      className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center 
      opacity-0 group-hover:opacity-100 group-hover:bottom-4 translate-y-2 group-hover:translate-y-0
      transition-all duration-300 hover:scale-105 shadow-xl"
                    >
                      <Play className="w-6 h-6 text-black fill-black" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col text-gray-300 mt-4">
                  <span className="font-spotifyreguler text-sm">
                    {item.title}
                  </span>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
