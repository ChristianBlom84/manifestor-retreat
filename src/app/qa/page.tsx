import Image from 'next/image';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <h1 className="mx-2 text-center">Questions and Answers</h1>
      <div className="w-11/12 max-w-lg mx-auto">
        <p>
          Q. Airport transfer
          <br />
          A. Arrival: We are currently looking into the best/cheapest way to
          transfer. (Booking transfer is your responsibility.) We can connect
          you with other participants for possible sharing of transport and
          float suggestions. <br />
          Departure: we will check out and leave at the same time, we are
          coordinating transfer from the maisa to BCN airport. You can check the
          coordinates for the location at{' '}
          <a
            className="underline"
            target="_blank"
            href="https://maps.app.goo.gl/PCBdxoKRSxXuFfWo8"
          >
            Google Maps.
          </a>
        </p>
        <p>
          Q. Do I have to know HD?
          <br />
          A. No prior knowledge of HD is necessary. Focus of the retreat is
          experiential differentiation and living your unique experiment, not
          learning the system as such. The sessions will be accessible for all
          levels.
        </p>
        <p>
          Q. What will the main language be?
          <br />
          A. English. Participants are coming in from all over the world. For
          most of us, English will be the second language.
        </p>
        <p>
          Q. Can I come late / leave early if the dates don’t exactly work for
          me?
          <br />
          A. You do what works for you. If the designated arrival / departure
          days doesn&apos;t work for you, please inform us about your travel
          dates and times.
        </p>
        <p>
          Q. Will I share a room / bathroom?
          <br />
          A. You will share a room with someone with the same Inner Authority.
          The rooms are either en-suite (two roommates sharing) or up to four
          people sharing one bathroom. The price will reflect this when you
          book.
        </p>
        <p>
          Q. What about food?
          <br />
          A. We will have a private chef cooking for us each day. Every day
          there is a Mediterranean breakfast, homemade vegetarian lunch and
          omnivore dinner included in the price. A coffee/tea island with snacks
          will be available throughout the day.
        </p>
        <p>
          Q. Do I have to do all the sessions?
          <br />
          A. You do what is correct for you. The sessions are there to support
          you as a space to relax deeper into yourself - you do what you are
          called to do.
        </p>
        <p>
          Q. Will there be space to be on my own?
          <br />
          A. There is plenty of space and there will be time to just BE.
        </p>
        <p>
          Information will be updated continually so check back in - if you
          still can&apos;t find the answer, you are most welcome to contact us
        </p>
        <a className="underline" href="mailto:milla@lifeinhd.se">
          milla@lifeinhd.se
        </a>
        <br />
        <a className="underline" href="mailto:pavakamorphosis@gmail.com">
          pavakamorphosis@gmail.com
        </a>
      </div>
      <Footer />
    </>
  );
}
