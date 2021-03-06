import Head from 'next/head'
import Image from 'next/image'
import { getSession, signIn, useSession } from 'next-auth/client'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Student from '../components/Student'
import Recruiter from '../components/Recruiter'
import { rdb } from '../firebasee'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


export default function Home({session}) {
  const [sessions] = useSession();
 const Routers = useRouter(); 

  if(!session)return(
    <div className="flex flex-col justify-center min-h-screen bg-gray-200 items-center unselectable ">
              
      <div>{process.env.GOOGLE_ID} </div>  
    <h1 onClick={signIn} className="p-5 cursor-pointer m-7 bg-blue-800 text-white rounded-xl text-center font-semibold text-lg"> Log In with Google</h1>

</div>

  );
 

  return (
    <div className="bg-gray-200 min-h-screen">
     
      <div >
      <Head>
        <title>Interview Schedular</title>
      </Head>
      { session &&
      <Header userName={session.user.name} image={session.user.image}/>
      }
      {/* Date Choose Component*/}
      {/* Footer */}
     
      {/* Student */}
      {
        session.user.email != '20se02ce035@ppsu.ac.in' && 
        <Student email = {session.user.email}/>
      }
      {/* Recuruiter */}
      {
        session.user.email == '20se02ce035@ppsu.ac.in' && 
        <Recruiter email = {session.user.email}/>
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