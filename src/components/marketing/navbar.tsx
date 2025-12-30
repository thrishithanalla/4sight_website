import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Wrapper from "../global/wrapper";
import MobileMenu from "./mobile-menu";

const Navbar = () => {
    return (
        <header className="sticky top-0 w-full h-16 bg-background/80 backdrop-blur-sm z-50">
            <Wrapper className="h-full">
                <div className="flex items-center h-full">
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

                    <div className="hidden lg:flex items-center gap-4 ml-auto">
                        <ul className="flex items-center gap-8">
                            {NAV_LINKS.map((link, index) => (
                                <li key={index} className="text-lg font-medium -1 link">
                                    <Link href={link.href}>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
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
