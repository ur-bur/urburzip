import MusicPlayer from "@/components/music/MusicPlayer";
import { PlayCircle } from "lucide-react";

export const metadata = {
  title: "Music",
};

export default function MusicPage() {
  const musics = [
    {
      name: "꿈찾기",
      url: "",
    },
    {
      name: "새물",
      url: "",
    },
    {
      name: "우린 하나요",
      url: "",
    },
    {
      name: "우리하나되어",
      url: "",
    },
    {
      name: "날자2",
      url: "",
    },
    {
      name: "바로지금이에요",
      url: "",
    },
    {
      name: "날개",
      url: "",
    },
  ];
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 mb-4 w-full md:w-[45rem] flex-wrap">
        {musics.map((v, i) => (
          <div key={i} className="p-4 shadow-md flex justify-between border-x-2 border-yellow-900 rounded-sm w-full">
            <p>{v.name}</p>
            <PlayCircle />
          </div>
        ))}
      </div>
      <MusicPlayer />
    </div>
  );
}

{
  /* // <div classNameNameName="flex justify-between">
    //   <div classNameNameName="flex flex-col gap-2 w-full">
    //     {musics.map((v, i) => (
    //       <div classNameNameName="flex gap-2" key={i}>
    //         <Hexagon width={32} height={32} />{" "}
    //         <span classNameNameName="text-2xl">{v.name}</span>
    //       </div>
    //     ))}
    //   </div>
    //   <div classNameNameName="bg-yellow-500 w-full h-full">
    //     d
    //   </div>
    // </div> */
}
