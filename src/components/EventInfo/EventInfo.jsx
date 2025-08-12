import { motion } from 'framer-motion';

const EventInfo = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-black relative">
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Title & Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-100 font-title leading-tight">
              LA EXPERIENCIA DE REGGAETON
              <span className="text-perro-red block">LLEGÓ A BOGOTÁ</span>
            </h2>
            
            <div className="space-y-4 text-gray-300">
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
                Inside Entertainment, la empresa líder en organización de eventos universitarios en Bogotá, 
                presenta una colaboración exclusiva con <span className="text-perro-red font-bold">Perro Negro</span>, 
                llevando la esencia y energía característica del reggaetón paisa a la capital.
              </p>
              
            </div>
          </motion.div>

          {/* Right Side - Event Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            {/* Mobile Layout - 2x2 Grid */}
            <div className="sm:hidden space-y-4">
              {/* Top Row - 2 squares */}
              <div className="grid grid-cols-2 gap-4">
                {/* Date Card */}
                <div className="bg-black bg-opacity-60 border-2 border-perro-red p-4 text-center backdrop-blur-sm aspect-square flex flex-col justify-center">
                  <div className="text-perro-red text-xl font-black font-title mb-1">5</div>
                  <div className="text-gray-100 text-xs">SEPTIEMBRE</div>
                </div>

                {/* Attendees Card */}
                <div className="bg-black bg-opacity-40 border border-gray-600 p-4 text-center backdrop-blur-sm aspect-square flex flex-col justify-center">
                  <div className="text-gray-100 text-xl font-black font-title mb-1">2000+</div>
                  <div className="text-gray-300 text-xs">ASISTENTES ESPERADOS</div>
                </div>
              </div>

              {/* Bottom - Location Badge (full width) */}
              <div className="bg-perro-red p-6 text-center">
                <div className="text-gray-100 text-xl font-black font-title mb-1">BOGOTÁ</div>
                <div className="text-gray-100/90 text-sm">COLOMBIA</div>
              </div>
            </div>

            {/* Desktop Layout - Original vertical */}
            <div className="hidden sm:flex flex-col space-y-6">
              {/* Date Card */}
              <div className="bg-black bg-opacity-60 border-2 border-perro-red p-6 text-center backdrop-blur-sm">
                <div className="text-perro-red text-lg sm:text-xl lg:text-2xl font-black font-title mb-1">5</div>
                <div className="text-gray-100 text-sm">SEPTIEMBRE</div>
              </div>

              {/* Attendees Card */}
              <div className="bg-black bg-opacity-40 border border-gray-600 p-6 text-center backdrop-blur-sm">
                <div className="text-gray-100 text-lg sm:text-xl lg:text-2xl font-black font-title mb-1">2000+</div>
                <div className="text-gray-300 text-sm">ASISTENTES ESPERADOS</div>
              </div>

              {/* Location Badge */}
              <div className="bg-perro-red p-6 text-center">
                <div className="text-gray-100 text-lg sm:text-xl lg:text-2xl font-black font-title mb-1">BOGOTÁ</div>
                <div className="text-gray-100/90 text-sm">COLOMBIA</div>
              </div>
            </div>
          </motion.div>

        </div>

      {/* Fire Image Pattern */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="w-full mt-16 sm:mt-32 mb-2"
      >
        <div className="max-w-none mx-auto flex overflow-x-hidden"
        >
          {(() => {
            const images = [];
            const imageOptions = [
              'https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro//fire2.png',
              'https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro//fire3.png',
              'https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro//alert.png',
              'https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro//coin.png'
            ];
            
            let previousImage = '';
            
            for (let i = 0; i < 30; i++) {
              let selectedImage;
              
              do {
                const randomNum = Math.random();
                if (randomNum > 0.6) {
                  selectedImage = imageOptions[0]; // fire2 (40% chance)
                } else if (randomNum > 0.35) {
                  selectedImage = imageOptions[1]; // fire3 (25% chance)
                } else if (randomNum > 0.17) {
                  selectedImage = imageOptions[3]; // coin (18% chance)
                } else {
                  selectedImage = imageOptions[2]; // alert (17% chance)
                }
              } while (
                (selectedImage === imageOptions[1] || selectedImage === imageOptions[2] || selectedImage === imageOptions[3]) && 
                selectedImage === previousImage
              );
              
              images.push(
                <img 
                  key={i}
                  src={selectedImage}
                  alt="Íconos decorativos del evento - fuego, monedas y alertas"
                  className="h-[40px] sm:h-[80px] w-auto flex-shrink-0"
                  style={{ imageRendering: 'pixelated' }}
                  loading="lazy"
                />
              );
              
              previousImage = selectedImage;
            }
            
            return images;
          })()}
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default EventInfo;