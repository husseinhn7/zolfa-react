/* eslint-disable react/prop-types */
import { AppSidebar } from "@/components/app-sidebar"
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
//   BreadcrumbList,
//   BreadcrumbPage,
//   BreadcrumbSeparator,
// } from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  
} from "@/components/ui/sidebar"
import GlobalLoading from "./featuers/globalLoading"
import logo from "../assets/light-zolfa-removebg-min.webp"

  function Layout({children}) {
  return (
    <SidebarProvider dir="rtl" >
    <GlobalLoading/> 
      <AppSidebar side="right" />
      <SidebarInset className="bg-gray-50 flex flex-col overflow-hidden" >
        <header className="flex justify-between h-14 shrink-0 items-center gap-2 border-b px-4 sticky top-0 bg-white rounded-lg customShadow m-1 md:m-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
           
          <img  src={logo} className=" w-12 -ml-0"   />
        </header>
        <div className='pr-2 pl-6 pb-3   w-full mx-2 h-[calc(100vh-5.5rem)] flex justify-center flex-col items-center  bg-gray-50 '>

          {children}
        </div>
         
       
      </SidebarInset>
    </SidebarProvider>
  )
}

 
export default Layout
