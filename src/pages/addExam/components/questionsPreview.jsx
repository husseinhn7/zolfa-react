import React from 'react'
 import { Label } from "@/components/ui/label"

import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
 
import {
  AudioWaveform,
  BadgeCheck,
  Bell,
  BookOpen,
  Bot,
  ChevronRight,
  ChevronsUpDown,
  Command,
  CreditCard,
  Folder,
  Forward,
  Frame,
  GalleryVerticalEnd,
  LogOut,
  Map,
  MoreHorizontal,
  PieChart,
  Plus,
  Settings2,
  Sparkles,
  SquareTerminal,
  Trash2,
} from "lucide-react"
import DatePickerDemo from '../../../components/date'
import {ArrowRight} from "lucide-react"
import { Pencil } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ScrollArea } from "@/components/ui/scroll-area"

import { Separator } from "@/components/ui/separator"
 import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useSelector } from 'react-redux'
import { deleteQuestion } from '../../../store/examSlice'
import { useDispatch } from 'react-redux'
import EditQuestionForm from './editQuestionForm'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import useModal from '../../../hooks/modal'




const QuestionsPreview = () => {
  const [setModal] = useModal()
  const dispatcher = useDispatch()
  const selector = useSelector((state)=>state.exam)
  return (
    <div className="w-full   h-full  ">
    <ScrollArea className="p-2  md:m-2  h-full  bg-gray-100 rounded-md border md:p-2">
    <div dir='rtl'>
       <Accordion type="single" collapsible className="w-full flex flex-col gap-2 "  >
          {
            selector.questions.map((question, index)=>{
              return (
                <AccordionItem key={index} className="rounded-lg border px-2 bg-white " value={`item-${index}`}>
                  <AccordionTrigger>{`${question.question} - ${index+1}`}</AccordionTrigger>
                  <AccordionContent>
                    
                  <div className="w-full flex flex-col gap-2  px-4">
                      {
                        question.options.map((option, index)=>{
                          console.log(question.correctOption == option.id)
                          return (
                            <Label
                            key={index} 
                            className={`w-full ${option.id == question.correctOption? "border-blue-600" : "border-gray-300" }   rounded-lg p-2 text-sm  border`}> {option.option}</Label>

                          )
                        })
                      }

                      </div>
                    <div className='w-full flex justify-between items-center mt-2'>
                      <div className='border-gray-300   rounded-lg p-2 text-sm  border'>
                          الدرجة  : {question.mark}

                      </div>
                      <div className='flex justify-between gap-2'>
                      <Button 
                           onClick = {()=>{setModal({type:"f", open:true, props:{index:index}})}}
                          variant="outline" size="icon" className=" border-red-600 w-8 h-8">
                           <Trash2 className=" text-red-600"/>  
                      </Button>
                     
                      <Button
                        onClick = {()=>{setModal({type:"e", open:true, props:{data:question, index:index}})}}
                         variant="outline" size="icon" className=" border-green-600 w-8 h-8">
                        <Pencil className=" text-green-600" />
                      </Button>
                      </div>
                    
                     </div>
                  </AccordionContent>
                </AccordionItem>


              )
          })


          }
    </Accordion>
    </div> 
    </ScrollArea>

      </div>
  )
}

export default QuestionsPreview
