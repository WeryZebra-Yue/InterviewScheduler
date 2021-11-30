import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import {rdb} from '../../../firebasee'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SEC
    }),
  ],
  callbacks: {
    signIn: async (user) => {
      rdb.ref("users").child(`${user.email.split("@")[0]}`).set({
   
        name : user.name,
        image : user.image,
        cas : user.name.toLowerCase()
    
     })
    
    }
  }
  // database : "mongodb+srv://weryzebra:dSu8e0icAq3IyM67@cluster0.q0emi.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-wzpzek-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"
 
})