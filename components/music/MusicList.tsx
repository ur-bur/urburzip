"use client";

import { useAudio } from "@/lib/store/audio";
import { useMusic } from "@/lib/store/music";
import { PlayCircle } from "lucide-react";

export default function MusicList() {
  const { musics, setCurrentMusic } = useMusic();

  const { audio, setIsPlaying } = useAudio();

  return (
    <div className="flex gap-2 mb-4 w-full md:w-[45rem] flex-wrap">
      {musics?.map((v, i) => (
        <div
          key={i}
          className="p-4 shadow-md flex justify-between border-x-2 border-yellow-900 rounded-sm w-full"
        >
          <p>{v.title}</p>
          <PlayCircle
            className="hover:cursor-pointer"
            onClick={() => {
              if (audio === undefined) return;
              setCurrentMusic(v.index);
              audio.src = musics[v.index].url;
              setIsPlaying(false);
            }}
          />
        </div>
      ))}
    </div>
  );
}
