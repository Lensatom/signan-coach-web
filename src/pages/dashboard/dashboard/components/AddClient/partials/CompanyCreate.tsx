import { Input } from "@/components/base";

export function CompanyCreate() {
  return (
    <div className="flex flex-col gap-2">
      <Input variant="solid" placeholder="Enter your company's name" />
      <Input variant="solid" placeholder="Enter your company's email" />
    </div>
  )
}