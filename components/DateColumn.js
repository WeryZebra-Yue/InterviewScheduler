import {useRouter} from 'next/router'

import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebasee';


function DateColumn({day,month,weekday,email}) {
    const Router = useRouter();
//    console.log(email)
    let flag = false;
  
    const [meetings] = useCollection(db.collection('Meetings'))
    meetings?.docs.map(value =>{
    
        if(document.getElementById(`${value.data().sloat}${value.data().month}${value.data().day}`)){
        if(value.data().email  == email.email && !value.data().accept){
                document.getElementById(`${value.data().sloat}${value.data().month}${value.data().day}`).style.backgroundColor = "red"
                document.getElementById(`${value.data().sloat}${value.data().month}${value.data().day}`).style.opacity = "100"
                document.getElementById(`${value.data().sloat}${value.data().month}${value.data().day}`).style.color = "white"
                document.getElementById(`${value.data().sloat}${value.data().month}${value.data().day}`).innerHTML = "Not Accepted Yet!"
                flag = true;
                
            }
            else if(value.data().email  == email.email && value.data().accept){
            document.getElementById(`${value.data().sloat}${value.data().month}${value.data().day}`).style.backgroundColor = "Green"
            document.getElementById(`${value.data().sloat}${value.data().month}${value.data().day}`).style.opacity = "100"
            document.getElementById(`${value.data().sloat}${value.data().month}${value.data().day}`).style.color = "white"
            document.getElementById(`${value.data().sloat}${value.data().month}${value.data().day}`).innerHTML = "Accepted!"
            flag = true;
        }
    }
    })
    
    // console.log(meetings)
    return (
        <div className="w-3/4">
        <div className="bg-gray-100 shadow-md hover:scale-105 cursor-pointer  w-28 m-[2px] flex items-center flex-col rounded-md">
        <div className="font-medium text-gray-800">{weekday}</div>
        <div>
        {`${day} ${month}`}
        </div>
        </div>
        {!flag &&
        <div>
        <a href={`/conformation?s=${1}&m=${month}&d=${day}`}>
        <div id ={`1${month}${day}`}className="h-28 w-28  m-[2px] rounded-md flex justify-center text-center font-semibold items-center scroll bg-gray-100 hover:bg-white tranistion-all duration-100 cursor-pointer group ">
        
        <span className="group-hover:opacity-100 opacity-0 duration-100 transition-all items-center " >Schedule</span>
        </div>
        </a>
        <a href={`/conformation?s=${2}&m=${month}&d=${day}`}>
        <div id ={`2${month}${day}`}className="h-28  m-[2px] rounded-md flex justify-center text-center  font-semibold items-center scroll bg-gray-100 hover:bg-white tranistion-all duration-100 cursor-pointer group ">
        <span className="group-hover:opacity-100 opacity-0 duration-100 transition-all items-center " >Schedule</span>     
        </div>
        </a>
        <a href={`/conformation?s=${3}&m=${month}&d=${day}`}>
        <div id ={`3${month}${day}`}className="h-28  m-[2px] rounded-md flex justify-center text-center  font-semibold  items-center scroll bg-gray-100 hover:bg-white tranistion-all duration-100 cursor-pointer group ">
        <span className="group-hover:opacity-100 opacity-0 duration-100 transition-all items-center " >Schedule</span>     
        </div>
        </a>
        </div>}
        {flag &&
        <div>
        
        <div id ={`1${month}${day}`}className="h-28 w-28  m-[2px] rounded-md flex justify-center text-center font-semibold items-center scroll bg-gray-100 hover:bg-white tranistion-all duration-100 cursor-pointer group ">
        
        <span className="group-hover:opacity-100 opacity-0 duration-100 transition-all items-center " >You can schedule only once!</span>
        </div>
       
        
        <div id ={`2${month}${day}`}className="h-28  m-[2px] rounded-md flex justify-center text-center  font-semibold items-center scroll bg-gray-100 hover:bg-white tranistion-all duration-100 cursor-pointer group ">
        <span className="group-hover:opacity-100 opacity-0 duration-100 transition-all items-center " >You can schedule only once!</span>     
        </div>
        
     
        <div id ={`3${month}${day}`}className="h-28  m-[2px] rounded-md flex justify-center text-center  font-semibold  items-center scroll bg-gray-100 hover:bg-white tranistion-all duration-100 cursor-pointer group ">
        <span className="group-hover:opacity-100 opacity-0 duration-100 transition-all items-center " >You can schedule only once!</span>     
        </div>
      
        </div>}
        </div>
    )
}

export default DateColumn
