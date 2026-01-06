"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/constants";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
    const [open, setOpen] = React.useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-3/4 sm:w-[300px] pt-12">
                <SheetHeader className="mb-8">
                    <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4">
                    {NAV_LINKS.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="text-base font-medium transition-colors hover:text-primary"
                        >
                            {link.name}
                        </Link>
                    ))}

                </nav>
            </SheetContent>
        </Sheet>
    )
};

export default MobileMenu
