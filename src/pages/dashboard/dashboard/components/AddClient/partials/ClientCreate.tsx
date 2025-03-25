import { Input, SelectIndicator } from "@/components/base";
import { useState } from "react";

export function ClientCreate() {
  const [shouldSendEmail, setShouldSendEmail] = useState(false)

  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2 gap-4">
        <Input label="First Name" variant="solid" />
        <Input label="Last Name" variant="solid" />
        <Input label="Email" variant="solid" />
        <Input label="Language" variant="solid" />
      </div>
      <button onClick={() => setShouldSendEmail(prev => !prev)} className="flex items-center gap-2">
        <SelectIndicator active={shouldSendEmail} />
        <p className="text-xs font-medium">Send Invitation via email</p>
      </button>
    </div>
  )
}