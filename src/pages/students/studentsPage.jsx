import TableHead from "./components/tableHead";
import PaginationComponent from "../../components/pagination";
import useTable from "../../hooks/table";
import StudentRow from "./components/studentRow";
import { useGetApiQuery } from "../../store/apiSlice";
import ErrorHandler from "../../components/errorHandler";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";


const StudentsPage = () => {
  const [searchParams, setSearchParams] = useState({
      student : "",
      level : "", 
      intake: ""
    }) 
  const [Table] = useTable()
  const [params] = useSearchParams()
  const currentPage = parseInt(params.get("page"))  || 1
  const {data, isFetching, error, isError} = useGetApiQuery({url:`/student?limit=10&page=${currentPage}&name=${searchParams.student}&intake=${searchParams.intake}&level=${searchParams.level}`, tag : "student"})
    return (
      <div className="w-full min-w-full max-w-[calc(100vw-6rem)] bg-white p-4 rounded-lg border customShadow h-full flex flex-col  overflow-x-scroll">
          <TableHead  setSearchParams = {setSearchParams}  />
          <ErrorHandler data={data} isFetching={isFetching} error={error}>
            {
             ( data && !isError) && <>   
                <Table data={data.data.results} head={["", "الإسم الأول", "الإسم الاخير", "البريد الإلكتروني", "الدفعة", "المستوي"]} Row={StudentRow} />
                <div className="flex items-center justify-between space-x-2 pt-4">
                    <PaginationComponent
                      currentPage={currentPage}
                      totalPages={data.data.totalPages}
                      url={"/students?page="}
                    />
                  </div>
            </>
              }
          </ErrorHandler>
      </div>

  )
}

export default StudentsPage
