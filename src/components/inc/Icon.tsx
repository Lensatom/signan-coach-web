import * as icons from "@/assets/icons"

export type IconNameType = keyof typeof icons

interface Props {
  name: IconNameType
  size?: number
  padding?: number
  bg?: string
  className?: string
}

function Icon({
  name,
  size=22,
  padding=10,
  bg,
  className
}:Props) {
  const Icon = icons[name]
  return (
    <div style={{background: bg, width: size + padding, height: size + padding}} className={`flex justify-center items-center ${className}`}>
      <img src={Icon} width={size} />
    </div>
  )
}

export default Icon