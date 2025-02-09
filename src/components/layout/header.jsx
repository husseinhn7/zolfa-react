import React from 'react'
import logo from "../../assets/light-zolfa-removebg-min.webp"
import { Button } from "@/components/ui/button"
const Header = () => {
  return (
    <header className="flex justify-between h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-0 bg-white">
        <div className=' flex gap-2 items-center'>
            <Button>
                إنشاء حساب
            </Button>
            <Button variant="outline">
                سجل الدخول 
            </Button>
        </div>
        <img  src={logo} className=" w-12 -mr-0"   />
    </header>
  )
}

export default Header
