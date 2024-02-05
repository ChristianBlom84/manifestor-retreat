import Image from "next/image";
import logo from "./images/logo/Logo2.jpg";
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
import Link from "next/link";

export default function Home() {
  return (
    <>
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
                <li className="sm:w-1/3 sm:mr-10 relative">
                  <Link href="/topics">
                    <Image src={manifestorRelationships} alt="" />
                    <p>Being a Manifestor woman in relationships can be a challenging experience.</p>
                  </Link>
                </li>
                <li className="sm:w-1/3 sm:mr-10">
                  <Link href="/topics">
                    <Image src={manifestorAuthorities} alt="" />
                    <p>The different Manifestor inner authorities: Emotional, splenic, ego</p>
                  </Link>
                </li>
                <li className="sm:w-1/3">
                  <Link href="/topics">
                    <Image src={informing} alt="" />
                    <p>A deep dive into Informing</p>
                  </Link>
                </li>
              </div>
              <div className="flex flex-wrap md:flex-nowrap flex-row justify-center">
                <li className="sm:w-1/4 sm:mr-10">
                  <Link href="/topics">
                    <Image src={consciousUnconscious} alt="" />
                    <p>Conscious VS. Unconscious Manifestors</p>
                  </Link>
                </li>
                <li className="sm:w-1/4 sm:mr-10">
                  <Link href="/topics">
                    <Image src={manifestingProjected} alt="" />
                    <p>Manifesting channels VS. Projected channels Manifestors</p>
                  </Link>
                </li>
                <li className="sm:w-1/4 sm:mr-10">
                  <Link href="/topics">
                    <Image src={angerTransformation} alt="" />
                    <p>Anger and transformation</p>
                  </Link>
                </li>
                <li className="sm:w-1/4">
                  <Link href="/topics">
                    <Image src={peaceFlow} alt="" />
                    <p>Peace and flow</p>
                  </Link>
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
      <section className="p-2 sm:px-10 sm:pt-10 pb-0 text-center">
        <h2>A beach retreat</h2>
        <p className="mb-1">
          Our venue is a little haven, a comfortable beach front Vila located in Ferma, in the island Crete in Greece.
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
    </>
  );
}
