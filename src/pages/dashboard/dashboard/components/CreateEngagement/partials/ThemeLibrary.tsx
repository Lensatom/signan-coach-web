import { SelectIndicator } from "@/components/base"

export const ThemeLibrary = () => {
  return (
    <div>
      <p className="text-xs">Your coach and coachee will be able to add themes to their goals and select themes as a topic for each of their sessions.</p>
      <div className="p-4 bg-input flex items-center justify-between rounded-lg mt-4">
        <p className="text-xs">Signan Solution Default Theme Library</p>
        <SelectIndicator active={true} />
      </div>
    </div>
  )
}