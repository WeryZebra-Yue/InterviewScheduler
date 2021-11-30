import { db, rdb } from "../firebasee"
import {useCollection} from 'react-firebase-hooks/firestore'
import router from "next/router"
import Link from "next/link"

function DateColumnrec({day,month,weekday}) {
const [meetings] = useCollection(db.collection("Meetings"))
let arr1 = []
let arr2 = []
let arr3 = []






// console.log(meetings)

    return (
        <div className="w-3/4">
{
<div>
        <div className="bg-gray-100 shadow-md hover:scale-105 cursor-pointer  w-28 m-[2px] flex items-center flex-col rounded-md">
        <div className="font-medium text-gray-800">{weekday}</div>
        <div>
        {`${day} ${month}`}
        </div>
        </div>
        
        <Link href={`Rec?s=1&m=${month}&d=${day}`}>
        <div  id = {`1${month}${day}`}className="h-28 cursor-pointer w-28  m-[2px] rounded-md flex justify-center font-semibold items-center scroll bg-white  ">
            {meetings?.docs.map(value =>{
            // console.log((`1${month}${day}` == `${value.data().sloat}${value.data().month}${value.data().day}`))
            if(!value.data().accept){
                if((`1${month}${day}` == `${value.data().sloat}${value.data().month}${value.data().day}`)){
                     arr3.push(value.data().email)
                }
            }
            if( document.getElementById(`1${month}${day}1`))
                document.getElementById(`1${month}${day}1`).innerHTML = arr3.length!=0?`${arr3.length} pending to check`:null
                
                
            })
        }
        <p id ={`1${month}${day}1`} className="text-sm items-center flex w-full text-center"> </p>
        </div>
        </Link>
        <Link href={`Rec?s=2&m=${month}&d=${day}`}>
        <div  id = {`2${month}${day}`}className="h-28 cursor-pointer  m-[2px] rounded-md flex justify-center  font-semibold items-center scroll bg-white  ">
        {meetings?.docs.map(value =>{
            if(!value.data().accept){
            // console.log((`2${month}${day}` == `${value.data().sloat}${value.data().month}${value.data().day}`))
            if((`2${month}${day}` == `${value.data().sloat}${value.data().month}${value.data().day}`)){
                arr1.push(value.data().email)
            }
                }
        if( document.getElementById(`1${month}${day}1`))
            document.getElementById(`2${month}${day}1`).innerHTML = arr1.length!=0?`${arr1.length} pending to check`:null;

            
            
        })
        
}
        <p  id = {`2${month}${day}1`} className="text-sm items-center flex w-full text-center"> </p>
        </div>
        </Link>
        <Link href={`Rec?s=3&m=${month}&d=${day}`}>
        <div  id = {`3${month}${day}`}className="h-28 cursor-pointer  m-[2px] rounded-md flex justify-center  font-semibold  items-center scroll bg-white  ">
        {meetings?.docs.map(value =>{
             if(!value.data().accept){
            if((`3${month}${day}` == `${value.data().sloat}${value.data().month}${value.data().day}`)){
                console.log((`3${month}${day}` == `${value.data().sloat}${value.data().month}${value.data().day}`))
                arr2.push(value.data().email)
            
                
            }
        }
            if( document.getElementById(`1${month}${day}1`))
            document.getElementById(`3${month}${day}1`).innerHTML = arr2.length!=0?`${arr2.length} pending to check`:null;

            
            
        })
}
        </div>
        </Link>
        <p id = {`3${month}${day}1`} className="text-sm items-center flex w-full text-center"> </p>
        </div>
}

        </div>
    )
}

export default DateColumnrec
