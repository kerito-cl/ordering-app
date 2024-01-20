import Header from "./components/layout/Header"
import Hero from "./components/layout/Hero"
import Menu from "./components/layout/Menu"
import SectionHeaders from "./components/layout/SectionHeaders"
import Link from "next/link"
import Image from "next/image"


export default function Home() {
  return (
    <>

    <Hero />
    <Menu />
    <section className="text-center my-16 ">
      <SectionHeaders 
      subHeader={'Our Story'}
      mainHeader={'About us'}
       />
       <div className="text-gray-500 max-w-md mx-auto mt-4 flex
       flex-col gap-4">
       <p>
       Durante la jornada se abordó la posibilidad
        de incluir modificaciones a la tabla
         de mortalidad y un seguro de longevidad. 
       </p>
       <p>
       Solicitamos no realizar faenas agrícolas y
        forestales durante los horarios de mayor calor", 
       señaló el presidente de la SNA, Antonio Walker"
       </p>  
       </div>
       </section>
       <section className="text-center my-8">
        <SectionHeaders 
        subHeader={'Don\'t hesitate'}
        mainHeader={'Contact us'} />
        <div className="mt-8">
        <a className="text-3xl mt-8 font-semibold text-gray-500" href="tel:+35846885422">
          +358 46 885 422
        </a>
        </div>
        
       </section>

      

  

    
    
    </>

   
    
  )
}
