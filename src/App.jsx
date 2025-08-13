import { motion } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import EventInfo from "./components/EventInfo/EventInfo";
import WorldTour from "./components/WorldTour/WorldTour";
import Venue from "./components/Venue/Venue";
import Tickets from "./components/Tickets/Tickets";
import EventMap from "./components/EventMap/EventMap";
import Sponsors from "./components/Sponsors/Sponsors";
import OfficialSite from "./components/OfficialSite/OfficialSite";
import Footer from "./components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="min-h-screen bg-perro-black overflow-x-hidden">
      <Header />
      <div id="hero">
        <Hero />
      </div>

      {/* Pattern Separator - Infinite Carousel */}
      <section className="relative w-full h-12 md:h-16 lg:h-20 overflow-hidden">
        <motion.div
          className="flex h-full"
          animate={{
            x: [0, -50 + "%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            },
          }}
        >
          {Array.from({ length: 20 }, (_, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-full"
              style={{
                width: "150px",
                backgroundImage:
                  "url(https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro//pattern3.jpg)",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          ))}
          {Array.from({ length: 20 }, (_, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 h-full"
              style={{
                width: "150px",
                backgroundImage:
                  "url(https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro//pattern3.jpg)",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          ))}
        </motion.div>
      </section>

      <div id="event-info">
        <EventInfo />
      </div>
      <div id="tickets">
        <Tickets />
      </div>
      <div id="sponsors">
        <Sponsors />
      </div>
      <div id="event-map">
        <EventMap />
      </div>
      <div id="world-tour">
        <WorldTour />
      </div>
      <div id="venue">
        <Venue />
      </div>
      <OfficialSite />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
