import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Instagram, Phone } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Manager",
};

export default function ManagerPage() {
  const data = [
    {
      name: "장채연",
      img: "https://pntgrprwhxvfhrtnlhmv.supabase.co/storage/v1/object/public/images/2024/cyjang.jpeg",
      role: "회장",
      message: "어리버리 공식 귀요미입니당 ~.~",
      phone: "010-4047-6601",
      instagram: "chaeyeon501",
    },
    {
      name: "김우리",
      img: "",
      role: "부회장",
      message: "어리버리화이팅",
      phone: "010-2918-9297",
      instagram: "woor____i",
    },
    {
      name: "박규현",
      img: "",
      role: "총무",
      message: "어리버리화이팅",
      phone: "010-5773-1782",
      instagram: "p_gyuhyeon",
    },
    {
      name: "한노아",
      img: "https://pntgrprwhxvfhrtnlhmv.supabase.co/storage/v1/object/public/images/2024/nahan.jpeg",
      role: "와꾸대장",
      message: "어리버리화이팅",
      phone: "010-8891-7395",
      instagram: "noahhan03",
    },
    {
      name: "김영준",
      img: "https://pntgrprwhxvfhrtnlhmv.supabase.co/storage/v1/object/public/images/2024/yjkim.jpeg",
      role: "홍보부장",
      message: "어리버리화이팅",
      phone: "010-6609-4649",
      instagram: "angjun_kim",
    },
  ];
  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>2024</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-wrap gap-2">
              {data.map((v, i) => (
                <div
                  key={i}
                  className="p-4 bg-white text-black w-full md:w-60 h-84 shadow-xl flex flex-col justify-between items-center  border-t-yellow-900 border-t-4 rounded-t-sm"
                >
                  <div className="w-4 h-4 rounded-full shadow-sm bg-gray-200 mb-4"></div>
                  <div className="mb-4">
                    {v.img === "" ? (
                      <div className="bg-gray-200 rounded-full w-32 h-32"></div>
                    ) : (
                      <Image
                        src={v.img}
                        alt="image"
                        className="rounded-full aspect-square shadow-lg"
                        width={120}
                        height={120}
                      />
                    )}
                  </div>
                  <div className="text-lg">{v.name}</div>
                  <div className="text-sm text-gray-600">{v.role}</div>
                  <div className="text-xs h-16 flex items-center">
                    {v.message}
                  </div>
                  <div className="text-sm flex items-center justify-start gap-1">
                    <Phone width={15} />
                    {v.phone}
                  </div>
                  <a
                    href={`https://www.instagram.com/${v.instagram}`}
                    target="_blank"
                  >
                    <div className="text-sm flex items-center justify-start gap-1">
                      <Instagram width={15} /> @{v.instagram}
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>2023</AccordionTrigger>
          <AccordionContent>coming soon...</AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
