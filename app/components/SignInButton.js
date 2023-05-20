'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react'

const SignInButton = () => {
  const { data: session } = useSession()
  const [menu,setMenu] = useState(false)


  return (
    <>
      {session ?
      <div className='relative border border-transparent   cursor-pointer rounded-full' onClick={()=>setMenu(!menu)}>
         <div className='relative h-10 w-10'>
                <Image
                  src={session.user.image}
                  alt={session.user.name}
                  className='inline-block rounded-full'
                  fill
                />
              </div>
        
  

        {menu?<ul className='bg-white text-black text-sm z-50 absolute rounded-md right-0 top-16 min-w-[8rem] shadow-md shadow-gray-300 flex flex-col'>
          <li className='flex flex-col space-y-1 p-2 hover:bg-black/20'>
            <h2 className='font-bold'>{session?.user.name}</h2>
            <h2 className='text-gray-400'>{session?.user.email}</h2>
          </li>
          <li className='font-bold p-2 hover:bg-black/20'>Manage Account</li>
          <li className='p-2 hover:bg-black/20' onClick={()=>signOut()}>Sign Out</li>
          
        </ul>:''}
      </div>
    
       : (
        <button
          className='rounded-md border border-stone-300 px-3 py-1 text-sm dark:border-stone-600'
          onClick={() => signIn()}
        >
          Sign In
        </button>
      )}
    </>
  )
}

export default SignInButton