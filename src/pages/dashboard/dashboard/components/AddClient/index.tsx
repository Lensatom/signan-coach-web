import { Button, DialogClose, DialogDescription, DialogHeader, DialogTitle } from "@/components/base"
import { Icon } from "@/components/inc"
import { useState } from "react"
import { ClientCreate, CompanyCreate } from "./partials"

export const AddClient = () => {
  const [step, setStep] = useState(1)
  const [type, setType] = useState<"company" | "client">()

  const stepsData = [
    {
      title: "Add Client",
      description: "Who is the person receiving coaching?",
    },
    type === "client"
      ? {
          title: "Enter the details of your client",
          description: "Enter your client details",
        }
      : {
          title: "Company Name",
          description: "Please enter your company details",
        }
  ]

  const maxStep = stepsData.length
  const activeStep = stepsData[step - 1]

  const handleChooseType = (type:"client" | "company") => {
    setType(type)
    handleNext()
  }

  const handleNext = () => {
    setStep(prev => prev < maxStep ? prev + 1 : prev)
  }

  const handleBack = () => {
    setStep(prev => prev > 1 ? prev - 1 : prev)
    if (step !== 1) return
  }

  return (
    <DialogHeader>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col space-y-4">
          <div>
            <DialogTitle className="text-primary text-sm font-semibold">{activeStep.title}</DialogTitle>
            <DialogDescription className="text-xs font-medium">{activeStep.description}</DialogDescription>
          </div>
        </div>

        <div className="pb-10">
          {step === 1 ? (
            <div className="flex flex-col gap-2">
              <button onClick={() => handleChooseType("client")} className="flex items-center justify-between p-2 hover:bg-input rounded-md cursor-pointer">
                <div className="flex items-center gap-2">
                  <Icon name="user" padding={0} size={14} />
                  <p className="text-xs">Individual Client</p>
                </div>
                <Icon name="arrow_greater_black" size={14} />
              </button>
              <button onClick={() => handleChooseType("company")} className="flex items-center justify-between p-2 hover:bg-input rounded-md cursor-pointer">
                <div className="flex items-center gap-2">
                  <Icon name="company" padding={0} size={14} />
                  <p className="text-xs">Client Company</p>
                </div>
                <Icon name="arrow_greater_black" size={14} />
              </button>
            </div>
          ) : (
            type === "client" ? <ClientCreate /> : <CompanyCreate />
          )}
        </div>

        <div className="flex justify-end gap-2">
          {step === 1 ? (
            <DialogClose asChild>
              <Button size="sm" variant="outline" className="font-medium px-5" onClick={handleBack}>Back</Button>
            </DialogClose>
          ) : (
            <Button size="sm" variant="outline" className="font-medium px-5" onClick={handleBack}>Back</Button>
          )}
          {step !== 1 && <Button size="sm" className="px-5 capitalize" onClick={handleNext}>{step === 1 ? "Next" : `Add ${type}`}</Button>}
        </div>
      </div>
    </DialogHeader>
  )
}