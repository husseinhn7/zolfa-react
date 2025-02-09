
const Table = ({head, data}) => {
  return (<>
    <div className="max-h-96 overflow-y-auto border border-gray-300 bg-white rounded-lg  max-w-[calc(70vw-6rem)] overflow-auto p-3">
      <table className="w-full border-collapse bg-white">
        {/* Table Head */}
        <thead className="sticky -top-3 -left-3 -mr-3 bg-white ">
          <tr className="border-b border-gray-300">
            {
                head.map((name, index )=>{
                    return (<>
                        <th key={index} className="px-4 py-2 text-right whitespace-nowrap">{name}</th>
                        </>

                    )
                })
            }
          </tr>
        </thead>
        {/* Table Body */}
        <tbody className="overflow-y-auto">
          {data.map((obj, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-200">
                   { head.map((p, index)=>{
                        return <td key={index} className="px-4  py-2 whitespace-nowrap">{obj[`${p}`]}</td>

                    })}

            </tr>
          ))}
        </tbody>
      </table>
    </div>

</>
  )
}

export default Table
