import TableHead from './components/tableHead';
import useTable from '../../hooks/table';
import IntakeRow from './components/intakeRow';
import PaginationComponent from '../../components/pagination';
const subjects = [
    { name: "Mathematics", level: 1 },
    { name: "Physics", level: 2 },
    { name: "Chemistry", level: 3 },
    { name: "Biology", level: 1 },
    { name: "Computer Science", level: 4 },
    { name: "History", level: 2 },
    { name: "Geography", level: 3 },
    { name: "English Literature", level: 1 },
    { name: "Economics", level: 4 },
    { name: "Psychology", level: 2 },
  ];
  


const IntakesPage = () => {
  const [Table] = useTable()
  return (
    <div className="w-full min-w-full max-w-[calc(100vw-6rem)] bg-white p-4 rounded-lg border customShadow h-full flex flex-col  overflow-x-scroll">
        <TableHead />
        <Table  data={subjects} head={[  "أسم الدفعة","المستوى"]} Row={IntakeRow}        />
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

export default IntakesPage
