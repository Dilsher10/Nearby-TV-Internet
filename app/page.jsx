"use client"
import Footer from "./_components/Footer";
import LogoSlider from "./_components/LogoSlider";
import Navbar from "./_components/Navbar";
import { Phone, Mail, MapPin, FacebookIcon, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero lg:grid lg:h-fit lg:place-content-center">
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-10 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="max-w-prose text-left">
            <h1 className="text-2xl leading-[35px] font-bold text-white sm:text-[40px] md:leading-[50px] lg:leading-[55px]">
              Discover Incredible Cable TV and Internet Deals with Nearby TV Internet Plans!
            </h1>
            <p className="mt-5 text-base text-pretty text-white sm:text-lg/relaxed py-10 lg:py-5">
              Are you ready to elevate your entertainment and internet experience? Look no further! Nearby TV Internet Plans is here to bring you the best deals around.
            </p>
            <div className="mt-5 flex gap-4 sm:mt-6">
              <a
                className="inline-flex items-center gap-2 rounded-full border border-secondary bg-secondary px-8 py-3 text-white hover:bg-transparent hover:bg-primary hover:border-white"
                href="tel:+1-(877)653-3880"
              >
                <Phone />
                <span className="text-sm font-semibold"> (877) 653-3880 </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-primary py-10">
        <div className="mx-auto w-screen max-w-screen-xl">
          <LogoSlider />
        </div>
      </div>

      <section className="cardSec py-10 lg:py-20" id="service">
        <div className="mx-auto w-screen max-w-screen-xl">
          <h2 className="text-white text-2xl w-[350px] md:text-4xl lg:text-4xl font-bold text-center md:w-[700px] lg:w-[700px] mx-auto">Affordable internet built for streaming, gaming, and remote work.</h2>
          <p className="text-gray-400 text-center px-4 lg:px-36 py-10">Experience lightning-fast internet with our reliable broadband services. As the leading provider, we offer seamless connectivity, ensuring you stay connected for work, entertainment, and more. Enjoy high-speed browsing, uninterrupted streaming, and exceptional customer support. </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 px-4">
            <div className="rounded-3xl bg-[#343850] p-10 text-center cursor-pointer transition duration-500 ease-in-out hover:scale-110">
              <img src="/003.png" className="mx-auto" />
              <h3 className="text-white font-bold py-5">Cable TV Channels</h3>
              <p className="text-gray-400 text-[15px] px-1">Curate your perfect viewing experience from a vast selection of channels tailored to your unique tastes and preferences.</p>
            </div>
            <div className="rounded-3xl bg-[#343850] p-10 text-center cursor-pointer transition duration-500 ease-in-out hover:scale-110">
              <img src="/002.png" className="mx-auto" />
              <h3 className="text-white font-bold py-5">Wi-Fi Services </h3>
              <p className="text-gray-400 text-[15px] px-1">Assess your internet needs and ensure your home is equipped with the fastest download speed and to meet your demands.</p>
            </div>
            <div className="rounded-3xl bg-[#343850] p-10 text-center cursor-pointer transition duration-500 ease-in-out hover:scale-110">
              <img src="/001.png" className="mx-auto" />
              <h3 className="text-white font-bold py-5">Home Phone Solutions</h3>
              <p className="text-gray-400 text-[15px] px-1">Simplify your services—bundle home phone, internet, and TV. Enjoy more savings, less hassle!</p>
            </div>
          </div>
        </div>
      </section>

      

      <section className="bannerSec flex items-center" id="explore">
        <h2 className="text-white text-4xl lg:text-5xl font-bold w-[600px] mx-auto lg:leading-[60px]">Connecting with the world with best internet and TV services</h2>
      </section>

      <section className="bg-primary" id="contact">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 mx-auto max-w-screen-xl px-5 md:px-[4.4rem] md:py-20 py-10 lg:px-16 lg:py-20">
          <div className="">
            <h5 className="text-white font-bold">Contact Us</h5>
            <h2 className="text-[20px] lg:text-[43px] font-bold text-white py-7 leading-[1.2]">Connect with Us, Your Feedback Matters to Us.</h2>
            <p className="text-white">We value your input and inquiries. Please feel free to reach out to us. We’re here to assist you anytime you need us.</p>
            <ul className="py-5 leading-[3]">
              <li className="flex gap-2 items-center"><Phone className="text-white" /> <Link href="tel:+1-(877)653-3880" className="text-white">(877)653-3880</Link></li>
              <li className="flex gap-2 items-center"><Mail className="text-white" /> <Link href="mailto:info@nearbytvinternet.com" className="text-white">info@nearbytvinternet.com</Link></li>
              <li className="flex gap-2 items-center"><MapPin className="text-white" /> <p className="text-white">8750 Point Park Dr Houston TX 77095</p></li>
            </ul>
            <div className="flex gap-5">
              <FacebookIcon className="bg-white rounded-md text-primary p-1 w-8 h-8 cursor-pointer hover:scale-110 transition" />
              <Twitter className="bg-white rounded-md text-primary p-1 w-8 h-8 cursor-pointer hover:scale-110 transition" />
              <Youtube className="bg-white rounded-md text-primary p-1 w-8 h-8 cursor-pointer hover:scale-110 transition" />
            </div>
          </div>
          <div className="">
            <form className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <input
                  type="text"
                  id="Name"
                  name="name"
                  placeholder="Name"
                  className="mt-1 w-full rounded-md border border-gray-700 bg-transparent text-sm text-white shadow-xs p-3"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^[A-Za-z\s]*$/.test(value)) {
                      setName(value);
                    }
                  }}
                  required
                />
              </div>
              <div className="col-span-6">
                <input
                  type="text"
                  id="Phone"
                  name="phone"
                  placeholder="Phone"
                  className="mt-1 w-full rounded-md border border-gray-700 bg-transparent text-sm text-white shadow-xs p-3"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^[\d+\-()]*$/.test(value)) {
                      setPhone(value);
                    }
                  }}
                  required
                />
              </div>
              <div className="col-span-6">
                <input
                  type="email"
                  id="Email"
                  name="email"
                  placeholder="Email"
                  className="mt-1 w-full rounded-md border border-gray-700 bg-transparent text-sm text-white shadow-xs p-3"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="col-span-6">
                <select id="Services" className="border border-gray-700 w-full p-3 rounded-md mt-1 text-gray-400 bg-primary" onChange={(e) => setService(e.target.value)}>
                  <option value="Choose Service">Choose Service</option>
                  <option value="Cable Internet">Cable Internet</option>
                  <option value="Fiber Internet">Fiber Internet</option>
                  <option value="Wireless">Wireless</option>
                  <option value="TV Service">TV Service</option>
                </select>
              </div>
              <div className="col-span-6">
                <textarea id="Message" placeholder="Message" rows={4} className="text-white w-full border border-gray-700 bg-transparent p-3 rounded-md mt-1" onChange={(e) => setMessage(e.target.value)} required></textarea>
              </div>

              <div className="col-span-6">
                <button
                  className="inline-block shrink-0 rounded-md border border-gray-400 bg-transparent px-12 py-3 text-lg font-bold text-white transition hover:bg-secondary focus:ring-3 focus:outline-hidden" type="submit"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
