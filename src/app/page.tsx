import Image from 'next/image';
import Link from 'next/link';
import logo from './images/logo/Logo2.jpg';
import uniqueAdventure from './images/uniqueadventure.png';
import manifestorRelationships from './images/ManifestorRelationships.png';
import manifestorAuthorities from './images/TheDifferentManifestors.png';
import informing from './images/InformingDeepDive.png';
import impact from './images/Impact.png';
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
import venuePic from './images/Venue7.jpg';
import millaPavaka from './images/MillaAndPavaka.png';

export default function Home() {
  return (
    <>
      <section className="p-10 pt-0 max-w-screen-xl">
        <div className="flex flex-row">
          <div className="flex flex-col justify-center text-center">
            <h1 className="text-theme-red">
              Calling all beautiful lone wolves of the Manifestor clan -
              let&apos;s embark on a{' '}
              <Image
                className="inline max-h-12 w-auto m-0"
                src={uniqueAdventure}
                alt="unique adventure!"
              />
            </h1>
            <p className="mb-1">
              Informing you of an opportunity to relax deeper into the
              Manifestor Aura, gain a solid understanding of the Manifestor
              mechanics, and dive together into the magic of BEING us.
            </p>
            <p className="mb-1">
              On June 6th, we embark on a 5 day discovery journey to experiment,
              experience, learn, impact and be impacted, and also just ENJOY
              precious time together in Manifestor sisterhood.
            </p>
            <p className="mb-1">
              The setting is a beautiful villa (with a private beach) in the
              island of Crete, Greece.
            </p>
            <p className="mb-12">
              We will experience in Aura interaction, learn, and discuss
              important Manifestor themes, enjoy morning movement and original
              music. All of this facilitated by Manifestor women deeply immersed
              living their HD experiment.
            </p>
            <h3 className="font-bold">
              Some topics we will cover and investigate:
            </h3>
            <ul className="flex items-center flex-col">
              <div className="flex flex-row flex-wrap md:flex-nowrap justify-center">
                <li className="sm:w-1/3 md:w-1/4 sm:mr-10 relative">
                  <Link href="/topics">
                    <Image
                      className="w-2/3 sm:w-full m-auto"
                      src={manifestorRelationships}
                      alt=""
                    />
                    <p>Being a Manifestor (woman) in relationships.</p>
                  </Link>
                </li>
                <li className="sm:w-1/3 md:w-1/4 md:mr-10">
                  <Link href="/topics">
                    <Image
                      className="w-2/3 sm:w-full m-auto"
                      src={manifestorAuthorities}
                      alt=""
                    />
                    <p>
                      The different Manifestor inner authorities: Emotional,
                      splenic, ego
                    </p>
                  </Link>
                </li>
                <li className="sm:w-1/3 md:w-1/4 sm:mr-10">
                  <Link href="/topics">
                    <Image
                      className="w-2/3 sm:w-full m-auto"
                      src={informing}
                      alt=""
                    />
                    <p>A deep dive into Informing</p>
                  </Link>
                </li>
                <li className="sm:w-1/3 md:w-1/4">
                  <Link href="/topics">
                    <Image
                      className="w-2/3 sm:w-full m-auto"
                      src={impact}
                      alt=""
                    />
                    <p>Impact</p>
                  </Link>
                </li>
              </div>
              <div className="flex flex-wrap md:flex-nowrap flex-row justify-center">
                <li className="sm:w-1/3 md:w-1/4 sm:mr-10">
                  <Link href="/topics">
                    <Image
                      className="w-2/3 sm:w-full m-auto"
                      src={consciousUnconscious}
                      alt=""
                    />
                    <p>Conscious VS. Unconscious Manifestors</p>
                  </Link>
                </li>
                <li className="sm:w-1/3 md:w-1/4 md:mr-10">
                  <Link href="/topics">
                    <Image
                      className="w-2/3 sm:w-full m-auto"
                      src={manifestingProjected}
                      alt=""
                    />
                    <p>
                      Manifesting channels Vs. Projected channels Manifestors
                    </p>
                  </Link>
                </li>
                <li className="sm:w-1/3 md:w-1/4 sm:mr-10">
                  <Link href="/topics">
                    <Image
                      className="w-2/3 sm:w-full m-auto"
                      src={angerTransformation}
                      alt=""
                    />
                    <p>Anger and transformation</p>
                  </Link>
                </li>
                <li className="sm:w-1/3 md:w-1/4">
                  <Link href="/topics">
                    <Image
                      className="w-2/3 sm:w-full m-auto"
                      src={peaceFlow}
                      alt=""
                    />
                    <p>Peace and flow</p>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </section>
      <section className="p-2 sm:px-10 sm:pt-10 pb-0 text-center">
        <Image className="w-full m-auto mb-4" src={venuePic} alt="" />
        <h2>A beach retreat</h2>
        <p className="mb-1">
          Our venue is a little haven, a comfortable beach front Vila located in
          Ferma, (see{' '}
          <Link className="underline" href="/register">
            PRACTICAL DETAILS
          </Link>
          ) in the island Crete in Greece.
        </p>
        <p className="mb-1">
          Imagine us, the tribe of Manifestor women, peacefully relaxing in our
          freedom and power, in a tranquil paradise on a beautiful island.
          That&apos;s exactly what it will be!
        </p>
        <p className="mb-1">
          We&apos;ll enjoy perfect Mediterranean weather, two amazing
          neighboring beachfront villas with a private beach, sauna, and
          delicious homemade Greek food delivered to us.
        </p>
        <p>
          Evenings offer optional dinners at a nearby tavern, within walking
          distance, and plenty of time to enjoy each other&apos;s company.
        </p>
      </section>
      <section className="p-10 max-w-screen-lg">
        <h2 className="text-center">Schedule</h2>
        <div className="flex items-center flex-col">
          <div className="flex flex-col items-center md:items-start md:flex-row flex-wrap md:flex-nowrap justify-center">
            <div className="w-3/4 sm:w-1/2 md:w-1/4 mb-5 md:mr-20">
              <Image src={thursday} alt="Thursday" />
              <ul>
                <li>Arrival day - arrive at your own pace</li>
                <li>
                  17:00 opening ceremony - let&apos;s get to know each other
                </li>
                <li>18:30 out to dinner together (optional)</li>
              </ul>
            </div>
            <div className="w-3/4 sm:w-1/2 md:w-1/4 mb-5 md:mr-20">
              <Image src={friday} alt="Friday" />
              <ul>
                <li>08:00 - 09:00 Qi Gong</li>
                <li>09:00 Morning snacks</li>
                <li>10:00 - 11:30/12:00 Manifestor session</li>
                <li>12:30 Lunch</li>
                <li>15:00 - 17:00 Manifestor session</li>
                <li>18:00 Kabalat Shabbat</li>
                <li>Dinner time</li>
              </ul>
            </div>
            <div className="w-3/4 sm:w-1/2 md:w-1/4 mb-5">
              <Image src={saturday} alt="Saturday" />
              <ul>
                <li>08:00 - 09:00 Qi Gong</li>
                <li>09:00 Morning snacks</li>
                <li>10:00 - 11:30/12:00 Manifestor session</li>
                <li>12:30 Lunch</li>
                <li>15:00 - 17:00 Manifestor session</li>
                <li>Dinner time</li>
                <li>20:00 Music & Dancing</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start md:flex-row flex-wrap md:flex-nowrap justify-center">
            <div className="w-3/4 sm:w-1/2 md:w-1/4 mb-5 md:mr-20">
              <Image src={sunday} alt="Sunday" />
              <ul>
                <li>08:00 - 09:00 Qi Gong</li>
                <li>09:00 Morning snacks</li>
                <li>10:00 - 11:30/12:00 Manifestor session</li>
                <li>12:30 Lunch</li>
                <li>15:00 - 17:00 Manifestor session</li>
                <li>Dinner time</li>
                <li>20:00 Music concert</li>
              </ul>
            </div>
            <div className="w-3/4 sm:w-1/2 md:w-1/4 mb-5">
              <Image src={monday} alt="Monday" />
              <ul>
                <li>Departure day</li>
                <li>08:00 Morning snacks</li>
                <li>
                  09:00 - 10:00 Closing ceremony - a morning to just BE together
                </li>
                <li>Leaving at your own pace</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
