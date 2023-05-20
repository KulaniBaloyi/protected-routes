import Link from "next/link"
//components
import SignInButton from './SignInButton'

const Header = () => {
  return (
    <header className="p-5 text-lg bg-gray-800 text-white px-[10%]">
    <ul className="flex justify-between items-center">
      <li>
        <Link href="/">
        Home
        </Link>
      </li>
      <li>
        <Link href='/protected/server'>
        Protected (server)
        </Link>
      </li>
      <li>
        <Link href='/protected/client'>
          Protected (client)
        </Link>
      </li>
      <li>
       <SignInButton/>
      </li>
    </ul>
  </header>
  )
}

export default Header