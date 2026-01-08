"use client"

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel'
import { cn } from "@/lib"
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface EventsCoverflowProps {
    images: string[]
}

const EventsCoverflow = ({ images }: EventsCoverflowProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        skipSnaps: false,
        containScroll: "trimSnaps",
    }, [Autoplay({ delay: 1500 })])
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    // Update selected index
    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    // Custom "Coverflow" effect logic
    const tweenFactor = React.useRef(0)
    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current = 0.5 * emblaApi.scrollSnapList().length
    }, [])

    const tweenOpacity = useCallback((emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
        const engine = emblaApi.internalEngine()
        const scrollProgress = emblaApi.scrollProgress()
        const slidesInView = emblaApi.slidesInView()
        const isScrollEvent = eventName === 'scroll'

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress
            const slidesInSnap = engine.slideRegistry[snapIndex]

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target()

                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target)

                            if (sign === -1) {
                                diffToTarget = scrollSnap - (1 + scrollProgress)
                            }
                            if (sign === 1) {
                                diffToTarget = scrollSnap + (1 - scrollProgress)
                            }
                        }
                    })
                }

                // Calculate scale and opacity based on distance from center
                // A simple approach: abs(diff) determines "far-ness"
                // Ideally embla's `scrollSnap` is between 0 and 1. 
                // But simplified: check element distance from center of viewport.

                // For a simpler CSS-based approach driven by React state or refs:
                // We'll trust the re-render for `selectedIndex` style updates roughly, 
                // OR use a pure CSS approach if possible. 
                // BUT Embla is JS driven. 
                // Let's stick to a simpler active-class approach for now to ensure reliability 
                // without complex MATH unless requested. Use "opacity-50 scale-90" for non-active.
            })
        })
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return (
        <div className="relative w-full py-12">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y items-center h-[500px]">
                    {images.map((image, index) => {
                        const isActive = index === selectedIndex

                        return (
                            <div key={index} className="flex-[0_0_auto] px-2 h-[400px] transition-all duration-500 ease-out"
                                style={{
                                    transform: isActive ? 'scale(1.1)' : 'scale(0.9)',
                                    opacity: isActive ? 1 : 0.5,
                                    zIndex: isActive ? 10 : 0
                                }}>
                                <div className={cn(
                                    "relative h-full rounded-2xl overflow-hidden border border-white/10 shadow-xl",
                                    isActive ? "shadow-orange-500/10" : "grayscale-[50%]"
                                )}>
                                    {/* Using standard img tag to preserve intrinsic aspect ratio with fixed height */}
                                    <img
                                        src={`/events_images/${image}`}
                                        alt={`Event ${index + 1}`}
                                        className="h-full w-auto object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40"></div>
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
