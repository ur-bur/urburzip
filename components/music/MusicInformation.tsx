"use client";

import { useMusic } from "@/lib/store/music";

export default function MusicInformation() {
  const { currentMusic } = useMusic();

  return (
    <div className="flex justify-between">
      <div>
        <h3 className="text-2xl text-gray-800 font-medium">
          {currentMusic?.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{currentMusic?.author}</p>
      </div>
      <div className="text-red-500">
        <svg
          className="w-6 h-6"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
        </svg>
      </div>
    </div>
  );
}
