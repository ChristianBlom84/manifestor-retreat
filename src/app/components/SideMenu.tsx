'use client';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Link from 'next/link';
import { BiX, BiCaretDown, BiCaretUp } from 'react-icons/bi';

interface Props {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  menuClosing: boolean;
  handleClose: () => void;
}

const Menu: React.FC<Props> = ({
  menuOpen,
  setMenuOpen,
  menuClosing,
  handleClose,
}) => {
  const [delayedOpen, setDelayedOpen] = useState(false);
  const [delayedClosing, setDelayedClosing] = useState(false);
  const [humanDesignExpanded, setHumanDesignExpanded] = useState(false);
  const underLineStyle = `before:block 
  before:bg-black before:absolute before:top-0 before:left-0 before:w-0 
  before:h-0.5 before:top-full before:transition-all before:duration-200 hover:before:top-full
  hover:before:w-full hover:before:h-0.5 hover:text-slate-800`;

  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => {
        setDelayedOpen(true);
      }, 20);
    }
  }, [menuOpen]);

  return (
    <>
      {menuOpen && !delayedClosing ? (
        <div
          className={`
            block fixed z-[5] top-0 left-0 h-screen w-screen transition-all duration-200 
            bg-black/50
            ${!delayedOpen ? 'opacity-0' : ''}
            ${delayedOpen ? 'opacity-100' : ''}
          `}
          onClick={handleClose}
          onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>): void => {
            if (e.key === 'Escape') {
              handleClose();
            }
          }}
          role="button"
          tabIndex={0}
        ></div>
      ) : null}
      <nav
        className={`
          fixed w-[300px] h-full top-0 right-0 
          bg-theme-white transition-all duration-300 z-10 py-8 px-4
          ${menuClosing || !menuOpen ? 'translate-x-[300px]' : ''}
          ${delayedOpen && menuOpen && 'translate-x-0'}
        `}
      >
        <button
          className="absolute top-4 right-4 border-none bg-none text-color-white text-2xl"
          type="button"
          onClick={handleClose}
        >
          <BiX />
        </button>
        <ul className="w-full flex flex-col flex-nowrap justify-center items-start mt-4">
          <li className="text-2xl m-4 block uppercase relative sm:text-xl">
            <Link className={underLineStyle} href="/" onClick={handleClose}>
              Home
            </Link>
          </li>
          <li className="text-2xl m-4 block uppercase relative sm:text-xl">
            <Link
              className={underLineStyle}
              href="/topics"
              onClick={handleClose}
            >
              Topics
            </Link>
          </li>
          <li className="text-2xl m-4 block uppercase relative sm:text-xl">
            <Link
              className={underLineStyle}
              href="/register"
              onClick={handleClose}
            >
              Register
            </Link>
          </li>
          <li className="text-2xl m-4 block uppercase relative sm:text-xl">
            <Link className={underLineStyle} href="/team" onClick={handleClose}>
              Team
            </Link>
          </li>
          <li className="text-2xl m-4 block uppercase relative sm:text-xl">
            <Link
              className={underLineStyle}
              href="/venue"
              onClick={handleClose}
            >
              Venue
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
