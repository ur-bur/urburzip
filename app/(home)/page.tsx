import InitUser from "@/lib/store/InitUser";
import { supabaseServer } from "@/lib/supabase/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const supabase = supabaseServer();
  const { data } = await supabase.auth.getSession();
  return (
    <>
      <main>
        <div className="relative">
          <div>
            <Image src="/main.png" alt="main_image" width={1440} height={523} className="w-full" quality={100}/>
          </div>

          <div className="absolute text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="md:hidden flex flex-col items-center">
              <p className="text-xl">우주최강 율동패</p>

              <p className="text-5xl text-yellow-400 opacity-70">URBUR</p>
            </div>

            <div className="md:flex flex-col items-center hidden">
              <p className="text-xl md:text-4xl">우주최강 율동패</p>
              <p className="text-xl md:text-[10rem] leading-none text-yellow-400 opacity-70">
                URBUR
              </p>
              <Link href={"/apply"} className="md:mt-20">
                <button className="text-center bg-transparent border-4 border-white hover:bg-white hover:cursor-pointer hover:text-black text-xl md:text-3xl md:py-4 md:px-10 text-white">
                  지원하기
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="py-4 px-4 md:px-24">
          <p className="text-lg font-bold">홍보글</p>

          <div className="p-2 bg-slate-100 rounded-md flex flex-col md:flex-row justify-between items-center">
            <span>
              너가🫵🏻 자기야👩🏻‍❤️‍👨🏻 나 🌟어리버리🌟 할게 했잖아⁉️ 나 홍보글⬇️⬇️ 이딴
              거💢🤬 안 올렸어💔🙄 [2024-1 어리버리 모집 공지]
            </span>
            <a href="https://cafe.naver.com/hanyangcse/1834" target="_blank">
              <Button>더 보러가기</Button>
            </a>
          </div>
        </div>

        <div className="py-4 px-4 md:px-24">
          <p className="text-lg font-bold">공지사항</p>
          <div className="p-2 bg-slate-100 rounded-md text-center">
            <p>어리버리 24-2 모집중입니다! 많이 지원해주세요</p>
            <br />
            <p>📣모집 공지📣</p>

            <p>❗회합 일시: 매주 화요일 18:00</p>
            <p>❗2학기 첫 회합: 9/3</p>
            <p>❗모집 기간: 8/1 ~ 8/20</p>
            <p>❗️모집 대상: 컴퓨터소프트웨어학부 재, 휴학생</p>

            <p>
              📌지원 링크 :{" "}
              <a href="https://urbur.icu/apply" target="_blank">
                https://urbur.icu/apply
              </a>
            </p>

            <br />
            <p>☎️문의 :</p>
            <p>회장 장채연 (010-4047-6601)</p>
            <p>부회장 김우리 (010-2918-9297)</p>
          </div>
        </div> */}

        <div className="md:hidden px-4">
          <Link href="/apply">
            <Button className="w-full">지원하기</Button>
          </Link>
        </div>
      </main>
      <InitUser user={data.session?.user} />
    </>
  );
}
