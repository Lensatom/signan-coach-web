import {
  Button, Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/base"
import {
  Card, DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem, DropdownMenuTrigger, HorizontalLine,
  Icon
} from "@/components/inc"
import { AddClient, CreateEngagement, Notification, SessionsTable, Tasks } from "./components"

function Dashboard() {
  const notifications = [
    {
      type: "sessions",
      message: "Lorem ipsum dolor. Assumenda rem cumque vero saepe minima? Laudantium tempora provident beatae! Quidem, molestias."
    },
    {
      type: "sessions",
      message: "Lorem ipsum dolor. Assumenda rem cumque vero saepe minima? Laudantium tempora provident beatae! Quidem, molestias."
    }
  ]

  const tasks = [
    {
      type: "personal assignment",
      message: "Lorem ipsum dolor. Assumenda rem cumque vero saepe minima? Laudantium tempora provident beatae! Quidem, molestias."
    },
    {
      type: "personal assignment",
      message: "Lorem ipsum dolor. Assumenda rem cumque vero saepe minima? Laudantium tempora provident beatae! Quidem, molestias."
    }
  ]

  const sessions = [
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
    <div className="w-full h-full p-4 md:p-8 flex flex-col gap-6">
      <section className="flex justify-between items-center mt-0 md:mt-6">
        <h2 className="text-xl lg:text-2xl font-bold">General Dasboard</h2>
        <div className="hidden lg:flex gap-2">
          <Button variant="outline" size="sm" className="text-grey-text font-normal">
            Quick Setup
            <Icon name="settings" size={14} padding={0} />
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="text-grey-text font-normal">
                Create Engagement
                <Icon name="add_thick" size={12} padding={0} />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <CreateEngagement />
            </DialogContent>
          </Dialog>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="text-grey-text font-normal">
                Add Client
                <Icon name="add_client" size={14} padding={0} />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <AddClient />
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="sm" className="text-grey-text font-normal">
            Create Invoice
            <Icon name="create_invoice" size={14} padding={0} />
          </Button>
        </div>
        <div className="block lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Icon name="more_bars" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mr-4">
              <DropdownMenuItem>
                Quick Setup
                <Icon name="settings" size={14} padding={0} />
              </DropdownMenuItem>
              <DropdownMenuItem>
                Create Engagement
                <Icon name="dropdown" size={14} padding={0} />
              </DropdownMenuItem>
              <DropdownMenuItem>
                Add Client
                <Icon name="add_client" size={14} padding={0} />
              </DropdownMenuItem>
              <DropdownMenuItem>
                Create Invoice
                <Icon name="create_invoice" size={14} padding={0} />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
      <div className="border border-border-grey p-2 md:p-6 rounded-xl flex flex-col gap-6">
        <Card>
          <Card.Header title="Notifications" info="info" />
          <Card.Body>
            <div className="w-full flex flex-col items-center gap-6">
              <div className="w-full">
                {notifications.map((notification, index) => (
                  <>
                    <Notification key={index} {...notification} />
                    {notifications.length !== index + 1 && <HorizontalLine className="my-3" />}
                  </>
                ))}
              </div>
              <Button size="sm" variant="secondary" className="flex items-center">
                View more
                <Icon name="dropdown" size={12} padding={0} />
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header title={`Sessions (${sessions.length})`} info="info" />
          <Card.Body>
            <div className="flex flex-col items-center gap-4">
              <SessionsTable data={sessions} />
              <Button size="sm" variant="secondary" className="flex items-center">
                View more
                <Icon name="dropdown" size={12} padding={0} />
              </Button>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header title="Tasks" info="info" />
          <Card.Body>
            {tasks.map((task, index) => (
              <>
                <Tasks key={index} {...task} />
                {notifications.length !== index + 1 && <HorizontalLine className="my-4" />}
              </>
            ))}
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard