'use client';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';
import 'yet-another-react-lightbox/styles.css';
import NextJsImage from '../components/NextJsImage';
import Footer from '../components/Footer';
import roomOne from '../images/rooms/Room1.jpg';
import roomTwo from '../images/rooms/Room2.jpg';
import roomThree from '../images/rooms/Room3.jpg';
import roomFour from '../images/rooms/Room4.jpg';
import roomFive from '../images/rooms/Room5.jpg';
import ImageGallery from '../components/ImageGallery';
import Link from 'next/link';
import { useState } from 'react';

const roomPics = [roomOne, roomTwo, roomThree, roomFour, roomFive];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleOpen = (state: boolean) => () => setOpen(state);
  const updateIndex = ({ index: current }: { index: number }) =>
    setIndex(current);

  return (
    <>
      <h1 className="mx-2 text-center">Practical Details and Registering</h1>
      <div className="m-2 max-w-xl">
        <h2>Room Options and Prices</h2>
        <p>
          <span className="font-bold">
            3 per room with shared bathrooms (not inside room)
            <br />
          </span>
          Early bird until October 31st -{' '}
          <span className="font-semibold">810€</span>
          <br />
          Price after October 31st: <span className="font-semibold">890€</span>
        </p>
        <p>
          <span className="font-bold">
            3 per suite with private bathrooms and private terrace
            <br />
          </span>
          Early bird until October 31st -{' '}
          <span className="font-semibold">960€</span>
          <br />
          Price after October 31st: <span className="font-semibold">1056€</span>
        </p>
        <p>
          <span className="font-bold">
            2 per room with shared bathrooms (not inside room)
            <br />
          </span>
          Early bird until October 31st -{' '}
          <span className="font-semibold">960€</span>
          <br />
          Price after October 31st: <span className="font-semibold">1056€</span>
        </p>
        <p>
          <span className="font-bold">
            2 per double room with private bathroom
            <br />
          </span>
          Early bird until October 31st -{' '}
          <span className="font-semibold">1050€</span>
          <br />
          Price after October 31st: <span className="font-semibold">1155€</span>
        </p>
        <p>
          <span className="font-bold">
            2 per suite with private bathrooms and private terrace
            <br />
          </span>
          Early bird until October 31st -{' '}
          <span className="font-semibold">1120€</span>
          <br />
          Price after October 31st: <span className="font-semibold">1230€</span>
        </p>
        <p>*Payment plans available.</p>
        <p>
          For more info and beautiful pictures of the venue please{' '}
          <Link className="text-theme-red underline" href="/venue">
            see the venue page.
          </Link>
        </p>
        <h2>Contact</h2>
        <p>If you have any questions or want to register please contact us:</p>
        <p>
          <span className="font-semibold">Milla</span> (Sweden)
          <br />
          <a href="mailto:milla@lifeinhd.se">milla@lifeinhd.se</a>.<br />
          (no phone number here because I don&apos;t want it on the Internet 🙂)
          <br />
        </p>
        <p>
          <span className="font-semibold">Pavaka</span> (Israel)
          <br />
          <a href="tel:+972508862726">+972 50-886-2726</a>
          <br />
          <a href="mailto:pavakamorphosis@gmail.com">
            pavakamorphosis@gmail.com
          </a>
        </p>
        <p>
          Payment is possible via PayPal or Wise.
          <br /> People coming from Israel can pay via credit card (contact
          Pavaka)
        </p>
        <p>
          When booking you will be asked to send in your birth data, so we can
          print your chart and sort out the rooms according to Inner Authority.
        </p>
        <p>We look forward to hearing from you!</p>
        <h2>Refunds and cancellations</h2>
        <p>
          Full refund minus 5% until October 21st.
          <br />
          Cancellations after October 21st - 50% refund.
          <br />
          Cancellations after November 4th - 20% refund.
          <br />
          Cancellations after November 21st - no refund.
        </p>
      </div>
      <Lightbox
        // open={open}
        // close={() => setOpen(false)}
        slides={roomPics}
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
            maxWidth: '1080px',
            aspectRatio: '12 / 7',
            margin: '0 auto',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.15)',
          },
        }}
        render={{ slide: NextJsImage }}
      />

      <Lightbox
        className="shadow-xl"
        open={open}
        close={toggleOpen(false)}
        index={index}
        slides={roomPics}
        on={{ view: updateIndex }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />
      <Footer />
    </>
  );
}
