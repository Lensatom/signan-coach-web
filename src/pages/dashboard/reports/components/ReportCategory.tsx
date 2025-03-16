import { IconNameType } from "@/components/inc/Icon"
import { Icon } from "@/components/inc"

export interface ReportCategoryType {
  name: string,
  icon: IconNameType
}

function ReportCategory({
  name,
  icon
}: ReportCategoryType) {
  return (
    <div className="flex flex-col items-center border-[#989898CC] text-[#989898] font-medium border rounded-xl p-8 gap-4 cursor-pointer">
      <div className="flex w-full justify-between items-center px-2">
        <p className="text-sm">{name}</p>
        <Icon name="more_grey" padding={0} size={4} />
      </div>
      <Icon name={icon} size={80} />
    </div>
  )
}

export default ReportCategory