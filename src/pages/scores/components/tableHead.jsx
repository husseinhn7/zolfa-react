
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
 


const TableHead = () => {
return (
  <div className="flex items-center mb-4 gap-4 justify-between w-full">
            
            <div className="flex w-full gap-3 md:w-1/2 ">
                <Button variant="outline">بحث</Button>
                  <Input
                  placeholder="البحث عن دفعة"
                  // value={(table.getColumn("email")?.getFilterValue()) ?? ""}
                  // onChange={(event) =>
                  //   table.getColumn("email")?.setFilterValue(event.target.value)
                  // }
                  className="max-w-sm"
                />
                
                
                  <Button variant="outline">بحث</Button>
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
