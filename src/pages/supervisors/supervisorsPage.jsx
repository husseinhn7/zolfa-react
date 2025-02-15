 import TableHead from "./components/tableHead";
 import SupervisorRow from "./components/supervisorRow";
import PaginationComponent from "../../components/pagination";
import useTable from "../../hooks/table";
import { useGetApiQuery } from "../../store/apiSlice";
import ErrorHandler from "../../components/errorHandler";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SupervisorsPage = () => {
  const [Table] = useTable()
  const [params] = useSearchParams()
   const [limit, setLimit] = useState(9)
    const calculateLimit = () => {
      const viewportHeight = window.innerHeight;
      const availableHeight = viewportHeight - 230
      const newLimit = Math.floor(availableHeight / 44);
      setLimit(newLimit > 0 ? newLimit : 1);  
    };
    useEffect(() => {
      calculateLimit();
      window.addEventListener("resize", calculateLimit);  
  
      return () => {
        window.removeEventListener("resize", calculateLimit);
      };
    }, []);
  const [admin, setAdmin] = useState("")
  const currentPage = parseInt(params.get("page"))  || 1
  const {data, isFetching, error, isError} = useGetApiQuery({url:`/admin?limit=${limit}&page=${currentPage}&name=${admin}`})
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
