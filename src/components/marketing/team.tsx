import Image from "next/image";
import Container from "../global/container";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent } from "../ui/card";

const TEAM_MEMBERS = [
    {
        id: 1,
        name: "John Doe",
        role: "CEO & Founder",
        description: "Visionary leader with 15+ years of experience in AI and enterprise software.",
        image: "/images/team-placeholder.png",
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "CTO",
        description: "Tech innovator leading our engineering teams to build scalable solutions.",
        image: "/images/team-placeholder.png",
    },
    {
        id: 3,
        name: "Michael Brown",
        role: "Head of Product",
        description: "Product strategist focused on user-centric design and market fit.",
        image: "/images/team-placeholder.png",
    },
    {
        id: 4,
        name: "Sarah Davis",
        role: "Lead AI Researcher",
        description: "Expert in deep learning and natural language processing algos.",
        image: "/images/team-placeholder.png",
    },
    {
        id: 5,
        name: "David Wilson",
        role: "VP of Sales",
        description: "Driving global growth and building lasting partnerships with clients.",
        image: "/images/team-placeholder.png",
    },
    {
        id: 6,
        name: "Emily Chen",
        role: "Head of Marketing",
        description: "Creative storyteller shaping the 4sight AI brand and narrative.",
        image: "/images/team-placeholder.png",
    },
];

const Team = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-20 bg-muted/20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Meet Our Team
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-4">
                        The brilliant minds behind 4sight AI driving innovation and excellence.
                    </p>
                </div>

                <div className="w-full px-4 md:px-8">
                    {/* Mobile Scroll View */}
                    <div className="md:hidden flex overflow-x-auto gap-4 snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4">
                        {TEAM_MEMBERS.map((member) => (
                            <div key={member.id} className="min-w-[280px] snap-center h-full">
                                <Card className="h-full border-border/50 bg-card hover:border-border/100 transition-colors">
                                    <CardContent className="flex flex-col items-center p-6 text-center h-full">
                                        <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-2 border-primary/20">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                                        <p className="text-sm font-medium text-primary mb-3">{member.role}</p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {member.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Carousel */}
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="hidden md:block w-full max-w-6xl mx-auto"
                    >
                        <CarouselContent className="-ml-4">
                            {TEAM_MEMBERS.map((member) => (
                                <CarouselItem key={member.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1 h-full">
                                        <Card className="h-full border-border/50 bg-card hover:border-border/100 transition-colors">
                                            <CardContent className="flex flex-col items-center p-6 text-center h-full">
                                                <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-2 border-primary/20">
                                                    <Image
                                                        src={member.image}
                                                        alt={member.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                                                <p className="text-sm font-medium text-primary mb-3">{member.role}</p>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {member.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="hidden md:block">
                            <CarouselPrevious className="-left-12" />
                            <CarouselNext className="-right-12" />
                        </div>
                    </Carousel>
                </div>
            </Container>
        </div>
    );
};

export default Team;
