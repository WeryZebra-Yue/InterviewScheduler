import { useCollection } from 'react-firebase-hooks/firestore';
import { getSession } from "next-auth/client";

import  { useRouter } from "next/router"
import { useEffect, useState } from "react"


import Header from "../components/Header";
import { db } from "../firebasee";

function Rec({session}) {
    const [queries,setQueries] = useState(null);
    const [meetings] = useCollection(db.collection('Meetings'))
    const Routeer = useRouter()
    useEffect(() => {
        if (Routeer.asPath !== Routeer.route) {
           setQueries(Routeer.query)
          
          
           
        }
      }, [Routeer])
    if(session.user.email != '20se02ce035@ppsu.ac.in') {
      return (<div>You dont have access</div>) 
    }
    
     
    return (
        <div className="min-h-screen bg-gray-200">
            <Header userName={session.user.name} image={session.user.image}/> 
            <div className="m-5">
            {
                meetings?.docs.map((value,index)=>{
                    if(!value.data().accept){
                    if(value.data().day==queries.d && value.data().month == queries.m    ){
                        // console.log(value.data())
                        return (
                            <div key={index}>
                                <div className="text-2xl mb-10 mt-10">{value.data().email}</div>
                                <span className="bg-green-600 text-white p-3 rounded-md cursor-pointer mt-10" onClick={()=>{
                                                                        console.log("s")
                                db.collection("Meetings").doc(value.id).set({
                                    accept : true,
                                    
                                },
                                {
                                    merge:true
                                })

                                                                 
                                       
                                }
                                
                                }
                                
                                >Accept</span>
                                <span className="bg-red-600 text-white p-3 rounded-md cursor-pointer m-10">Reject</span>
                            </div>
                        )
                    }
                }
                })
            }
            

            </div>
        </div>
    )
}
export async function getServerSideProps(context){
    const session = await getSession(context);
  
    return{
      props:{
        session,
        
      },
    }
  }
export default Rec
