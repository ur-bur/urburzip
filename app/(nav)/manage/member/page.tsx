"use client";

import { supabaseClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export default function M_MemberPage() {
  const supabase = supabaseClient();
  const [members, setMembers] = useState<any[]>([]);

  useEffect(() => {
    const getMemberData = async () => {
      
      let { data: members, error } = await supabase
      .from('members')
      .select('*');
      
      setMembers(members as any[]);
    };
    getMemberData();
    //eslint-disable-next-line
  }, []);

  
  
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {members.map((v) => (
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
              <span className="text-xs font-semibold">학기 수</span>
              <span>{v.semester}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold">납부 여부</span>
              <span>{v.paid?"납부":"미납"}</span>
            </div>
            <div className="flex flex-row justify-center">
              <div className="bg-green-500 hover:bg-green-700 text-white font-thin py-2 px-4 mx-2 rounded-full">납부</div>
              <div className="bg-red-500 hover:bg-red-700 text-white font-thin py-2 px-4 mx-2 rounded-full">미납</div>
            </div>
          </div>
        )) }
      </div>
    </div>
  );
}
