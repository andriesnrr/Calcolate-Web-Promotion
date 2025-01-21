import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/Components/ui/button";

const Header1 = () => {
    const navigationItems = [
        { title: "Home", target: "home" },
        { title: "Features", target: "features" },
        { title: "Testimonials", target: "testimonials" },
        { title: "FAQ", target: "faq" },
        { title: "Contact", target: "contact" },
    ];

    const [isOpen, setOpen] = useState(false);

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setOpen(false); // Tutup menu dropdown jika di mobile
        }
    };

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-[#0D1F23] text-white shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                {/* Logo */}
                <div className="text-xl font-bold">
                    <Button
                        variant="ghost"
                        className="text-white hover:text-[#AFB3B7]"
                        onClick={() => handleScroll("home")}
                    >
                        Calcolate
                    </Button>
                </div>

                {/* Navigation (Desktop) */}
                <nav className="hidden lg:flex items-center justify-center space-x-6 flex-1">
                    {navigationItems.map((item) => (
                        <button
                            key={item.title}
                            className="text-sm font-medium hover:text-[#AFB3B7] transition focus:outline-none"
                            onClick={() => handleScroll(item.target)}
                        >
                            {item.title}
                        </button>
                    ))}
                </nav>

                {/* Hamburger Menu (Mobile) */}
                <div className="lg:hidden">
                    <Button
                        variant="ghost"
                        onClick={() => setOpen(!isOpen)}
                        className="focus:outline-none"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="bg-[#0D1F23] lg:hidden shadow-lg">
                    <nav className="flex flex-col space-y-2 p-4">
                        {navigationItems.map((item) => (
                            <button
                                key={item.title}
                                className="text-sm font-medium text-white hover:text-[#AFB3B7] transition focus:outline-none"
                                onClick={() => handleScroll(item.target)}
                            >
                                {item.title}
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header1;
