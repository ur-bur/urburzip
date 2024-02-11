import { create } from "zustand";

export interface IMusic {
  id: string;
  created_at: string;
  url: string;
  title: string;
  author: string | undefined;
  lyric: string | undefined;
  index: number;
}

interface MusicState {
  musics: IMusic[];
  currentMusic: IMusic;
  setCurrentMusic: (idx: number) => void;
}

export const useMusic = create<MusicState>()((set) => ({
  musics: [],
  currentMusic: {
    index: 0,
    id: "b8596f87-27e3-4c66-9b80-c779554917b9",
    created_at: "2024-02-09 13:53:45.126+00",
    url: "https://pntgrprwhxvfhrtnlhmv.supabase.co/storage/v1/object/public/musics/dream.mp3",
    title: "꿈찾기",
    author: "URBUR dance music",
    lyric: `[00:00.00]<꿈찾기>
        [00:21.90]희미하게 지워져갔지
        [00:26.00]지난날들의 꿈, 나의 어릴적
        [00:35.41]기억 속에 묻혀 사라진 내 어린 꿈들
        [00:41.50]그 소중했던 꿈 찾아 이 길을 떠나가자
        [00:49.00]하나 둘씩 잊혀져 갔지
        [00:53.50]어린시절의 꿈, 작고 키 작은
        [01:03.00]기억 속에 묻혀 사라진 내 어린 꿈들
        [01:08.90]그 소중했던 꿈 찾아 이 길을 떠나가자
        [01:18.00]어쩌면 그 꿈들도 기억 저편 어디선가
        [01:24.30]날 찾아 길을 떠나겠지 그 조그맣던 나를
        [01:32.10]하지만 찾을 수 있어 그 작고 소중한 꿈
        [01:38.00]언제나 내 기억 속에서 살며시 숨쉬고 있어
        [01:47.50]꿈을 찾아 떠나는 설레임 속에
        [01:51.90]휘파람을 불며 떠나가보자
        [01:55.30]그 어디선가 나를 기다리고 있을
        [02:01.40]다시 만나는 날에 굳게 손잡고
        [02:05.70]다른 꿈들 함께 찾아가야지
        [02:09.00]그 어디선가 나를 기다리고 있을
        [02:47.40]어쩌면 그 꿈들도 기억 저편 어디선가
        [02:53.50]날 찾아 길을 떠나겠지 그 조그맣던 나를
        [03:01.03]하지만 찾을 수 있어 그 작고 소중한 꿈
        [03:07.15]언제나 내 기억 속에서 살며시 숨쉬고 있어
        [03:16.50]꿈을 찾아 떠나는 설레임 속에
        [03:20.90]휘파람을 불며 떠나가보자
        [03:24.45]그 어디선가 나를 기다리고 있을
        [03:30.50]다시 만나는 날에 굳게 손잡고
        [03:34.70]다른 꿈들 함께 찾아가야지
        [03:38.10]그 어디선가 나를 기다리고 있을
        [03:44.30]꿈을 찾아 떠나는 설레임 속에
        [03:48.50]휘파람을 불며 떠나가보자
        [03:51.90]그 어디선가 나를 기다리고 있을
        [03:57.90]다시 만나는 날에 굳게 손잡고
        [04:02.30]다른 꿈들 함께 찾아가야지
        [04:05.70]그 어디선가 나를 기다리고 있을`,
  },
  setCurrentMusic: (idx: number) => {
    set((state) => ({
      currentMusic: state.musics[idx],
    }));
  },
}));
