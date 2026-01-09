"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS, PRODUCTS, SERVICES, GOVERNMENT } from "@/constants/links";
import { Menu, ChevronDown } from "lucide-react";
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
            <SheetContent side="right" className="w-3/4 sm:w-[300px] pt-12 flex flex-col h-full">
                <SheetHeader className="mb-8">
                    <SheetTitle className="text-left">Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col space-y-4 flex-1 overflow-y-auto pb-10">
                    {NAV_LINKS.map((link, index) => {
                        const isProducts = link.name === "Products";
                        const isServices = link.name === "Services";
                        const isGovernment = link.name === "Government";
                        const [isOpen, setIsOpen] = React.useState(false);

                        if (isProducts || isServices || isGovernment) {
                            return (
                                <div key={index} className="flex flex-col">
                                    <div className="flex items-center justify-between py-2">
                                        <Link
                                            href={link.href}
                                            onClick={() => setOpen(false)}
                                            className="text-base font-medium transition-colors hover:text-primary flex-1"
                                        >
                                            {link.name}
                                        </Link>
                                        <div
                                            className="p-2 -mr-2 cursor-pointer hover:bg-muted rounded-full transition-colors"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsOpen(!isOpen);
                                            }}
                                        >
                                            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                                        </div>
                                    </div>
                                    {isOpen && (
                                        <div className="flex flex-col space-y-3 pl-4 mt-2 border-l-2 border-muted ml-2">
                                            {(isProducts ? PRODUCTS : isServices ? SERVICES : GOVERNMENT).map((subItem, idx) => (
                                                <Link
                                                    key={idx}
                                                    href={subItem.href}
                                                    onClick={() => setOpen(false)}
                                                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={index}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-base font-medium transition-colors hover:text-primary py-2"
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
};

export default MobileMenu
