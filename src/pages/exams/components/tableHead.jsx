
/* eslint-disable react/prop-types */
  import { ChevronDown } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
     SelectValue,
  } from "@/components/ui/select"
import { useGetApiQuery } from "../../../store/apiSlice";




const TableHead = ({setSearchParams, exam , search}) => {
  const { data, isFetching } = useGetApiQuery({url : "/subject"})
  
  return (
    <div className=" md:flex-row flex-col flex  items-center mb-4 gap-4 justify-between">
              <div className="flex w-full gap-3 md:w-2/3 "> 
              
             
                <Input
                  placeholder="البحث عن إختبار"
                  value={exam}
                  onChange={(event) =>
                    setSearchParams((prev)=>{return {...prev, exam : event.target.value.trim()}})
                  }
                  className="max-w-sm grow"
                />
                 <Select dir='rtl' name="subject"
                  onValueChange={(value)=>{setSearchParams((prev)=>{return {...prev, subject : " " != value ? value : ""}})}}
                  >
                            <SelectTrigger id="subject">
                              <SelectValue placeholder="المادة" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                            <SelectItem value={" "}>كل المواد</SelectItem>
                            {
                              
                              data && !isFetching ? data.data.data.map((subject)=>{
                                return  <SelectItem key={subject._id} value={subject._id}>{subject.name}</SelectItem>
                
                              }) : <SelectItem >load</SelectItem>
                            }
                            </SelectContent>
                  </Select>
                {/* <Button 
                onClick = {()=>{search()}}
                 variant="outline">بحث</Button> */}
              </div>
    
             
               
                <Button  className="h-full bg-green-500 hover:bg-green-700 w-full md:w-auto" >  
                <Link to="/add-exam">
               إضافة إختبار
               </Link>
                 </Button>
            </div>
  )
}

export default TableHead
