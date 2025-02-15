import { Button } from "@/components/ui/button"
import { formatDate } from "../../../lib/commonUtils"
import { Link } from "react-router-dom"

const ExamRow = (data) =>{
    return <tr className="border-b border-gray-200 hover:bg-gray-200 h-10 ">
              <td className="pl-4    whitespace-nowrap  " >{data.data.title}</td>
              <td className="pl-4    whitespace-nowrap" >{data.data.subject.name}</td>
              <td className="pl-4    whitespace-nowrap" >{formatDate(data.data.startDate)}</td>
              <td className="pl-4    whitespace-nowrap" >{formatDate(data.data.endDate)}</td>
              <td className="pl-4    whitespace-nowrap" >
              <Link
               className="bg-green-600 h-6 text-sm p-2 rounded-lg text-white py-1" 
               
                to = {`/take-exam/${data.data._id}`}
               > بدء الإختبار </Link>
  

              </td>
    </tr>
  
  }

export default ExamRow
