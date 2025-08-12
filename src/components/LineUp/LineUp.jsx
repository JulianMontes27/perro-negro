import { motion } from 'framer-motion';

const LineUp = () => {
  const cities = [
    {
      name: "VITA",
      id: "mde"
    },
    {
      name: "MIAMI",
      id: "mia"
    },
    {
      name: "MADRID",
      id: "mad"
    }
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-black relative overflow-hidden" style={{
      backgroundImage: 'url(https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro//pattern1.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 1.2, ease: "backOut" }}
            viewport={{ once: false }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-perro-red font-title mb-4"
          >
            LINEUP
          </motion.h2>
          
          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: false }}
            className="h-1 bg-perro-red mx-auto max-w-32"
          />
        </motion.div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-none">
          {cities.map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: 100, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              exit={{ opacity: 0, y: -100, rotateY: 30 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3,
                ease: "backOut"
              }}
              viewport={{ once: false, margin: "-50px" }}
              className="relative group cursor-pointer perspective-1000"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* City Image Container */}
              <div className="relative aspect-square overflow-hidden">
                {/* Artist image */}
                <div 
                  className="w-full h-full bg-gray-900 border-2 border-gray-700 group-hover:border-perro-red transition-all duration-300 bg-cover bg-center"
                  style={{
                    backgroundImage: index === 0 ? 'url(https://jtfcfsnksywotlbsddqb.supabase.co/storage/v1/object/public/perro-negro//vita.png)' : 'none'
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>
                
                {/* Enhanced Hover Effect */}
                <motion.div 
                  className="absolute inset-0 bg-perro-red bg-opacity-0 group-hover:bg-opacity-20"
                  whileHover={{ 
                    backgroundColor: "rgba(185, 58, 50, 0.2)",
                    transition: { duration: 0.3 }
                  }}
                />
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-perro-red blur-xl opacity-20"></div>
                </div>
              </div>
              
              {/* City Name with Animation */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: (index * 0.3) + 0.4 }}
                viewport={{ once: false }}
                className="text-center mt-4 sm:mt-6"
              >
                <motion.h3 
                  whileHover={{ scale: 1.1, color: "#f3f4f6" }}
                  transition={{ duration: 0.2 }}
                  className="text-xl sm:text-2xl lg:text-3xl font-normal text-perro-red font-title"
                >
                  {city.name}
                </motion.h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LineUp;