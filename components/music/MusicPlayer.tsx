"use client";

import Image from "next/image";
import MusicProgress from "./MusicProgress";
import MusicControl from "./MusicControl";
import MusicInformation from "./MusicInformation";
import InitAudio from "@/lib/store/InitAudio";

export default function MusicPlayer() {
  return (
    <>
      <div className="w-full md:w-[45rem] flex flex-col items-center">
        <div className="w-full h-[0.3rem] bg-yellow-900 rounded-t-xl"></div>
        <div className="flex items-center justify-center h-full rounded-xl bg-yellow-100 rounded-b-xl w-full">
          <div className="bg-white shadow-lg rounded-lg w-[45rem]">
            <div className="flex flex-col md:flex-row">
              <div className="w-full relative h-[240px] md:w-[90%]">
                <Image
                  className="w-full rounded block shadow-lg"
                  src="/music-img.jpg"
                  alt="Album Pic"
                  fill
                />
              </div>
              <div className="w-full p-8">
                <MusicInformation />
                <MusicControl />
              </div>
            </div>
            <MusicProgress />
          </div>
        </div>
      </div>
      <InitAudio />
    </>
  );
}
