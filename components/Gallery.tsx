"use client"

import { useState, useRef } from "react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { GALLERY_IMAGES } from "@/lib/constants";
import Image from "next/image";

export function Gallery() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const touchStartTime = useRef<number>(0);
  const touchStartPos = useRef<{ x: number; y: number } | null>(null);

  const handleCardClick = (imageId: number) => {
    setActiveCard(activeCard === imageId ? null : imageId);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartTime.current = Date.now();
    const touch = e.touches[0];
    touchStartPos.current = { x: touch.clientX, y: touch.clientY };
  };

  return (
    <SectionContainer id="gallery" className="bg-cloud-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center mb-8 md:mb-12">
        <div>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-h2 text-royal-blue mb-3 md:mb-4 text-left">
            Our Facility
          </h2>
          <p className="text-base md:text-lg text-slate-gray leading-relaxed">
            Take a look at our modern, clean, and well-maintained laundromat.
            Every detail is designed for your comfort and convenience.
          </p>
        </div>
        <div className="lg:text-right">
          <p className="text-slate-gray text-sm md:text-base">
            Brand new facility with state-of-the-art equipment
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {GALLERY_IMAGES.map((image) => {
          const isActive = activeCard === image.id;
          return (
            <div
              key={image.id}
              className="relative aspect-[4/3] rounded-lg md:rounded-card overflow-hidden shadow-sm md:shadow-soft card-flip-container group cursor-pointer touch-manipulation select-none"
              onClick={() => handleCardClick(image.id)}
              onTouchStart={handleTouchStart}
              onTouchEnd={(e) => {
                if (!touchStartPos.current) return;
                
                const touch = e.changedTouches[0];
                const deltaX = Math.abs(touch.clientX - touchStartPos.current.x);
                const deltaY = Math.abs(touch.clientY - touchStartPos.current.y);
                const deltaTime = Date.now() - touchStartTime.current;
                
                // Only trigger if it's a tap (not a swipe) and quick enough
                if (deltaX < 10 && deltaY < 10 && deltaTime < 300) {
                  e.preventDefault();
                  handleCardClick(image.id);
                }
                
                touchStartPos.current = null;
              }}
            >
              {/* Front slide - Image */}
              <div className={`absolute inset-0 card-flip-front transition-transform duration-700 ease-in-out ${isActive ? '-translate-y-full' : 'md:group-hover:-translate-y-full'}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              {/* Back slide - Content */}
              <div className={`absolute inset-0 card-flip-back bg-gradient-to-br from-deep-navy to-royal-blue transition-transform duration-700 ease-in-out ${isActive ? 'translate-y-0' : 'translate-y-full md:group-hover:translate-y-0'} flex flex-col justify-center items-center p-4 md:p-6`}>
                <h3 className="font-heading font-semibold text-white text-lg md:text-xl mb-2 md:mb-3 text-center">
                  {image.title}
                </h3>
                <p className="text-white/90 text-xs md:text-sm leading-relaxed text-center">
                  {image.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionContainer>
  );
}

