"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    image: "/assets/img-20.jpeg",
    title: "BUET ALUMNI GRAND REUNION 2023",
    subtitle: "INAUGURATION CEREMONY",
    description: "WELCOME SPEECH",
    speaker: "PROF. DR. MD. MIZANUR RAHMAN",
    position: "COORDINATOR, BUET ALUMNI",
    additionalInfo: "DIRECTOR, DIRECTORATE OF STUDENT'S WELFARE",
  },
  {
    id: 2,
    image: "/assets/img-21.jpeg",
    title: "BUET ALUMNI ANNUAL MEETING",
    subtitle: "GENERAL ASSEMBLY",
    description: "KEYNOTE ADDRESS",
  },
  {
    id: 3,
    image: "/assets/img-24.jpeg",
    title: "BUET ALUMNI NETWORKING EVENT",
    subtitle: "CAREER OPPORTUNITIES",
    description: "INDUSTRY CONNECTIONS",
  },
  {
    id: 4,
    image: "/assets/rakib.jpeg",
    title: "ALUMNI ACHIEVEMENT SPOTLIGHT",
    subtitle: "PROFESSIONAL EXCELLENCE",
    description: "SUCCESS STORIES",
  },
  {
    id: 5,
    image: "/assets/rana.jpeg",
    title: "BUET ALUMNI INNOVATION FORUM",
    subtitle: "TECHNOLOGY SHOWCASE",
    description: "RESEARCH HIGHLIGHTS",
  },
  {
    id: 6,
    image: "/assets/nasrin.jpeg",
    title: "ALUMNI MENTORSHIP PROGRAM",
    subtitle: "CAREER GUIDANCE",
    description: "PROFESSIONAL DEVELOPMENT",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  return (
    <section className="relative h-[60vh] w-full overflow-hidden md:h-[80vh]">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative h-full w-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </div>
      ))}
    </section>
  );
}
