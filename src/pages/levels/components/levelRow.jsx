

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
import useModal from "../../../hooks/modal"
import { formatDate } from "../../../lib/commonUtils"


const LevelRow = (data) =>{
    const [setModal] = useModal()
    return <tr className="border-b border-gray-200 hover:bg-gray-200">

              <td className="pl-4    whitespace-nowrap  " >{data.data.name}</td>
              <td className="pl-4    whitespace-nowrap" >{formatDate(data.data.startDate)}</td>
              <td className="pl-4    whitespace-nowrap" >{formatDate(data.data.endDate)}</td>

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
                <DropdownMenuSeparator />

                <DropdownMenuItem
                                onClick={() => {setModal({type: "editLevel",open: true, props : {data :data.data }})  }}

                >
     تعديل المستوى
                </DropdownMenuItem>
                <DropdownMenuItem
                onClick={() => {setModal({type: "deleteLevel",open: true, props : {id :data.data._id }})  }}
                className= "text-red-600"
                >
                  حذف المستوى
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
              </td>
    </tr>
  
  }

export default LevelRow
