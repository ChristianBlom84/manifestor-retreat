import Image from "next/image";
import Link from "next/link";
import Menu from './Menu';
import logoWide from "../images/logo/logoNew.jpg";

function Header() {
  return (
    <header className="w-full mt-10">
      <Menu />
      <Link href="/">
        <Image className="sm:px-10 mb-10 mx-auto lg:max-w-4xl" src={logoWide} alt="" priority />
      </Link>
    </header>
  )
}

export default Header