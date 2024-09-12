import Image from 'next/image';
import Footer from '../components/Footer';
import pavakaBodygraph from '../images/PavakaBodygraph.png';
import pavakaPhoto from '../images/Pavaka.jpg';
import pavakaHeadline from '../images/pavakaText.png';
import millaBodygraph from '../images/MillaBodygraph.png';
import millaPhoto from '../images/Milla.jpg';
import millaHeadline from '../images/millaText.png';
import ihdsCertified from '../images/Certified-pro-transparent.png';
import galPhoto from '../images/Gal.jpg';

export default function Home() {
  return (
    <>
      <h1 className="mx-2 md:mt-10 text-center">Who are we?</h1>
      <div className="flex flex-col items-center md:items-start md:flex md:flex-row md:justify-evenly mb-10">
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
            5/1 Emotional Manifestor. Walking the spiritual path since 1999,
            through many teachings and methods, and have been teaching and
            guiding people since 2005. When HD came into my life in 2012 and I
            started living the experiment radically, it mutated me and
            transformed my life deeply, even after years of spirituality. It
            soon became my main way of guiding people, initiating them into
            SELF, through readings, and international Immersions, courses and
            retreats. I am a certified Human Design Guide and Analyst.
          </p>
          <p>
            I love working with my Manifestor family. Being in the Manifestor
            Aura together is always impactful and mutative for me, and I am so
            looking forward to meeting my international sisters.
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
            6/2 Splenic Manifestor. Human Design saved my life. Nope, too
            dramatic. Human Design gave me words to put my experience into a
            context where it made sense. There, that&apos;s better. Looking
            back, I lived my 3rd line phase in true Not-Self fashion, barely
            getting on the roof by the skin of my teeth. Since 2012 I&apos;ve
            been radical in living Strategy and Authority, integrating all my
            experience which has led me to a life of peace I could never have
            imagined. Along the way I became a wife, mom and certified LYD and
            HD Analyst at IHDS, doing readings, sessions and now retreats.
            Supporting Manifestors in Aura is a powerful and life changing
            experience. I feel very humbled, honored and privileged to be a
            small part of someone else&apos;s journey BE-coming their SELF.
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
      <div className="flex flex-col items-center md:items-start md:flex md:flex-row md:justify-evenly mb-20">
        <div className="w-11/12 sm:w-4/5 md:w-2/5 mb-10 md:mb-0">
          <div>
            <h2>Gal Meller</h2>
            <p>
              <Image
                className="float-left mb-5 sm:w-1/2 sm:mr-2 sm:mb-0"
                alt="Image of Milla"
                src={galPhoto}
              />
              6/2 Ego Manifestor. Gal Meller aka Dj Sêlva who sees music as
              medicine, will take us into an ecstatic healing Journey through
              differens tunes, beats and cultures. When she stars playing, the
              ceremony begins, time changes shape, and a door opens to a new
              story within.
            </p>
            <p>
              Gal is also the funder of the Lunatic Tribe women Community and a
              facilitator for various types of feminine healing spaces you can
              find out more about her here:{' '}
              <a
                className="underline"
                target="_blank"
                href="https://linktr.ee/Gal.Meller"
              >
                https://linktr.ee/Gal.Meller
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
