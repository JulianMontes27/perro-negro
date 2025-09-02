import { motion } from 'framer-motion';
import { imageUrls } from '../../utils/imageUrls';

const Venue = () => {
  return (
    <section className="w-full bg-black">
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 w-full">
          
          {/* Left Side - Venue Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center p-8 lg:p-12 space-y-6 bg-cover bg-center"
            style={{
              backgroundImage: `url(${imageUrls.pattern1})`
            }}
          >
            
            {/* Venue Name */}
            <div className="bg-perro-red p-6 lg:p-8">
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-gray-100 font-title mb-2">
                PLOT BOGOTÁ
              </h3>
              <p className="text-gray-100 text-sm sm:text-lg opacity-90">
                VENUE OFICIAL - COLOMBIA
              </p>
            </div>

            {/* Address */}
            <div className="border-2 border-perro-gray p-6 lg:p-8">
              <h4 className="text-base sm:text-xl font-black text-perro-red font-title mb-3">
                DIRECCIÓN
              </h4>
              <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">
                Km 4.5 Vía La Calera<br />
                Cundinamarca<br />
                Colombia
              </p>
            </div>


          </motion.div>

          {/* Right Side - Dark Map */}
          <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px] cursor-pointer border-t border-b border-perro-gray sm:border-none"
               onClick={() => window.open(`https://maps.google.com/?q=4.6771048,-74.0222526`, '_blank')}>
            <div className="relative w-full h-full overflow-hidden">
              <iframe
                src="https://maps.google.com/maps?q=4.6771048,-74.0222526&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="130%"
                height="130%"
                style={{ 
                  border: 0,
                  filter: 'invert(1) brightness(1.2) contrast(1.1) saturate(0.3) hue-rotate(180deg)',
                  pointerEvents: 'none',
                  transform: 'translate(-15%, -15%)'
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute top-0 left-0"
              ></iframe>
            </div>
            
            {/* Click instruction */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-perro-red text-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wider z-10 pointer-events-auto cursor-pointer hover:bg-transparent hover:text-perro-red border-2 border-perro-red transition-all duration-300">
              VER EN GOOGLE MAPS
            </div>
          </div>

        </div>
    </section>
  );
};

export default Venue;