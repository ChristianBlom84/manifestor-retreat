import Image from 'next/image';
import Link from 'next/link';
import footerBackground from '../images/background-06.jpg';
import clickHere from '../images/clickHere.png';

function Footer() {
  return (
    <footer className="w-full relative overflow-hidden mt-5">
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
      <div className="flex flex-col relative mb-10">
        <h2 className="text-center">
          A talk about Manifestors by Pavaka at the HD Rave Festival 2024
        </h2>
        <div className="w-full min-w-80 max-w-2xl mx-auto">
          <div className="relative w-full overflow-hidden pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 right-0 w-full h-full border-none"
              src="https://www.youtube-nocookie.com/embed/PrzxhRl31CA"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="w-11/12 sm:w-4/5 xl:w-2/3 2xl:w-2/4 p-2 bg-white/70 shadow-[inset_0_0_40px_0_rgba(255,255,255,1)] rounded-sm mx-auto my-5">
          <p className="mb-2">
            <span className="text-theme-red font-bold">
              These are the topics we will be covering
            </span>
            , in a journey to a deeper understanding of what it is to be a
            Manifestor, and the experience of the potential of living it truly.
          </p>
          <p className="mb-2">
            We learn information for the <b>mental</b> part of us, experience
            through somatic aura work to <b>embody</b> the knowledge, and
            investigate together as a circle for our inspiration, the{' '}
            <b>spirit</b> part of us.
          </p>
          <p className="mb-2">
            We bring our knowledge and our life experience living this in a
            radical way. If this resonates with you, please join us and be a
            part of the energetic &quot;spaceship&quot; we build together.
          </p>
          <Link
            className="text-xl text-black font-semibold text-center self-center"
            href="/register"
          >
            For the registration details{' '}
            <Image
              className="inline max-h-10 w-auto"
              alt="click here"
              src={clickHere}
            ></Image>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
