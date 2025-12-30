import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";

const AboutPage = () => {
    return (
        <Wrapper className="py-20 relative">
            <Container>
                <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground mb-6">
                        About 4sight AI
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        We are dedicated to empowering enterprises with the next generation of AI technology.
                        Our mission is to simplify complexity and drive innovation through intelligent solutions.
                    </p>
                </div>
            </Container>
        </Wrapper>
    )
};

export default AboutPage;
