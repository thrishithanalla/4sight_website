"use client";
import { useEffect, useRef } from "react";

export default function FadeUpOnScroll({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const elem = ref.current;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    elem?.classList.add("visible");
                    obs.unobserve(elem!);
                }
            },
            { threshold: 0.2 }
        );

        if (elem) obs.observe(elem);
        return () => obs.disconnect();
    }, []);

    return (
        <div ref={ref} className="fade-up">
            {children}
        </div>
    );
}
