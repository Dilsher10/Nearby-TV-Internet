"use client";
import { useState } from "react";
import { Phone, X } from "lucide-react";
import React from "react";
import Link from "next/link";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-[#020106]">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-28 items-center justify-between">
                    <Link className="block text-white font-bold text-2xl lg:text-3xl" href="/">
                        Nearby TV Internet
                    </Link>
                    <nav
                        className={`absolute md:static top-28 left-0 w-full md:w-auto bg-[#020106] md:bg-transparent md:flex items-center justify-center md:opacity-100 transition-opacity duration-300 ease-in-out ${
                            isMenuOpen ? "opacity-100" : "opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto"
                        }`}
                    >
                        <ul className="flex flex-col md:flex-row lg:items-center gap-6 md:gap-10 text-md px-4 py-4">
                            <li><a className="text-white transition hover:text-secondary" href="/"> Home </a></li>
                            <li><a className="text-white transition hover:text-secondary" href="#service"> Service </a></li>
                            <li><a className="text-white transition hover:text-secondary" href="#explore"> Explore </a></li>
                            <li><a className="text-white transition hover:text-secondary" href="#pricing"> Pricing </a></li>
                            <li><a className="text-white transition hover:text-secondary" href="#contact"> Contact </a></li>
                        </ul>
                    </nav>
                    <div className="hidden md:hidden lg:flex">
                        <a
                            className="inline-flex items-center gap-2 rounded-full border border-secondary bg-secondary px-8 py-3 text-white hover:bg-transparent hover:bg-primary hover:border-white"
                            href="tel:+1-(877)653-3880"
                        >
                            <Phone />
                            <span className="text-sm font-medium"> (877) 653-3880 </span>
                        </a>
                    </div>
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                    >
                        {isMenuOpen ? <X className="size-5" /> : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
