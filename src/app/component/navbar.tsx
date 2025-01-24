"use client";
import { useState } from "react";
import { House, ArrowDownToLine, Menu, Bell, User } from "lucide-react";
import Searchbar from "@/app/component/ui/searchbar";
import { ButtonWhite, ButtonBlack } from "@/app/component/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className=" flex items-center h-14 px-2 sm:px-4 mt-3 relative">
        <div className="flex items-center justify-center w-12 sm:w-16">
          <Image
            src="/image/logo.png"
            alt="logo"
            width={32}
            height={32}
            className="w-6 h-6 sm:w-8 sm:h-8"
            priority
          />
        </div>

        <div className="hidden sm:flex items-center justify-center ml-2 sm:ml-4">
          <div className="rounded-full p-2 sm:p-3 bg-gray-700 hover:bg-gray-600 cursor-pointer">
            <House className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
          </div>
        </div>

        <div className="flex-1 ml-2 sm:ml-6">
          <Searchbar />
        </div>

        <div className="hidden md:flex items-center gap-2 ml-4">
          <ButtonWhite className="w-40">Jelajahi Premium</ButtonWhite>
          <ButtonBlack className="w-44">
            <div className="rounded-full p-2 cursor-pointer">
              <ArrowDownToLine className="w-5 h-5 text-white-400" />
            </div>
            Pasang Aplikasi
          </ButtonBlack>
          <ButtonBlack className="w-14">
            <div className="rounded-full p-2 cursor-pointer">
              <Bell className="w-5 h-5 text-gray-400" />
            </div>
          </ButtonBlack>
          <div className="rounded-full p-2 cursor-pointer">
            <User className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="md:hidden ml-2">
          <div
            className="rounded-full p-2 bg-gray-700 hover:bg-gray-600 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden fixed top-20 right-2 bg-[#282828] rounded-lg shadow-lg p-4 w-[90%] max-w-[300px] z-50">
          <div className="flex flex-col gap-4">
            <ButtonWhite className="w-full">Jelajahi Premium</ButtonWhite>

            <ButtonBlack className="w-full">
              <ArrowDownToLine className="w-5 h-5 text-white-400 mr-2" />
              Pasang Aplikasi
            </ButtonBlack>

            <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
              <Bell className="w-5 h-5 text-gray-400" />
              <span className="text-white">Notifikasi</span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 rounded-lg cursor-pointer">
              <User className="w-5 h-5 text-gray-400" />
              <span className="text-white">Profil</span>
            </div>
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
