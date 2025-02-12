
/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input";
import useModal from "../../../hooks/modal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
   SelectValue,
} from "@/components/ui/select"
import { useGetApiQuery } from "../../../store/apiSlice";


const TableHead = ({setSearchParams}) => {
  const [ setModal] = useModal()
  const { data: levels, isFetching : levelsFetching } = useGetApiQuery({url : "/level"})

return (
  <div className="flex-col md:flex-row flex items-center mb-4 gap-4 justify-between">
            
            <div className="flex w-full gap-3 grow"> 
              <Input
              placeholder="البحث عن مادة"
              onChange={(event) =>
                  setSearchParams((prev)=>{return {...prev, subject : event.target.value.trim()}})
                }
              className="max-w-sm"
            />
            <Select dir='rtl' name="level" 
                  onValueChange={(value)=>{setSearchParams((prev)=>{return {...prev, level : " " != value ? value : ""}})}}

                  >
                            <SelectTrigger id="level">
                              <SelectValue placeholder="المستوي" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                            <SelectItem value={" "}>كل المستويات</SelectItem>

                              {
                                levels && !levelsFetching ? levels.data.data.map((level)=>{
                                  return  <SelectItem key={level._id} value={level._id}>{level.name}</SelectItem>
                  
                                }) : null
                              }
                  
                            </SelectContent>
                  </Select>
             
             
             </div>
            <div className="flex gap-2">
  
           
             
              <Button  className="h-full bg-green-500 hover:bg-green-700" 
                             onClick={() => {setModal({type: "addSubject",open: true})  }}

              >  
              
              إضافة مادة

               </Button>
            </div>
          </div>
)
}

export default TableHead
