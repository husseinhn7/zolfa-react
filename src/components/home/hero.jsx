import React, { Fragment } from 'react'
import img from "../../assets/hero.jpg"
import {Button} from "@/components/ui/button"
const Hero = () => {
  return (
    <Fragment>
        <section className=' w-full  h-[80vh] bg-center bg-cover flex  items-center justify-center'  style={{backgroundImage:`url(${img})`}}>
            <div className=' w-full flex flex-col items-center gep-5'>
                <h1 className=' text-slate-200 text-5xl'> 
                مرحبا بك في منصَّة زلفي
                
                </h1>
                <p className=' text-slate-200 my-4 w-5/12 text-center '>
                منصَّة شرعية إلكترونية تهتم بالعلم الشرعي من خلال تعليم المواد الشرعية المتنوعة (التفسير–العقيدة–الفقه–الحديث) وتعتمد على استراتيجية التعليم الإلكتروني الذاتي بطريقة ميسرة تتناسب مع عموم المسلمين من غير المتخصصين في العلم الشرعي
                </p>
                <Button variant="secondary">  
                    سجل الان 
                </Button>
            </div>

        </section>
    </Fragment>
  )
}

export default Hero
