import { motion } from 'framer-motion';

const WorldTour = () => {
  const tourDates = [
    {
      date: "01 DE AGOSTO",
      city: "MEDELLÍN",
      venue: "FERIA DE LAS FLORES"
    },
    {
      date: "17 DE AGOSTO",
      city: "TOKYO",
      venue: "SUMMER SONIC FESTIVAL"
    },
    {
      date: "05 DE\nSEPTIEMBRE",
      city: "BOGOTÁ",
      venue: "PLOT",
      highlight: true
    },
    {
      date: "13 DE SEPTIEMBRE",
      city: "MADRID",
      venue: "COCA-COLA MUSIC FESTIVAL"
    },
    {
      date: "9 DE OCTUBRE",
      city: "ZARAGOZA",
      venue: "ESPACIO ZITY"
    },
    {
      date: "10 DE OCTUBRE",
      city: "CUENCA",
      venue: "SALÓN CUENCA"
    },
    {
      date: "11 DE OCTUBRE",
      city: "QUITO",
      venue: "TBA"
    },
    {
      date: "31 DE OCTUBRE",
      city: "CHILE",
      venue: "TBA"
    }
  ];

  return (
    <section className="w-full bg-perro-red pt-4 lg:pt-6 pb-16 lg:pb-24">
      
      {/* Pattern Images - Full width outside container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full flex justify-center items-center mb-16 lg:mb-24 overflow-hidden"
      >
        {Array.from({ length: 20 }, (_, index) => (
          <img 
            key={index}
            src="https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro/pattern5.png"
            alt="Patrón decorativo World Tour"
            className="w-auto h-6 md:h-8 lg:h-10 flex-shrink-0"
            loading="lazy"
          />
        ))}
      </motion.div>
      
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Logo */}
          <img 
            src="https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro//logoxsblack.png"
            alt="Perro Negro World Tour 2025 - Logo negro oficial"
            className="w-auto h-16 md:h-20 lg:h-24 mx-auto"
            loading="lazy"
          />
        </motion.div>

        {/* Tour Dates */}
        <div className="grid gap-4 lg:gap-6 max-w-4xl mx-auto">
          {tourDates.map((tour, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`border-2 border-black ${
                tour.highlight 
                  ? 'bg-black text-perro-red font-black transform scale-105' 
                  : 'bg-transparent text-black'
              }`}
            >
              {/* Mobile Layout */}
              <div className="flex flex-col sm:hidden p-4 space-y-2">
                {/* Date and City Row - Mobile */}
                <div className="flex items-center justify-between">
                  {/* Date - Mobile */}
                  <div className={`font-black font-title flex-shrink-0 ${
                    tour.highlight 
                      ? 'text-sm leading-tight' 
                      : 'text-sm'
                  }`}>
                    {tour.date.replace('\n', ' ')}
                  </div>
                  
                  {/* City - Mobile */}
                  <div className={`font-black font-title text-right ${
                    tour.highlight 
                      ? 'text-xl' 
                      : 'text-lg'
                  }`}>
                    {tour.city}
                  </div>
                </div>
                
                {/* Venue - Mobile */}
                <div className={`font-bold text-right ${
                  tour.highlight 
                    ? 'text-sm text-perro-red' 
                    : 'text-sm text-black/70'
                }`}>
                  {tour.venue}
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden sm:flex items-center justify-between p-4 lg:p-6">
                {/* Date - Desktop */}
                <div className={`font-black font-title w-48 ${
                  tour.highlight 
                    ? 'text-xl lg:text-2xl leading-tight' 
                    : 'text-lg lg:text-xl'
                }`}>
                  {tour.highlight ? (
                    <div className="whitespace-pre-line leading-tight">
                      {tour.date}
                    </div>
                  ) : (
                    tour.date
                  )}
                </div>
                
                {/* City - Desktop */}
                <div className={`font-black font-title flex-1 text-center ${
                  tour.highlight 
                    ? 'text-3xl lg:text-5xl' 
                    : 'text-2xl lg:text-4xl'
                }`}>
                  {tour.city}
                </div>
                
                {/* Venue - Desktop */}
                <div className={`font-bold text-right w-48 ${
                  tour.highlight 
                    ? 'text-xl lg:text-2xl' 
                    : 'text-lg lg:text-xl'
                }`}>
                  {tour.venue}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="pt-0 sm:pt-2 flex flex-col items-center">
            {/* Pattern Images - Inside container */}
            <div className="flex justify-center items-center mb-8 overflow-hidden">
              {Array.from({ length: 12 }, (_, index) => (
                <img 
                  key={index}
                  src="https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro/pattern6.png"
                  alt="Decoración Around The World"
                  className="w-auto h-6 md:h-8 lg:h-10 flex-shrink-0"
                  loading="lazy"
                />
              ))}
            </div>
            <h3 className="text-xl sm:text-3xl lg:text-5xl font-black text-black font-title tracking-wider leading-tight">
              PERRO NEGRO WORLD TOUR 2025
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WorldTour;