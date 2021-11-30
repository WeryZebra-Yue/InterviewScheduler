import DateColumn from "./DateColumn";
import DateColumnrec from "./DateColumnrec";
function Recruiter() {
    let date = new Date();
    let allDate = [];
    let months = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEPT','OCT','NOV','DEC']
    let weeks = ['SUN','MON','TUE','WEN','THU','FRI','SAT']
    
    allDate.push([date.getDate(),months[date.getMonth()],weeks[date.getDay()]])

    for(let i = 0;i<15;i++){
        date.setDate(date.getDate()+1)
        if(!(date.getDay() == 6 || date.getDay() == 0)) 
            allDate.push([date.getDate(),months[date.getMonth()],weeks[date.getDay()]])
    }
    
   
    return (
     
     <div className="flex items-center h-screen justify-center p-10 ">
         <div className="flex flex-col mb-0  md:mb-3 mr-3">
<div className="bg-white shadow-md h-12 hover:scale-105 cursor-pointer  w-28 m-[2px] flex justify-center items-center flex-col rounded-md ">

        <div className="font-medium text-gray-800 ">Slots</div>
      
        </div>
        <div className="h-28 w-28 bg-white shadow-md m-[2px] rounded-md flex items-center justify-center font-medium">
           
            8:00 - 11:00
        </div>
        <div className="h-28 bg-white m-[2px] shadow-md rounded-md flex items-center justify-center font-medium ">
            12:00 - 2:00
        </div>
        <div className="h-28 bg-white m-[2px] shadow-md rounded-md flex items-center justify-center font-medium ">
            3:00 - 5:00
        </div>
        </div>  
           <div className="flex overflow-y-hidden overflow-x-scrollable  w-3/4 rounded-xl">
               {
                 allDate.map((value,index) =>{
                    return(
                        <DateColumnrec key ={index} day = {value[0]} month={value[1]} weekday = {value[2]}/>
                    )
                 })
               }
           </div>
        </div>
    )
}

export default Recruiter
