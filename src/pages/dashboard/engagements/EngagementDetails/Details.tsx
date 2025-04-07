import EmptyGoalsListImage from "@/assets/images/empty-goals-list.svg";
import { Button, Dialog, DialogContent, DialogTrigger } from "@/components/base";
import { CreateSession, SessionsTable } from "./components";

function Details() {
  const sessionsData = [
    {
      coach: "Introduction to Coaching",
      percentageComplete: 50,
      dateCreated: "2025-04-01",
      dueDate: "2025-04-15",
    },
    {
      coach: "Advanced Leadership Skills",
      percentageComplete: 75,
      dateCreated: "2025-03-20",
      dueDate: "2025-04-10",
    },
    {
      coach: "Effective Communication",
      percentageComplete: 30,
      dateCreated: "2025-03-25",
      dueDate: "2025-04-20",
    },
    {
      coach: "Time Management Strategies",
      percentageComplete: 90,
      dateCreated: "2025-03-15",
      dueDate: "2025-04-05",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold text-sm">Sessions</h4>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="mt-4">
              Add Session
            </Button>
          </DialogTrigger>
          <DialogContent>
            <CreateSession />
          </DialogContent>
        </Dialog>
      </div>
      {sessionsData.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-2 mb-24 space-y-4">
          <p className="text-xs text-gray-500">Create goals to drive mutual support and achieve impactful results.</p>
          <img
            src={EmptyGoalsListImage}
            alt="No Goals"
            className="w-44 h-44 mx-auto mt-4"
          />
        </div>
      ) : (
        <SessionsTable data={sessionsData} />
      )}
    </div>
  )
}

export default Details