"use client";

import parseLyrics from "@/lib/parseLyrics";
import { useAudio } from "@/lib/store/audio";
import { useMusic } from "@/lib/store/music";

export default function Lyrics() {
  const { currentMusic } = useMusic();
  const { audio, realtime, isOpen } = useAudio();
  const setLyric = (e: any) => {
    if (!audio) return;
    audio.currentTime = e.target.dataset.start;
  };
  return (
    <div
      className={
        isOpen
          ? "w-full lg:w-[45rem] bg-slate-100 rounded-md py-8 text-center text-lg h-56 xl:h-[calc(100vh-1rem)] overflow-y-scroll"
          : "hidden"
      }
    >
      {parseLyrics(currentMusic.lyric!).map((v, i) => (
        <p
          key={i}
          data-start={v.startsAt}
          onClick={setLyric}
          className={`${
            realtime >= v.startsAt && realtime < v.endsAt
              ? "text-black text-xl"
              : "text-gray-300"
          }`}
        >
          {v.content[0].content}
        </p>
      ))}
    </div>
  );
}
