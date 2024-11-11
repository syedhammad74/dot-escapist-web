"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Media query hook to detect screen size
function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

// Product interface
interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

// Main HeroParallax component with conditional rendering for big and small screens
export const HeroParallax = ({ products }: { products: Product[] }) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  return (
    <div className="relative bg-gradient-to-bl from-orange-900 via-black to-gray-900 overflow-hidden antialiased [perspective:1000px] [transform-style:preserve-3d]">
      {isSmallScreen ? (
        <MobileHeroParallax products={products} />
      ) : (
        <BigScreenHeroParallax products={products} />
      )}
    </div>
  );
};

// Big Screen UI (Same as the original code block for big screens)
const BigScreenHeroParallax = ({ products }: { products: Product[] }) => {
  const firstRow = products.slice(0, 10);
  const secondRow = products.slice(10, 15);
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]);

  return (
    <div
      ref={ref}
      className="h-[200vh] sm:h-[250vh] md:h-[290vh] bg-gradient-to-bl from-orange-900 via-black to-gray-900 py-20 sm:py-30 md:py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity, // Moved opacity to style
        }}
        className="mt-32"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// Mobile UI with continuous loop auto-scrolling effect (Same as before)
const MobileHeroParallax = ({ products }: { products: Product[] }) => {
  const firstRow = products.slice(0, Math.ceil(products.length / 2));
  const secondRow = products.slice(Math.ceil(products.length / 2));

  return (
    <div className="h-auto bg-gradient-to-bl from-orange-900 via-black to-gray-900 py-6 overflow-hidden flex flex-col items-center">
      <MobileHeader />
      <div className="mt-6 w-full flex flex-col items-center space-y-6">
        {/* First row moving left to right */}
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="flex flex-nowrap w-full space-x-4 px-2"
        >
          {firstRow.map((product) => (
            <MobileProductCard product={product} key={product.title} />
          ))}
          {firstRow.map((product) => (
            <MobileProductCard
              product={product}
              key={`${product.title}-clone`}
            />
          ))}
        </motion.div>
        {/* Second row moving right to left */}
        <motion.div
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="flex flex-nowrap w-full space-x-4 px-2"
        >
          {secondRow.map((product) => (
            <MobileProductCard product={product} key={product.title} />
          ))}
          {secondRow.map((product) => (
            <MobileProductCard
              product={product}
              key={`${product.title}-clone`}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// Big Screen Header
const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 sm:py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl sm:text-4xl md:text-7xl font-bold text-white">
        Stories of <br /> Escaping the Ordinary
      </h1>
      <p className="max-w-2xl text-sm sm:text-base md:text-xl mt-4 sm:mt-6 md:mt-8 text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

// Big Screen Product Card
const ProductCard = ({
  product,
  translate,
}: {
  product: Product;
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 25 }}
      className="group/product h-48 w-60 sm:h-72 sm:w-80 md:h-96 md:w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl"
      >
        <Image
          src={product.thumbnail}
          height={600}
          width={600}
          className="object-cover object-left-top absolute h-full w-full inset-0 rounded-lg"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none transition-opacity duration-300"></div>
      <h2 className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 opacity-0 group-hover/product:opacity-100 text-white text-sm sm:text-base md:text-lg transition-opacity duration-300">
        {product.title}
      </h2>
    </motion.div>
  );
};

// Mobile Header
const MobileHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="w-full py-6 px-4 text-left"
    >
      <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-white tracking-wide leading-snug">
        Your <span className="text-orange-300">Creative</span> Development
        Studio
      </h1>
      <p className="max-w-xs text-sm mt-2 text-neutral-200 leading-relaxed">
        Innovative products crafted with the latest tech. We’re passionate
        designers and developers.
      </p>
    </motion.div>
  );
};

// Mobile Product Card with enhanced animations and parallax effects
const MobileProductCard = ({ product }: { product: Product }) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.08,
      }}
      transition={{ type: "spring", stiffness: 70, damping: 15 }}
      className="group/product h-40 w-full sm:h-48 sm:w-full max-w-xs relative flex-shrink-0 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <Link href={product.link} className="block">
        <Image
          src={product.thumbnail}
          height={500}
          width={500}
          className="object-cover object-center absolute h-full w-full inset-0 rounded-lg"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-75 bg-black transition-opacity duration-300 rounded-lg"></div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="absolute bottom-2 left-2 text-xs sm:text-sm opacity-0 group-hover/product:opacity-100 text-white transition-all duration-300"
      >
        {product.title}
      </motion.h2>
    </motion.div>
  );
};
