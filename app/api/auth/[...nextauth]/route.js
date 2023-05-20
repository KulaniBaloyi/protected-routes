import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  
  providers: [
    GoogleProvider({
      clientId: "76272615345-2s4tosr2evv8b54tsa9vfq1t516m96ia.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    
  ],
  pages:{
    signin:'/signin'
  }
}

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}