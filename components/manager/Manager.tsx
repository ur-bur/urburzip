"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { supabaseClient } from "@/lib/supabase/client";
import { Instagram, Phone } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

type IManager = {
  created_at: string;
  id: string;
  instagram: string | null;
  message: string | null;
  name: string;
  phone: string | null;
  role: number;
  semester: number;
  url: string | null;
  year: number;
};

const Role = ["회장", "부회장", "총무", "와꾸대장", "홍보부장"];

export default function Manager() {
  const [managers, setManagers] = useState<IManager[]>([]);
  const [years, setYears] = useState<number[]>();

  const supabase = supabaseClient();

  useEffect(() => {
    const getManager = async () => {
      const { data, error } = await supabase
        .from("managers")
        .select("*")
        .order("year", { ascending: false })
        .order("role", { ascending: true });
      if (error) {
        toast.error(error.message);
      } else {
        console.log("data", data);
        setYears(Array.from(new Set(data.map((v) => v.year))));
        setManagers(data);
      }
    };

    getManager();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Accordion
        type="single"
        collapsible
        className="w-full"
        defaultValue="item-0"
      >
        {years?.map((y, i) => (
          <>
            <AccordionItem value={`item-${i}`}>
              <AccordionTrigger>{y}</AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-wrap gap-2">
                  {managers
                    ?.filter((v) => v.year === y)
                    .map((v, i) => (
                      <div
                        key={i}
                        className="p-4 bg-white text-black w-full md:w-60 h-84 shadow-xl flex flex-col justify-between items-center  border-t-yellow-900 border-t-4 rounded-t-sm"
                      >
                        <div className="w-4 h-4 rounded-full shadow-sm bg-gray-200 mb-4"></div>
                        <div className="mb-4">
                          {v.url === null ? (
                            <div className="bg-gray-200 rounded-full w-32 h-32"></div>
                          ) : (
                            <Image
                              src={v.url}
                              alt="image"
                              className="rounded-full aspect-square shadow-lg"
                              width={120}
                              height={120}
                              quality={100}
                            />
                          )}
                        </div>
                        <div className="text-lg">{v.name}</div>
                        <div className="text-sm text-gray-600">
                          {Role[v.role]}
                        </div>
                        <div className="text-xs h-16 flex items-center">
                          {v.message}
                        </div>
                        {v.phone && (
                          <div className="text-sm flex items-center justify-start gap-1">
                            <Phone width={15} />
                            {v.phone}
                          </div>
                        )}
                        {v.instagram && (
                          <a
                            href={`https://www.instagram.com/${v.instagram}`}
                            target="_blank"
                          >
                            <div className="text-sm flex items-center justify-start gap-1">
                              <Instagram width={15} />{v.instagram}
                            </div>
                          </a>
                        )}
                      </div>
                    ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </>
        ))}
      </Accordion>
    </>
  );
}
