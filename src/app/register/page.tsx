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
      <div className="m-2">
        <h2>Prices</h2>
        <p>
          Early bird price (ends 31/3):{' '}
          <span className="font-semibold">1020€</span>
          <br />
          From April 1st: <span className="font-semibold">1120€</span>
          <br />
          Two single rooms available{' '}
          <span className="font-semibold">1300€</span> - first come, first
          serve!
        </p>
        <p>
          All prices include your Human Design chart printed and laminated,
          bedroom shared by two people (with same Inner Authority), morning
          snacks and homemade Greek lunches.
        </p>
        <p>
          <span className="text-theme-red">PLEASE NOTE</span>
          <br />
          Dinner is not included in the price.
          <br />
          Tavernas, restaurants and supermarket are within walking distance of
          the villa.
        </p>
        <h2>Location</h2>
        <p>
          Our beautiful venue is located in Ferma, on the island of Crete,
          Greece.
        </p>
        <p>
          Ferma is a small Greek village, 75min drive from Heraklion airport. We
          are aspiring to organize and share taxi rides from the airport, via
          our FB event page, and maybe future WhatsApp group. To make it easier,
          we advise you to join the{' '}
          <a
            className="text-theme-red underline"
            target="_blank"
            href="https://www.facebook.com/share/tu3iHRALsXj21p5a/?mibextid=9VsGKo"
          >
            FB event group.
          </a>
        </p>
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
          <br />
          If you need a payment plan - talk to us!
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
          Full refund minus 5% until May 1st.
          <br />
          Cancellations after May 1st - 50% refund.
          <br />
          Cancellations after May 22nd - 20% refund.
          <br />
          Cancellations after June 1st - no refund.
        </p>
      </div>
      <Footer />
    </>
  );
}
