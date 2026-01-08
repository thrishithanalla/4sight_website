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

interface EventGalleryCarouselProps {
    images: string[]
}

const EventGalleryCarousel = ({ images }: EventGalleryCarouselProps) => {
    return (
        <Carousel
            className="w-full h-full min-h-[300px]"
            opts={{
                align: "center",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 1500,
                }),
            ]}
        >
            <CarouselContent className="h-full">
                {images.map((image, index) => (
                    <CarouselItem key={index} className="basis-full pl-0">
                        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-xl border border-white/10">
                            <Image
                                src={`/events_images/${image}`}
                                alt={`Event Image ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
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
