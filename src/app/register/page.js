export default function RegisterPage() {

    return (
        <section className="mt-8">
            <h1 className="text-center text-orange-600 text-4xl
            font-semibold mb-6">
                Register
         </h1>
         <form className="block max-w-xs mx-auto">
            <input type="email" placeholder="email"/>
            <input type="password" placeholder="password"/>
            <button type="submit">Register</button>
            <div className="text-center text-gray-700 mt-2
            italic">
                or login with social media</div>
            <button className="mt-4">Login with google</button>

         </form>
         <div>
         </div>
        </section>
    )
}