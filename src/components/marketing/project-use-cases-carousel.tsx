"use client"

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { EmblaCarouselType } from 'embla-carousel'
import { cn } from "@/lib"
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'

interface UseCase {
    title: string
    description: string
    icon?: React.ElementType
}

interface ProjectUseCasesCarouselProps {
    useCases: UseCase[]
    color?: string
}

const ProjectUseCasesCarousel = ({ useCases, color = "blue" }: ProjectUseCasesCarouselProps) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        skipSnaps: false,
        containScroll: "trimSnaps",
    }, [Autoplay({ delay: 3000, stopOnInteraction: false })])
    const [selectedIndex, setSelectedIndex] = useState(0)

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    const themeColor = {
        blue: {
            bg: "bg-blue-500/10",
            border: "border-blue-500/20",
            text: "text-foreground",
            hover: "from-blue-500/20 to-blue-500/5",
            shadow: "shadow-blue-500/10",
            btnHover: "hover:bg-blue-500 hover:border-blue-500"
        },
        indigo: {
            bg: "bg-indigo-500/10",
            border: "border-indigo-500/20",
            text: "text-indigo-500",
            hover: "from-indigo-500/20 to-indigo-500/5",
            shadow: "shadow-indigo-500/10",
            btnHover: "hover:bg-indigo-500 hover:border-indigo-500"
        },
        rose: {
            bg: "bg-rose-500/10",
            border: "border-rose-500/20",
            text: "text-rose-500",
            hover: "from-rose-500/20 to-rose-500/5",
            shadow: "shadow-rose-500/10",
            btnHover: "hover:bg-rose-500 hover:border-rose-500"
        }
    }[color] || { // fallback to blue
        bg: "bg-blue-500/10",
        border: "border-blue-500/20",
        text: "text-blue-500",
        hover: "from-blue-500/20 to-blue-500/5",
        shadow: "shadow-blue-500/10",
        btnHover: "hover:bg-blue-500 hover:border-blue-500"
    };

    return (
        <div className="relative w-full py-8">
            <div className="overflow-hidden px-4" ref={emblaRef}>
                <div className="flex touch-pan-y items-stretch gap-6">
                    {useCases.map((useCase, index) => {
                        const isActive = index === selectedIndex
                        const Icon = useCase.icon || CheckCircle2
                        const isAlternate = index % 2 !== 0

                        return (
                            <div key={index} className="flex-[0_0_100%] min-w-0 transition-opacity duration-300">
                                <div className={cn(
                                    "h-full min-h-[500px] transition-all duration-300 relative overflow-hidden group rounded-2xl border border-white/10 bg-white/5 p-6 md:p-12",
                                    isActive ? "opacity-100 scale-100" : "opacity-50 scale-95"
                                )}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${themeColor.hover} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                                    <div className="relative z-10 h-full flex flex-col justify-center max-w-5xl mx-auto">
                                        {/* Text Content */}
                                        <div className="space-y-8 text-center">
                                            <div className="space-y-6 flex flex-col items-center">
                                                <div className={`px-4 py-1.5 rounded-full ${themeColor.bg} ${themeColor.border} border text-sm font-medium ${themeColor.text} w-fit`}>
                                                    Use Case - {index + 1}
                                                </div>
                                                <h3 className={`text-2xl md:text-3xl font-bold ${themeColor.text} leading-tight`}>
                                                    {useCase.title}
                                                </h3>
                                            </div>
                                            <p className="text-black text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                                                {useCase.description}
                                            </p>
                                        </div>
                                    </div>
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
                    className={`w-10 h-10 rounded-full ${themeColor.bg} ${themeColor.border} border flex items-center justify-center ${themeColor.text} ${themeColor.btnHover} transition-all`}
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2 items-center">
                    {useCases.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === selectedIndex ? `w-6 ${themeColor.text.replace('text-', 'bg-')}` : `w-1.5 ${themeColor.text.replace('text-', 'bg-')}/20`}`}
                        ></div>
                    ))}
                </div>
                <button
                    onClick={scrollNext}
                    className={`w-10 h-10 rounded-full ${themeColor.bg} ${themeColor.border} border flex items-center justify-center ${themeColor.text} ${themeColor.btnHover} transition-all`}
                >
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}

export default ProjectUseCasesCarousel
