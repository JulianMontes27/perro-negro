import { motion } from 'framer-motion';
import { imageUrls } from '../../utils/imageUrls';

const Sponsors = () => {
  const sponsors = [
    {
      name: "REC",
      logo: imageUrls.recLogo
    },
    {
      name: "Inside Entertainment", 
      logo: imageUrls.insideLogo
    },
    {
      name: "ALS Producciones",
      logo: imageUrls.alsProducciones
    },
    {
      name: "Biotickets",
      logo: imageUrls.biotickets
    },
    {
      name: "Touring", 
      logo: imageUrls.touring
    }
  ];

  return (
    <section className="w-full bg-black py-16 lg:py-24 overflow-hidden">
      {/* Optimized Infinite Carousel - Single render, CSS transform for seamless loop */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          style={{ width: `${sponsors.length * 256}px` }} // 256px = w-64 (16rem)
          animate={{
            x: [0, -`${sponsors.length * 256}px`]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop", 
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Render sponsors only once */}
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-20 sm:w-64 sm:h-32 flex items-center justify-center p-3 sm:p-6"
            >
              {sponsor.placeholder ? (
                <div className="w-full h-full border-2 border-perro-gray border-dashed flex items-center justify-center">
                  <span className="text-perro-gray text-xs sm:text-sm font-bold text-center px-2 sm:px-4">
                    {sponsor.name}
                  </span>
                </div>
              ) : (
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className={`object-contain opacity-60 filter grayscale ${
                    sponsor.name === "Inside Entertainment" 
                      ? "max-w-[80%] max-h-[80%]" 
                      : sponsor.name === "Touring"
                      ? "max-w-[180%] max-h-[180%]"
                      : "max-w-full max-h-full"
                  }`}
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;