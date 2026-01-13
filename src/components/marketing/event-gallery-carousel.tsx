"use client"

import React, { useState, useEffect, useCallback } from 'react'
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface GalleryItem {
    src: string;
    alt?: string;
    caption?: string;
}

interface EventGalleryCarouselProps {
    items: GalleryItem[];
    className?: string; // Added className prop for flexibility
}

const EventGalleryCarousel = ({ items, className }: EventGalleryCarouselProps) => {
    const [api, setApi] = useState<CarouselApi>()

    // Interaction handler to slow down autoplay
    const handleInteraction = useCallback(() => {
        if (!api) return;
        const autoplay = api.plugins().autoplay;
        if (autoplay && autoplay.options.delay !== 4000) {
            autoplay.stop();
            // @ts-ignore - Embla types allow resetting config options directly in v8
            autoplay.options.delay = 4000;
            autoplay.play();
        }
    }, [api]);

    return (
        <Carousel
            setApi={setApi}
            className={className || "w-full h-full min-h-[300px]"}
            opts={{
                align: "center",
                loop: true,
                skipSnaps: false, // Ensure full image stops
                slidesToScroll: 1,  // Move one image at a time
            }}
            plugins={[
                Autoplay({
                    delay: 2500, // Start normal speed
                    stopOnInteraction: false,
                }),
            ]}
        >
            <CarouselContent className="h-full">
                {items.map((item, index) => (
                    <CarouselItem key={index} className="basis-full pl-0">
                        <div className="flex flex-col gap-4">
                            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-xl border border-white/10 group">
                                <Image
                                    src={`/events_images/${item.src}`}
                                    alt={item.alt || `Event Image ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* removed gradient overlay since caption is outside */}
                            </div>

                            {/* Caption Below Image */}
                            <div className="min-h-[3rem] flex items-start justify-center">
                                <p className="text-gray-900 text-base md:text-lg font-medium leading-relaxed text-center drop-shadow-sm px-4 max-w-2xl mx-auto">
                                    {item.caption || "\u00A0"}
                                </p>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious
                onClick={() => {
                    handleInteraction();
                    api?.scrollPrev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/10 hover:bg-black/70 text-white z-20"
            />
            <CarouselNext
                onClick={() => {
                    handleInteraction();
                    api?.scrollNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 border-white/10 hover:bg-black/70 text-white z-20"
            />
        </Carousel>
    )
}

export default EventGalleryCarousel
