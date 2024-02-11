import { supabaseServer } from "@/lib/supabase/server";
import { AspectRatio } from "../ui/aspect-ratio";

export default async function DanceVideos() {
  const supabase = supabaseServer();
  const { data } = await supabase.from("videos").select("*");
  return (
    <div>
      <div>
        {data?.map((v) => (
          <div key={v.id}>
            <div className="text-xl font-bold">{v.title}</div>
            <iframe
              src={`https://youtube.com/embed/${v.key}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={v.title}
              className="aspect-video"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
