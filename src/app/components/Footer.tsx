import Image from 'next/image';
import Link from 'next/link';
import footerBackground from '../images/background-06.jpg';
import creteMap from '../images/CreteMap.jpg';
import cretePhotos from '../images/CretePic.png';
import millaPavaka from '../images/MillaAndPavaka.png';
import millaText from '../images/millaText.png';
import pavakaText from '../images/pavakaText.png';
import moreInfoButton from '../images/more-info-button-no-shadow.png';

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
      <div className="flex flex-col relative items-center mt-10">
        <h2>
          <Link href="/team">Facilitating</Link>
        </h2>
        <p>Milla Berglund, Pavaka Halel Katzir and team</p>
        <Link className="inline" href="/team">
          <Image
            src={millaPavaka}
            alt="Milla and Pavaka"
            className="sm:w-2/3 lg:w-2/5 mx-auto"
          />
        </Link>
        <p className="w-5/6 sm:w-3/4 lg:w-3/5 text-center p-2 bg-white/70 shadow-[inset_0_0_40px_0_rgba(255,255,255,1)] rounded-sm">
          We met in Mary Ann Winiger&apos;s Immersions, and connected with ease
          and joy. We know the benefits of being together as Manifestors in the
          experiential field of investigating the Aura. The sameness of Aura is
          a bridge across languages, cultural conditioning and differences. This
          retreat is a natural happening out of this joy of being together, with
          our international tribe, celebrating both the familiarity of
          Manifestor attributes, and the uniqueness of each individual, in
          correctness.
        </p>
        <Link className="mt-5 mb-10 sm:mb-5" href="/register">
          <Image
            className="w-40 md:w-60 shadow-[-10px_10px_32px_-11px_rgba(0,0,0,0.7)] hover:shadow-none active:shadow-[inset_-100px_10px_32px_-11px_rgba(0,0,0,0.7)] rounded-lg"
            src={moreInfoButton}
            alt="For more info, click here!"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
