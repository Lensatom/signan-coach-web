import { Icon } from "@/components/inc";

export interface SettingsBoxType {
  name: string,
  description: string
}

export function SettingsBox({
  name,
  description
}:SettingsBoxType) {
  return (
    <div className="flex items-center justify-between border p-4 rounded-lg gap-6">
      <div className="flex items-center gap-2">
        <Icon name="settings_2" padding={0} size={22} />
        <div className="w-full">
          <p className="text-xs font-medium">{name}</p>
          <p className="text-[10px]">{description}</p>
        </div>
      </div>
      <Icon name="arrow_greater_black" padding={0} size={18} />
    </div>
  )
}
