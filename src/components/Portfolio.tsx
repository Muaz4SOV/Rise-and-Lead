import { motion } from 'motion/react';
import { PORTFOLIO } from '../constants.ts';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-14 md:py-24 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-16">
        <div className="text-center space-y-3 sm:space-y-4 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400"
          >
            Showcase
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-black"
          >
            Project Portfolio
          </motion.h2>
          <p className="text-sm sm:text-base text-gray-500 px-2">
            A glimpse into the impact we&apos;ve created through our specialized training programs across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {PORTFOLIO.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
              }}
              viewport={{ once: true }}
              className="group relative h-[280px] sm:h-[320px] lg:h-[400px] overflow-hidden rounded-2xl sm:rounded-3xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover md:transition-transform md:duration-1000 md:group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 md:from-black/80 md:via-black/20 md:to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 sm:p-8 md:translate-y-6 md:group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-orange-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1.5 sm:mb-2">
                  {item.year}
                </p>
                <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-200 sm:text-gray-300 text-xs sm:text-sm leading-relaxed mb-0 sm:mb-6 line-clamp-3 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                  {item.description}
                </p>
                <div className="hidden md:flex items-center gap-2 text-white font-medium text-sm mt-4">
                  View Case Study
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
