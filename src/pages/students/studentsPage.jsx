import TableHead from "./components/tableHead";
import PaginationComponent from "../../components/pagination";
import useTable from "../../hooks/table";

import StudentRow from "./components/studentRow";
const users = [
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

const StudentsPage = () => {
  const [Table] = useTable()
  return (
      <div className="w-full min-w-full max-w-[calc(100vw-6rem)] bg-white p-4 rounded-lg border customShadow h-full flex flex-col  overflow-x-scroll">
          <TableHead />
          <Table data={users} head={["", "firstName", "lastName", "email", ""]} Row={StudentRow} />
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

export default StudentsPage
