import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Checkbox } from "@/components/ui/checkbox"
  import { Separator } from "@/components/ui/separator"

  
  
  
  import { Button } from "@/components/ui/button"
  
const AddSupervisorModal= () => {
  return (


    <div className="flex flex-col p-2 gap-4" dir="rtl">
                    <h1 className=" w-full text-center text-lg">  
                    تعيين مشرف
                    </h1>
                    <h6 className=" w-full text-center text-xs -mt-3">

                        إضافة صلاحيات المشرف
                    </h6>
                      <Separator />
                    <div className=' w-full    '>  
                            <div  className="flex flex-col gap-3 p-2 mb-2" dir="rtl">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" className="mx-4" />
                                    <label
                                    htmlFor="terms"
                                    className="text-sm font-medium mx-4"
                                    >
                                    Accept terms and conditions
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" className="mx-4" />
                                    <label
                                    htmlFor="terms"
                                    className="text-sm font-medium mx-4"
                                    >
                                    Accept terms and conditions
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" className="mx-4" />
                                    <label
                                    htmlFor="terms"
                                    className="text-sm font-medium mx-4"
                                    >
                                    Accept terms and conditions
                                    </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" className="mx-4" />
                                    <label
                                    htmlFor="terms"
                                    className="text-sm font-medium mx-4"
                                    >
                                    Accept terms and conditions
                                    </label>
                                </div>
                
                
                
                
                            </div>
                    
                    <Separator />
                    <DialogClose  className=" w-full flex justify-between mt-2 "> 
                        <Button variant="outline" className="h-8 text-xs w-1/4"> 
                               إلغاء
                        </Button>
                        <Button className="w-1/4 h-8 text-xs bg-green-500 hover:bg-green-600">
                              حفظ
                        </Button>
                    
                    </DialogClose>
        
                    
        
        
                    </div>
              </div>
      
    
  )
}

export default AddSupervisorModal
