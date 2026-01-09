
import { NAV_LINKS, PRODUCTS, SERVICES, GOVERNMENT } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../global/wrapper";
import MobileMenu from "./mobile-menu";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
    return (
        <header className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50 border-b border-border/50">
            <Wrapper className="h-full">
                <div className="flex items-center justify-between h-full">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/images/logo-final.png"
                                alt="4sight AI Logo"
                                width={150}
                                height={50}
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    <div className="hidden lg:flex items-center gap-8">
                        <ul className="flex items-center gap-8">
                            {NAV_LINKS.map((link, index) => {
                                if (link.name === "Products") {
                                    return (
                                        <li key={index} className="relative group h-16 flex items-center">
                                            <Link href={link.href} className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group-hover:text-primary">
                                                {link.name}
                                                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                            </Link>

                                            {/* Dropdown Menu */}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block pt-2 w-[500px]">
                                                <div className="bg-card border border-border shadow-xl rounded-xl p-4 grid grid-cols-2 gap-2">
                                                    {PRODUCTS.map((product, pIndex) => (
                                                        <Link
                                                            key={pIndex}
                                                            href={product.href}
                                                            className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                                        >
                                                            <div className="font-semibold text-sm mb-1">{product.name}</div>
                                                            <div className="text-xs text-muted-foreground line-clamp-1">{product.description}</div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </li>
                                    );
                                }

                                if (link.name === "Services") {
                                    return (
                                        <li key={index} className="relative group h-16 flex items-center">
                                            <Link href={link.href} className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group-hover:text-primary">
                                                {link.name}
                                                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                            </Link>

                                            {/* Dropdown Menu */}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block pt-2 w-[280px]">
                                                <div className="bg-card border border-border shadow-xl rounded-xl p-2 flex flex-col gap-1">
                                                    {SERVICES.map((service, sIndex) => (
                                                        <Link
                                                            key={sIndex}
                                                            href={service.href}
                                                            className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                                        >
                                                            <div className="font-semibold text-sm mb-0.5">{service.name}</div>
                                                            <div className="text-xs text-muted-foreground line-clamp-1">{service.description}</div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </li>
                                    );
                                }

                                if (link.name === "Government") {
                                    return (
                                        <li key={index} className="relative group h-16 flex items-center">
                                            <Link href={link.href} className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group-hover:text-primary">
                                                {link.name}
                                                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                            </Link>

                                            {/* Dropdown Menu */}
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block pt-2 w-[280px]">
                                                <div className="bg-card border border-border shadow-xl rounded-xl p-2 flex flex-col gap-1">
                                                    {GOVERNMENT.map((govItem, gIndex) => (
                                                        <Link
                                                            key={gIndex}
                                                            href={govItem.href}
                                                            className="block p-3 rounded-lg hover:bg-muted/50 transition-colors"
                                                        >
                                                            <div className="font-semibold text-sm mb-0.5">{govItem.name}</div>
                                                            <div className="text-xs text-muted-foreground line-clamp-1">{govItem.description}</div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </li>
                                    );
                                }

                                return (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="flex items-center gap-4">
                        <MobileMenu />
                    </div>
                </div>
            </Wrapper>
        </header>
    )
};

export default Navbar;
