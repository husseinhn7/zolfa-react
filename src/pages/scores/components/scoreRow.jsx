

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







const ScoreRow = (data) =>{
    return <tr className="border-b border-gray-200 hover:bg-gray-200 h-10">
              <td className="pl-4 p-1  whitespace-nowrap" >
  
  
              <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={data.data.student.personalImage} alt={"userImage"} />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
              </td>
              <td className="pl-4    whitespace-nowrap  " >{data.data.student.firstName}</td>
  
              <td className="pl-4    whitespace-nowrap" >{data.data.student.lastName}</td>
  
              <td className="pl-4    whitespace-nowrap" >{data.data.exam.title}</td>
              <td className="pl-4    whitespace-nowrap" >{data.data.marks}</td>
              <td className="pl-4    whitespace-nowrap" >{data.data.status}</td>


              {/* <td className="pl-4    whitespace-nowrap" >
  
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
                  </DropdownMenuItem> 
                  <DropdownMenuItem
                    onClick={() => {}}
                  >
  
                    التعيين كمشرف 
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => { setModal({type: "deleteStudent",open: true, props : {id :"row.original.id" }})  }}
                                    >
                       إزالة الطالب
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </DropdownMenuContent>
              </DropdownMenu>
              </td> */}
  
  
              
  
    </tr>
  
  }

export default ScoreRow
