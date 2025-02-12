import {  MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import useModal from "../../../hooks/modal"



const SupervisorRow = (data) =>{
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
                  onClick={() => { setModal({type: "editSupervisor",open: true, props : {data :data.data }})  }}

                  >
  
                    تعديل الصلاحيات  
                  </DropdownMenuItem> */}
                  <DropdownMenuItem
                    onClick={() => { setModal({type: "deleteSupervisor",open: true, props : {id :data.data._id }})  }}
                    className=""
                  >
                       إزالة المشرف
                  </DropdownMenuItem>
                 </DropdownMenuContent>
              </DropdownMenu>
              </td>
  
  
  
  
    </tr>
  
  }

export default SupervisorRow
