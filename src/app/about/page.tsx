import Image from 'next/image';
import pavakaBodygraph from '../images/PavakaBodygraph.png';
import pavakaPhoto from '../images/Pavaka.jpg';
import pavakaHeadline from '../images/pavakaText.png';
import millaBodygraph from '../images/MillaBodygraph.png';
import millaPhoto from '../images/Milla.jpg';
import millaHeadline from '../images/millaText.png';
import ihdsCertified from '../images/Certified-pro-transparent.png';
import etiPhoto from '../images/Eti.jpg';

export default function Home() {
  return (
    <>
      <h1 className="mx-2 md:mt-10 text-center">Who are we?</h1>
      <div className="flex flex-col items-center md:items-start md:flex md:flex-row md:justify-evenly mb-20">
        <div className="w-11/12 sm:w-4/5 md:w-2/5 mb-10 md:mb-0">
          <h2>
            <Image
              className="w-3/4 sm:w-2/3 md:w-3/5 lg:w-2/5"
              alt="Pavaka Halel Katzir"
              src={pavakaHeadline}
            />
          </h2>
          <p>
            <Image
              className="float-left mb-5 sm:w-1/2 sm:mr-2 sm:mb-0"
              alt="Image of Pavaka"
              src={pavakaPhoto}
            />
            5\1 emotional Manifestor. Walking the spiritual path since 1999,
            through many teachings and methods, and have been teaching and
            guiding people since 2005.
          </p>
          <p>
            When HD came into my life in 2012 and I started living the
            experiment radically, it mutated me and transformed my life deeply,
            even after years of spirituality. It soon became my main way of
            guiding people, initiating them into their selves, both 1 on 1 in
            readings, and facilitating courses and retreats, in Israel and
            internationally. I am a certified Human Design Guide and a PTL
            analyst in formation (finished all the courses 2 yrs. ago and
            waiting for the energy to hand in the work LOL).
          </p>
          <p>
            I love working with my Manifestor family. I have a beautiful all
            Manifestor FB group in Israel, and have facilitated many Manifestor
            meetings, courses and even a 3 day retreat in Israel (we were 30
            Manifestors). Being in the Manifestor Aura together is always
            impactful and mutative for me, and I am so looking forward to meet
            my international sisters.
          </p>
          <div className="flex flex-wrap justify-center md:flex">
            <Image
              className="w-full md:w-1/2"
              src={pavakaBodygraph}
              alt="Pavakas Bodygraph"
            />
            <Image
              className="w-full md:w-1/2"
              src={ihdsCertified}
              alt="IHDS Certified Professional"
            />
          </div>
        </div>
        <div className="w-11/12 sm:w-4/5 md:w-2/5">
          <h2>
            <Image
              className="w-3/4 sm:w-2/3 md:w-3/5 lg:w-2/5"
              alt="Milla Berglund"
              src={millaHeadline}
            />
          </h2>
          <p>
            <Image
              className="float-left mb-5 sm:w-1/2 sm:mr-2 sm:mb-0"
              alt="Image of Milla"
              src={millaPhoto}
            />
            6/2 Splenic Manifestor. 19. I was 19 when I felt done with life and
            in need of help. So, I started searching for answers and in the
            process tried ALL the different things; talk therapy, hypnosis,
            yoga, you name it! Eventually I found my way to someone who guided
            me to a calmer way of being. (Later found out he is an Emotional
            Projector.) This led me to wanting to support others and I have
            worked with clients since 2001, with different modalities.
          </p>
          <p>
            I crossed paths with Human Design in 2012 - and living Strategy &
            Authority became my way to navigate the world. Finally, the pieces
            of my life&apos;s puzzle finally fit together with a vocabulary, and
            a context, making sense. Went to my first Immersion with Mary Ann in
            2015 and experienced the power of being in Aura with others living
            their experiment. Since then, I have become an LYD guide and
            (IHDS-board willing) HD Analyst, working with clients through
            sessions and readings. When I step out from behind my barrier for
            the correct call, such as this retreat, I relax and enjoy my love in
            supporting fellow Manifestors.
          </p>
          <div className="md:flex">
            <Image
              className="md:w-1/2"
              src={millaBodygraph}
              alt="Millas Bodygraph"
            />
            <Image
              className="md:w-1/2"
              src={ihdsCertified}
              alt="IHDS Certified Professional"
            />
          </div>
        </div>
      </div>
      <h2>Meet the team</h2>
      <div className="w-11/12 sm:w-4/5 md:w-2/5">
        <h3>Eti Zohar Abramovitz</h3>
        <p>
          <Image
            className="float-left mb-5 sm:w-1/2 sm:mr-2 sm:mb-0"
            alt="Image of Eti"
            src={etiPhoto}
          />
          I&apos;m 45 years old and a mother of two teenagers. I&apos;m a 3\6
          emotional manifesor I deeply love skills. I am a musician, a flute
          player, and an educator working with young children and teens. I
          mediate in family conflicts.
        </p>
        <p>
          In the retreat, I will be facilitating a chi Kong practice 3 mornings.
          I practice Chinese martial arts for 25 years now. I practice and teach
          with much love to this amazing body path I chose. I&apos;m excited to
          do some practices with you, that will connect us more deeply to our
          unique center, to the special deep silence and quiet zone in us, the
          one that initiates the most wanted peaceful state that is influencing
          and impacting both inwards and outwards. See you with big curiosity.
        </p>
      </div>
    </>
  );
}
