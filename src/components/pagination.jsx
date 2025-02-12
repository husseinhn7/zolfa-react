/* eslint-disable react/prop-types */
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination";
  
 function PaginationComponent({ currentPage, totalPages, onPageChange, url }) {
    const getPageNumbers = () => {
      const pages = [];
      const maxPagesToShow = 5;
  
      if (totalPages <= maxPagesToShow) {
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        if (currentPage <= 3) {
          pages.push(1, 2, 3, "...", totalPages);
        } else if (currentPage >= totalPages - 2) {
          pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
        } else {
          pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
        }
      }
      return pages;
    };
  
    return ( <> 
                {
                  totalPages > 0 ?
                
        <Pagination>
          <PaginationContent className="h-4">
            <PaginationItem >
              <PaginationPrevious
              className=" h-8 w-8 text-center"
                to={currentPage-1 > 0 ? url + `${currentPage-1}` : currentPage }
                onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
              />
            </PaginationItem>
            {getPageNumbers().map((page, index) => (
              <PaginationItem   className = " p-0 h-8 w-8" key={index}>
                {page === "..." ? (
                  <PaginationEllipsis />
                ) : (
                  <PaginationLink
                    className = " p-0 h-8 w-8"
                    to={url+`${page}`}
                    isActive={currentPage === page}
                    onClick={() => onPageChange(page)}
                  >
                    {page}
                  </PaginationLink>
                )}
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                className="  h-8 w-8 text-center"

                to={currentPage+1 <= totalPages ? url + `${currentPage+1}` : currentPage }
                onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination> : <></>
        
        }
      </>
    );
  }
  

export default PaginationComponent











/* eslint-disable react/prop-types */
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

// function PaginationComponent({ currentPage, totalPages, onPageChange }) {
//   const getPageNumbers = () => {
//     const pages = [];
//     const maxPagesToShow = window.innerWidth < 640 ? 3 : 5; // Adjust for mobile

//     if (totalPages <= maxPagesToShow) {
//       for (let i = 1; i <= totalPages; i++) {
//         pages.push(i);
//       }
//     } else {
//       if (currentPage <= 2) {
//         pages.push(1, 2, "...", totalPages);
//       } else if (currentPage >= totalPages - 1) {
//         pages.push(1, "...", totalPages - 1, totalPages);
//       } else {
//         pages.push(1, "...", currentPage, "...", totalPages);
//       }
//     }
//     return pages;
//   };

//   return (
//     <Pagination className="flex flex-wrap justify-center gap-1 sm:gap-2 py-2">
//       <PaginationContent className="flex items-center gap-1 sm:gap-2">
//         <PaginationItem>
//           <PaginationPrevious
//             className="h-8 w-8 text-center text-sm sm:text-base"
//             to="#"
//             onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//           />
//         </PaginationItem>
//         {getPageNumbers().map((page, index) => (
//           <PaginationItem key={index}>
//             {page === "..." ? (
//               <PaginationEllipsis />
//             ) : (
//               <PaginationLink
//                 className="h-8 w-8 p-0 text-sm sm:text-base"
//                 href="#"
//                 isActive={currentPage === page}
//                 onClick={() => onPageChange(page)}
//               >
//                 {page}
//               </PaginationLink>
//             )}
//           </PaginationItem>
//         ))}
//         <PaginationItem>
//           <PaginationNext
//             className="h-8 w-8 text-center text-sm sm:text-base"
//             href="#"
//             onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           />
//         </PaginationItem>
//       </PaginationContent>
//     </Pagination>
//   );
// }

// export default PaginationComponent;
