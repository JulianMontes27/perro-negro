import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="w-full bg-black py-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          
          {/* Logo */}
          <img 
            src="https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro//logoxsred2.png"
            alt="Perro Negro Experience 2025 - Logo oficial footer"
            className="w-auto h-8 sm:h-12 mx-auto"
            loading="lazy"
          />

          {/* Event Info */}
          <div className="space-y-2">
            <div className="text-gray-100 text-base sm:text-lg font-black">
              05 DE SEPTIEMBRE 2025
            </div>
            <div className="text-perro-red text-base font-bold">
              BOGOTÁ • PLOT
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-6">
            <a
              href="https://instagram.com/perronegro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-perro-gray hover:text-perro-red transition-colors duration-300 text-xs font-semibold py-2 px-1 min-h-[44px] flex items-center"
            >
              INSTAGRAM
            </a>
            <span className="text-perro-gray">•</span>
            <a
              href="https://tiktok.com/@perronegro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-perro-gray hover:text-perro-red transition-colors duration-300 text-xs font-semibold py-2 px-1 min-h-[44px] flex items-center"
            >
              TIKTOK
            </a>
            <span className="text-perro-gray">•</span>
            <a
              href="https://youtube.com/@perronegro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-perro-gray hover:text-perro-red transition-colors duration-300 text-xs font-semibold py-2 px-1 min-h-[44px] flex items-center"
            >
              YOUTUBE
            </a>
          </div>

          {/* Age Restriction */}
          <div className="inline-block bg-perro-red text-gray-100 px-3 py-1 text-xs font-bold">
            +18 AÑOS
          </div>

          {/* Copyright */}
          <div className="text-perro-gray text-xs">
            © 2025 Perro Negro Experience
          </div>

        </motion.div>
        
      </div>
    </footer>
  );
};

export default Footer;