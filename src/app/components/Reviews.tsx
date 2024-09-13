'use client';
import { useCallback } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import viola from '../images/Viola.jpg';

const Reviews = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 8000, playOnInit: true }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex min-w-0">
          <div className="embla__slide flex-[0_0_100%] mr-5">
            <h3>Marieta:</h3>
            <p>
              Attending the Manifestor Women&apos;s Retreat was a transformative
              experience for me, one that I will carry with me for a lifetime.
              As someone who has always been deeply sensitive and aware of the
              energetic dynamics around me, I often struggled to balance my
              intensity with the need for peace and understanding. This retreat
              provided me with a safe, nurturing space to explore my unique
              Human Design as a Manifestor and truly embrace my authentic self.
            </p>
            <p>
              The retreat&apos;s thoughtful structure allowed me to connect
              deeply with other Manifestor women, all of whom share similar
              sensitivities and energetic traits. Through guided sessions,
              meditations, and profound group discussions, I discovered that my
              intensity and sensitivity are not burdens but gifts. The
              facilitators skillfully led us through exercises that helped me
              harness these traits to cultivate more profound connections and a
              deeper sense of self-love.
            </p>
            <p>
              One of the most profound realizations I gained from this retreat
              is that Manifestors are embodiments of love in its purest form.
              The retreat dismantled the misconceptions I had about the
              challenges of being a Manifestor and replaced them with a deep
              understanding of our power and purpose. I now see that my energy,
              which I once viewed as overwhelming, is a source of inspiration
              and transformation for others.
            </p>
            <p>
              This retreat didn’t just offer me insights; it provided a
              community of like-minded women who support and uplift one another.
              The sense of belonging and acceptance I found here is
              unparalleled. I left the retreat feeling more empowered, more
              loving towards myself, and with a renewed sense of purpose. If
              you’re a Manifestor woman seeking to embrace your true self and
              harness your energy positively, this retreat is a must. It’s a
              beautiful, life-changing experience that will help you see
              yourself—and your fellow Manifestors—in a whole new light.
            </p>
          </div>
          <div className="embla__slide flex-[0_0_100%] mr-5">
            <h3>Viola:</h3>
            <p>
              Experiencing your pure essence in high frequency and empowering
              each other with so much Love, Peace and Joy. Still vibrating and
              integrating…
            </p>
            <Image
              className="w-auto h-auto max-w-full max-h-full m-auto"
              src={viola}
              alt={`${viola}`}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button
          className="embla__prev h-8 w-8 flex justify-center items-center rounded-full border"
          onClick={scrollPrev}
        >
          <svg
            className="embla__button__svg w-4 h-4 ml-0"
            viewBox="0 0 532 532"
          >
            <path
              fill="currentColor"
              d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
            />
          </svg>
        </button>
        <button
          className="embla__next h-8 w-8 flex justify-center items-center rounded-full border"
          onClick={scrollNext}
        >
          <svg className="embla__button__svg w-4 h-4" viewBox="0 0 532 532">
            <path
              fill="currentColor"
              d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Reviews;
