import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




export const levelsColumns = [
      {
        accessorKey: "name",
        header: <div className="capitalize text-right -mr-3">
        عنوان المستوى
        </div>,
        cell: ({ row }) => (
          <div className="capitalize bg-">{row.getValue("name")}</div>
        ),
      }
      ,
      {
        accessorKey: "startDate",
        header: <div className="capitalize text-right -mr-3">
        تاؤيخ البدء
        </div>,
        cell: ({ row }) => (
          <div className="capitalize bg-">{row.getValue("startDate")}</div>
        ),
      },


      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          const payment = row.original
    
          return (
            <DropdownMenu dir="rtl">
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    الخيارات
                </DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                  حذف المادة
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {/* <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
      },
    ]