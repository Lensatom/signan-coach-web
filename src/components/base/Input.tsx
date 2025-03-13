import * as React from "react"

import { cn } from "@/lib/utils"
import { Icon } from "../inc"

interface Props extends React.ComponentProps<"input"> {
  label?: string,
  error?: string,
  search?: boolean
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, type, label, search, error, ...props }, ref) => {

    const [showPassword, setShowPassword] = React.useState(false)

    if (search) {
      return (
        <div className="w-full flex justify-between items-center rounded-md p-0.5 pl-3 bg-[#EBF2FB]">
          <input
            className={`w-full h-8 bg-transparent text-xs placeholder:text-primary text-primary outline-none`}
            placeholder="Search for anything"
            ref={ref}
            {...props}
          />
          <div className="py-1 px-3 bg-primary rounded-md">
            <Icon name="search_white" padding={0} size={18} />
          </div>
        </div>
      )
    }
    
    return (
      <div className="w-full flex flex-col gap-1 justify-end relative">
        <label htmlFor={props.id} className="text-sm ml-1">{label}</label>
        <input
          type={showPassword ? "text" : type}
          className={cn(
            `flex h-10 w-full rounded-md focus:outline-none font-normal text-input-text border ${error ? "border-red-500" : "border-primary/30"} px-4 py-3 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-input-text focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300`,
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <span className="text-red-500 text-xs absolute -bottom-4 right-0">{error}</span>}
        {type === "password" && <button type="button" className="absolute h-10 right-4 text-xs" onClick={() => setShowPassword(prev => !prev)}>{showPassword ? "Hide" : "Show"}</button>}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
