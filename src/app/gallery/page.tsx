'use client';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';
import 'yet-another-react-lightbox/styles.css';
import NextJsImage from '../components/NextJsImage';
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
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleOpen = (state: boolean) => () => setOpen(state);
  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);

  return (
    <>
      <h1 className="mx-2 text-center">Gallery</h1>
      <div className="w-11/12 max-w-lg mx-auto">
        <p>
          Our first Human Design Manifestor women retreat was on June 2024 in
          Crete, at a paradise venue with a private beach.
        </p>
        <p>
          With a group of beautiful Manifestor sisters from around the world we
          explored and embodied deeper what it is to live our Design. Through
          experiential practices, movement, and profound conversation we
          supported and empowered our informing, our presence in inner authority
          and our flow in life.
        </p>
        <p>
          We also relaxed in the sun, swam in the sea, ate delicious Greek food
          and just luxuriated in each other&apos;s company. We share many
          precious memories from this mutual creation of peaceful, inspirational
          and impactful event!
        </p>
      </div>
      <Lightbox
        // open={open}
        // close={() => setOpen(false)}
        slides={galleryPics}
        plugins={[Inline]}
        on={{
          view: updateIndex,
          click: toggleOpen(true),
        }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: 'cover',
        }}
        inline={{
          style: {
            width: '100%',
            maxWidth: '900px',
            aspectRatio: '3 / 2',
            margin: '0 auto',
          },
        }}
        render={{ slide: NextJsImage }}
      />

      <Lightbox
        open={open}
        close={toggleOpen(false)}
        index={index}
        slides={galleryPics}
        on={{ view: updateIndex }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />
      <Footer />
    </>
  );
}
