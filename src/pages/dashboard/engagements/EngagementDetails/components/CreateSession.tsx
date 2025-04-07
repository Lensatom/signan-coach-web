import { Button, DialogClose, DialogFooter, DialogHeader, DialogTitle, Input } from "@/components/base";

export function CreateSession() {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-primary">Create Session</DialogTitle>
      </DialogHeader>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3">
          <Input variant="solid" label="Session Title" className="col-span-3" />
        </div>
        <div className="col-span-3">
          <Input variant="solid" label="Session Description" className="col-span-3" />
        </div>
        <Input variant="solid" label="Start Date" />
        <Input variant="solid" label="Stop Date" />
        <Input variant="solid" label="Duration (Minutes)" type="number" />
        <div className="col-span-3">
          <Input variant="solid" label="Session Action Items" className="col-span-3" />
        </div>
      </div>
      <DialogFooter className="mt-6">
        <DialogClose asChild>
          <Button variant="outline" size="sm">Cancel</Button>
        </DialogClose>
        <Button size="sm">Add Session</Button>
      </DialogFooter>
    </>
  )
}