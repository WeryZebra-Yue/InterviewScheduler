import { signOut, useSession } from "next-auth/client"
import { useRouter } from "next/dist/client/router";
import Image from "next/image"


function Header() {
 const [session] = useSession();
 const Routers = useRouter(); 
 const goToIndex = () =>{
   Routers.replace('/')
   
 }
  return (
        <div >
        <div className="bg-white shadow-md p-2 flex  justify-between w-full static">
          
              <div className="flex items-center cursor-pointer hover:scale-110 transition-all duration-100 pl-1" onClick={goToIndex}>
                    <Image src="https://img.icons8.com/fluency/96/000000/overtime.png"
                    width = {50}
                    height = {50}
                    />
                    <h1 className=" text-blue-800 text-xl pl-3 font-medium newFont">Interview Schedular</h1>
              </div>
            
              {
                 session &&
              <div className="flex items-center sm:space-x-2 justify-end cursor-pointer " >
              
               
                <div className="rounded-full border-2  border-blue-800 flex">
                <Image
                    // onClick={signOut}
                    src = {session.user.image}
                    width={40}
                    height={40}
                    onClick={signOut}
                    layout="fixed"
                    className="cursor-pointer rounded-full w-full"
                />
                </div>
                <p className="whitespace-nowrap font-semibold pr-3 hidden sm:flex text-blue-800">{session.user.name}</p>

            </div>
          }
              </div>
        </div>
    )
}

export default Header
