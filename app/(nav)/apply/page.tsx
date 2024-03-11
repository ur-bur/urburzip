import ApplyForm from "@/components/apply/ApplyForm";

export const metadata = {
  title: "Apply"
}

export default async function ApplyPage() {
  // await new Promise((resolve) => setTimeout(resolve, 500000));
  return (
    // <div className="flex-1 flex items-center justify-center">
    //   <ApplyForm />
    // </div>
    <div className="flex-1 flex justify-center">
      현재 어리버리 모집 기간이 아닙니다. 다음 모집을 기대해주세요!
    </div>
  );
}
