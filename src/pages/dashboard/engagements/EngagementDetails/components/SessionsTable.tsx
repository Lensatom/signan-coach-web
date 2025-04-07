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

export function SessionsTable({
  data
}:any) {
  return (
    <Table className="text-sm">
      <TableHeader>
        <TableRow>
          <TableHead>Coach</TableHead>
          <TableHead>Client</TableHead>
          <TableHead className="hidden md:flex items-center">Session Details</TableHead>
          <TableHead>Scheduled Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((detail:any, index:number) => (
          <TableRow key={index}>
            <TableCell>{detail.coach}</TableCell>
            <TableCell>{detail.client}</TableCell>
            <TableCell className="hidden md:block">
              <h5>{detail.details?.title}</h5>
              <p className="text-[#2D2D2D] font-normal">{detail.details?.body}</p>
            </TableCell>
            <TableCell>{detail.date}</TableCell>
            <TableCell>{detail.status}</TableCell>
            <TableCell className="text-center">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Icon name="more_horizontal" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-44">
                  <DropdownMenuItem>View</DropdownMenuItem>
                  <DropdownMenuItem>Manage</DropdownMenuItem>
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