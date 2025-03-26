import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };
    return (
        <footer className="bg-primary">
            <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 md:px-[4.4rem] lg:px-10 lg:pt-20">
                <div className="grid grid-cols-1 gap-1 lg:grid-cols-3">
                    <div>
                        <div className="flex justify-start text-white font-extrabold text-2xl sm:justify-start">
                            <Link href="/">WS DYNAMICS LLC</Link>
                        </div>
                        <p className="mt-6 max-w-md text-left leading-relaxed text-white sm:max-w-xs sm:text-left">
                            We are affiliate and retail partners of AT&T, Xfinity and Comcast Fiber Internet service providers in the United states.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:col-span-2">
                        <div className="text-left sm:text-left">
                            <p className="text-2xl font-bold text-white mt-8 lg:mt-0 md:mt-0">Company</p>
                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <Link className="text-white text-[17px] transition" href="#service" onClick={(e) => handleSmoothScroll(e, "service")}>
                                        Service
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white text-[17px] transition" href="#">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white text-[17px] transition" href="#pricing" onClick={(e) => handleSmoothScroll(e, "pricing")}>
                                        Our Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link className="text-white text-[17px] transition" href="privacy-policy">Privacy Policy</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="text-left sm:text-left gap-">
                            <p className="text-2xl font-bold text-white mt-8 lg:mt-0 md:mt-0">Service</p>
                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <Link className="text-white text-[17px] transition" href="#">Satelite Tv</Link>
                                </li>
                                <li>
                                    <Link className="text-white text-[17px] transition" href="#">Broadband</Link>
                                </li>
                                <li>
                                    <Link className="text-white text-[17px] transition" href="#">Wifi Internet</Link>
                                </li>
                                <li>
                                    <Link className="text-white text-[17px] transition" href="#">Netflik TV Box</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="text-left sm:text-left gap-">
                            <p className="text-2xl font-bold text-white mt-8 lg:mt-0 md:mt-0">Social Media</p>
                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <Link className="text-white text-[17px] transition" href="#">Twitter</Link>
                                </li>
                                <li>
                                    <Link className="text-white text-[17px] transition" href="#">Medium</Link>
                                </li>
                                <li>
                                    <Link className="text-white text-[17px] transition" href="#">Youtube</Link>
                                </li>
                                <li>
                                    <Link className="text-white text-[17px] transition" href="#">Instagram</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-100 pt-6">
                    <div className="text-center sm:text-left">
                        <p className="mt-4 text-sm text-white text-center sm:mt-0"><Link href="/">NearByTvInternet.com</Link> IS A WEBSITE INDEPENDENTLY OPERATED BY WS DYNAMICS LLC UNDER AGREEMENT WITH RS&I.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer