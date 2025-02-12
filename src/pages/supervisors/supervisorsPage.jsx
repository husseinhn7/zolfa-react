 import TableHead from "./components/tableHead";
 import SupervisorRow from "./components/supervisorRow";
import PaginationComponent from "../../components/pagination";
import useTable from "../../hooks/table";
import { useGetApiQuery } from "../../store/apiSlice";
import ErrorHandler from "../../components/errorHandler";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const SupervisorsPage = () => {
  const [Table] = useTable()
  const [params] = useSearchParams()
  const [admin, setAdmin] = useState("")
  const currentPage = parseInt(params.get("page"))  || 1
  const {data, isFetching, error, isError} = useGetApiQuery({url:`/admin?limit=10&page=${currentPage}&name=${admin}`})
  return (
      <div className="w-full min-w-full max-w-[calc(100vw-6rem)] bg-white p-4 rounded-lg border customShadow h-full flex flex-col  overflow-x-scroll">
          <TableHead setAdmin={setAdmin} />
          <ErrorHandler data={data} isFetching={isFetching} error={error}>
            {
             ( data && !isError) && <>   
              <Table data={data.data.results} head={["", "الإسم الأول ", "الإسم الأخير", "البريد الإلكتروني"]} Row={SupervisorRow} />
              <div className="flex items-center justify-between space-x-2 pt-4">
                  <PaginationComponent
                    currentPage={data.data.currentPage}
                    totalPages={data.data.totalPages}
                    onPageChange={(page) => console.log("Go to page:", page)}
                    url={"/supervisors?page="}
                  />
                </div>
                </>
              }
          </ErrorHandler>
      </div>

  )

}

export default SupervisorsPage
