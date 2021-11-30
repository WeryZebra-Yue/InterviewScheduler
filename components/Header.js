import { getSession, signOut, useSession } from "next-auth/client"
import { useRouter } from "next/dist/client/router";
import { route } from "next/dist/server/router";
import Image from "next/image"
import { useEffect, useRef, useState } from "react";


function Header({ userName, image }) {
 const [session] = useSession();
 const Routers = useRouter(); 
 const [name,setName] = useState(null)
 const [imageUrl,setImageUrl] = useState(null)
 const userNameref = useRef(null)
 const goToIndex = () =>{
  Routers.push("/")
}

  return (
      
      <div >
        <div className="bg-white shadow-md p-2 flex  justify-between w-full static">
           
              <div className="flex items-center cursor-pointer  transition-all duration-100 pl-1" onClick={goToIndex}>
                    <Image src="https://img.icons8.com/fluency/96/000000/overtime.png"
                    width = {50}
                    height = {50}
                    />
                    <h1 className=" text-blue-800 text-xl pl-3 font-medium newFont">Interview Schedular</h1>
              </div>
             
              <div className="flex items-center sm:space-x-2 justify-end cursor-pointer " >
              
               
                <div className="rounded-full border-2  border-blue-800 flex">
                <Image
                    // onClick={signOut}
                    src = {image}
                    width={40}
                    height={40}
                    onClick={signOut}
                    layout="fixed"
                    className="cursor-pointer rounded-full w-full"
                    /> 
                </div>
                {userName && 
                <p ref={userNameref}  id="userName">{userName}</p>
                // console.log(name)
                }

            </div>
          
              </div>
        </div>
  )
    
}

export default Header
