

import {  MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import useModal from "../../../hooks/modal"







const StudentRow = (data) =>{
    const[setModal] = useModal()
    return <tr className="border-b border-gray-200 hover:bg-gray-200">
              <td className="pl-4 p-1  whitespace-nowrap" >
  
  
              <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={data.data.personalImage} alt={"userImage"} />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
              </td>
              <td className="pl-4    whitespace-nowrap  " >{data.data.firstName}</td>
  
              <td className="pl-4    whitespace-nowrap" >{data.data.lastName}</td>
  
              <td className="pl-4    whitespace-nowrap" >{data.data.email}</td>
              <td className="pl-4    whitespace-nowrap" >{data.data.intake.name}</td>
              <td className="pl-4    whitespace-nowrap" >{data.data.level.name}</td>

              <td className="pl-4    whitespace-nowrap" >
  
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
                  {/* <DropdownMenuItem
                    onClick={() => navigator.clipboard.writeText(payment.id)}
                  >
                       إزالة الطالب
                  </DropdownMenuItem> */}
                  <DropdownMenuItem
                        onClick={() => { setModal({type: "addSupervisor",open: true, props : {id :data.data}})  }}

                  >
  
                    التعيين كمشرف 
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => { setModal({type: "deleteStudent",open: true, props : {id :data.data._id }})  }}
                                    >
                       إزالة الطالب
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
              </td>
  
  
              
  
    </tr>
  
  }

export default StudentRow
