"use client"

import React from 'react'
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
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
    return (
        <Carousel
            className={className || "w-full h-full min-h-[300px]"}
            opts={{
                align: "center",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 2500, // Slightly slower for reading captions
                }),
            ]}
        >
            <CarouselContent className="h-full">
                {items.map((item, index) => (
                    <CarouselItem key={index} className="basis-full pl-0">
                        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-xl border border-white/10 group">
                            <Image
                                src={`/events_images/${item.src}`}
                                alt={item.alt || `Event Image ${index + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80"></div>

                            {item.caption && (
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform transition-transform">
                                    <p className="text-white text-lg md:text-xl font-medium leading-relaxed text-center drop-shadow-md">
                                        {item.caption}
                                    </p>
                                </div>
                            )}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-black/50 border-white/10 hover:bg-black/70 text-white" />
            <CarouselNext className="right-4 bg-black/50 border-white/10 hover:bg-black/70 text-white" />
        </Carousel>
    )
}

export default EventGalleryCarousel
