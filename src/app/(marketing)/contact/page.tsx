import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";

const ContactPage = () => {
    return (
        <Wrapper className="py-20 relative">
            <Container>
                <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-blue-600 mb-6">
                        Contact Us
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Have questions? Get in touch with our team to discuss how 4sight AI can help your business grow.
                    </p>
                </div>
            </Container>
        </Wrapper>
    )
};

export default ContactPage;
