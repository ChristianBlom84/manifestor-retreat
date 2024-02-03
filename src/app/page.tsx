import Image from "next/image";
import logoWide from "./images/logo/Logo 1.jpg";
import logo from "./images/logo/Logo 2.jpg";
import uniqueAdventure from './images/uniqueadventure.png';
import manifestorRelationships from './images/ManifestorRelationships.png';
import manifestorAuthorities from './images/TheDifferentManifestors.png';
import informing from './images/InformingDeepDive.png';
import consciousUnconscious from './images/ConsciousVSUnconscious.png';
import manifestingProjected from './images/ManifestingChannelsVSProjected.png';
import angerTransformation from './images/AngerTransformation.png';
import peaceFlow from './images/PeaceAndFlow.png';
import thursday from './images/Thursday.png';
import friday from './images/Friday.png';
import saturday from './images/Saturday.png';
import sunday from './images/Sunday.png';
import monday from './images/Monday.png';
import footerBackground from './images/background-06.jpg';
import creteMap from './images/CreteMap.jpg';
import cretePhotos from './images/CretePic.png';
import millaPavaka from './images/MillaAndPavaka.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header className="sm:p-10 mb-5 sm:m-0">
        <Image className="" src={logoWide} alt="" />
      </header>
      <section className="p-10 pt-0 max-w-screen-xl">
        <div className="flex flex-row">
          <div className="flex flex-col justify-center text-center">
            <h1 className="text-theme-red">
              To all the beautiful lone wolves of the Manifestor clan<br />
              This is a calling for a <Image className="inline max-h-12 w-auto m-0" src={uniqueAdventure} alt="unique adventure!" />
            </h1>
            <p className="mb-1">
              Informing you of an opportunity to relax deeper into the Manifestor Aura, gain a solid understanding of the Manifestor mechanics, and dive together into the magic of BEING us.
            </p>
            <p className="mb-1">
              On June 6th, we embark on a 5 day discovery journey to experiment, experience, learn, impact and be impacted, and also just ENJOY precious time together in Manifestor sisterhood.
            </p>
            <p className="mb-1">
              The setting is a beautiful villa (with a private beach) in the island of Crete, Greece.
            </p>
            <p className="mb-12">
              We will experience in Aura interaction, learn and discuss important Manifestor themes, enjoy morning yoga and original music, and all facilitated by Manifestor women living their HD experiment.
            </p>
            <h3 className="font-bold">
              Some topics we will cover and investigate:
            </h3>
            <ul className="flex items-center flex-col">
              <div className="flex flex-row flex-wrap md:flex-nowrap justify-center sm:w-3/4">
                <li className="sm:w-1/3 sm:mr-10">
                  <Image src={manifestorRelationships} alt="" />
                  Being a Manifestor (woman) in relationships
                </li>
                <li className="sm:w-1/3 sm:mr-10">
                  <Image src={manifestorAuthorities} alt="" />
                  The different Manifestor inner authorities: Emotional, splenic, ego
                </li>
                <li className="sm:w-1/3">
                  <Image src={informing} alt="" />
                  A deep dive into Informing
                </li>
              </div>
              <div className="flex flex-wrap md:flex-nowrap flex-row justify-center">
                <li className="sm:w-1/4 sm:mr-10">
                  <Image src={consciousUnconscious} alt="" />
                  Conscious VS. Unconscious Manifestors
                </li>
                <li className="sm:w-1/4 sm:mr-10">
                  <Image src={manifestingProjected} alt="" />
                  Manifesting channels VS. Projected channels Manifestors
                </li>
                <li className="sm:w-1/4 sm:mr-10">
                  <Image src={angerTransformation} alt="" />
                  Anger and transformation
                </li>
                <li className="sm:w-1/4">
                  <Image src={peaceFlow} alt="" />
                  Peace and flow
                </li>
              </div>
            </ul>
          </div>
          <div></div>
        </div>
      </section>
      <section className="p-10 max-w-screen-lg">
        <h2 className="text-center">Schedule</h2>
        <div className="flex items-center flex-col">
          <div className="flex flex-row justify-center">
            <Image className="w-1/4 mr-20" src={thursday} alt="Thursday" />
            <Image className="w-1/4 mr-20" src={friday} alt="Friday" />
            <Image className="w-1/4" src={saturday} alt="Saturday" />
          </div>
          <div className="flex flex-row justify-center w-1/2">
            <Image className="w-1/2 mr-20" src={sunday} alt="Sunday" />
            <Image className="w-1/2" src={monday} alt="Monday" />
          </div>
        </div>
      </section>
      <section className="p-2 sm:p-10 text-center">
        <h2>A beach retreat</h2>
        <p className="mb-1">
          Our venue is a little haven, a comfortable beach front Vila located in Ferma,
          (I put the geographical info under PRACTICAL DETAILS see below) in the island Crete in Greece.
        </p>
        <p className="mb-1">
          We will enjoy our own private perfect Mediterranean beach,
          with a shaded wooden deck with sun beds and chairs for a unique beach experience. We have a Greek Sauna as well.
        </p>
        <p className="mb-1">
          We will be holding our sessions in a big beautiful (90sqm) studio with wooden floors and big windows.
          It&apos;s the perfect clean space to move, sit, dance, talk, sing, and be.  Our sacred temple.
        </p>
        <p className="mb-1">
          The rooms are simple and comfy, with each apartment\room having a kitchenette, private toilets and shower.
        </p>
        <p>
          We have rented the house next door as well, another venue with 4 beautiful apartments,
          so we have space for 30 women in the 2 houses together, in perfect staying conditions.
        </p>
      </section>
      <footer className="sm:p-5 w-full relative overflow-hidden">
        <Image
          src={footerBackground}
          alt=""
          placeholder="blur"
          quality={100}
          className="absolute w-full -z10 bottom-0 left-0"
          style={{
            height: '140%'
          }}
          sizes="100vw"
        />
        <div className="flex flex-row flex-wrap sm:flex-nowrap w-3/4 m-auto relative">
          <Image src={creteMap} className="sm:w-2/3" alt="Map of Crete" />
          <Image src={cretePhotos} className="sm:w-1/3" alt="Photos of Crete" />
        </div>
        <div className="flex flex-col relative items-center mt-10">
          <h2>Facilitating</h2>
          <p>Milla Berglund and Pavaka Halel Katzir</p>
          <Image src={millaPavaka} alt="Milla and Pavaka" className="sm:w-1/4" />
          <p className="w-5/6 sm:w-3/4 text-center p-2 bg-white/70 shadow-[0_0_40px_0_rgba(255,255,255,1)] rounded-sm">
            We met in Mary Ann Winiger&apos;s Immersions, and connected with ease and joy.
            We know the benefits of being together as Manifestors in the experiential field of investigating the Aura.
            The sameness of Aura is a bridge across languages and cultural conditioning and differences.
            This retreat is a natural happening out of this joy of being together, with our international tribe,
            celebrating both the familiarity of Manifestor attributes, and the uniqueness of each individual, in correctness.
          </p>
        </div>
      </footer>
    </main>
  );
}
