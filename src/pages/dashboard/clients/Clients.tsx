import { Button, Input } from "@/components/base";
import {
  Card,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Icon,
  LineBox
} from "@/components/inc";
import { ClientsTable } from "./components";

function Clients() {
  const companies = [
    {
      company_type: "Technology",
      name: "Tech Innovators Inc.",
      email: "contact@techinnovators.com",
      primary_contact: "John Doe",
      connection_status: "Internal Record"
    },
    {
      company_type: "Finance",
      name: "Wealth Management LLC",
      email: "info@wealthmgmt.com",
      primary_contact: "Jane Smith",
      connection_status: "Internal Record"
    },
    {
      company_type: "Healthcare",
      name: "MediCare Solutions",
      email: "support@medicaresolutions.com",
      primary_contact: "Michael Johnson",
      connection_status: "Internal Record"
    },
    {
      company_type: "Retail",
      name: "ShopEase Ltd.",
      email: "sales@shopease.com",
      primary_contact: "Emily Davis",
      connection_status: "Internal Record"
    },
    {
      company_type: "Manufacturing",
      name: "Global Parts Co.",
      email: "hello@globalparts.com",
      primary_contact: "Robert Brown",
      connection_status: "Internal Record"
    },
    {
      company_type: "Consulting",
      name: "Business Advisors Group",
      email: "contact@bizadvisors.com",
      primary_contact: "Sophia Wilson",
      connection_status: "Internal Record"
    }
  ];
  

  const metrics = [
    {
      name: "Total Clients",
      value: "3"
    },
    {
      name: "Connected",
      value: "1"
    },
    {
      name: "Invited",
      value: "0"
    },
    {
      name: "Internal",
      value: "2"
    }
  ]

  return (
    <div className="w-full h-full p-4 md:p-8 flex flex-col gap-8">
      <section className="flex justify-between items-center mt-0 md:mt-6">
        <h2 className="text-xl lg:text-3xl font-bold">Clients</h2>
      </section>
      <LineBox>
        <div className="flex items-center justify-center gap-24">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold">{metric.value}</h3>
              <span className="text-xs font-medium text-gray-600">{metric.name}</span>
            </div>
          ))}
        </div>
      </LineBox>
      <section className="border border-border-grey p-2 md:p-6 rounded-xl flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div className="w-[25%]">
            <Input search />
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="bg-transparent">
              Column
              <Icon name="column" size={12} padding={0} />
            </Button>
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
          <Card.Header title={`Sessions (${companies.length})`} info="info" />
          <Card.Body>
            <div className="flex flex-col items-center gap-4">
              <ClientsTable data={companies} />
              <Button size="sm" variant="secondary" className="font-light flex items-center">
                View more
                <Icon name="dropdown" size={8} padding={0} />
              </Button>
            </div>
          </Card.Body>
        </Card>
      </section>
    </div>
  )
}

export default Clients