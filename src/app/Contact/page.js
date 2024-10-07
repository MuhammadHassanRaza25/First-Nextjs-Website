import Link from "next/link";

export default function About(){
   return(
    <div className="flex flex-col items-center gap-10">
    <div className="flex gap-10 flex-col items-center">
       <h1 className="font-bold text-4xl text-black">First Nextjs  Website 💻</h1>
       <h1 className="font-bold text-3xl text-indigo-700 hover:text-fuchsia-500">This is Contact Page 📞</h1>
    </div>
    <div className="w-full flex justify-evenly">
      <Link href="/"><button className="bg-indigo-700 font-semibold text-white p-2 px-5 rounded-md text-xl hover:bg-fuchsia-300 hover:text-white">Home</button></Link>
      <Link href="/About"><button className="bg-indigo-700 font-semibold text-white p-2 px-5 rounded-md text-xl hover:bg-fuchsia-300 hover:text-white">About</button></Link>
      <Link href="/Contact"><button className="bg-indigo-700 font-semibold text-white p-2 px-5 rounded-md text-xl hover:bg-fuchsia-300 hover:text-white">Contact</button></Link>
    </div>
    <h1 className="font-semibold text-indigo-700 text-sm">Made By Muhammad Hassan Raza</h1>
  </div>
   )
}