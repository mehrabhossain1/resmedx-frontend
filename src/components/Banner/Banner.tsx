"use client";
import { useEffect, useState } from "react";
import img1 from "@/assets/banner11.jpg";
import img2 from "@/assets/banner2.jpg";
import Image from "next/image";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === 1 ? 2 : 1));
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative w-full h-[70vh]">
      <div
        className={`absolute inset-0 ${
          currentSlide === 1 ? "block" : "hidden"
        }`}
      >
        <Image
          src={img1}
          alt="Slide 1"
          layout="fill"
          objectFit="cover"
          quality={100} // Highest quality
        />
      </div>
      <div
        className={`absolute inset-0 ${
          currentSlide === 2 ? "block" : "hidden"
        }`}
      >
        <Image
          src={img2}
          alt="Slide 2"
          layout="fill"
          objectFit="cover"
          quality={100} // Highest quality
        />
      </div>
    </div>
  );
};

export default Banner;
