import { LineBox } from "@/components/inc"
import { Outlet } from "react-router-dom"
import { EngagementDetailsSidebar } from "../components"

function LayoutEngagementDetails() {
  return (
    <div className="p-6">
      <LineBox className="flex flex-col items-center !gap-4">
        <h3 className="text-sm font-inter">Engagement Status: <span className="bg-primary text-white py-1 px-3 rounded-md">Active</span></h3>
        <div className="h-14 w-full rounded-lg bg-primary"></div>
        <div className="w-full flex mt-2 gap-6">
          <EngagementDetailsSidebar />
          <section className="w-[82%] border p-4 rounded-lg bg-grey-light mt-2">
            <Outlet />
          </section>
        </div>
      </LineBox>
    </div>
  )
}

export default LayoutEngagementDetails