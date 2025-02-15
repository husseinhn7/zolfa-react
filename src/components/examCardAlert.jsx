import { Card, CardContent, CardHeader,  CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDate } from "../lib/commonUtils";





const ExamCardAlert = ({data, action}) => {
  return (
    <div className="w-screen h-screen bg-gray-50 flex items-center justify-center"> 
    
    
    
    <div className=" rounded-lg customShadow w-full    md:w-1/2 p-4 bg-white mx-5" dir="rtl">
     <Card className="max-w-2xl w-full shadow-none border-0 ">
          <CardHeader className="text-center">
            <h1 className="text-2xl font-bold">{data.title}</h1>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-lg mb-4"> برجاء القراءة قبل البدء </p>
            <ul className=" list-disc pl-5 text-gray-700 space-y-2">
              <li> سوف يتم بدء الإختبار بعد الضغظ علي زر البدء </li>
              <li> مدة الإختبار هي {data.duration} دقيقة</li>
              <li>  هذا الإختبار لمادة {data.subject.name}</li>
              <li>الاختبار يتكون من {data.questions.length} أسئلة.</li>
              <li> اخر موعد للإختبار هو {formatDate(data.endDate)}</li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-between  space-x-4 ">
            <Button variant="secondary" className=" w-1/3">عودة</Button>
            <Button onClick={()=>action(true)}  className="bg-blue-600 text-white w-1/3" >
                بدء الإختبار
           </Button>
          </CardFooter>
        </Card>
        </div>
        </div>
  )
}

export default ExamCardAlert
