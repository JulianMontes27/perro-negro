import { motion } from 'framer-motion';
import { useState } from 'react';

const EventMap = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mapImageUrl = "https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro/map.png";

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Simple Section */}
      <section className="w-full bg-gradient-to-b from-black to-perro-red py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* Main Content with Side Patterns */}
          <div className="relative">
            
            {/* Left Side Pattern */}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-full hidden 2xl:block" style={{ left: '-16rem' }}>
              <img 
                src="https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro/pattern7.png"
                alt="Patrón decorativo izquierdo"
                className="w-auto h-56 lg:h-64 xl:h-72 opacity-70"
                loading="lazy"
              />
            </div>

            {/* Right Side Pattern */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-full hidden 2xl:block" style={{ right: '-16rem' }}>
              <img 
                src="https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro/pattern8.png"
                alt="Patrón decorativo derecho"
                className="w-auto h-56 lg:h-64 xl:h-72 opacity-70"
                loading="lazy"
              />
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Column - Title, Text and Button */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                {/* Title */}
                <h2 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-title mb-4 sm:mb-6">
                  MAPA DEL EVENTO
                </h2>
                
                {/* Subtitle */}
                <p className="text-gray-200 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8">
                  Explora todas las zonas del evento y planifica tu experiencia perfecta
                </p>

                {/* Simple Map Button - Hidden on mobile */}
                <button
                  onClick={openModal}
                  className="hidden sm:inline-block bg-perro-red text-white hover:bg-transparent hover:text-perro-red border-2 border-perro-red px-8 py-4 text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wider"
                >
                  VER MAPA COMPLETO
                </button>
              </motion.div>

              {/* Right Column - Map Preview */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <div 
                  className="relative cursor-pointer group max-w-sm w-full"
                  onClick={openModal}
                >
                  <div className="aspect-[4/5] w-full overflow-hidden rounded-lg shadow-xl">
                    <img 
                      src={mapImageUrl}
                      alt="Preview del mapa del evento"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 rounded-lg transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold">
                        Click para ampliar
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold text-xl hover:scale-110 transition-transform z-10 shadow-lg"
            >
              ×
            </button>
            
            {/* Map image container */}
            <div className="max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
              <img 
                src={mapImageUrl}
                alt="Mapa del evento Club Perro Negro - Vista completa"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default EventMap;