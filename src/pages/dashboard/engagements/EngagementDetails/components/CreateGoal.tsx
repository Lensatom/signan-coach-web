import { Button, DialogClose, DialogDescription, DialogFooter, DialogHeader, DialogTitle, Input } from "@/components/base";

export function CreateGoal() {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-primary">Create Goal</DialogTitle>
        <DialogDescription>Please enter your goals details</DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-4">
        <Input variant="solid" placeholder="Goal Name" />
        <Input variant="solid" placeholder="Goal Description" />
      </div>
      <DialogFooter className="mt-6">
        <DialogClose asChild>
          <Button variant="outline" size="sm">Cancel</Button>
        </DialogClose>
        <Button size="sm">Add Goal</Button>
      </DialogFooter>
    </>
  )
}