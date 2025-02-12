
/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import useModal from "../../../hooks/modal";
 

const TableHead = ({setLevel}) => {
  const [setModal] = useModal()
return (
  <div className="flex items-center mb-4 gap-4 justify-between">
            
            <div className="flex w-full gap-3 grow   "> 
            <Input
              placeholder="البحث عن مستوى"
              onChange={(event) =>
                  setLevel( event.target.value.trim())
                }
              className="  w-full"
            />
             
             </div>
            <div className="flex gap-2">
            
  
           
              {/* <DropdownMenu>
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
                    ))} }
                </DropdownMenuContent>
              </DropdownMenu>*/ }
              <Button 
                  onClick={() => {setModal({type: "addLevel",open: true  })}}

               className="h-full bg-green-500 hover:bg-green-700" >  
              
              إضافة مستوي

               </Button>
            </div>
          </div>
)
}

export default TableHead
