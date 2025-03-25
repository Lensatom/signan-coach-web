import { Input, SelectIndicator } from "@/components/base"
import { Icon } from "@/components/inc"
import { useContext, useState } from "react"
import { CreateEngagementContext } from "../context"

export const EngagementSetup = () => {
  const { data, setData }:any = useContext(CreateEngagementContext)
  const {
    engagementSetup,
  } = data

  const changeSetup = (setup: "existing" | "new") => {
    setData((prev:any) => (
      {
        ...prev,
        engagementSetup: setup
      }
    ))
  }

  return (
    <div className="mb-24">
      <div onClick={() => changeSetup("existing")} className="flex items-center space-x-2 p-4 hover:bg-input/80 rounded-lg cursor-pointer">
        <SelectIndicator active={engagementSetup === "existing"} />
        <p className="text-xs">Use an exisiting Engagement template</p>
      </div>
      <div onClick={() => changeSetup("new")} className="flex items-center space-x-2 p-4 hover:bg-input/80 rounded-lg cursor-pointer">
        <SelectIndicator active={engagementSetup === "new"} />
        <p className="text-xs">Create an engagement based on the settings below</p>
      </div>

      <div className="mt-4 flex flex-col space-y-4">
        {engagementSetup === "existing" ? (
          <ExistingTemplate />
        ) : engagementSetup === "new" ? (
          <NewTemplate />
        ) : <></>}
      </div>
    </div>
  )
}


const ExistingTemplate = () => {
  const { data, setData }:any = useContext(CreateEngagementContext)
  const {
    engagementTemplate
  } = data
  
  const existingTemplates = [
    {
      id: "1",
      name: "Signan Solutions Default Template",
      hours: 4,
      sessions: 8
    }
  ]

  const changeTemplate = (template:string) => {
    setData((prev:any) => (
      {
        ...prev,
        engagementTemplate: template
      }
    ))
  }

  return (
    <div className="mt-4 flex flex-col space-y-4">
      <div>
        <label className="text-xs">Engagement Name</label>
        <Input className="bg-input border-none placeholder:text-xs placeholder:text-input-text/50" placeholder="Type to search or select from the from the list" />
      </div>
      <div>
        {existingTemplates.map((template) => (
          <div key={template.id} onClick={() => changeTemplate(template.id)} className="bg-input/80 flex justify-between items-center py-2 px-4 rounded-md cursor-pointer">
            <div>
              <p className="text-xs">{template.name}</p>
              <p className="text-[10px]">{template.hours} hours, {template.sessions} sessions</p>
            </div>
            <SelectIndicator active={template.id === engagementTemplate} />
          </div>
        ))}
      </div>
    </div>
  )
}


const NewTemplate = () => {
  const [data, setData] = useState({
    name: "",
    sessions: 0,
    minutes: 0
  })

  const handleInreament = (data:"sessions" | "minutes") => {
    setData(prev => ({
      ...prev,
      [data]: prev[data] + 1
    }))
  }
  const handleDecreament = (data:"sessions" | "minutes") => {
    setData(prev => ({
      ...prev,
      [data]: prev[data] > 0 ? prev[data] - 1 : prev[data]
    }))
  }

  return (
    <div className="mt-4 flex flex-col space-y-4">
      <div>
        <label className="text-xs">Engagement Name</label>
        <Input
          value={data.name}
          placeholder="Type to search or select from the from the list"
          onChange={(e) => setData(prev => ({...prev, name: e.target.value}))}
          className="bg-input border-none placeholder:text-xs placeholder:text-input-text/50"
        />
      </div>
      <div className="flex gap-6 items-start pt-1">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs">Sessions</label>
          <div className="flex items-center py-3 px-5 gap-3 bg-input/80 rounded-lg">
            <p className="w-6 text-right text-sm">{data.sessions}</p>
            <div className="flex flex-col">
              <button onClick={() => handleInreament("sessions")}>
                <Icon name="triangle_up" size={10} padding={2} />
              </button>
              <button onClick={() => handleDecreament("sessions")}>
                <Icon name="triangle_down" size={10} padding={2} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5 items-start">
          <label className="text-xs">Minutes per session</label>
          <div className="flex items-center py-3 px-5 gap-3 bg-input/80 rounded-lg">
            <p className="w-6 text-right text-sm">{data.minutes}</p>
            <div className="flex flex-col">
              <button onClick={() => handleInreament("minutes")}>
                <Icon name="triangle_up" size={10} padding={2} />
              </button>
              <button onClick={() => handleDecreament("minutes")}>
                <Icon name="triangle_down" size={10} padding={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}