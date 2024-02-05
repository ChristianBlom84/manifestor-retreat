import Image from "next/image";
import logoWide from "../images/logo/logoNew.jpg";
import Menu from './Menu';

function Header() {
  return (
    <header className="w-full">
      <Menu />
      <Image className="sm:px-10 mb-10 mx-auto" src={logoWide} alt="" />
    </header>
  )
}

export default Header