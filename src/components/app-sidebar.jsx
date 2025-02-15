import { PiStudent } from "react-icons/pi";
import { GrDocumentTest } from "react-icons/gr";
import { GrChapterAdd } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { SlBookOpen } from "react-icons/sl";
import { PiBook } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { GrSteps } from "react-icons/gr";
import { SiGoogleclassroom } from "react-icons/si";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarFooter,
  SidebarRail,
  SidebarHeader,
  useSidebar

} from "@/components/ui/sidebar"
import { GrScorecard } from "react-icons/gr";

import { NavUser } from "./userAvatar"
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import useLocalStorage from "../hooks/localstorage";
const items = [
  {
    title: "الإختبارات",
    url: "/exams",
    icon:GrDocumentTest ,
  },
  {
    title: "إضافة إختبار",
    url: "/add-exam",
    icon: GrChapterAdd,
  },
  {
    title: "النتائج",
    url: "/scores",
    icon: GrScorecard,
  },
  {
    title: "الطلاب",
    url: "/students",
    icon: PiStudent,
  },
  {
    title: "الدفع",
    url: "/intakes",
    icon: SiGoogleclassroom,
  },
  {
    title:"المستويات",
    url: "/levels",
    icon: GrSteps,
  },
  {
    title: "المواد",
    url: "/subjects",
    icon: PiBook,
  },
  // {
  //   title: "الدروس",
  //   url: "/lessons",
  //   icon: SlBookOpen,
  // },
  {
    title: "المشرفين",
    url: "/supervisors",
    icon: MdOutlineAdminPanelSettings,
  },
  {
    title: "الصفحة الرئيسية",
    url: "/home",
    icon: IoHomeOutline,
  },
  {
    title: "الإعدادات",
    url: "/settings",
    icon: IoSettingsOutline,
  }
  
]



const studentNavs = [
   {
    title: "الإختبارات المتاحة",
    url: "/next-exams",
    icon: SlBookOpen,
  },
  {
    title: "الإختبارات السابقة",
    url: "/past-exams",
    icon: GrDocumentTest,
  },
  {
    title: " النتائج",
    url: "/results",
    icon: GrScorecard,
  }
]


export function AppSidebar() {
  const [user, setUser] = useLocalStorage("user", {
    firstName: "",
    lastName: "",
    email: "",
    personalImage: "",
  })
  const {pathname} = useLocation()
  const {setOpenMobile} = useSidebar()

  return (

    <Sidebar  className="p-3 border-none bg-gray-50 overflow-hidden"  side="right"   dir="rtl">



    <div className="relative p-2 rounded-lg pt-0  customShadow h-full overflow=y-scroll bg-white">
      <SidebarHeader className="h-16  sticky  left-2 top-0 bg-white z-20 -mx-2 rounded-lg">
      <NavUser user={{
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
          avatar: user.personalImage ? user.personalImage : "/bgg.jpg",
        }} />
      </SidebarHeader>

    
 
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {
              
               ( user.role === "admin" ? items : studentNavs).map((item) => (
                <SidebarMenuItem key={item.title} className={`${ pathname ==item.url ? "bg-gray-200" : ""} rounded-md`}>
                  <SidebarMenuButton asChild onClick = {()=>{setOpenMobile(false)}}>
                    <Link to={item.url}>
                      <item.icon className=" text-2xl"  />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>

       
         
        </SidebarGroup>



      </SidebarContent>
      <SidebarRail />
      </div>
    </Sidebar>

  )
}
