
import TableHead from './components/tableHead';
import useTable from '../../hooks/table';
import LevelRow from './components/levelRow';
import PaginationComponent from '../../components/pagination';
import { useGetApiQuery } from "../../store/apiSlice";
import ErrorHandler from "../../components/errorHandler";
import { useSearchParams } from "react-router-dom";
import { useState } from 'react';

const LevelsPage = () => {
  const [Table] = useTable()
  const [level, setLevel] = useState("")

  const [params] = useSearchParams()
  const currentPage = parseInt(params.get("page"))  || 1
  const {data, isFetching, error, isError} = useGetApiQuery({url:`/level?limit=10&page=${currentPage}&name=${level}`, tag:"level"})
  console.log(data)
  return (
   
    <div className="w-full min-w-full max-w-[calc(100vw-6rem)] bg-white p-4 rounded-lg border customShadow h-full flex flex-col  overflow-x-scroll">


    <TableHead setLevel = {setLevel} />
          <ErrorHandler data={data} isFetching={isFetching} error={error}>
            {
             ( data && !isError) && <>    
                <Table  data={data.data.data} head={[  "اسم المستوى","تاريخ البدء " ,"تاريخ الإنتهاء"]} Row={LevelRow}        />
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

export default LevelsPage
