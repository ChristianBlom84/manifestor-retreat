import Image from "next/image";
import logoWide from "../images/logo/logoNew.jpg";
import Menu from './Menu';
import Link from "next/link";

function Header() {
  return (
    <header className="w-full">
      <Menu />
      <Link href="/">
        <Image className="sm:px-10 mb-10 mx-auto" src={logoWide} alt="" priority />
      </Link>
    </header>
  )
}

export default Header