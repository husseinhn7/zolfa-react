import TableHead from './components/tableHead';
import useTable from '../../hooks/table';
import IntakeRow from './components/intakeRow';
import PaginationComponent from '../../components/pagination';
import { useGetApiQuery } from "../../store/apiSlice";
import ErrorHandler from "../../components/errorHandler";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from 'react';
 


const IntakesPage = () => {
   const [searchParams, setSearchParams] = useState({
        intake : "",
        level : ""
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
  const {data, isFetching, error, isError} = useGetApiQuery({url:`/intake?limit=${limit}&page=${currentPage}&name=${searchParams.intake}&level=${searchParams.level}`, tag:"intake"})
  return (
    <div className="w-full min-w-full max-w-[calc(100vw-6rem)] bg-white p-4 rounded-lg border customShadow h-full flex flex-col  overflow-x-scroll">
        <TableHead setSearchParams = {setSearchParams} />
        <ErrorHandler data={data} isFetching={isFetching} error={error}>
            {
             ( data && !isError) && <>           
              <Table  data={data.data.data} head={[  "أسم الدفعة","المستوى"]} Row={IntakeRow}        />
              <div className="flex items-center justify-between space-x-2 pt-4">
                    <PaginationComponent
                      currentPage={5}
                      totalPages={data.data.totalPages}
                    />
                  </div>
                  </>
              }
          </ErrorHandler>
      </div>
  )
}

export default IntakesPage
