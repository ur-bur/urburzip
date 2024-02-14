import Lyrics from "@/components/music/Lyrics";
import MusicList from "@/components/music/MusicList";
import MusicPlayer from "@/components/music/MusicPlayer";
import InitAudio from "@/lib/store/InitAudio";
import InitMusic from "@/lib/store/InitMusic";
import { IMusic } from "@/lib/store/music";
import { supabaseServer } from "@/lib/supabase/server";

export const metadata = {
  title: "Music",
};

export default async function MusicPage() {
  const supabase = supabaseServer();
  const { data } = await supabase
    .from("musics")
    .select("*")
    .order("index", { ascending: true });

  return (
    <>
      <div className="w-full flex xl:flex-row gap-4 flex-col justify-center items-center">
        <div className="w-full lg:w-[45rem] flex flex-col items-center">
          <MusicList />
          <MusicPlayer />
        </div>
          <Lyrics />
      </div>
      <InitMusic musics={data as IMusic[]} />
    </>
  );
}
