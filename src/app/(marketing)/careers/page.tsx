import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";

const CareersPage = () => {
    return (
        <Wrapper className="py-20 relative">
            <Container>
                <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-6">
                        Careers
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Currently there are no openings.
                    </p>
                </div>
            </Container>
        </Wrapper>
    )
};

export default CareersPage;
