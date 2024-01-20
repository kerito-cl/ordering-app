import Link from "next/link"

export default function Header() {
    return (

        <header className="flex items-center justify-between">

    
    <nav className="flex items-center gap-7 text-black 
    font-semibold">
    <Link href={'/'}
    className="text-orange-600 font-extrabold text-2xl">
     KERO PIZZA
    </Link>
    <Link href={'/'} className="hover:scale-110">Home</Link>
    <Link href={''} className="hover:scale-110">Menu</Link>
    <Link href={''} className="hover:scale-110">About</Link>
    <Link href={''} className="hover:scale-110">Contact</Link>
    
    </nav>
    <nav className="flex items-center gap-4
     text-black font-semibold">
        <Link href={'/login'} className="hover:scale-110">Login</Link>
        <Link href={'/register'} className='bg-orange-600 rounded-full
     text-white px-4 py-2 hover:bg-orange-700'>
        Register
        </Link>

        



    </nav>

    

  
</header>
    



    )
}

