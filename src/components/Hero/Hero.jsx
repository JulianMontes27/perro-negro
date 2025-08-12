import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video with Parallax */}
      <motion.video
        style={{ y }}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        title="Video promocional Perro Negro Experience 2025 Bogotá"
        aria-label="Video de fondo del evento de reggaeton en Bogotá"
      >
        <source
          src="https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro/video.mp4"
          type="video/mp4"
        />
      </motion.video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-65" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ opacity }}
        className="relative z-10 text-center px-6"
      >
        {/* Year */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-100 text-lg md:text-xl mb-4"
        >
          2025
        </motion.div>

        {/* Main Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-6"
        >
          <img
            src="https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro//logoxlred2.png"
            alt="Perro Negro Experience 2025 - Logo oficial del evento de reggaeton en Bogotá"
            className="w-auto h-56 sm:h-48 md:h-64 lg:h-80 xl:h-96 mx-auto glitch-logo"
            style={{
              backgroundImage:
                "url(https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro//logoxlred2.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </motion.div>

        {/* Main Title - SEO Optimized */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-gray-100 text-lg sm:text-2xl md:text-4xl font-light mb-8 tracking-wider sr-only"
        >
          Perro Negro Experience 2025 - 5 de Septiembre Bogotá
        </motion.h1>

        {/* Visual Title */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-gray-100 text-lg sm:text-2xl md:text-4xl font-light mb-8 tracking-wider"
        >
          EXPERIENCE
        </motion.h2>

        {/* Event Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="text-gray-100 text-lg sm:text-xl md:text-2xl mb-12"
        >
          <div className="font-bold">
            5 DE SEPTIEMBRE - <span className="text-perro-red">BOGOTÁ</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={() => {
            const element = document.getElementById('tickets');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-perro-red text-gray-100 font-bold py-3 px-6 sm:py-4 sm:px-12 text-base sm:text-lg md:text-xl border-2 border-perro-red hover:bg-transparent hover:text-perro-red transition-all duration-300 mb-8 min-h-[44px]"
        >
          COMPRAR TICKETS
        </motion.button>

        {/* Small Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <img
            src="https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro//small_logos.png"
            alt="Patrocinadores oficiales de Perro Negro Experience 2025 Bogotá"
            className="w-auto h-12 sm:h-12 md:h-16 mx-auto opacity-80"
          />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 opacity-50"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
