import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";

const EventsPage = () => {
    return (
        <Wrapper className="py-20 relative">
            <Container>
                <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-400 mb-6">
                        Events & Webinars
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Join us for upcoming events, workshops, and webinars to stay ahead of the curve in enterprise AI.
                    </p>
                </div>
            </Container>
        </Wrapper>
    )
};

export default EventsPage;
