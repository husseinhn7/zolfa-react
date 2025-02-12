
/* eslint-disable react/prop-types */
import { Input } from "@/components/ui/input";



const TableHead = ({setAdmin}) => {
return (
  <div className="flex items-center mb-4 gap-4 justify-between">
            
            <div className="flex w-full gap-3   md:w-1/2 ">
                  <Input
                   placeholder="البحث عن مشرف"
                  className="w-full"
                  onChange={(event) =>
                    setAdmin( event.target.value.trim())
                }
                />
                
                
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
              <Button  className="h-full bg-green-500 hover:bg-green-700" >  
              
              إضافة مشرف

               </Button>
            </div> */}
          </div>
)
}

export default TableHead
