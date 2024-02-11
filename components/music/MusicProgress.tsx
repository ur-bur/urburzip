import { useAudio } from "@/lib/store/audio";
import { Slider } from "../ui/slider";

export default function MusicProgress() {
  const { audio, duration, realtime, progress } = useAudio();

  const fmtMSS = (s: number) => new Date(1000 * s).toISOString().substr(15, 4);

  const handleOnChange = (e: any) => {
    if (!audio) return;
    audio.currentTime = e[0];
  };

  return (
    <div className="mx-8 py-4">
      <div className="flex justify-between text-sm">
        <p>{fmtMSS(realtime)}</p>
        <p>{fmtMSS(duration)}</p>
      </div>
      <div className="mt-1">
        <Slider
          min={0}
          max={duration}
          step={1}
          defaultValue={[0]}
          value={[progress]}
          onValueChange={handleOnChange}
        />
      </div>
    </div>
  );
}
