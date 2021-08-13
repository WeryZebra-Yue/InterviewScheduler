import { useSession } from "next-auth/client"
import Link from 'next/link'
import router from "next/router";
import { db, rdb } from "../firebasee";

function Conformation_page(date) {
   let session = useSession();
   
//    console.log(session)
    let a = []
    { date &&
        Object.entries(date).map((value,index)=>{
           a.push(value[1])

        })
        
    }
    // console.log(a)
    let d = new Date().setDate(a[0]);
    const sendData = () =>{
        db.collection("Meetings").add({
            email : a[3],
            sloat : a[1],
            day : a[0],
            month : a[2],
            accept : false
        })
        router.push('/')
    }
  
    return (
        <div className="h-screen bg-gray-200 w-full items-center flex justify-center">
            <div className="bg-white flex flex-col p-10 rounded-lg m-5">
                <div className="flex">
            <h1 className="text-base">{`You sure want to Schedule Your interview on ${a[0]} of ${a[2]} for this email account  ${a[3]} ?`}</h1>
            </div>
           
            <div className="flex px-5 justify-between m-2">
            <div className="bg-green-600 p-4 text-white font-semibold rounded-md m-2 cursor-pointer" onClick={sendData}>Confirm</div>
             <Link href='/'>
            <div className="bg-red-600 p-4 text-white font-semibold rounded-md m-2 cursor-pointer">Cancle</div>
            </Link>
            </div>      
            </div>
              
        </div>
    )
}

export default Conformation_page
