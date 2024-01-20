import Image from "next/image"
import MenuItem from "../menu/MenuItem"
import SectionHeaders from "./SectionHeaders"

export default function Menu() {

    return(

        
    <section className="">
        <div className="absolute left-0 right-0 w-full">
            <div className="h-40 w-40 absolute -top-16 -left-12">
            <Image src={'/sallad1.png'} layout={'fill'} 
            objectFit={'contain'} alt={'salad'} />
            </div>
            <div className="h-40 w-40 absolute -top-16 -right-12">
            <Image src={'/sallad2.png'} layout={'fill'} 
            objectFit={'contain'} alt={'salad'} />

            </div>
        </div>
        <div className="text-center">
            <SectionHeaders subHeader={'check out'}
            mainHeader={'Menu'} 
            />

            
        </div>
        <div className="grid grid-cols-3 gap-4 mt-12">

            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />

        </div>
        

        
        

        
     </section>
        
        
        
        
        
        
        
       





    )
}