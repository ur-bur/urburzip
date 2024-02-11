"use client";

import { useEffect, useRef } from "react";
import { useAudio } from "./audio";

export default function InitAudio() {
  const initState = useRef(false);
  const { setDuration, setRealtime, setVolume, setProgress, setIsPlaying } =
    useAudio();

  useEffect(() => {
    if (!initState.current) {
      const audio = new Audio(
        "https://pntgrprwhxvfhrtnlhmv.supabase.co/storage/v1/object/public/musics/dream.mp3"
      );
      audio.preload = "metadata";
      if (!audio) return;

      const setAudioData = () => {
        console.log("load");
        setDuration(audio.duration);
        setRealtime(0);
      };

      const setAudioTime = () => {
        const curTime = audio.currentTime;
        setRealtime(curTime);
        setProgress(curTime);
      };

      const setAudioVolume = () => {
        setVolume(audio.volume);
      };

      const setAudioEnd = () => {
        setIsPlaying(false);
      };
      audio.addEventListener("loadeddata", setAudioData);
      audio.addEventListener("timeupdate", setAudioTime);
      audio.addEventListener("volumechange", setAudioVolume);
      audio.addEventListener("ended", setAudioEnd);

      useAudio.setState({ audio });
    }
    initState.current = true;
    // eslint-disable-next-line
  }, []);
  return <></>;
}
