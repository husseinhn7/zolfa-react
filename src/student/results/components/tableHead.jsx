
/* eslint-disable react/prop-types */
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
     SelectValue,
  } from "@/components/ui/select"
import { useGetApiQuery } from "../../../store/apiSlice";




const TableHead = ({setSearchParams}) => {
  const { data, isFetching } = useGetApiQuery({url : "/exam"})
  const { data:subjectData, isFetching:dataIsFetching } = useGetApiQuery({url : "/subject"})

return (
  <div className="flex items-center mb-4 gap-4 justify-between w-full">
            
            <div className="flex w-full gap-3  "> 
              
             
            <Select dir='rtl' name="subject"
                  onValueChange={(value)=>{setSearchParams((prev)=>{return {...prev, subject : " " != value ? value : ""}})}}
                  >
                            <SelectTrigger id="subject">
                              <SelectValue placeholder="المادة" />
                            </SelectTrigger>
                            <SelectContent position="popper">
                            <SelectItem value={" "}>كل المواد</SelectItem>
                            {
                              
                              subjectData && !dataIsFetching ? subjectData.data.data.map((subject)=>{
                                return  <SelectItem key={subject._id} value={subject._id}>{subject.name}</SelectItem>
                
                              }) : <SelectItem >load</SelectItem>
                            }
                            </SelectContent>
                  </Select>

                
                  <Select dir='rtl' name="exam"
                  
                    onValueChange={(value)=>{setSearchParams((prev)=>{return {...prev, exam : " " != value ? value : ""}})}}
                    >
                              <SelectTrigger id="exam">
                                <SelectValue placeholder="الإختبار" />
                              </SelectTrigger>
                              <SelectContent position="popper"  >
                              <SelectItem value={" "}>كل الإختبارات</SelectItem>
                              {
                                
                                data && !isFetching ? data.data.data.map((exam)=>{
                                  return  <SelectItem key={exam._id} value={exam._id}>{exam.title}</SelectItem>
                  
                                }) : <SelectItem >load</SelectItem>
                              }
                              </SelectContent>
                    </Select>
                </div> 
          </div>
)
}

export default TableHead
