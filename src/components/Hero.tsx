import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { BRAND_HERO_SUBLINE, BRAND_TAGLINE } from '../constants.ts';

const careerPaths = ['Web Developer', 'Mobile App Dev', 'Freelancer', 'Software Engineer'];

export default function Hero() {
  return (
    <section className="relative pt-28 pb-8 px-4 sm:pt-36 sm:pb-20 sm:px-6 bg-white lg:min-h-[88vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-1">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
              {BRAND_TAGLINE}
            </p>
          </motion.div>

          <div className="space-y-5 max-w-xl">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="font-serif text-[clamp(2rem,7vw,3.5rem)] font-medium leading-[1.12] text-gray-900"
            >
              <span className="block">Just listen to your soul</span>
              <span className="mt-2 block italic text-gray-600">
                and unlock your <span className="not-italic font-semibold text-orange-600">true potential</span>.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="font-serif text-sm sm:text-base md:text-lg italic text-gray-500 leading-relaxed border-l-2 border-orange-400/70 pl-4"
            >
              {BRAND_HERO_SUBLINE}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 pt-1"
          >
            <button className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-black text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors">
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#courses"
              className="inline-flex w-full sm:w-auto items-center justify-center px-7 py-3.5 rounded-full text-sm font-semibold text-gray-700 border border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-colors"
            >
              Explore Programs
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-5 order-2 w-full lg:relative"
        >
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-100 bg-white shadow-lg shadow-gray-200/60 lg:shadow-lg lg:shadow-gray-200/80 lg:border-0 lg:bg-transparent lg:overflow-visible">
            <div className="aspect-[16/10] sm:aspect-[5/4] lg:aspect-[4/5] lg:max-h-none overflow-hidden lg:rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
                alt="Rise & Lead 360 learning community"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-4 sm:p-5 border-t border-gray-100 lg:border-0 lg:p-0 lg:mt-0 lg:absolute lg:-bottom-3 lg:-left-3 lg:max-w-[250px] lg:rounded-xl lg:border lg:shadow-md lg:bg-white">
              <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-gray-400 mb-2.5">
                Career paths
              </p>
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                {careerPaths.map((path) => (
                  <span
                    key={path}
                    className="text-xs font-medium text-gray-700 bg-gray-50 sm:bg-gray-100 px-2 py-2.5 sm:px-2.5 sm:py-2 rounded-lg text-center leading-snug min-h-[2.5rem] flex items-center justify-center"
                  >
                    {path}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
