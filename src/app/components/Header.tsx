import Image from 'next/image';
import Link from 'next/link';
import Menu from './Menu';
import AdaptiveImage from './AdaptiveImage';
import logoWide from '../images/logo/logoNew.jpg';
import logoMobile from '../images/logo/logoMobile.jpg';
import MobileMenu from './MobileMenu';

function Header() {
  return (
    <header className="w-full mt-10">
      <Menu />
      <MobileMenu />
      <Link href="/">
        <AdaptiveImage
          className="mb-10 mx-auto lg:max-w-3xl xl:max-w-5xl 2xl:max-w-6xl"
          alt="Hero image"
          desktopImage={logoWide}
          mobileImage={logoMobile}
          fill={false}
        />
      </Link>
    </header>
  );
}

export default Header;
