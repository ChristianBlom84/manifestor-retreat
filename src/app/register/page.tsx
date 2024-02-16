import Image from 'next/image';
import bedroomOne from '../images/bedroom-1.jpg.webp';
import bedroomTwo from '../images/bedroom-2-single-beds.jpg.webp';
import bedroomThree from '../images/bedroom-3-single-bed.jpg.webp';
import bedroomFour from '../images/bedroom-4-2-double-beds.jpg.webp';
import oceanView from '../images/ocean-view1.jpg.webp';
import ImageGallery from '../components/ImageGallery';

export default function Home() {
  return (
    <>
      <h1 className="mx-2 text-center">Practical Details and Registering</h1>
      <div className="m-2">
        <h2>Prices</h2>
        <p>
          Early early bird (ends 28/2): 918€
          <br />
          Early bird price (ends 31/3): 1020€
          <br />
          From April 1st: 1120€
          <br />
          Two single rooms available 1300€ - first come, first serve!
        </p>
        <p>
          All prices include bedroom shared by two people (with same Inner
          Authority), morning snacks and homemade Greek lunches.
        </p>
        <h2>Location</h2>
        <p>
          Crete, Greece. Ferma is 7km east of lerapetra, 1h15min from Heraklion
          airport.
        </p>
        <p>
          <span>PLEASE NOTE</span>
          <br />
          Dinner is not included in the price.
          <br />
          Tavernas, restaurants and supermarket are within walking distance of
          the villa.
        </p>
        <p>
          When booking you will be asked to send in your birth data, this is to
          sort out the rooms according to Inner Authority. Upon arrival your HD
          chart will be printed and laminated.
        </p>
        <p>This website will be updated continuously.</p>
        <h2>Contact</h2>
        <p>
          International people - please contact Milla for payment information
          (no phone number here because I don&apos;t want it on the Internet 🙂)
          <br />
          <a href="mailto:milla@lifeinhd.se">milla@lifeinhd.se</a>.
        </p>
        <p>
          Israeli people - please contact Pavaka for payment information
          <br />
          <a href="tel:+972508862726">+972 50-886-2726</a>
          <br />
          <a href="mailto:pavakamorphosis@gmail.com">
            pavakamorphosis@gmail.com
          </a>
        </p>
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
        <h2>Images of the Venue</h2>
      </div>
      <ImageGallery />
    </>
  );
}
