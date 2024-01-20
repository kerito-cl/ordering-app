import Link from "next/link"
import Image from "next/image"
import Right from "../icons/Right";


export default function Hero() {

    return (

        <>
        <section className="hero">
            <div className="py-12">
            <h1 className="text-4xl font-semibold">
                Everything<br />
                is better<br />
                with a&nbsp;
            <span className="text-orange-600">Pizza</span>
            </h1>
            <p className="my-4 text-gray-500 my-6">Pizza is the missing piece that makes every day complete

            </p>
            <div className="flex items-center gap-4 my-7">
                <button className="bg-orange-600 text-white flex gap-2 px-4 py-2 rounded-full">
                    Order Now
                    <Right />

                </button>
                <button className="flex gap-2 py-2 text-gray-600 font-semibold">
                    Learn more
                    <Right />
                    
                    </button>
            </div>

            </div>
            


            <div className="relative">

                <Image src={'/pizza.png'} layout={'fill'} 
                objectFit={'contain'} alt={'pizza'} />


            </div>
        

        </section>
        
        
        
        </>
    );
}