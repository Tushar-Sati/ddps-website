import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";

const AnimatedStats = dynamic(() => import("@/components/AnimatedStats"), { ssr: false });
const About = dynamic(() => import("@/components/About"));
const Services = dynamic(() => import("@/components/Services"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const ServiceProcess = dynamic(() => import("@/components/ServiceProcess"));
const ServiceCoverage = dynamic(() => import("@/components/ServiceCoverage"));
const Reviews = dynamic(() => import("@/components/Reviews"));
const Contact = dynamic(() => import("@/components/Contact"));
const Location = dynamic(() => import("@/components/Location"));
const CallBackPopup = dynamic(() => import("@/components/CallBackPopup"), { ssr: false });
// We'll skip Testimonials, Gallery, and FAQ structurally for brevity but normally they'd be here.

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Hero />
                <AnimatedStats />
                <About />
                <Services />
                <WhyChooseUs />
                <ServiceProcess />
                <ServiceCoverage />
                <Reviews />
                <Contact />
                <Location />
            </main>
            <footer className="bg-primary text-white py-12 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-4">Digital Display Panel Solution</h2>
                    <p className="text-gray-400 mb-8">Professional LED TV Repair & Display Panel Service Centre in Ghaziabad.</p>
                    <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Digital Display Panel Solution. All rights reserved.</p>
                </div>
            </footer>

            {/* Floating WhatsApp */}
            <div className="fixed bottom-6 right-6 z-50 group flex flex-col items-center">
                <span className="pointer-events-none absolute -top-12 scale-0 rounded bg-gray-800 p-2 text-xs font-medium text-white shadow-lg transition-all md:group-hover:scale-100 opacity-0 md:group-hover:opacity-100 whitespace-nowrap">
                    Chat with us on WhatsApp
                </span>
                <a
                    href="https://wa.me/919810845788?text=Hello%20Digital%20Display%20Panel%20Solution,%20I%20need%20TV%20repair%20service."
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp"
                    className="relative flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300"
                >
                    <div className="absolute inset-0 rounded-full bg-green-500 opacity-40 animate-ping" />
                    <svg fill="currentColor" viewBox="0 0 24 24" className="relative z-10 w-8 h-8"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 13.9 2.5 15.7 3.5 17.2L2.3 21.7L6.9 20.6C8.4 21.5 10.2 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11.1 16.5C10.7 16.6 10.4 16.5 10.1 16.3C8.6 15.4 7.2 13.5 6.4 11.2C6.3 10.8 6.4 10.5 6.6 10.2L7.5 9.3C7.6 9.1 7.7 8.9 7.6 8.7L6.8 6.7C6.7 6.4 6.5 6.3 6.3 6.4L5.2 6.9C4.8 7.1 4.5 7.6 4.5 8C4.5 12 7.8 15.3 11.8 15.3C12.2 15.3 12.6 15 12.8 14.6L13.3 13.5C13.4 13.3 13.3 13.1 13 13L11.1 12.2C10.9 12.1 10.7 12.2 10.6 12.4L9.8 13.5C8.9 13.1 8.2 12.3 7.8 11.4L8.9 10.6C9.1 10.5 9.2 10.3 9.1 10.1L8.3 8.2C8.2 8 8 7.9 7.8 8L6.8 8.4C7.3 11.6 9.7 14.1 12.9 14.9C13 14.9 13.2 14.8 13.3 14.6L14.4 12.3C14.6 11.9 14.2 11.4 13.8 11.6L12.4 12.2C12.1 12.3 11.9 12.2 11.8 12L11 11.2C10.8 11 10.8 10.7 11 10.5L11.6 9.9C11.8 9.7 11.8 9.5 11.6 9.3L9.6 8.5C9.4 8.4 9.2 8.5 9.2 8.7L8.7 9.8C8.5 10.1 8.6 10.5 8.9 10.7C10 11.5 11.4 12.3 12.7 12.8C13 12.9 13.4 12.8 13.6 12.6L14.7 11.5C15 11.2 15.6 11.4 15.6 11.8V12C15.6 17.52 11.12 22 5.6 22H12ZM19.5 19.5L16.2 16.2C17.3 15.1 18 13.6 18 12C18 10.4 17.3 8.9 16.2 7.8C15.1 6.7 13.6 6 12 6C10.4 6 8.9 6.7 7.8 7.8C6.7 8.9 6 10.4 6 12C6 13.6 6.7 15.1 7.8 16.2C8.9 17.3 10.4 18 12 18H12L19.5 19.5ZM17 12C17 14.8 14.8 17 12 17C11.1 17 10.3 16.8 9.6 16.3L9 16.9L10 17.9L12 18H12C15.3 18 18 15.3 18 12C18 8.7 15.3 6 12 6C8.7 6 6 8.7 6 12C6 12.4 6.1 12.8 6.2 13.2L5 12V12C5 8.1 8.1 5 12 5C15.9 5 19 8.1 19 12V12L17.5 13.5L17 12Z" /></svg>
                </a>
            </div>
            <CallBackPopup />
        </>
    );
}
