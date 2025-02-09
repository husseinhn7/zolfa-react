


const useTable  = () =>{
    const Table = ({head, data, Row }) => {
        return (<>
          <div className=" border border-gray-300 bg-white rounded-lg  max-w-full overflow-auto p-3 pt-0 grow">
            <table className="w-full border-collapse bg-white text-sm text-gray-700">
              {/* Table Head */}
              <thead className="sticky top-0 left-0  bg-white z-50 text-md text-gray-900 ">
                <tr className="border-b border-gray-300">
                  {
                      head.map((name, index )=>{
                          return (<>
                                    <th key={index} className="pl-5 py-2  whitespace-nowrap text-right">{name}</th>
                                 </>
      
                          )
                      })
                  }
                </tr>
              </thead>
              {/* Table Body */}
              <tbody className="overflow-y-auto">
                {data.map((obj, index) => (
                  <Row key={index}  data = {obj}  />
                
                ))}
              </tbody>
            </table>
          </div>
      
      </>
        )
      }
      return [ Table,  ]
}


export default useTable