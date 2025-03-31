import React from "react"
import { cn } from "@/lib/utils"
import { Icon } from "../inc"
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "w-full h-10 text-xs placeholder:text-primary text-primary outline-none px-4 rounded-md text-input-text placeholder:text-input-text/60",
  {
    variants: {
      variant: {
        solid:
          "bg-input border-none outline-0 focus:border focus:border-solid focus:border-primary",
        outline:
          "border border-input-border bg-transparent",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
);

interface Props extends React.ComponentProps<"input"> {
  label?: string,
  error?: string,
  search?: boolean,
  variant?: "solid" | "outline"
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className, type, label, search, error, variant, ...props }, ref) => {

    const [showPassword, setShowPassword] = React.useState(false)

    if (search) {
      return (
        <div className="w-full flex justify-between items-center rounded-md pr-2 bg-[#EBF2FB]">
          <input
            className={`${cn(inputVariants({ variant, className }))} outline-none border-none`}
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
        <label htmlFor={props.id} className="text-xs ml-1">{label}</label>
        <input
          type={showPassword ? "text" : type}
          className={cn(inputVariants({ variant, className }))}
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
