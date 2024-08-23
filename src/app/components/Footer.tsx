import Image from 'next/image';
import Link from 'next/link';
import footerBackground from '../images/background-06.jpg';
import barcelonaMap from '../images/BarcelonaMap.png';
import landscapePhotos from '../images/Landscape.png';
import aerialView from '../images/AerialView.png';
import millaPavaka from '../images/MillaAndPavaka.png';
import millaText from '../images/millaText.png';
import pavakaText from '../images/pavakaText.png';
import moreInfoButton from '../images/more-info-button-no-shadow.png';
import clickHere from '../images/clickHere.png';

function Footer() {
  return (
    <footer className="sm:p-5 w-full relative mt-10">
      <Image
        src={footerBackground}
        alt=""
        placeholder="blur"
        quality={100}
        className="absolute w-full -z-10 bottom-0 left-0 h-[160%]"
        sizes="100vw"
      />
      <div className="flex flex-row justify-center items-center flex-wrap sm:flex-nowrap w-3/4 m-auto relative">
        <Image src={barcelonaMap} className="sm:w-1/3" alt="Map of Barcelona" />
        <Image
          src={landscapePhotos}
          className="sm:w-1/3"
          alt="Photos of the Surrounding Landscape"
        />
        <Image
          src={aerialView}
          className="sm:w-1/3"
          alt="Aerial View of the Property"
        />
      </div>
    </footer>
  );
}

export default Footer;
