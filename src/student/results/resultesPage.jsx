import TableHead from "./components/tableHead";
import PaginationComponent from "../../components/pagination";
import useTable from "../../hooks/table";
import ScoreRow from "./components/scoreRow";
import { useGetApiQuery } from "../../store/apiSlice";
import ErrorHandler from "../../components/errorHandler";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const StudentResults = () => {
  const [searchParams, setSearchParams] = useState({
    student : "",
    exam : ""
  }) 
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
  const [Table] = useTable()
  const [params] = useSearchParams()
  const currentPage = parseInt(params.get("page"))  || 1
  const {data, isFetching, error, isError} = useGetApiQuery({url:`/student/scores?limit=${limit}&page=${currentPage}&name=${searchParams.student}&exam=${searchParams.exam}`, tag:"answer"})
   return (
      <div className="w-full min-w-full max-w-[calc(100vw-6rem)] bg-white p-4 rounded-lg border customShadow h-full flex flex-col  overflow-x-scroll">
          <TableHead setSearchParams = {setSearchParams}  />
          <ErrorHandler data={data} isFetching={isFetching} error={error}>
            {
             ( data && !isError) && <> 
             {
                  data.data.totalPages === 0 ? <div className="h-full w-full  flex items-center justify-center"> 
                  لايوجد نتائج متاحة
                  </div> : 

                <> 
          <Table data={data.data.results} head={[   "الإختبار", "الدرجة" ,"النتيجة"]} Row={ScoreRow} />
          <div className="flex items-center justify-between space-x-2 pt-4">
              <PaginationComponent
                currentPage={currentPage}
                totalPages={data.data.totalPages}
                url={"/results?page="}
              />
            </div>
            </>
            }
            </>
              }
          </ErrorHandler>
      </div>

  )
}

export default StudentResults
