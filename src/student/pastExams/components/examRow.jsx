
import { formatDate } from "../../../lib/commonUtils"

const ExamRow = (data) =>{
     return <tr className="border-b border-gray-200 hover:bg-gray-200 h-10">

              <td className="pl-4    whitespace-nowrap  " >{data.data.exam.title}</td>
              <td className="pl-4    whitespace-nowrap" >{data.data.exam.subject.name}</td>
              <td className="pl-4    whitespace-nowrap" >{formatDate(data.data.startDate)}</td>
              <td className="pl-4    whitespace-nowrap" >{formatDate(data.data.endDate)}</td>
 
              <td className="pl-4    whitespace-nowrap" >
  
              </td>
    </tr>
  
  }

export default ExamRow
