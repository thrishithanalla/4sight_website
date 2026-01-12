"use client"

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel'
import { cn } from "@/lib"
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface CoverflowItem {
    src: string;
    caption?: string;
}

interface EventsCoverflowProps {
    items: CoverflowItem[];
    className?: string;
}

const EventsCoverflow = ({ items, className }: EventsCoverflowProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        skipSnaps: false,
        containScroll: "trimSnaps",
    }, [Autoplay({ delay: 3000 })])
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    // Update selected index
    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return (
        <div className={cn("relative w-full py-12", className)}>
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y items-center h-[500px]">
                    {items.map((item, index) => {
                        const isActive = index === selectedIndex

                        return (
                            <div key={index} className="flex-[0_0_auto] px-2 h-[400px] transition-all duration-500 ease-out"
                                style={{
                                    transform: isActive ? 'scale(1.1)' : 'scale(0.9)',
                                    opacity: isActive ? 1 : 0.5,
                                    zIndex: isActive ? 10 : 0,
                                    filter: isActive ? 'none' : 'blur(1px)'
                                }}>
                                <div className={cn(
                                    "relative h-full rounded-2xl overflow-hidden border border-white/10 shadow-xl transition-all duration-500",
                                    isActive ? "shadow-orange-500/10" : "grayscale-[50%]"
                                )}>
                                    {/* Using standard img tag to preserve intrinsic aspect ratio with fixed height */}
                                    <img
                                        src={`/events_images/${item.src}`}
                                        alt={`Event ${index + 1}`}
                                        className="h-full w-auto object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>

                                    {/* Caption Overlay - Only visible when active */}
                                    {item.caption && (
                                        <div className={cn(
                                            "absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 transform",
                                            isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                                        )}>
                                            <p className="text-white text-lg md:text-xl font-medium text-center drop-shadow-md">
                                                {item.caption}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
                <button
                    onClick={scrollPrev}
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={scrollNext}
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all"
                >
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}

export default EventsCoverflow
