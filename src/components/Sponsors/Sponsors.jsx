"use client";

import { motion } from "framer-motion";
import { imageUrls } from '../../utils/imageUrls';

const Sponsors = () => {
  const sponsors = [
    {
      name: "REC",
      logo: imageUrls.recLogo,
    },
    {
      name: "Inside Entertainment",
      logo: imageUrls.insideLogo,
    },
    {
      name: "ALS Producciones",
      logo: imageUrls.alsProducciones,
    },
    {
      name: "Biotickets",
      logo: imageUrls.biotickets,
    },
    {
      name: "Touring",
      logo: imageUrls.touring,
    },
  ];

  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <section className="w-full bg-black py-16 lg:py-24 overflow-hidden">
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8 sm:gap-12"
          animate={{
            x: [0, "-50%"],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          style={{
            width: "200%", // Double width for seamless loop
          }}
        >
          {duplicatedSponsors.map((sponsor, index) => (
            <div
              key={`${sponsor.name}-${index}`}
              className="flex-shrink-0 w-32 h-16 sm:w-48 sm:h-24 lg:w-56 lg:h-28 flex items-center justify-center p-2 sm:p-4"
            >
              <img
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                className={`object-contain opacity-60 filter grayscale transition-opacity duration-300 hover:opacity-80 ${
                  sponsor.name === "Inside Entertainment"
                    ? "max-w-[80%] max-h-[80%]"
                    : sponsor.name === "Touring"
                    ? "max-w-[180%] max-h-[180%]"
                    : "max-w-full max-h-full"
                }`}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
