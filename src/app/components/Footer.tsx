import Image from 'next/image';
import Link from 'next/link';
import footerBackground from '../images/background-06.jpg';
import creteMap from '../images/CreteMap.jpg';
import cretePhotos from '../images/CretePic.png';
import millaPavaka from '../images/MillaAndPavaka.png';
import millaText from '../images/millaText.png';
import pavakaText from '../images/pavakaText.png';
import moreInfoButton from '../images/more-info-button-no-shadow.png';
import clickHere from '../images/clickHere.png';

function Footer() {
  return (
    <footer className="sm:p-5 w-full relative overflow-hidden mt-10">
      <Image
        src={footerBackground}
        alt=""
        placeholder="blur"
        quality={100}
        className="absolute w-full -z10 bottom-0 left-0"
        style={{
          height: '140%',
        }}
        sizes="100vw"
      />
      <div className="flex flex-row flex-wrap sm:flex-nowrap w-3/4 m-auto relative">
        <Image src={creteMap} className="sm:w-2/3" alt="Map of Crete" />
        <Image src={cretePhotos} className="sm:w-1/3" alt="Photos of Crete" />
      </div>
    </footer>
  );
}

export default Footer;
