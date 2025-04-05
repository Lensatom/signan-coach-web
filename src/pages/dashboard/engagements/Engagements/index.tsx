import {
  Button, Checkbox, Dialog,
  DialogContent, DialogTrigger, Input
} from "@/components/base"
import {
  Card,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icon
} from "@/components/inc"
import { useColumns } from "@/hooks"
import { EngagementsTable } from "./components"

const engagements = [
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

function Engagements() {
  const initialColumns = [
    {
        name: "Status",
        active: true
    },
    {
        name: "Coach",
        active: true
    },
    {
        name: "Coachee",
        active: true
    },
    {
        name: "Program",
        active: true
    },
    {
        name: "Date Created",
        active: true
    },
    {
        name: "Progress",
        active: true
    },
    {
        name: "Coachee Company",
        active: false
    },
    {
        name: "Start date",
        active: false
    },
    {
        name: "End date",
        active: false
    },
    {
        name: "Amount Paid",
        active: false
    },
    {
        name: "Session completed",
        active: false
    },
    {
        name: "Hours completed",
        active: false
    },
    {
        name: "Hours Remaining",
        active: false
    },
    {
        name: "Most Recent session",
        active: false
    },
    {
        name: "Next Session",
        active: false
    }
  ]
  const { columns, toggleColumn, activeColumns } = useColumns({
    initialValues: initialColumns,
    storeKey: "engagements-table-column"
  })

  return (
    <div className="w-full h-full p-4 md:p-8 flex flex-col gap-10">
      <section className="flex justify-between items-center mt-0 md:mt-6">
        <h2 className="text-xl lg:text-2xl font-bold">Engagements</h2>
        <div className="hidden lg:flex gap-2">
          <Button variant="outline" size="sm" className="text-grey-text font-normal">
            Active
            <div className="w-1.5 h-1.5 bg-primary rounded-full ml-1"></div>
          </Button>
          <Button variant="outline" size="sm" className="text-grey-text font-normal">
            Inactive
            <div className="w-1.5 h-1.5 bg-danger rounded-full ml-1"></div>
          </Button>
          <Button variant="outline" size="sm" className="text-grey-text font-normal">
            Completed
            <div className="w-1.5 h-1.5 bg-warning rounded-full ml-1"></div>
          </Button>
          <Button variant="outline" size="sm" className="text-grey-text font-normal">
            Drafts
            <div className="w-1.5 h-1.5 bg-border-grey rounded-full ml-1"></div>
          </Button>
        </div>
      </section>
      <div className="border border-border-grey p-2 md:p-6 rounded-xl flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="w-[25%]">
            <Input search />
          </div>
          <div className="flex gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Column
                  <Icon name="column" size={12} padding={0} />
                </Button>
              </DialogTrigger>
              <DialogContent showClose={false} className="sm:max-w-[425px]">
                {columns.map((column:any, index:number) => {
                  return (
                    <div key={index} className="flex ai-center gap-2">
                      <Checkbox checked={columns[index].active} onCheckedChange={() => toggleColumn(index)} />
                      <label className="text-sm">{column.name}</label>
                    </div>
                  )
                })}
              </DialogContent>
            </Dialog>
            <Button variant="outline" size="sm" className="bg-transparent">
              Export
              <Icon name="export" size={12} padding={0} />
            </Button>
            <Button variant="outline" size="sm" className="bg-transparent">
              Filters
              <Icon name="filter" size={12} padding={0} />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline" size="sm" className="bg-transparent">
                  Select Actions
                  <Icon name="dropdown_blue" size={12} padding={0} />
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
          <Card.Header title={`Engagements (${engagements.length})`} info="info" />
          <Card.Body>
            <EngagementsTable data={engagements} columns={activeColumns} />
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Engagements