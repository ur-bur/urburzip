import ApplyForm from "@/components/apply/ApplyForm";

export const metadata = {
  title: "Apply"
}

export default async function ApplyPage() {
  // await new Promise((resolve) => setTimeout(resolve, 500000));
  return (
    <div className="flex-1 flex items-center justify-center">
      {/* <ApplyForm /> */}
      <h1>현재는 지원기간이 아닙니다. 2학기 모집을 기대해주세요!</h1>
    </div>
  );
}
