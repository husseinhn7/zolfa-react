
import TableHead from './components/tableHead';
import useTable from '../../hooks/table';
import LevelRow from './components/levelRow';
import PaginationComponent from '../../components/pagination';
const subjects = [
    { name: "Mathematics",startDate: 1 },
    { name: "Physics",startDate: 2 },
    { name: "Chemistry",startDate: 3 },
    { name: "Biology",startDate: 1 },
    { name: "Computer Science",startDate: 4 },
    { name: "History",startDate: 2 },
    { name: "Geography",startDate: 3 },
    { name: "English Literature",startDate: 1 },
    { name: "Economics",startDate: 4 },
    { name: "Psychology",startDate: 2 },
  ];
  

const LevelsPage = () => {
  const [Table] = useTable()
  return (
   
    <div className="w-full min-w-full max-w-[calc(100vw-6rem)] bg-white p-4 rounded-lg border customShadow h-full flex flex-col  overflow-x-scroll">
    <TableHead />
    <Table  data={subjects} head={[  "اسم المستوى","التاريخ"]} Row={LevelRow}        />
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

export default LevelsPage
