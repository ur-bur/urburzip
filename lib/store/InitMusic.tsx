"use client";
import { useEffect, useRef } from "react";
import { IMusic, useMusic } from "./music";

export default function InitMusic({
  musics,
}: {
  musics: IMusic[] | undefined;
}) {
  const initState = useRef(false);

  useEffect(() => {
    if (!initState.current) {
      useMusic.setState({ musics });
    }
    initState.current = true;
    // eslint-disable-next-line
  }, []);
  return <></>;
}
