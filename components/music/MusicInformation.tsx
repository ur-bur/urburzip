"use client";

import { useAudio } from "@/lib/store/audio";
import { useMusic } from "@/lib/store/music";
import { BookAudio } from "lucide-react";

export default function MusicInformation() {
  const { currentMusic } = useMusic();
  const {isOpen, toggleIsOpen} = useAudio();
  return (
    <div className="flex justify-between">
      <div>
        <h3 className="text-2xl text-gray-800 font-medium">
          {currentMusic?.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{currentMusic?.author}</p>
      </div>
      <div className={isOpen ? "text-black" : "text-gray-400"} onClick={toggleIsOpen}>
        <BookAudio />
      </div>
    </div>
  );
}
