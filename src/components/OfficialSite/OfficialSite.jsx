import { motion } from 'framer-motion';
import { imageUrls } from '../../utils/imageUrls';

const OfficialSite = () => {
  const handleClick = () => {
    window.open('https://clubperronegro.com/', '_blank');
  };

  return (
    <section className="w-full bg-perro-black relative overflow-hidden cursor-pointer group" onClick={handleClick}>
      {/* Background Image */}
      <div className="relative w-full h-[50vh] sm:h-[40vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${imageUrls.pattern2})`
          }}
        />
        
        {/* Content Overlay - Only Button */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-50px" }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 sm:gap-4 bg-perro-red text-gray-100 font-black py-3 sm:py-4 px-6 sm:px-12 text-sm sm:text-xl border-2 border-perro-red hover:bg-transparent hover:text-perro-red transition-all duration-300 uppercase tracking-wider min-h-[44px]"
          >
            <span className="hidden sm:inline">VISITAR SITIO OFICIAL</span>
            <span className="sm:hidden">SITIO OFICIAL</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-500 bg-perro-red blur-3xl pointer-events-none" />
      </div>
    </section>
  );
};

export default OfficialSite;