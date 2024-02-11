"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { supabaseClient } from "@/lib/supabase/client";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import { redirect, useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

export const metadata = {
  title: "Apply",
};

const formSchema = z.object({
  username: z.string(),
  sid: z.string().min(10, {
    message: "학번은 10자리수 입니다.",
  }),
  phone: z.string(),
  introduce: z.string(),
});

export type ApplyData = {
  allow: boolean;
  created_at: string;
  email: string;
  id: string;
  introduce: string;
  name: string;
  phone: string;
  semester: number;
  sid: number;
  year: number;
};

export default function ApplyForm() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const supabase = supabaseClient();
    const { error } = await supabase.from("apply").insert({
      id: uuidv4(),
      created_at: new Date().toISOString(),
      allow: false,
      email: "sjmskm@gmail.com",
      introduce: values.introduce,
      phone: values.phone,
      sid: Number(values.sid),
      name: values.username,
      year: 2024,
      semester: 1,
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("지원에 성공했습니다. 어-리버리화이팅!");
      router.push("/");
    }
  }
  return (
    <div className="w-96 h-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input placeholder="이름을 입력해주세요" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sid"
            render={({ field }) => (
              <FormItem>
                <FormLabel>학번</FormLabel>
                <FormControl>
                  <Input placeholder="학번을 입력해주세요" {...field} />
                </FormControl>
                <FormDescription>
                  학번이 나오지 않았다면 24와 같이 입력해주세요.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>전화번호</FormLabel>
                <FormControl>
                  <Input placeholder="전화번호를 입력해주세요" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="introduce"
            render={({ field }) => (
              <FormItem>
                <FormLabel>자기소개</FormLabel>
                <FormControl>
                  <Input placeholder="매!력!발!산!" {...field} />
                </FormControl>
                <FormDescription>
                  간략한 자기소개나 각오, MBTI와 같이 편하게 작성해주세요!
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
