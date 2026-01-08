"use client"

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { EmblaCarouselType } from 'embla-carousel'
import { cn } from "@/lib"
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Card } from 'primereact/card';

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
            text: "text-blue-500",
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

                        const header = (
                            <div className={`w-14 h-14 rounded-full ${themeColor.bg} ${themeColor.border} border flex items-center justify-center mb-4 relative z-10 mx-auto mt-4`}>
                                <Icon className={`w-7 h-7 ${themeColor.text}`} />
                            </div>
                        );

                        return (
                            <div key={index} className="flex-[0_0_400px] md:flex-[0_0_600px] min-w-0 transition-opacity duration-300">
                                <div className={cn(
                                    "h-full transition-all duration-300 relative overflow-hidden group",
                                    isActive ? "scale-100 opacity-100" : "opacity-50 scale-95"
                                )}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${themeColor.hover} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`}></div>

                                    <Card
                                        title={useCase.title}
                                        subTitle=""
                                        header={header}
                                        className={cn(
                                            "h-full bg-white/5 border border-white/10 text-white shadow-none rounded-2xl",
                                            isActive ? `${themeColor.border} border-blue-500/50 shadow-lg` : "border-white/5"
                                        )}
                                        pt={{
                                            body: { className: 'p-0 text-center gap-4 flex flex-col' },
                                            title: { className: `text-xl font-bold ${themeColor.text}` },
                                            content: { className: 'p-0' }
                                        }}
                                    >
                                        <p className="text-gray-300 text-sm leading-relaxed m-0 px-4 pb-6">
                                            {useCase.description}
                                        </p>
                                    </Card>
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
                    className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white ${themeColor.btnHover} transition-all`}
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2 items-center">
                    {useCases.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === selectedIndex ? `w-6 ${themeColor.text.replace('text-', 'bg-')}` : "w-1.5 bg-white/20"}`}
                        ></div>
                    ))}
                </div>
                <button
                    onClick={scrollNext}
                    className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white ${themeColor.btnHover} transition-all`}
                >
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}

export default ProjectUseCasesCarousel
