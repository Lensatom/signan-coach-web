import EmptyGoalsListImage from "@/assets/images/empty-goals-list.svg";
import { Button, Dialog, DialogContent, DialogTrigger } from "@/components/base";
import { CreateGoal, ResourcesTable } from "./components";

function Resources() {
  const resourcesData = [
    {
      coach: "Resource Management Guide",
      dateCreated: "2025-04-01",
      dueDate: "2025-04-15",
    },
    {
      coach: "Effective Team Collaboration",
      dateCreated: "2025-03-20",
      dueDate: "2025-04-10",
    },
    {
      coach: "Leadership Best Practices",
      dateCreated: "2025-03-25",
      dueDate: "2025-04-20",
    },
    {
      coach: "Time Management Techniques",
      dateCreated: "2025-03-15",
      dueDate: "2025-04-05",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-bold text-sm">Resources</h4>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm" className="mt-4">
              Add Resources
            </Button>
          </DialogTrigger>
          <DialogContent>
            <CreateGoal />
          </DialogContent>
        </Dialog>
      </div>
      {resourcesData.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-2 mb-24 space-y-4">
          <p className="text-xs text-gray-500">Create goals to drive mutual support and achieve impactful results.</p>
          <img
            src={EmptyGoalsListImage}
            alt="No Goals"
            className="w-44 h-44 mx-auto mt-4"
          />
        </div>
      ) : (
        <ResourcesTable data={resourcesData} />
      )}
    </div>
  )
}

export default Resources