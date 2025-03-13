import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/base"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Icon
} from "@/components/inc"

function ClientsTable({
  data
}:any) {
  return (
    <Table className="text-sm">
      <TableHeader>
        <TableRow>
          <TableHead>Account Status</TableHead>
          <TableHead>Company Type</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Primary Contact</TableHead>
          <TableHead className="text-center">Connection Status</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((detail:any) => (
          <TableRow>
            <TableCell>
              <div className="w-5 h-5 flex justify-center items-center rounded-full bg-primary-20">
                <div className="w-[22%] h-[22%] rounded-full bg-primary"></div>
              </div>
            </TableCell>
            <TableCell>{detail.company_type}</TableCell>
            <TableCell>{detail.name}</TableCell>
            <TableCell>{detail.email}</TableCell>
            <TableCell>{detail.primary_contact}</TableCell>
            <TableCell className="text-center">{detail.connection_status}</TableCell>
            <TableCell className="text-center">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Icon name="moreHorizontal" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-44">
                  <DropdownMenuItem>View</DropdownMenuItem>
                  <DropdownMenuItem>Make a copy</DropdownMenuItem>
                  <DropdownMenuItem>Rename</DropdownMenuItem>
                  <DropdownMenuItem>Share</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ClientsTable