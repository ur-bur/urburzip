"use client";

import { supabaseClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export default function M_UserPage() {
  const supabase = supabaseClient();
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const getUserData = async () => {
      
      let { data: users, error } = await supabase
      .from('users')
      .select('*');
      
      setUsers(users as any[]);
    };
    getUserData();
    //eslint-disable-next-line
  }, []);

  
  
  return (
    <div>
      <div className="flex flex-wrap gap-4">
        {users.map((v) => (
          <div
            key={v.id}
            className="p-6 w-full md:w-60 shadow-md flex flex-col gap-4"
          >
            <div className="flex md:flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold">닉네임</span>
                <span>{v.display_name}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold">이메일</span>
                <span>{v.email}</span>
              </div>
            </div>
            
          </div>
        )) }
      </div>
    </div>
  );
}
