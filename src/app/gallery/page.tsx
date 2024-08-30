import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';
import breakfast from '../images/galleryPage/Breakfast.jpg';
import chartsDoc from '../images/galleryPage/ChartsDocs.jpg';
import chartsFloor from '../images/galleryPage/ChartsOnFloor.jpg';
import chartsFloorGroup from '../images/galleryPage/ChartsOnFloorGroup.jpg';
import circleOutside from '../images/galleryPage/CircleOutside.jpg';
import dinnerThea from '../images/galleryPage/DinnerThea.jpg';
import emoNonEmo from '../images/galleryPage/EmoNon-emo.jpg';
import groupFirstDay from '../images/galleryPage/Group1stDay.jpg';
import groupLawn from '../images/galleryPage/GroupLawn.jpg';
import hdDocRetreat from '../images/galleryPage/HdDocRetreat.jpg';
import informingSession from '../images/galleryPage/InformingSession.jpg';
import lastDayGroupPhoto from '../images/galleryPage/LastDayGroupPhoto.jpg';
import manifestorDanceParty from '../images/galleryPage/ManifestorDanceParty.jpg';
import manifestorInformSession from '../images/galleryPage/ManifestorInformSession.jpg';
import manifestorSessionInformGroup from '../images/galleryPage/ManifestorSessionInformGroup.jpg';
import shashukka from '../images/galleryPage/Shakshukka.jpg';
import sunriseAvitalBar from '../images/galleryPage/SunriseAvitalBay.jpg';
import voiceplay from '../images/galleryPage/Voiceplay.jpg';

const galleryPics = [
  breakfast,
  chartsFloor,
  chartsFloorGroup,
  circleOutside,
  dinnerThea,
  emoNonEmo,
  groupFirstDay,
  groupLawn,
  hdDocRetreat,
  informingSession,
  lastDayGroupPhoto,
  manifestorDanceParty,
  manifestorInformSession,
  manifestorSessionInformGroup,
  shashukka,
  sunriseAvitalBar,
  voiceplay,
];

export default function Home() {
  return (
    <>
      <h1 className="mx-2 text-center">Gallery</h1>
      <div className="w-11/12 max-w-lg mx-auto">
        <p>
          The inaugural Human Design Manifestor women retreat was June 6 - 9 in
          Crete, 2024. Both Pavaka and Milla come from Immersions with Mary Ann
          Winiger and carry the Immersion frequency within them. The retreat is
          about embodiment, exploring what it is to be living your Design. A
          possibility to experience and watch your impact while also being
          impacted, gently navigated by an Emotional Manifestor and a Splenic
          Manifestor.
        </p>
        <p>
          Beautiful Ferma in Crete was the location, at a beautiful house with a
          private beach.
        </p>
        <p>
          The foundation for the retreat were Human Design sessions, covering a
          wide variety of topics. Added on where movement for an opportunity of
          integration of the information. We relaxed in the sun, swimming in the
          sea, eating delicious home made food and just luxuriating in each
          other&apos;s company. For some of us, this was the first time BE-ing
          with other Manifestor women, for others it was a much welcome repeat
          experience.
        </p>
        <p>
          We all brought our own frequency and together we conjured something
          unique, a creation of space and time.
        </p>
      </div>
      <ImageGallery galleryPics={galleryPics} />
      <Footer />
    </>
  );
}
