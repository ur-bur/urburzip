import { supabaseServer } from "@/lib/supabase/server";
import { AspectRatio } from "../ui/aspect-ratio";

export default async function DanceVideos() {
  const supabase = supabaseServer();
  const { data } = await supabase.from("videos").select("*");
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {data?.map((v) => (
          <div key={v.id} className="w-full flex flex-col gap-2">
            <div className="text-2xl font-bold">{v.title}</div>
            <iframe
              src={`https://youtube.com/embed/${v.key}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={v.title}
              className="aspect-video w-full rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
