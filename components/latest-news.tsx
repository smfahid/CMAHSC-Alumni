"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    title: "চর মেহের আজিজিয়া স্কুলের বার্ষিক পরীক্ষার ফলাফল প্রকাশ",
    image: "/news1.jpg",
    date: "April 10, 2025",
  },
  {
    id: 2,
    title: "চর মেহের আজিজিয়া স্কুলে শিক্ষক নিয়োগ বিজ্ঞপ্তি",
    image: "/news2.jpg",
    date: "April 8, 2025",
  },
  {
    id: 3,
    title: "চর মেহের আজিজিয়া স্কুলের বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৫",
    image: "/news3.jpg",
    date: "April 8, 2025",
  },
  {
    id: 4,
    title: "Char Meher Azizia School Annual Science Fair 2025",
    image: "/news4.jpg",
    date: "April 5, 2025",
  },
  {
    id: 5,
    title: "Char Meher Azizia School Celebrates 25th Foundation Day",
    image: "/news5.jpg",
    date: "April 3, 2025",
  },
];

export default function LatestNews() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const updateVisibleItems = () => {
    if (window.innerWidth < 768) {
      setVisibleItems(1);
    } else if (window.innerWidth < 1024) {
      setVisibleItems(2);
    } else {
      setVisibleItems(3);
    }
  };

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentSlide(
        (prev) => (prev + 1) % Math.ceil(newsItems.length / visibleItems)
      );
    }, 5000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    startSlideTimer();

    return () => {
      window.removeEventListener("resize", updateVisibleItems);
      stopSlideTimer();
    };
  }, [visibleItems]);

  const maxSlides = Math.ceil(newsItems.length / visibleItems);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Latest News
        </h2>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / visibleItems)}%)`,
              width: `${(newsItems.length / visibleItems) * 100}%`,
            }}
          >
            {newsItems.map((item) => (
              <div
                key={item.id}
                className="px-4"
                style={{ width: `${(100 / newsItems.length) * visibleItems}%` }}
              >
                <div className="h-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="mb-4 text-xl font-semibold">{item.title}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-red-600">
                        <span className="mr-1">📅</span> {item.date}
                      </span>
                      <Link
                        href="#"
                        className="text-sm font-medium text-gray-600 hover:text-[#963634]"
                      >
                        READ MORE &gt;&gt;
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {Array.from({ length: maxSlides }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentSlide ? "bg-[#963634]" : "bg-gray-300"
              }`}
              onClick={() => {
                setCurrentSlide(index);
                startSlideTimer();
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
