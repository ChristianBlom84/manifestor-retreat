import Link from 'next/link'

function Menu() {
  return (
    <nav className="p-1 sm:p-2 text-center text-theme-red font-bold text-lg bg-white">
      <Link className="mr-5" href="/">Home</Link>
      <Link className="mr-5" href="/topics">Topics</Link>
      <Link className="mr-5" href="/about">About</Link>
      <Link href="/practical-details">Practical Details</Link>
    </nav>
  )
}

export default Menu;