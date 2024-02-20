'use client';
import Link from 'next/link';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import SideMenu from './SideMenu';

function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClosing, setMenuClosing] = useState(false);

  const handleClose = (): void => {
    if (menuOpen) {
      setMenuClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setMenuClosing(false);
      }, 200);
    } else {
      setMenuOpen(true);
    }
  };

  return (
    <>
      <nav className="sm:p-1 sm:p-2 text-center text-theme-red font-bold text-lg bg-white h-10 fixed w-full top-0 left-0 sm:hidden">
        <button
          className="flex justify-center items-center bg-none text-black p-0 w-10 h-10 ml-auto rounded-full transition-all duration-500 hover:border-black hover:border sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <GiHamburgerMenu className="text-2xl" />
        </button>
      </nav>
      {window.innerWidth < 641 ? (
        <SideMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          menuClosing={menuClosing}
          handleClose={handleClose}
        />
      ) : null}
    </>
  );
}

export default MobileMenu;
