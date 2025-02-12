
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
import { useGetApiQuery } from "../../../store/apiSlice";
import { Link } from "react-router-dom";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
     SelectValue,
  } from "@/components/ui/select"




const TableHead = ({setSearchParams, exam}) => {
      const { data : intakes, isFetching:intakeFetching } = useGetApiQuery({url : "/intake"})
      const { data: levels, isFetching : levelsFetching } = useGetApiQuery({url : "/level"})
  

return (
  <div className="flex items-center mb-4 gap-4 justify-between w-full">
            
            <div className="flex w-full gap-3  "> 
              
             
              <Input
                placeholder="البحث عن طالب"
                value={exam}
                onChange={(event) =>
                  setSearchParams((prev)=>{return {...prev, student : event.target.value.trim()}})
                }
                className=" w-3/4   "
              />
              <div
                className = " flex gap-2 w-3/4  "

              >

              
                 <Select dir='rtl' name="intake"
                  onValueChange={(value)=>{setSearchParams((prev)=>{return {...prev, intake : " " != value ? value : ""}})}}>

                           <SelectTrigger id="intake">
                             <SelectValue placeholder="الدفعة" />
                           </SelectTrigger>
                           <SelectContent position="popper">
                           <SelectItem value={" "}>كل الدفعات</SelectItem>

                           {
                             intakes && !intakeFetching ? intakes.data.data.map((intake)=>{
                               return  <SelectItem key={intake._id} value={intake._id}>{intake.name}</SelectItem>
               
                             }) : null
                           }
                           </SelectContent>
                         </Select>

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
              {/* <Button 
              onClick = {()=>{search()}}
               variant="outline">بحث</Button> */}
            </div>




            {/* <div className="flex gap-2">
  
           
               <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-auto">
  
                    Columns <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">

                <DropdownMenuCheckboxItem
                      //   key={column.id}
                      //   className="capitalize"
                      //   checked={column.getIsVisible()}
                      //   onCheckedChange={(value) => column.toggleVisibility(!!value)}
                      >
                      hiiiiiiiiii
                      </DropdownMenuCheckboxItem>
                   {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => (
                      <DropdownMenuCheckboxItem
                        key={column.id}
                        className="capitalize"
                        checked={column.getIsVisible()}
                        onCheckedChange={(value) => column.toggleVisibility(!!value)}
                      >
                        {column.id}
                      </DropdownMenuCheckboxItem>
                    ))} 
                </DropdownMenuContent>
              </DropdownMenu> 
             
            </div> */}
          </div>
)
}

export default TableHead
