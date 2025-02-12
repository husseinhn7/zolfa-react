
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




const TableHead = ({setSearchParams, exam}) => {
  const { data, isFetching } = useGetApiQuery({url : "/exam"})

return (
  <div className="flex items-center mb-4 gap-4 justify-between w-full">
            
            <div className="flex w-full gap-3  "> 
              
             
                <Input
                  placeholder="البحث عن طالب"
                  value={exam}
                  onChange={(event) =>
                    setSearchParams((prev)=>{return {...prev, student : event.target.value.trim()}})
                  }
                  className=" w-3/4  grow-[2]"
                />
                <div
                  className = "w-1/3  "

                >

                
                  <Select dir='rtl' name="exam"
                  
                    onValueChange={(value)=>{setSearchParams((prev)=>{return {...prev, exam : " " != value ? value : ""}})}}
                    >
                              <SelectTrigger id="exam">
                                <SelectValue placeholder="الإختبار" />
                              </SelectTrigger>
                              <SelectContent position="popper" className="w-1/4">
                              <SelectItem value={" "}>كل الإختبارات</SelectItem>
                              {
                                
                                data && !isFetching ? data.data.data.map((exam)=>{
                                  return  <SelectItem key={exam._id} value={exam._id}>{exam.title}</SelectItem>
                  
                                }) : <SelectItem >load</SelectItem>
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
