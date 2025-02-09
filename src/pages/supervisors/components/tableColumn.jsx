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
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"




export const studentColumns = [
    {
        accessorKey: "personalImage",
        header: () => <div className="text-right -mr-3">
        
        </div>,
        cell: ({ row }) => {
          const image = row.getValue("personalImage")
         
    
          return <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={image} alt={"userImage"} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
        },
      },
      {
        accessorKey: "firstName",
        header: <div className="capitalize text-right -mr-3">
        الإسم الأول
        </div>,
        cell: ({ row }) => (
          <div className="capitalize bg-">{row.getValue("firstName")}</div>
        ),
      },
      {
        accessorKey: "lastName",
        header: <div className="capitalize text-right -mr-3">
        الإسم الأخير
        </div>,
        cell: ({ row }) => (
          <div className="capitalize bg-">{row.getValue("lastName")}</div>
        ),
      },
      {
        accessorKey: "email",
        header: <div className="capitalize text-right -mr-3">
        البريد الإليكتروني
        </div>,
        cell: ({ row }) => (
          <div className="capitalize bg-">{row.getValue("email")}</div>
        ),
      },
      {
        accessorKey: "level",
        header: <div className="capitalize text-right -mr-3">
        المستوى
        </div>,
        cell: ({ row }) => (
          <div className="capitalize bg-">{row.getValue("level")}</div>
        ),
      },
      {
        accessorKey: "intake",
        header: <div className="capitalize text-right -mr-3">
        الدفعة
        </div>,
        cell: ({ row }) => (
          <div className="capitalize bg-">{row.getValue("intake")}</div>
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
                     إزالة الطالب
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                >

التعيين كمشرف 
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                     إزالة الطالب
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