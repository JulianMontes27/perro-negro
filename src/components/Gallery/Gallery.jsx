import { motion } from 'framer-motion';

const Gallery = () => {
  const galleryProjects = [
    {
      id: 1,
      title: "HASTA 'BAJO PROJECT",
      description: "Hasta 'Bajo Project es un colectivo de mujeres académicas comprometidas con salvaguardar, educar y exponer el reggaetón, violando por rescatar su importancia en la cultura puertorriqueña. #hastabajoproyect crea el primer...",
      image: "https://via.placeholder.com/800x600/1a1a1a/FFFFFF?text=HASTA+BAJO+PROJECT",
      link: "LEER MAS"
    },
    {
      id: 2,
      title: "CHICA 10 - FUSIÓN PERRERO",
      description: "En el año 2003, dos grupos de reguetoneros comandados por jóvenes chocoanos decidieron unirse para crear un tema que marcaría la historia de Chocó y Emilio 'El negro', integrantes actuales de...",
      image: "https://via.placeholder.com/800x600/0f2027/FFFFFF?text=CHICA+10",
      link: "LEER MAS"
    },
    {
      id: 3,
      title: "DJ BLASS",
      description: "Esta entrevista con Dj Blass en Puerto Rico y este sábado en el idioma de Perro Negro. 🔥 Conversar con los pioneros del perrero será siempre un honor. Esta...",
      image: "https://via.placeholder.com/800x600/2d1b69/FFFFFF?text=DJ+BLASS",
      link: "LEER MAS"
    }
  ];

  return (
    <section className="w-full bg-black">
      {/* Full Width Grid - No margins or padding */}
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
        {galleryProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            whileHover={{ scale: 1.02 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.2,
              ease: "backOut"
            }}
            viewport={{ once: false, margin: "-50px" }}
            className="relative group cursor-pointer overflow-hidden h-screen lg:h-[60vh] xl:h-screen"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url(${project.image})`,
              }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/90" />
            
            {/* Content Overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index * 0.2) + 0.3 }}
              className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 xl:p-12 text-gray-100"
            >
              {/* Title */}
              <motion.h3 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: (index * 0.2) + 0.4 }}
                className="text-2xl lg:text-3xl xl:text-4xl font-black font-title mb-4 leading-tight"
              >
                {project.title}
              </motion.h3>
              
              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: (index * 0.2) + 0.5 }}
                className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6 max-w-md line-clamp-4"
              >
                {project.description}
              </motion.p>
              
              {/* Read More Link */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.6, delay: (index * 0.2) + 0.6 }}
                className="flex items-center gap-3 text-perro-red font-bold text-sm lg:text-base uppercase tracking-wider group-hover:text-gray-100 transition-colors duration-300"
              >
                {project.link}
                <motion.div 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-0 h-0.5 bg-perro-red group-hover:w-8 transition-all duration-300"
                />
              </motion.div>
            </motion.div>
            
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-perro-red blur-2xl pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;