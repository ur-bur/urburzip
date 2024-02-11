import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";

export default function About() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-2xl font-bold ">어리버리란?</h1>
      <div>
        <p className="text-gray-400">
          아직 사이트가 완성되지 않았습니다. 아래 글을 확인해주세요!
        </p>
      </div>
      <div className="p-4 bg-slate-100 rounded-xl">
        <p>
          너가🫵🏻 자기야👩🏻‍❤️‍👨🏻 나 🌟어리버리🌟 할게 했잖아⁉️ 나 홍보글⬇️⬇️ 이딴
          거💢🤬 안 올렸어💔🙄 [2024-1 어리버리 모집 공지]
        </p>
        <a href="https://cafe.naver.com/hanyangcse/1834" target="_blank">
          <Button className="mt-4">더 보러가기</Button>
        </a>
      </div>
      {/* 
      <div>
        <p className="text-xl"> {"| MT"}</p>
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div> */}
      <div>
        <p>어리버리 24-1 모집중입니다! 많이 지원해주세요</p>

        <p>📣모집 공지📣</p>

        <p>📌회합일 : 매주 화요일 18:00 (이후 뒤풀이 진행)</p>
        <p>📌모집 기간 : 2/10 ~ 3/5</p>
        <p>📌모집 인원 : 30명 내외</p>

        <p>
          📌지원 링크 :{" "}
          <a href="https://urbur.icu/" target="_blank">
            https://urbur.icu/
          </a>
        </p>
        <Link href="/apply">
          <Button>지원하기</Button>
        </Link>
        <p>☎️문의 :</p>
        <p>회장 장채연 (010-4047-6601)</p>
        <p>부회장 김우리 (010-2918-9297)</p>
      </div>
    </div>
  );
}
