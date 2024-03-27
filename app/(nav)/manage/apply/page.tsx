"use client";

import { ApplyData } from "@/components/apply/ApplyForm";
import { Button } from "@/components/ui/button";
import { supabaseClient } from "@/lib/supabase/client";
import { getDateWithTime } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function M_ApplyPage() {
  const supabase = supabaseClient();
  const [applies, setApplies] = useState<ApplyData[]>([]);

  async function onAllow(v:ApplyData) {
    await supabase
    .from('apply')
    .update({ allow: true })
    .eq('id', v.id)
    .select();
    
    
    await supabase
    .from('members')
    .insert({
        id:v.id,
        email: "",
        semester: 1,
        phone: v.phone,
        paid: false,
        role: 0,
        sid: v.sid,
        year: 1,
        name: v.name
      })
    .select();
    
    document.getElementsByClassName(v.sid.toString())
  }

  useEffect(() => {
    const getApplyData = async () => {
      const { data } = await supabase.from("apply").select("*").order("created_at", {ascending : false});
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
  useEffect(() => {
    const channel = supabase
      .channel("apply")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "apply" },
        
        () => {
          setApplies((prev) => [...prev] as ApplyData[]);
        }
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
    // eslint-disable-next-line
  }, []);
  let greenBtn = <div className="bg-green-500 hover:bg-green-700 text-white font-thin py-2 px-4 rounded-full">수락됨</div>;
  let acceptBtn = (v:any)=><Button className={v.sid.toString()} onClick={async () => {await onAllow(v);}}>수락하기</Button>
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
            <div className="flex justify-center">
            {v.allow?greenBtn:acceptBtn(v)}
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
