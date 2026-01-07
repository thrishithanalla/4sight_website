"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroDiagram() {
    const orbRef = useRef<SVGCircleElement>(null);
    const arcRef = useRef<SVGPathElement>(null);
    const angleRef = useRef(0);
    const [activeIndex, setActiveIndex] = useState(0);

    const cx = 400;
    const cy = 400;

    // ADJUSTED RADII
    const hubR = 150;     // Central Hub
    const orbitR = 190;   // Animation Line (Inner Circle of Sectors)
    const innerR = 210;   // Sectors Start
    const outerR = 340;   // Sectors End

    const gap = 8;

    // Helper to fix precision and avoid hydration mismatch
    const f = (n: number) => n.toFixed(3);

    // Calculate cartesian coordinates
    const polar = (r: number, a: number) => {
        const rad = (a * Math.PI) / 180;
        return {
            x: cx + r * Math.cos(rad),
            y: cy + r * Math.sin(rad),
        };
    };

    // Generate path for a donut sector with gap
    const sectorPath = (start: number, end: number) => {
        const s = start + gap / 2;
        const e = end - gap / 2;

        const p1 = polar(outerR, e);
        const p2 = polar(outerR, s);
        const p3 = polar(innerR, s);
        const p4 = polar(innerR, e);

        // Using f() to ensure server/client match
        return `
      M ${f(p1.x)} ${f(p1.y)}
      A ${outerR} ${outerR} 0 0 0 ${f(p2.x)} ${f(p2.y)}
      L ${f(p3.x)} ${f(p3.y)}
      A ${innerR} ${innerR} 0 0 1 ${f(p4.x)} ${f(p4.y)}
      Z
    `;
    };

    const arc = (start: number, end: number) => {
        const s = polar(orbitR, end);
        const e = polar(orbitR, start);
        return `M ${f(s.x)} ${f(s.y)} A ${orbitR} ${orbitR} 0 0 0 ${f(e.x)} ${f(e.y)}`;
    };

    useEffect(() => {
        let frameId: number;
        const tick = () => {
            // Increment angle
            angleRef.current = (angleRef.current + 0.5) % 360;
            const a = angleRef.current;

            // Update Orb/Arc positions
            const p = polar(orbitR, a);
            if (orbRef.current) {
                orbRef.current.setAttribute("cx", `${p.x}`);
                orbRef.current.setAttribute("cy", `${p.y}`);
            }
            if (arcRef.current) {
                arcRef.current.setAttribute("d", arc(a - 60, a));
            }

            // Determine active sector index
            let newIndex = -1;
            if (a >= 225 && a < 315) newIndex = 0;      // Top (RAG)
            else if (a >= 315 || a < 45) newIndex = 1;  // Right (Vector)
            else if (a >= 45 && a < 135) newIndex = 2;  // Bottom (Orch)
            else if (a >= 135 && a < 225) newIndex = 3; // Left (Control)

            setActiveIndex(prev => {
                if (prev !== newIndex) return newIndex;
                return prev;
            });

            frameId = requestAnimationFrame(tick);
        };
        tick();
        return () => cancelAnimationFrame(frameId);
    }, []);

    const sectors = [
        { label: "RAG", start: 225, end: 315, mid: 270, tx: 0, ty: -20 },
        { label: "Vector DB", start: 315, end: 405, mid: 360, tx: 20, ty: 0 },
        { label: "Orchestration", start: 45, end: 135, mid: 90, tx: 0, ty: 20 },
        { label: "Control & Flow", start: 135, end: 225, mid: 180, tx: -20, ty: 0 }
    ];

    return (
        <svg
            viewBox="0 0 800 800"
            className="w-full max-w-[800px] mx-auto"
            style={{ overflow: 'visible' }}
        >
            <defs>
                <linearGradient id="hubGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#f0f9ff" />
                </linearGradient>

                <linearGradient id="sectorGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.95" />
                </linearGradient>

                <linearGradient id="activeSectorGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#eff6ff" />
                    <stop offset="100%" stopColor="#93c5fd" />
                </linearGradient>

                <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>

                <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>

                <filter id="strongShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="6" />
                    <feOffset dx="0" dy="6" result="offsetblur" />
                    <feFlood floodColor="#1e3a8a" floodOpacity="0.15" />
                    <feComposite in2="offsetblur" operator="in" />
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* 4 PIE SECTORS */}
            {sectors.map((s, i) => {
                const isActive = i === activeIndex;
                const p = polar((innerR + outerR) / 2, s.mid);

                return (
                    <g
                        key={s.label}
                        className={`transition-all duration-500 ease-out cursor-pointer ${isActive ? 'active-sector' : 'opacity-90'}`}
                        style={{
                            transform: isActive ? `translate(${s.tx}px, ${s.ty}px)` : 'translate(0,0)'
                        }}
                    >
                        <path
                            d={sectorPath(s.start, s.end)}
                            fill={isActive ? "url(#activeSectorGrad)" : "url(#sectorGrad)"}
                            stroke={isActive ? "#3b82f6" : "white"}
                            strokeWidth={isActive ? "3" : "2"}
                            className="transition-all duration-300"
                            style={{
                                filter: isActive ? "url(#strongShadow)" : "url(#strongShadow)"
                            }}
                        />

                        {/* CONTENT */}
                        <g transform={`translate(${p.x}, ${p.y})`}>
                            {/* RAG ICON - UPDATED CHIP DESIGN */}
                            {s.label === "RAG" && (
                                <g transform="translate(0, -10)">
                                    {/* Chip Body */}
                                    <rect x="-18" y="-18" width="36" height="36" rx="4"
                                        fill="none"
                                        stroke={isActive ? "#1e3a8a" : "#2563eb"}
                                        strokeWidth="2"
                                    />

                                    {/* Pins (3 on each side) */}
                                    <path d="M-10 -18 V-24 M0 -18 V-24 M10 -18 V-24" stroke={isActive ? "#1e3a8a" : "#2563eb"} strokeWidth="2" />
                                    <path d="M-10 18 V24 M0 18 V24 M10 18 V24" stroke={isActive ? "#1e3a8a" : "#2563eb"} strokeWidth="2" />
                                    <path d="M-18 -10 H-24 M-18 0 H-24 M-18 10 H-24" stroke={isActive ? "#1e3a8a" : "#2563eb"} strokeWidth="2" />
                                    <path d="M18 -10 H24 M18 0 H24 M18 10 H24" stroke={isActive ? "#1e3a8a" : "#2563eb"} strokeWidth="2" />

                                    {/* Internal Network */}
                                    <circle r="4" fill={isActive ? "#1e3a8a" : "#2563eb"} />
                                    <circle cx="-8" cy="-8" r="2.5" fill="none" stroke={isActive ? "#1e3a8a" : "#2563eb"} strokeWidth="1.5" />
                                    <circle cx="8" cy="-8" r="2.5" fill="none" stroke={isActive ? "#1e3a8a" : "#2563eb"} strokeWidth="1.5" />
                                    <circle cx="-8" cy="8" r="2.5" fill="none" stroke={isActive ? "#1e3a8a" : "#2563eb"} strokeWidth="1.5" />
                                    <circle cx="8" cy="8" r="2.5" fill="none" stroke={isActive ? "#1e3a8a" : "#2563eb"} strokeWidth="1.5" />

                                    <line x1="0" y1="0" x2="-8" y2="-8" stroke={isActive ? "#1e3a8a" : "#2563eb"} strokeWidth="1.5" />
                                    <line x1="0" y1="0" x2="8" y2="-8" stroke={isActive ? "#1e3a8a" : "#2563eb"} strokeWidth="1.5" />
                                    <line x1="0" y1="0" x2="-8" y2="8" stroke={isActive ? "#1e3a8a" : "#2563eb"} strokeWidth="1.5" />
                                    <line x1="0" y1="0" x2="8" y2="8" stroke={isActive ? "#1e3a8a" : "#2563eb"} strokeWidth="1.5" />

                                    <text x="0" y="32" textAnchor="middle" className={`text-lg font-bold ${isActive ? 'fill-blue-900' : 'fill-slate-700'}`}>RAG</text>
                                </g>
                            )}

                            {s.label === "Vector DB" && (
                                <g transform="translate(0, -10)">
                                    {/* Database Cylinder Shape - 3 Layers */}
                                    <ellipse cx="0" cy="-10" rx="14" ry="4"
                                        fill="none"
                                        stroke={isActive ? "#1e3a8a" : "#2563eb"}
                                        strokeWidth="2"
                                    />
                                    <path d="M-14 -10 V10 A14 4 0 0 0 14 10 V-10"
                                        fill="none"
                                        stroke={isActive ? "#1e3a8a" : "#2563eb"}
                                        strokeWidth="2"
                                    />
                                    <path d="M-14 -3 A14 4 0 0 0 14 -3"
                                        fill="none"
                                        stroke={isActive ? "#1e3a8a" : "#2563eb"}
                                        strokeWidth="2"
                                    />
                                    <path d="M-14 4 A14 4 0 0 0 14 4"
                                        fill="none"
                                        stroke={isActive ? "#1e3a8a" : "#2563eb"}
                                        strokeWidth="2"
                                    />
                                    <text x="0" y="32" textAnchor="middle" className={`text-lg font-bold ${isActive ? 'fill-blue-900' : 'fill-slate-700'}`}>Vector DB</text>
                                </g>
                            )}

                            {s.label === "Orchestration" && (
                                <g transform="translate(0, -10)">
                                    <circle r="16" fill="none" stroke={isActive ? "#1e3a8a" : "#2563eb"} strokeWidth="2" strokeDasharray="4 4" />
                                    <circle r="4" fill={isActive ? "#1e3a8a" : "#60a5fa"} />
                                    <text x="0" y="32" textAnchor="middle" className={`text-lg font-bold ${isActive ? 'fill-blue-900' : 'fill-slate-700'}`}>Orchestration</text>
                                </g>
                            )}

                            {s.label === "Control & Flow" && (
                                <g transform="translate(0, -10)">
                                    <path d="M-12 -12 L12 12 M-12 12 L12 -12" stroke={isActive ? "#1e3a8a" : "#2563eb"} strokeWidth="2" />
                                    <rect x="-16" y="-16" width="32" height="32" rx="4" fill="none" stroke={isActive ? "#1e3a8a" : "#2563eb"} strokeWidth="2" />
                                    <text x="0" y="32" textAnchor="middle" className={`text-lg font-bold ${isActive ? 'fill-blue-900' : 'fill-slate-700'}`}>Control & Flow</text>
                                </g>
                            )}
                        </g>
                    </g>
                );
            })}

            {/* CENTER HUB GROUP */}
            <g style={{ filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.1))" }}>
                {/* Main White Hub Background */}
                <circle cx={cx} cy={cy} r={hubR} fill="url(#hubGrad)" stroke="white" strokeWidth="4" />

                {/* Active Orbit Arc - Between Hub and Sectors */}
                <path
                    ref={arcRef}
                    stroke="url(#arcGrad)"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    className="pointer-events-none"
                />

                {/* Active Orbit Orb */}
                <circle
                    ref={orbRef}
                    r="8"
                    fill="#3b82f6"
                    stroke="white"
                    strokeWidth="2"
                    filter="url(#glow)"
                    className="pointer-events-none"
                />

                {/* Inner Decorative Ring relative to Hub */}
                <circle cx={cx} cy={cy} r={hubR - 15} fill="none" stroke="#e0f2fe" strokeWidth="1" />

                {/* Core Content */}
                <g transform={`translate(${cx}, ${cy})`}>
                    <text x="0" y="85" textAnchor="middle" className="text-xl font-extrabold fill-slate-800">LLM / Model Layer</text>

                    {/* Central Node */}
                    <circle r="8" fill="#2563eb" />

                    {/* 6 Surrounding Nodes (Hexagon Layout) */}
                    {[0, 60, 120, 180, 240, 300].map((angle) => {
                        const rad = (angle * Math.PI) / 180;
                        const nx = 40 * Math.cos(rad);
                        const ny = 40 * Math.sin(rad);
                        return (
                            <g key={angle}>
                                {/* Use formatted values to avoid hydration mismatch */}
                                <line x1="0" y1="0" x2={f(nx)} y2={f(ny)} stroke="#3b82f6" strokeWidth="2" />
                                <circle cx={f(nx)} cy={f(ny)} r="6" fill="#60a5fa" />
                            </g>
                        );
                    })}
                </g>
            </g>
        </svg>
    );
}
