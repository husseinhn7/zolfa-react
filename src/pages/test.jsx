
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
import  PaginationComponent  from '../components/pagination'
import Exams from '../components/customTable'
import Layout from '../components/layout'

import useModal from '../hooks/modal'
import AddQuestionModal from './addExam/components/addQuestionModal'
import ExamWizard from "./addExam/components/examWizard"
import ExamDetailsForm from "./addExam/components/examDetailsForm"
import ExamQuestionsForm from "./addExam/components/examQuestionsForm"
import { useState } from "react"
import { AccordionDemo } from "../components/ac"
import { FaTelegram } from "react-icons/fa";
import { Switch } from "@/components/ui/switch"
import GlobalLoading from "../components/featuers/globalLoading"
// import Table from "../components/table"
import useTable from "../hooks/table"
// import { Button } from "react-day-picker"
import { BiSolidEdit } from "react-icons/bi";


const Test = () => {


  return (
            <div className="flex flex-col border w-full h-full gap-5">
                    <div className="flex w-full customShadow rounded-lg bg-white p-3"  > 
                        <img src="https://randomuser.me/api/portraits/men/1.jpg" className=" w-20 h-20 rounded-full" />
                        <div  className=" flex flex-col mx-4  justify-center">
                           <h1 className=" text-2xl">Ahmed Abdo</h1>
                           <h5>supervisor</h5>
                        </div>
                        <div className=" grow">

                        </div>
                        <div className="h-full flex items-center justify-center self-start">
                            <Button className = "w-40"> update    <BiSolidEdit  className="text-white"/>  </Button>


                        </div>
                    
                    
                    </div>


            </div>

      );
}

export default Test
