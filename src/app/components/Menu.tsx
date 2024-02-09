import Link from 'next/link'

function Menu() {
  return (
    <nav className="p-1 sm:p-2 text-center text-theme-red font-bold text-lg bg-white h-10 fixed w-full top-0 left-0">
      <Link className="mr-5 my-auto" href="/">Home</Link>
      <Link className="mr-5" href="/topics">Topics</Link>
      <Link className="mr-5" href="/register">Register</Link>
      <Link href="/about">About</Link>
    </nav>
  )
}

export default Menu;