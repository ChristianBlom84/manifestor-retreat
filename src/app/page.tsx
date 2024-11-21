import Image from 'next/image';
import Link from 'next/link';
import Reviews from './components/Reviews';
import Footer from './components/FooterHome';
import uniqueAdventure from './images/uniqueadventure.png';
import reviewsHeading from './images/Reviews.png';
import houseFront from './images/HouseFront.jpg';
import circuitry from './images/Circuitry.png';
import manifestorAuthorities from './images/InnerAuthorities.png';
import informing from './images/InformingDeepDive.png';
import consciousUnconscious from './images/ConsciousVSUnconscious.png';
import manifestingProjected from './images/ManifestingChannelsVSProjected.png';
import angerPeace from './images/AngerAndPeace.png';
import profiles from './images/Profiles.png';
import thursday from './images/Thursday.png';
import friday from './images/Friday.png';
import saturday from './images/Saturday.png';
import sunday from './images/Sunday.png';
import monday from './images/Monday.png';
import tree from './images/Giant-tree.jpg';

export default function Home() {
  return (
    <>
      <section className="p-5 pt-0 max-w-screen-xl">
        <div className="flex flex-row">
          <div className="flex flex-col justify-center text-center">
            <h1 className="text-theme-red text-2xl md:text-3xl max-w-2xl mx-auto">
              Calling all sisters of the Manifestor clan - join us in a{' '}
              <Image
                className="inline max-h-8 md:max-h-10 w-auto m-0"
                src={uniqueAdventure}
                alt="unique adventure!"
              />
            </h1>
            <div className="m-auto max-w-lg text-center">
              <p className="mb-2">
                We are thrilled to inform you of the{' '}
                <b>second Human Design Manifestor women retreat</b>, this time a
                cozy fall forest indulgence in a tranquil paradise in Spain!
              </p>
              <p className="mb-2">
                On November 28th we embark on a 5 day journey to discover,
                experiment, experience, investigate, impact and be impacted, and
                also just ENJOY precious time together in Manifestor Aura and
                feminine inspiration
              </p>
              <p className="mb-2">
                The setting is a beautiful secluded mansion with plenty of green
                to venture into in the lush nature of Pendés, outside Barcelona.
                With a chef making 3 delicious Mediterranean meals a day for us,
                plenty of spaces to BE, and a swimming pool, we need not go
                anywhere - it is a real RETREAT.
              </p>
              <p className="mb-2">
                This is an opportunity to relax deeper into the form and the
                closed Aura, to gain a solid understanding of the Manifestor
                mechanics, practice the practical implements of the knowledge,
                and dive together into the magic of just BEING us.
              </p>
              <p className="mb-2">
                We will experience in Aura interaction, learn and discuss
                important Manifestor themes, enjoy morning relaxing sessions
                (Yoga\Chi Gong), movement, dancing and music. All of this
                facilitated by Manifestor women deeply immersed living their HD
                experiment.
              </p>
            </div>
            <Image
              className="w-full m-auto mb-12 max-w-screen-md"
              src={houseFront}
              alt="Image of the venue"
            />
            <h3 className="font-semibold">
              Some topics we will cover and investigate:
            </h3>
            <ul className="flex items-center flex-col">
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
                <li className="sm:w-1/3 md:w-1/4 sm:mr-10 relative">
                  <Link href="/topics">
                    <Image
                      className="w-2/3 sm:w-full m-auto"
                      src={circuitry}
                      alt=""
                    />
                    <p>Circuitry</p>
                  </Link>
                </li>
                <li className="sm:w-1/3 md:w-1/4">
                  <Link href="/topics">
                    <Image
                      className="w-2/3 sm:w-full m-auto"
                      src={informing}
                      alt=""
                    />
                    <p>A deep dive into Informing</p>
                  </Link>
                </li>
              </div>
              <div className="flex flex-row flex-wrap md:flex-nowrap justify-center">
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
                      src={angerPeace}
                      alt=""
                    />
                    <p>Anger and peace</p>
                  </Link>
                </li>
                <li className="sm:w-1/3 md:w-1/4">
                  <Link href="/topics">
                    <Image
                      className="w-2/3 sm:w-full m-auto"
                      src={profiles}
                      alt=""
                    />
                    <p>Profiles</p>
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </section>
      <section className="p-5 max-w-screen-lg">
        <h2 className="text-center">Schedule</h2>
        <div className="flex items-center flex-col">
          <div className="flex flex-col items-center md:items-start md:flex-row flex-wrap md:flex-nowrap justify-center">
            <div className="w-4/5 sm:w-1/2 md:w-1/4 mb-5 md:mr-20">
              <Image src={thursday} alt="Thursday" />
              <ul>
                <li>
                  <span className="font-semibold">17:00</span> Opening ceremony
                  & getting to know each other
                </li>
                <li>
                  <span className="font-semibold">19:00</span> Dinner
                </li>
                <li>
                  <span className="font-semibold">20:00</span> Swedish cookie
                  night by the fire
                </li>
              </ul>
            </div>
            <div className="w-4/5 sm:w-1/2 md:w-1/4 mb-5 md:mr-20">
              <Image src={friday} alt="Friday" />
              <ul>
                <li>
                  <span className="font-semibold">08:00</span> Yoga/morning
                  movement
                </li>
                <li>
                  <span className="font-semibold">09:00</span> Breakfast
                </li>
                <li>
                  <span className="font-semibold">10:00</span> Conscious VS.
                  Unconscious & Manifesting VS. Projecting channels
                </li>
                <li>
                  <span className="font-semibold">11:15</span> Break
                </li>
                <li>
                  <span className="font-semibold">11:30 - 12:15</span>{' '}
                  Continuing session
                </li>
                <li>
                  <span className="font-semibold">13:00</span> Lunch
                </li>
                <li>
                  <span className="font-semibold">16:00</span> Profiles -
                  Manifestors and unique leading
                </li>
                <li>
                  <span className="font-semibold">17:15</span> Break
                </li>
                <li>
                  <span className="font-semibold">17:30 - 18:15</span> Profiles
                  - Lines and angles
                </li>
                <li>
                  <span className="font-semibold">19:00</span> Dinner
                </li>
                <li>
                  <span className="font-semibold">20:00</span> Evening activity
                </li>
              </ul>
            </div>
            <div className="w-4/5 sm:w-1/2 md:w-1/4 mb-5">
              <Image src={saturday} alt="Saturday" />
              <ul>
                <li>
                  <span className="font-semibold">08:00</span> Yoga/morning
                  movement
                </li>
                <li>
                  <span className="font-semibold">09:00</span> Breakfast
                </li>
                <li>
                  <span className="font-semibold">10:00</span> Informing - The
                  magic of strategy
                </li>
                <li>
                  <span className="font-semibold">11:15</span> Break
                </li>
                <li>
                  <span className="font-semibold">11:30 - 12:15</span> Informing
                  - Deepening the experiment
                </li>
                <li>
                  <span className="font-semibold">13:00</span> Lunch
                </li>
                <li>
                  <span className="font-semibold">16:00</span> Inner Authority -
                  Manifestor differentiation
                </li>
                <li>
                  <span className="font-semibold">17:15</span> Break
                </li>
                <li>
                  <span className="font-semibold">17:30 - 18:15</span> Inner
                  Authority - leaning into our SELF
                </li>
                <li>
                  <span className="font-semibold">19:00</span> Dinner
                </li>
                <li>
                  <span className="font-semibold">20:00</span> Manifestor
                  dancing party
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start md:flex-row flex-wrap md:flex-nowrap justify-center">
            <div className="w-4/5 sm:w-1/2 md:w-1/4 mb-5 md:mr-20">
              <Image src={sunday} alt="Sunday" />
              <ul>
                <li>
                  <span className="font-semibold">08:00</span> Yoga/morning
                  movement
                </li>
                <li>
                  <span className="font-semibold">09:00</span> Breakfast
                </li>
                <li>
                  <span className="font-semibold">10:00</span>Circuitry - how we
                  interact
                </li>
                <li>
                  <span className="font-semibold">11:15</span> Break
                </li>
                <li>
                  <span className="font-semibold">11:30 - 12:15</span> Circuitry
                  - Dilemmas in mixed circuitry
                </li>
                <li>
                  <span className="font-semibold">13:00</span> Lunch
                </li>
                <li>
                  <span className="font-semibold">16:00</span> Anger and Peace -
                  Confronting resistance
                </li>
                <li>
                  <span className="font-semibold">17:15</span> Break
                </li>
                <li>
                  <span className="font-semibold">17:30 - 18:15</span> Anger and
                  Peace - Relaxing into signature
                </li>
                <li>
                  <span className="font-semibold">19:00</span> Dinner
                </li>
                <li>
                  <span className="font-semibold">20:00</span> Movie night
                </li>
              </ul>
            </div>
            <div className="w-4/5 sm:w-1/2 md:w-1/4 mb-5">
              <Image src={monday} alt="Monday" />
              <ul>
                <li>
                  <span className="font-semibold">08:00</span> Breakfast
                </li>
                <li>
                  <span className="font-semibold">09:00</span> Closing session
                  and goodbyes
                </li>
                <li>
                  <span className="font-semibold">11:00</span> Checkout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-2 px-2 sm:px-0 sm:pt-10 pb-0">
        <Image
          className="w-full m-auto mb-4 max-w-screen-md"
          src={tree}
          alt="Image of the venue"
        />
        <div className="w-11/12 max-w-lg text-center m-auto mb-5">
          <h2>A forest retreat</h2>
          <p className="mb-2">
            Our venue is a haven, a big and beautiful Spanish estate located in
            Sitges (see{' '}
            <Link className="underline" href="/register">
              PRACTICAL DETAILS
            </Link>
            ) in Pendés an hour outside Barcelona.
          </p>
          <p className="mb-2">
            Imagine us, the tribe of Manifestor women, peacefully luxuriating in
            our freedom and power, in a tranquil forest in beautiful nature.
            That&apos;s exactly what it will be!
          </p>
          <p className="mb-2">
            We&apos;ll enjoy fall weather in this huge, amazing mansion with
            plenty of room to relax, have your space - and for the brave ones
            there is a pool! Breakfast is served in the spacious kitchen area,
            where you can choose to eat or find a secluded spot if you prefer.
            We will also have a private chef cook delicious food for us, both
            lunch (vegetarian) and dinner(omnivore). Throughout the day, a
            coffe/tea cart, with snacks, will be available. We&apos;re here to
            support and empower you, ensuring you are well taken care of during
            the entire stay
          </p>
          <p>
            <Link className="text-theme-red underline" href="/venue">
              More info on the venue and photos.
            </Link>
          </p>
        </div>
        <h2 className="text-center mt-10">
          <Image
            className="inline max-w-36 m-0"
            src={reviewsHeading}
            alt="Reviews"
          />
        </h2>
        <div className="p-2 px-4 w-11/12 max-w-lg text-center m-auto bg-white/70 shadow-[inset_0_0_40px_0_rgba(255,255,255,1)] rounded-sm">
          <Reviews />
        </div>
      </section>
      <Footer />
    </>
  );
}
