
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
import { Label } from "@/components/ui/label"
import ScoresPage from "../student/results/resultesPage"



import { Users, Book, ClipboardList, GraduationCap, Shield, Settings } from "lucide-react";


import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Lock, User, Bell, LogOut } from "lucide-react";
import { Badge } from "@/components/ui/badge";
// import {  FileText, BookOpen, Layers, BarChart PlusCircle } from "lucide-react";
// import { ResponsiveContainer, Bar, Line, XAxis, YAxis, Tooltip, CartesianGrid, ComposedChart, LineChart } from "recharts";

const Test = () => {

  const { students, exams, intakes, levels, subjects, admins } = { students : 4, exams : 4, intakes : 4, levels : 4, subjects : 4, admins:9 }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <Card className="max-w-md w-full bg-white shadow-lg">
        <CardHeader className="text-center">
          <h2 className="text-xl font-bold text-gray-800">Submit Exam?</h2>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 text-lg mb-2">
            You have answered <strong>{222222222}</strong> out of <strong>{222222222}</strong> questions.
          </p>
          <p className="text-gray-600">Are you sure you want to submit your exam?</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="secondary" onClick={null}>Cancel</Button>
          <Button className="bg-red-600 text-white" onClick={null}>Submit Exam</Button>
        </CardFooter>
      </Card>
    </div>)
}

const summaryData = [
  { title: "Students", count: 150, icon: <Users size={24} /> },
  { title: "Exams", count: 24, icon: <ClipboardList size={24} /> },
  { title: "Subjects", count: 12, icon: <Book size={24} /> },
  { title: "Intakes", count: 5, icon: <GraduationCap size={24} /> },
];

const quickActions = [
  { label: "Manage Exams", icon: <ClipboardList size={18} /> },
  { label: "Manage Students", icon: <Users size={18} /> },
  { label: "Manage Intakes", icon: <GraduationCap size={18} /> },
  { label: "Manage Subjects", icon: <Book size={18} /> },
  { label: "Manage Admins", icon: <Shield size={18} /> },
  { label: "Settings", icon: <Settings size={18} /> },
];


export default Test
