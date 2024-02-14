import { create } from "zustand";

interface MusicState {
  audio: HTMLAudioElement | undefined;
  setAudio: (audio: HTMLAudioElement) => void;
  duration: number;
  realtime: number;
  progress: number;
  volume: number;
  setDuration: (d: number) => void;
  setRealtime: (r: number) => void;
  setProgress: (p: number) => void;
  setVolume: (v: number) => void;
  isPlaying: boolean;
  toggleIsPlaying: () => void;
  setIsPlaying: (b: boolean) => void;
  isOpen: boolean;
  toggleIsOpen: () => void;
}

export const useAudio = create<MusicState>()((set) => ({
  audio: undefined,
  setAudio: (a: HTMLAudioElement) => set({ audio: a }),
  duration: 0,
  realtime: 0,
  progress: 0.0,
  volume: 1,
  setDuration: (d: number) => set({ duration: d }),
  setRealtime: (r: number) => set({ realtime: r }),
  setProgress: (p: number) => set({ progress: p }),
  setVolume: (v: number) => set({ volume: v }),
  isPlaying: false,
  toggleIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setIsPlaying: (b: boolean) => set({ isPlaying: b }),
  isOpen: true,
  toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));
