import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';

export default function Home() {
  return (
    <>
      <h1 className="mx-2 text-center">Welcome to a beach retreat</h1>
      <div className="w-11/12 sm:w-4/5 lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
        <p>
          Our venue is a little haven, a comfortable beach front Vila located in
          Ferma, a magical little village on the coast of the island Crete in
          Greece. The next door villa is ours too, 2 perfect Airbnb venues that
          can fit around 30 of us.
        </p>
        <p>
          We have our own private Mediterranean beach, all for ourselves! With a
          shaded wooden deck with sun beds and chairs for a unique beach
          experience. The Mediterranean is a warm sea and in June you can enjoy
          the water, and swimming if you like.
        </p>
        <p>We have a Greek Sauna in the villa as well.</p>
        <p>
          Our activities will be held in a big beautiful (90sqm) studio with
          wooden floors and big windows. It&apos;s the perfect clean space to
          move, sit, dance, talk, sing, and be. Our sacred temple.
        </p>
        <p>
          The rooms are simple, beautiful and comfy, with each apartment/room
          (sleeping 2 or 4 depending on the house) having a kitchenette, private
          toilets and shower.
        </p>
        <p>
          Each room has 2 single beds, so we share in pairs. Sharing rooms is a
          part of the experience (we share a room too!), meeting Manifestor
          sisters from all over the world and befriending. Sharing space with a
          Manifestor is comfortable and communication is easier, we think you
          are going to enjoy it.
        </p>
        <p>
          If you are coming with a friend you are welcome to stay together of
          course, but if you are not - we are sorting rooms according to inner
          authority, and sameness as much as possible. So emotional together,
          splenic non emotional together etc.
        </p>
        <h2>Meals</h2>
        <p>We take care of your breakfast and lunch!</p>
        <p>
          In the morning we have a light snack meal (fruits, granola, yoghurt,
          bread and butter), and for lunch we have rich vegetarian meals,
          homemade especially for us and catered to our villa. A different
          Mediterranean meal each day.
        </p>
        <p>
          For dinner we can go out together or apart to the Taverns in the
          village, within walking distance. Prices are around 12 euros for a
          meal.
        </p>
        <p>
          For dinner we can go out together or apart to the Taverns in the
          village, a walking distance away. Prices are around 12 euros for a
          meal.
        </p>
        <p>
          It is also possible to buy food in the supermarket located 100 M from
          the house, and make your own dinner. There are kitchens or kitchenette
          in each apartment/part of the house.
        </p>
        <p>
          This is an invitation to an easy going, comfortable and pleasurable
          beach retreat, in fact, we believe - for a perfect experience!
        </p>
        <p>If this is for you, let us know and see you soon.</p>
        <p>
          For registration details{' '}
          <Link className="text-theme-red underline" href="/register">
            click here.
          </Link>
        </p>
      </div>
      <video
        width="640"
        height="357"
        controls
        preload="auto"
        muted
        playsInline
        autoPlay
        loop
        className="mb-5"
      >
        <source src="/beachVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <ImageGallery />
      <Footer />
    </>
  );
}
