
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import useLocalStorage from "../hooks/localstorage";
import { Badge } from "@/components/ui/badge";

const StudentProfile = () => {
    const [user] = useLocalStorage("user")

  return (
    <div className="flex flex-col    w-full">
        {/* Header */}
        
    
        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  flex-grow">
          {/* Left Panel - Profile & Settings */}
          <div className="md:col-span-2 space-y-6">
            {/* Profile Card */}
            <div className="customShadow rounded-lg"> 
            <Card className="text-center shadow-none  ">
              <CardHeader >
                <Avatar className="w-28 h-28 mx-auto">
                  <AvatarFallback><img src="/bgg.jpg" /></AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl mt-2">{`${user.firstName} ${user.lastName}`}</CardTitle>
                <p className="text-gray-500">{user.role === "admin"? "مشرف" : "طالب"}</p>
              </CardHeader>
              <CardContent className="space-y-2 -mt-2">
            <div className="flex justify-center gap-4">
              <Badge variant="secondary">Level: 3</Badge>
              <Badge variant="outline">Intake: 2025</Badge>
            </div>
           </CardContent>
            </Card>
            </div>
    
            {/* Settings Section */}
            <div className="customShadow rounded-lg"> 
    
            <Card>
              <CardHeader>
                <CardTitle>بيانات الحساب</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className=" flex gap-3">
                    <div className="grow">
                    <label className="text-sm font-medium">الإسم الأول </label>
                    <Input type="email" value={user.firstName} disabled />
                    </div>
                    <div className="grow">
                    <label className="text-sm font-medium"> الإسم الثاني </label>
                    <Input type="email" value={user.lastName} disabled />
                    </div>
    
                </div>
                <div className="full">
                  <label className="text-sm font-medium">البريد الإلكتروني</label>
                  <Input type="email" value={user.email} disabled />
                </div>
                
                <Button>حفظ </Button>
              </CardContent>
            </Card>
            </div>
          </div>
    
          {/* Right Panel - Activity & Notifications */}
          <div className="space-y-6 customShadow rounded-lg bg-white">
            {/* Tabs for Activity, Security, Notifications */}
            <Tabs defaultValue="activity">
              <TabsList className="grid grid-cols-2">
                {/* <TabsTrigger value="settings">Settings</TabsTrigger> */}
                <TabsTrigger value="activity">كلمة المرور</TabsTrigger>
                <TabsTrigger value="notifications">إعدادات الحساب</TabsTrigger>
              </TabsList>
    
              {/* <TabsContent value="settings">
                <Card className="shadow-none border-none" >
                  <CardHeader>
                    <CardTitle>Security Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Manage your security settings here.</p>
                  </CardContent>
                </Card>
              </TabsContent> */}
    
              <TabsContent value="activity">
                <Card className="shadow-none border-none" dir = "rtl" >
                  <CardHeader>
                    <CardTitle>تغيير كلمة المرور</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-1">
                <div>
                  <label className="text-sm font-medium"> كلمة المرور </label>
                  <Input type="email"  />
                </div>
                <div>
                  <label className="text-sm font-medium"> كلمة المرور الجديدة </label>
                  <Input type="text" />
                </div>
                <div className="mb-4">
                  <label className="text-sm font-medium"> إعادة كلمة المرور</label>
                  <Input type="email"   />
                </div>
                 
                <Button>تغيير كلمة المرور</Button>
              </CardContent>
                </Card>
              </TabsContent>
    
              <TabsContent value="notifications">
                <Card className="shadow-none border-none" dir="rtl">
                  <CardHeader>
                    <CardTitle>الإعدادات</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4" >
                  <div>
                  <label className="text-sm font-medium">الإسم الأول</label>
                  <Input type="email" value={user.firstName} />
                </div>
                <div>
                  <label className="text-sm font-medium">الإسم الثاني</label>
                  <Input type="text" value={user.lastName} />
                </div>
                <div>
                  <label className="text-sm font-medium">البريد الإلكتروني</label>
                  <Input type="email" value={user.email}  />
                </div>
                
                <Button>حفظ</Button>
              </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
  )
}

export default StudentProfile
