import { Metadata } from "next";

interface MetadataProps {
    title?: string;
    description?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
    keywords?: string[];
    author?: string;
    twitterHandle?: string;
    type?: "website" | "article" | "profile";
    locale?: string;
    alternates?: Record<string, string>;
    publishedTime?: string;
    modifiedTime?: string;
}

export const generateMetadata = ({
    title = "4sightAI",
    description = "4sightAI is a leading AI company that provides innovative AI solutions to transform the way businesses operate. Our AI-powered tools and services help businesses automate, optimize, and enhance their operations, leading to increased efficiency, productivity, and profitability.",
    icons = [],
    noIndex = false,
    keywords = [
        "AI marketing automation",
        "social media marketing",
        "content generation",
        "marketing analytics",
        "campaign management",
        "multilingual marketing",
        "AI copywriting",
        "marketing workflow",
        "performance tracking",
        "digital marketing tools"
    ],
    author = process.env.NEXT_PUBLIC_AUTHOR_NAME,
    type = "website",
}: MetadataProps = {}): Metadata => {
    const metadataBase = new URL(process.env.NEXT_PUBLIC_APP_URL || "https://vertra-ai.vercel.app");

    return {
        metadataBase,
        title: {
            template: `%s | 4sightAI`,
            default: title
        },
        description,
        keywords,
        authors: [{ name: author }],
        creator: author,
        publisher: "4sightAI",
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },
        icons,
    };
};