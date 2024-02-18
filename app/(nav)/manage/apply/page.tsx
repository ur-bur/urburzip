"use client";

import { ApplyData } from "@/components/apply/ApplyForm";
import { supabaseClient } from "@/lib/supabase/client";
import { getDateWithTime } from "@/lib/utils";
import { GripVertical } from "lucide-react";
import { useEffect, useState } from "react";

export default function M_ApplyPage() {
  const supabase = supabaseClient();
  const [applies, setApplies] = useState<ApplyData[]>([]);

  useEffect(() => {
    const getApplyData = async () => {
      const { data } = await supabase.from("apply").select("*").order("created_at");
      setApplies(data as ApplyData[]);
    };
    getApplyData();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const channel = supabase
      .channel("apply")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "apply" },
        (payload) => {
          setApplies((prev) => [...prev, payload.new] as ApplyData[]);
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {applies.map((v) => (
          <div
            key={v.id}
            className="p-6 w-full md:w-60 shadow-md flex flex-col gap-4"
          >
            <div className="flex md:flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold">이름</span>
                <span>{v.name}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold">학번</span>
                <span>{v.sid}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold">연락처</span>
              <span>{v.phone}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold">자기소개</span>
              <span className="block h-20 bg-gray-100 rounded-sm p-2 text-sm overflow-y-scroll break-all">{v.introduce}</span>
            </div>
            <div className="text-gray-400 text-xs text-center">
              {getDateWithTime(v.created_at)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
