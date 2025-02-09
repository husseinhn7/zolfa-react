
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
import GlobalLoading from "../components/globalLoading"
// import Table from "../components/table"
import useTable from "../hooks/table"





import { Button } from "@/components/ui/button"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"


const data = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@gmail.com",
  }

  
]

 

export const columns = [
//   {
//     // id: "select",
//     // header: ({ table }) => (
//     //   <div className=' flex items-end '>
//     //   <Checkbox
//     //   dir="rtl"
//     //     className="bg-gray-700 ml-auto"
//     //     checked={
//     //       table.getIsAllPageRowsSelected() ||
//     //       (table.getIsSomePageRowsSelected() && "indeterminate")
//     //     }
//     //     onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//     //     aria-label="Select all"
//     //   /></div>
//     // ),
//     // cell: ({ row }) => (
//     //   <div className=' flex items-end '>
//     //   <Checkbox
//     //     checked={row.getIsSelected()}
//     //     onCheckedChange={(value) => row.toggleSelected(!!value)}
//     //     aria-label="Select row"
//     //   /></div>
//     // ),
//     // enableSorting: false,
//     // enableHiding: false,
//   },
  {
    accessorKey: "status",
    header: <div className="capitalize text-right -mr-3">Status</div>,
    cell: ({ row }) => (
      <div className="capitalize bg-">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <div className=' flex items-end -mr-7 '>

        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown />
        </Button>
        </div>
      )
    },
    cell: ({ row }) => <div className="lowercase ">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right -mr-3">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]


const users = [
  { id: 1, firstName: "John", lastName: "Doe", email: "john.doe@example.com" },
  { id: 2, firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com" },
  { id: 3, firstName: "Alice", lastName: "Johnson", email: "alice.johnson@example.com" },
  { id: 4, firstName: "Bob", lastName: "Brown", email: "bob.brown@example.com" },
  { id: 5, firstName: "Charlie", lastName: "Davis", email: "charlie.davis@example.com" },
  { id: 6, firstName: "Emily", lastName: "Clark", email: "emily.clark@example.com" },
  { id: 7, firstName: "David", lastName: "White", email: "david.white@example.com" },
  { id: 8, firstName: "Sophia", lastName: "Hall", email: "sophia.hall@example.com" },
  { id: 9, firstName: "Michael", lastName: "Adams", email: "michael.adams@example.com" },
  { id: 10, firstName: "Olivia", lastName: "Lewis", email: "olivia.lewis@example.com" },
];



const users2 = [
  {
    firstName: "John",
    lastName: "Doe",
    level: 3,
    intake: "Spring 2024",
    email: "john.doe@example.com",
    personalImage: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    firstName: "Alice",
    lastName: "Smith",
    level: 2,
    intake: "Fall 2023",
    email: "alice.smith@example.com",
    personalImage: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    firstName: "Michael",
    lastName: "Johnson",
    level: 4,
    intake: "Winter 2022",
    email: "michael.johnson@example.com",
    personalImage: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    firstName: "Emma",
    lastName: "Brown",
    level: 1,
    intake: "Summer 2024",
    email: "emma.brown@example.com",
    personalImage: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    firstName: "David",
    lastName: "Williams",
    level: 5,
    intake: "Spring 2022",
    email: "david.williams@example.com",
    personalImage: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    firstName: "Sophia",
    lastName: "Garcia",
    level: 3,
    intake: "Fall 2021",
    email: "sophia.garcia@example.com",
    personalImage: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    firstName: "James",
    lastName: "Martinez",
    level: 2,
    intake: "Winter 2023",
    email: "james.martinez@example.com",
    personalImage: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    firstName: "Olivia",
    lastName: "Rodriguez",
    level: 4,
    intake: "Summer 2022",
    email: "olivia.rodriguez@example.com",
    personalImage: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    firstName: "William",
    lastName: "Hernandez",
    level: 1,
    intake: "Spring 2023",
    email: "william.hernandez@example.com",
    personalImage: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    firstName: "Mia",
    lastName: "Lopez",
    level: 5,
    intake: "Fall 2022",
    email: "mia.lopez@example.com",
    personalImage: "https://randomuser.me/api/portraits/women/10.jpg",
  },
];


const UserRow = (data) =>{
  console.log(data.data)
  return <tr className="border-b border-gray-200 hover:bg-gray-200">
            <td className="pl-4  py-2 whitespace-nowrap" >


            <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={data.data.personalImage} alt={"userImage"} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
            </td>
            <td className="pl-4  py-2  whitespace-nowrap bg-slate-100 " >{data.data.firstName}</td>

            <td className="pl-4  py-2  whitespace-nowrap" >{data.data.lastName}</td>

            <td className="pl-4  py-2  whitespace-nowrap" >{data.data.email}</td>

            {/* <td className="pl-4  py-2  whitespace-nowrap" ></td> */}
            <td className="pl-4  py-2  whitespace-nowrap" >

            <DropdownMenu dir="rtl">
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                    الخيارات
                </DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                     إزالة الطالب
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                >

التعيين كمشرف 
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => navigator.clipboard.writeText(payment.id)}
                >
                     إزالة الطالب
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {/* <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>
            </td>




  </tr>

}






const Test = () => {
  const [setModal] = useModal()
  const [step, setStep] = useState(1)
  const [Table] =useTable()

  return (
            <Table data={users2} head={["avatar", "firstName", "lastName", "email"]} Row={UserRow} />


      );
}

export default Test
