import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';

function Menu() {
  const underLineStyle = `before:block 
  before:bg-black before:absolute before:top-0 before:left-0 before:w-0 
  before:h-0.5 before:top-full before:transition-all before:duration-200 hover:before:top-full
  hover:before:w-full hover:before:h-0.5 hover:text-slate-800`;

  return (
    <nav className="sm:p-1 sm:p-2 text-center text-theme-red font-bold text-lg bg-white h-10 fixed w-full top-0 left-0 z-10 hidden sm:block">
      <Link
        className={`mr-5 text-black my-auto relative uppercase ${underLineStyle}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`mr-5 text-black my-auto relative uppercase ${underLineStyle}`}
        href="/topics"
      >
        Topics
      </Link>
      <Link
        className={`mr-5 text-black my-auto relative uppercase ${underLineStyle}`}
        href="/register"
      >
        Register
      </Link>
      <Link
        className={`mr-5 text-black my-auto relative uppercase ${underLineStyle}`}
        href="/qa"
      >
        Q&A
      </Link>
      <Link
        className={`mr-5 text-black my-auto relative uppercase ${underLineStyle}`}
        href="/team"
      >
        Team
      </Link>
      <Link
        className={`mr-5 text-black my-auto relative uppercase ${underLineStyle}`}
        href="/venue"
      >
        Venue
      </Link>
      <Link
        className={`text-black my-auto relative uppercase ${underLineStyle}`}
        href="/gallery"
      >
        Gallery
      </Link>
    </nav>
  );
}

export default Menu;
