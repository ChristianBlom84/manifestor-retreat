import Image from 'next/image';
import Link from 'next/link';
import Menu from './Menu';
import AdaptiveImage from './AdaptiveImage';
import logoWide from '../images/logo/logoNew.jpg';
import logoMobile from '../images/logo/logoMobile.jpg';

function Header() {
  return (
    <header className="w-full mt-10">
      <Menu />
      <Link href="/">
        <AdaptiveImage
          className="sm:px-10 mb-10 mx-auto lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl"
          alt="Hero image"
          desktopImage={logoWide}
          mobileImage={logoMobile}
          fill={false}
        />
        {/* <Image
          className="sm:px-10 mb-10 mx-auto lg:max-w-4xl"
          src={logoWide}
          alt=""  
          priority
        /> */}
      </Link>
    </header>
  );
}

export default Header;
