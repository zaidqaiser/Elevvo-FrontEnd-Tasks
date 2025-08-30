import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Featured from "./components/Featured";
import Analytics from "./components/Analytics";
import CTA from "./components/CTA";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-outfit bg-[#08043c] bg-[url('/assets/Ellipse2.png')] bg-no-repeat ">
        <Navbar />
        <Hero />
        <Featured />
        <Analytics />
        <CTA />
        <Testimonial />
        <Footer/>
    </div>
  );
}
