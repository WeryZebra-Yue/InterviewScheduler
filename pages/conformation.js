import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Head from 'next/head'
import Header from '../components/Header'
import Conformation_page from "../components/Conformation_page"
import { getSession, useSession } from "next-auth/client"
function Conformation({session}) {
  console.log(session)

    const router = useRouter()
    const [queries,setQueries] = useState(null);
    
    useEffect(() => {
        if (router.asPath !== router.route) {
           setQueries(router.query)
           
        }
      }, [router])
      
        
    
    return (
        <div className="bg-gray-200 h-screen">
            <Head>
                <title>Confirmation </title>
            </Head>
           {
               queries &&
               <div>
                   <Header/>
                   <Conformation_page date = {queries.d} sloat = {queries.s} month = {queries.m} email = {session.user.email} />
               </div>
              
           } 
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
export default Conformation
