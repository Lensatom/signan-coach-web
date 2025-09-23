import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/base"
import {
  Icon,
  Progress
} from "@/components/inc"
import React, { useState } from "react"

export function GoalsTable({data}:{data:any}) {
  return (
    <Table className="text-sm">
      <TableHeader>
        <TableRow>
          <TableHead>Coach</TableHead>
          <TableHead>Milestone Progress</TableHead>
          <TableHead>Date Created</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((detail:any, index:number) => {
          const [expanded, setExpanded] = useState(false)
          return (
            <React.Fragment key={index}>
              {expanded && <TableRow className="h-4 !border-none"></TableRow>}
              <TableRow onClick={() => setExpanded(!expanded)} className={`cursor-pointer w-full ${expanded ? "border-t border-x border-b-0" : "border-none"}`}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Icon name="dart_board" bg className="rounded-full" size={12} />
                    {detail.coach}
                  </div>
                </TableCell>
                <TableCell>
                  <Progress percentage={detail.percentageComplete} />
                </TableCell>
                <TableCell>{detail.dateCreated}</TableCell>
                <TableCell>{detail.dueDate}</TableCell>
                <TableCell className="text-center">
                  <Button variant="secondary" size="sm">View Details</Button>
                </TableCell>
              </TableRow>
              {/* Expanded Row */}
              {expanded && (
                <TableRow className="border-x border-b border-t-0">
                  <TableCell colSpan={5} className="h-2">
                    <div className="flex flex-col gap-4">
                      <h5>
                        <span className="font-semibold">Goal Title: </span>
                        Developing Urgent Funds
                      </h5>
                      <p>
                        <span className="font-semibold">Goal Description: </span>
                        Developing Urgent Funds
                      </p>
                      <div className="flex space-x-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="sm" className="bg-primary-20 text-primary border border-primary h-7">
                              <Icon name="add_blue" size={12} padding={0} />
                              Add Milestone
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <AddMilestone />
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="sm" className="bg-primary-20 text-primary border border-primary h-7">
                          <Icon name="calendar" size={12} padding={0} />
                          Add Due Date
                        </Button>
                        <Button variant="ghost" size="sm" className="bg-primary-20 text-primary border border-primary h-7">
                          <Icon name="send" size={12} padding={0} />
                          Request Feedback
                        </Button>
                        <Button variant="ghost" size="sm" className="bg-primary-20 text-primary border border-primary h-7">
                          <Icon name="pen" size={12} padding={0} />
                          Edit Goal
                        </Button>
                        <Button variant="ghost" size="sm" className="bg-white text-danger border border-danger h-7">
                          <Icon name="bin" size={12} padding={0} />
                          Delete Goal
                        </Button>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          )
        })}
      </TableBody>
    </Table>
  )
}

const AddMilestone = () => {
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-primary">Add Milestone</DialogTitle>
        <DialogDescription>Add actionable Steps, to help you achieve your goals</DialogDescription>
      </DialogHeader>
      <Input variant="solid" label="Describe your milestone" className="col-span-3" />
      <DialogFooter className="mt-6">
        <DialogClose asChild>
          <Button variant="outline" size="sm">Cancel</Button>
        </DialogClose>
        <Button size="sm">Add Milestone</Button>
      </DialogFooter>
    </>
  )
}