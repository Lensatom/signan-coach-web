import { LineBox } from "@/components/inc"
import { SettingsBox, SettingsBoxType } from "./components"

function Reports() {
  const personalSettings:SettingsBoxType[] = [
    {
      name: "Personal Settings",
      description: "Manage your general account settings"
    },
    {
      name: "Notifications",
      description: "Set your notification preferences for email and within the platform."
    },
    {
      name: "Calendar",
      description: "Sync, manage your connected calendars, set working hours, and set default meeting locations."
    },
    {
      name: "Subscription",
      description: "Manage, update, and view your subscription plans."
    }
  ]
  const companySettings:SettingsBoxType[] = [
    {
      name: "Company",
      description: "Manage the company's general account information."
    },
    {
      name: "Market place",
      description: "Manage the company’s profile and preferences for Marketplace."
    },
    {
      name: "Invoicing and payment",
      description: "Configure invoice settings and manage payment options."
    },
    {
      name: "Packages",
      description: "Create billing approaches that define payment plan for  future enagagement"
    },
    {
      name: "Admin",
      description: "Manage your general account settings"
    }
  ]
  const engagementSettings:SettingsBoxType[] = [
    {
      name: "Engagement Templates",
      description: "Create and manage engagement roadmaps that are used accrosss your engagements"
    }
  ]

  return (
    <div className="w-full h-full p-4 md:p-8 flex flex-col gap-10">
      <section className="flex justify-between items-center mt-0 md:mt-6">
        <h2 className="text-xl lg:text-2xl font-bold">Reports</h2>
      </section>
      <LineBox>
        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h4 className="text font-semibold">Personal</h4>
            <div className="grid grid-cols-3 gap-4">
              {personalSettings.map((settings, index) => <SettingsBox key={index} {...settings} />)}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text font-semibold">Company Settings</h4>
            <div className="grid grid-cols-3 gap-4">
              {companySettings.map((settings, index) => <SettingsBox key={index} {...settings} />)}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text font-semibold">Engagement Settings</h4>
            <div className="grid grid-cols-3 gap-4">
              {engagementSettings.map((settings, index) => <SettingsBox key={index} {...settings} />)}
            </div>
          </div>
        </section>
      </LineBox>
    </div>
  )
}

export default Reports