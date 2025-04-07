import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/base"
import {
  Icon
} from "@/components/inc"

export function ResourcesTable({data}:{data:any}) {
  return (
    <Table className="text-sm">
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Last Modified</TableHead>
          <TableHead>Date Added</TableHead>
          <TableHead className="text-center">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((detail:any, index:number) => (
          <TableRow key={index}>
            <TableCell>
              <div className="flex items-center gap-2">
                <Icon name="document" bg className="rounded-full" size={12} />
                {detail.coach}
              </div>
            </TableCell>
            <TableCell>{detail.dateCreated}</TableCell>
            <TableCell>{detail.dueDate}</TableCell>
            <TableCell className="text-center">
              <Icon name="more_horizontal" className="mx-auto" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}