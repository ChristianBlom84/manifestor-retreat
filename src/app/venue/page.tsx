import Image from 'next/image';
import Link from 'next/link';
import Footer from '../components/Footer';
import ImageGallery from '../components/ImageGallery';

export default function Home() {
  return (
    <>
      <h1 className="mx-2 text-center">Welcome to a forest retreat</h1>
      <div className="w-11/12 max-w-lg mx-auto">
        <p>
          Our venue is a haven! A big and beautiful Spanish estate, an hour
          outside Barcelona in Sitges, Pendés. Located in a beautiful forest
          surroundings and with no neighbors around, it&apos;s the perfect spot
          for an intimate cozy fall Manifestor sisterhood gathering.
        </p>
        <p>
          This huge amazing mansion has plenty of room to relax, together and/or
          alone - and for the brave ones there is a pool!
        </p>
        <p>
          We offer different rooms for different prices, so you can make the
          correct choice for you and enjoy your vacation fully. All rooms are
          clean, beautiful and comfortable.
        </p>
        <p>
          We have an early bird price running till October 15th, so lots of time
          for clarity. But we do inform - we have limited space available (26
          spots), and of course limited amount of rooms in every lodging
          category.
        </p>
        <p>
          Sharing arrangements is based on same lodging category choice and (as
          much as possible) - on same authority. Sharing rooms is always part of
          the fun! You meet your sisters and loving exciting connections are
          often made and go with us after the retreat.
        </p>
        <h2>Meals</h2>
        <p>
          All prices include 3 delicious Mediterranean meals a day, made for us
          by a private chef. Vegetarian breakfast and lunch, and an omnivore
          dinner. Throughout the day, a coffee/tea cart, with snacks, will be
          available.
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
      <ImageGallery />
      <Footer />
    </>
  );
}
