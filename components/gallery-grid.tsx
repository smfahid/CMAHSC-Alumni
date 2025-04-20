"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Create an array of 50 images using the assets
const baseImages = [
  "/assets/img-1.jpeg",
  "/assets/img-2.jpeg",
  "/assets/img-3.jpeg",
  "/assets/img-4.jpeg",
  "/assets/img-5.jpeg",
  "/assets/img-6.jpeg",
  "/assets/img-7.jpeg",
  "/assets/img-8.jpeg",
  "/assets/img-9.jpeg",
  "/assets/img-10.jpeg",
  "/assets/img-11.jpeg",
  "/assets/img-12.jpeg",
  "/assets/img-13.jpeg",
  "/assets/img-14.jpeg",
  "/assets/img-15.jpeg",
  "/assets/img-16.jpeg",
  "/assets/img-17.jpeg",
  "/assets/img-18.jpeg",
  "/assets/img-19.jpeg",
  "/assets/img-20.jpeg",
  "/assets/img-21.jpeg",
  "/assets/img-22.jpeg",
  "/assets/img-23.jpeg",
  "/assets/img-24.jpeg",
  "/assets/img-25.jpeg",
  "/assets/img-26.jpeg",
  "/assets/img-27.jpeg",
  "/assets/img-28.jpeg",
  "/assets/img-29.jpeg",
  "/assets/img-30.jpeg",
];

// Create an array of 50 images by cycling through the base images
const images = Array.from({ length: 50 }, (_, index) => ({
  id: index + 1,
  src: baseImages[index % baseImages.length], // Cycle through base images
  alt: `Gallery Image ${index + 1}`,
}));

const ITEMS_PER_PAGE = 12;

export default function GalleryGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentImages = images.slice(startIndex, endIndex);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentImages.map((image) => (
          <div
            key={image.id}
            className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage((prev) => Math.max(prev - 1, 1));
                }}
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index + 1}>
                <PaginationLink
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentPage(index + 1);
                  }}
                  isActive={currentPage === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                }}
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
