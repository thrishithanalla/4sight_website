"use client";
import React from 'react';
import Wrapper from '../global/wrapper';
import Container from '../global/container';
import Image from 'next/image';

const StrategicTeam = () => {
    return (
        <section className="relative w-full py-20 bg-background text-foreground border-b border-border/40">
            <Wrapper>
                <Container>
                    <div className="flex flex-col items-center justify-center mb-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                            4SightAI · Strategic AI Team
                        </h2>
                    </div>
                    <div className="w-full relative aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-black/10">
                        <Image
                            src="/events_images/9u.jpeg"
                            alt="4SightAI Strategic AI Team"
                            fill
                            className="object-cover"
                        />
                    </div>
                </Container>
            </Wrapper>
        </section>
    );
};

export default StrategicTeam;
