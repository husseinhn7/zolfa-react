import TableHead from "./components/tableHead";
import useTable from "../../hooks/table";
import ExamRow from "./components/examRow";
import PaginationComponent from "../../components/pagination";
const exams = [
  {
    id: "ex1",
    title: "Mathematics Final Exam",
    subject: "Mathematics",
    date: "2025-05-10"
  },
  {
    id: "ex2",
    title: "Physics Midterm",
    subject: "Physics",
    date: "2025-04-15"
  },
  {
    id: "ex3",
    title: "Chemistry Lab Test",
    subject: "Chemistry",
    date: "2025-06-01"
  },
  {
    id: "ex4",
    title: "History Assessment",
    subject: "History",
    date: "2025-03-20"
  },
  {
    id: "ex5",
    title: "Biology Practical",
    subject: "Biology",
    date: "2025-07-12"
  },
  {
    id: "ex6",
    title: "English Literature Quiz",
    subject: "English",
    date: "2025-05-25"
  },
  {
    id: "ex7",
    title: "Computer Science Coding Test",
    subject: "Computer Science",
    date: "2025-06-18"
  }
  ,
  {
    id: "ex3",
    title: "Chemistry Lab Test",
    subject: "Chemistry",
    date: "2025-06-01"
  },
  {
    id: "ex4",
    title: "History Assessment",
    subject: "History",
    date: "2025-03-20"
  },
  {
    id: "ex5",
    title: "Biology Practical",
    subject: "Biology",
    date: "2025-07-12"
  },
  {
    id: "ex6",
    title: "English Literature Quiz",
    subject: "English",
    date: "2025-05-25"
  },
  {
    id: "ex7",
    title: "Computer Science Coding Test",
    subject: "Computer Science",
    date: "2025-06-18"
  }  ,
  {
    id: "ex3",
    title: "Chemistry Lab Test",
    subject: "Chemistry",
    date: "2025-06-01"
  },
  {
    id: "ex4",
    title: "History Assessment",
    subject: "History",
    date: "2025-03-20"
  },
  {
    id: "ex5",
    title: "Biology Practical",
    subject: "Biology",
    date: "2025-07-12"
  },
  {
    id: "ex6",
    title: "English Literature Quiz",
    subject: "English",
    date: "2025-05-25"
  },
  {
    id: "ex7",
    title: "Computer Science Coding Test",
    subject: "Computer Science",
    date: "2025-06-18"
  }
  ,
  {
    id: "ex3",
    title: "Chemistry Lab Test",
    subject: "Chemistry",
    date: "2025-06-01"
  },
  {
    id: "ex4",
    title: "History Assessment",
    subject: "History",
    date: "2025-03-20"
  },
  {
    id: "ex5",
    title: "Biology Practical",
    subject: "Biology",
    date: "2025-07-12"
  },
  {
    id: "ex6",
    title: "English Literature Quiz",
    subject: "English",
    date: "2025-05-25"
  },
  {
    id: "ex7",
    title: "Computer Science Coding Test",
    subject: "Computer Science",
    date: "2025-06-18"
  }  ,
  {
    id: "ex3",
    title: "Chemistry Lab Test",
    subject: "Chemistry",
    date: "2025-06-01"
  },
  {
    id: "ex4",
    title: "History Assessment",
    subject: "History",
    date: "2025-03-20"
  },
  {
    id: "ex5",
    title: "Biology Practical",
    subject: "Biology",
    date: "2025-07-12"
  },
  {
    id: "ex6",
    title: "English Literature Quiz",
    subject: "English",
    date: "2025-05-25"
  },
  {
    id: "ex7",
    title: "Computer Science Coding Test",
    subject: "Computer Science",
    date: "2025-06-18"
  }
];




const ExamsPage = () => {
  const [Table] = useTable()


  return (
      <div className="w-full min-w-full max-w-[calc(100vw-6rem)] bg-white p-4 rounded-lg border customShadow h-full flex flex-col  overflow-x-scroll">
        <TableHead />
        <Table  data={exams} head={["عنوان الإختبار", "المادة", "التاريخ"]} Row={ExamRow}        />
        <div className="flex items-center justify-between space-x-2 pt-4">
              <PaginationComponent
                currentPage={5}
                totalPages={10}
                onPageChange={(page) => console.log("Go to page:", page)}
              />
            </div>
      </div>
  )
}

export default ExamsPage
