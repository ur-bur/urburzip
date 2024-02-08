import ApplyForm from "@/components/apply/ApplyForm";

export const metadata = {
  title: "Apply"
}

export default function ApplyPage() {
  return (
    <div className="flex justify-center items-center w-full">
      <ApplyForm />
    </div>
  );
}
