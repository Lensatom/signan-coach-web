import { Button, DialogClose, DialogDescription, DialogHeader, DialogTitle } from "@/components/base"
import { useMemo, useState } from "react"
import { EngagementSetup, SelectCoachee, ThemeLibrary } from "./partials"
import { CreateEngagementContext } from "./context"

export const CreateEngagement = () => {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({
    coachee: [],
    engagementSetup: null,
    engagementTemplate: null,
    themeLibrary: ""
  })

  const stepsData = useMemo(() => [
    {
      title: "Select your cochee",
      description: "Who is the person receiving coaching?",
      component: <SelectCoachee />
    },
    {
      title: "Engagement Setup",
      description: "How would you like to setup your engagement",
      component: <EngagementSetup />
    },
    {
      title: "Select a theme Library",
      description: "Select a theme library for your engagement",
      component: <ThemeLibrary />
    }
  ], [])


  const maxStep = stepsData.length
  const activeStep = stepsData[step - 1]

  const handleNext = () => {
    setStep(prev => prev < maxStep ? prev + 1 : prev)
  }
  const handleBack = () => {
    setStep(prev => prev > 1 ? prev - 1 : prev)
    if (step !== 1) return

  }

  return (
    <CreateEngagementContext.Provider value={{data, setData}}>
      <DialogHeader>
        <div className="flex flex-col gap-4 justify-between">
          <div className="flex flex-col space-y-4">
            <div>
              <DialogTitle className="text-primary text-sm font-semibold">{activeStep.title}</DialogTitle>
              <DialogDescription className="text-xs font-medium">{activeStep.description}</DialogDescription>
            </div>
          </div>

          <div className="h-[40vh]">
            {activeStep.component}
          </div>

          <div className="flex flex-col space-y-2.5">
            <p className="text-xs text-primary font-medium">Step {step}/{maxStep}</p>
            <div className="bg-input h-2 w-full rounded-full">
              <div className="bg-primary h-full rounded-full" style={{width: `${(step / maxStep) * 100}%`}}></div>
            </div>
            <div className="flex justify-end gap-2">
              {step === 1 ? (
                <DialogClose asChild>
                  <Button size="sm" variant="outline" className="font-medium px-5" onClick={handleBack}>Back</Button>
                </DialogClose>
              ) : (
                <Button size="sm" variant="outline" className="font-medium px-5" onClick={handleBack}>Back</Button>
              )}
              <Button size="sm" className="px-5" onClick={handleNext}>Next</Button>
            </div>
          </div>
        </div>
      </DialogHeader>
    </CreateEngagementContext.Provider>
  )
}