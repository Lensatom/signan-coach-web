import { Icon, LineBox } from "@/components/inc"
import ReportCategory, { ReportCategoryType } from "./components/ReportCategory"

function Reports() {
  const customReports:ReportCategoryType[] = [
    // {
    //   name: "Engagement Report",
    //   icon: "report_briefcase"
    // }
  ]
  const standardReports:ReportCategoryType[] = [
    {
      name: "Engagement Report",
      icon: "report_star"
    },
    {
      name: "Engagement Report",
      icon: "report_bars_box"
    },
    {
      name: "Engagement Report",
      icon: "report_briefcase"
    },
    {
      name: "Engagement Report",
      icon: "report_check_circle"
    },
    {
      name: "Engagement Report",
      icon: "report_bars_box"
    },
    {
      name: "Engagement Report",
      icon: "report_briefcase"
    },
    {
      name: "Engagement Report",
      icon: "report_check_circle"
    },
  ]

  return (
    <div className="w-full h-full p-4 md:p-8 flex flex-col gap-10">
      <section className="flex justify-between items-center mt-0 md:mt-6">
        <h2 className="text-xl lg:text-2xl font-bold">Reports</h2>
      </section>
      <LineBox>
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h4 className="text-sm text-[#3A3A3AB2] font-medium">Custom Reports</h4>
            <div className="grid grid-cols-4 gap-6">
              {customReports.map(report => <ReportCategory {...report} />)}
              <div className="flex flex-col items-center border-[#989898CC] border border-dashed rounded-xl p-8 gap-4 cursor-pointer">
                <Icon name="report_bars" size={80} />
                <p className="text-sm text-primary">Create New +</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-sm text-[#3A3A3AB2] font-medium">Standard Reports</h4>
            <div className="grid grid-cols-4 gap-10">
              {standardReports.map(report => <ReportCategory {...report} />)}
            </div>
          </div>
        </section>
      </LineBox>
    </div>
  )
}

export default Reports