import { getImageProps, ImageProps, StaticImageData } from 'next/image';
import Head from 'next/head';

const AdaptiveImage = ({
  className,
  alt = 'Hero image',
  fill = true,
  priority = true,
  sizes = '100vw',
  breakpoint = 640,
  desktopImage,
  mobileImage,
  style = { objectFit: 'cover' },
  ...props
}: {
  breakpoint?: number;
  desktopImage: StaticImageData;
  mobileImage: StaticImageData;
} & Partial<ImageProps>) => {
  const commonPreload = {
    rel: 'preload',
    as: 'image',
    imageSizes: sizes,
  };
  const common = { alt, fill, priority, sizes, style, ...props };
  const { srcSet: desktop } = getImageProps({
    ...common,
    src: desktopImage,
  }).props;
  const { srcSet: mobile, ...rest } = getImageProps({
    ...common,
    src: mobileImage,
  }).props;
  const desktopMedia = `(min-width: ${breakpoint}px)`;
  const mobileMedia = `(max-width: ${breakpoint - 1}px)`;
  return (
    <>
      <Head>
        <link
          {...commonPreload}
          media={desktopMedia}
          href={desktopImage.src}
          imageSrcSet={desktop}
        />
        <link
          {...commonPreload}
          media={mobileMedia}
          href={mobileImage.src}
          imageSrcSet={mobile}
        />
      </Head>
      <picture>
        <source media={desktopMedia} srcSet={desktop} />
        <source media={mobileMedia} srcSet={mobile} />
        <img className={className} alt={alt} {...rest} />
      </picture>
    </>
  );
};

export default AdaptiveImage;
