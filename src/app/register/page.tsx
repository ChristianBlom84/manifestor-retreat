import Image from 'next/image';
import Footer from '../components/Footer';
import bedroomOne from '../images/bedroom-1.jpg.webp';
import bedroomTwo from '../images/bedroom-2-single-beds.jpg.webp';
import bedroomThree from '../images/bedroom-3-single-bed.jpg.webp';
import bedroomFour from '../images/bedroom-4-2-double-beds.jpg.webp';
import oceanView from '../images/ocean-view1.jpg.webp';
import ImageGallery from '../components/ImageGallery';
import Link from 'next/link';

export default function Home() {
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
      <Footer />
    </>
  );
}
