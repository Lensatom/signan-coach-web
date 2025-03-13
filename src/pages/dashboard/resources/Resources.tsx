import { Button, Input } from "@/components/base"
import {
  Card,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icon
} from "@/components/inc"
import { ResourcesTable } from "./components"

function Resources() {
  const resources = [
    {
      "coach": "John Doe",
      "client": "Alice Smith",
      "details": {
        "title": "Initial Consultation",
        "body": "Discussed client's goals and set a roadmap for the next 3 months."
      },
      "date": "2023-10-15",
      "status": "Completed"
    },
    {
      "coach": "Jane Smith",
      "client": "Bob Johnson",
      "details": {
        "title": "Progress Review",
        "body": "Reviewed client's progress on fitness goals and adjusted the workout plan."
      },
      "date": "2023-10-20",
      "status": "Completed"
    },
    {
      "coach": "Emily Davis",
      "client": "Charlie Brown",
      "details": {
        "title": "Nutrition Planning",
        "body": "Created a customized meal plan to support the client's weight loss goals."
      },
      "date": "2023-10-25",
      "status": "Scheduled"
    },
    {
      "coach": "Michael Lee",
      "client": "Eva Green",
      "details": {
        "title": "Mindset Coaching",
        "body": "Worked on overcoming mental blocks and building confidence."
      },
      "date": "2023-11-01",
      "status": "Pending"
    },
    {
      "coach": "Sarah Wilson",
      "client": "David Clark",
      "details": {
        "title": "Career Strategy Session",
        "body": "Explored career advancement opportunities and created an action plan."
      },
      "date": "2023-11-05",
      "status": "Scheduled"
    }
  ]

  return (
    <div className="w-full h-full p-4 md:p-8 flex flex-col gap-10">
      <section className="flex justify-between items-center mt-0 md:mt-6">
        <h2 className="text-xl lg:text-2xl font-bold">Resources</h2>
      </section>
      <div className="border border-border-grey p-2 md:p-6 rounded-xl flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="w-[25%]">
            <Input search />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="bg-transparent">
              All Types
              <Icon name="filter" size={14} padding={0} />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Add Resources
                  <Icon name="dropdownBlue" size={12} padding={0} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-44">
                <DropdownMenuItem>Create Folder</DropdownMenuItem>
                <DropdownMenuItem>Upload File</DropdownMenuItem>
                <DropdownMenuItem>Create Form</DropdownMenuItem>
                <DropdownMenuItem>Create Link</DropdownMenuItem>
                <DropdownMenuItem>Create Document</DropdownMenuItem>
                <DropdownMenuItem>Create Themed Library</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Card>
          <Card.Header title={`Resource Group`} info="info" />
          <Card.Body>
            <div className="flex flex-col items-center gap-4">
              <ResourcesTable data={resources} />
              <Button size="sm" variant="secondary" className="font-light flex items-center">
                View more
                <Icon name="dropdown" size={8} padding={0} />
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Resources