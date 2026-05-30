import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import {
  ABOUT_CAPABILITIES,
  ABOUT_CLOSING,
  ABOUT_COMMITMENT,
  ABOUT_INTRO,
  ABOUT_LEARNING_PROGRAMS,
  ABOUT_SPECIALIZATIONS,
  ABOUT_TRAINING_PORTFOLIO,
  BRAND_MISSION,
  BRAND_NAME
} from '../constants.ts';
import SectionHeader from './SectionHeader.tsx';

export default function About({ onEnrollClick }: { onEnrollClick: () => void }) {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-[#f7f7f5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20">
          {/* Story — sticky on desktop */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-8 lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              label="About Us"
              title={
                <>
                  Welcome to{' '}
                  <span className="italic text-gray-400">{BRAND_NAME}</span>
                </>
              }
            />

            <div className="space-y-5 text-[15px] sm:text-base text-gray-600 leading-[1.8]">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {ABOUT_INTRO}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.06 }}
              >
                {ABOUT_SPECIALIZATIONS}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 }}
              >
                {ABOUT_COMMITMENT}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.18 }}
                className="font-serif italic text-gray-500 border-l-[3px] border-orange-400 pl-5"
              >
                {ABOUT_CLOSING}
              </motion.p>
            </div>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              href="#courses"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-orange-600 transition-colors"
            >
              View all programs
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Visual + offerings */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-5 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)]"
            >
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1400&auto=format&fit=crop"
                alt="Professional training session at Rise & Lead 360"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
                <p className="text-white/90 text-sm sm:text-base font-medium max-w-md leading-relaxed">
                  Transformative learning for individuals, startups, and corporates.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl sm:rounded-3xl bg-white border border-gray-200/80 p-5 sm:p-7 md:p-8 shadow-sm"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">
                What We Offer
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {ABOUT_CAPABILITIES.map((item) => (
                  <span
                    key={item.title}
                    className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-gray-700"
                  >
                    {item.title}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl sm:rounded-3xl bg-white border border-gray-200/80 p-5 sm:p-7 shadow-sm"
              >
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600 mb-5">
                  Training Portfolio
                </h3>
                <ul className="space-y-3">
                  {ABOUT_TRAINING_PORTFOLIO.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm sm:text-[15px] text-gray-600 leading-snug"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 }}
                className="rounded-2xl sm:rounded-3xl bg-white border border-gray-200/80 p-5 sm:p-7 shadow-sm"
              >
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600 mb-5">
                  Learning Programs
                </h3>
                <ul className="space-y-3">
                  {ABOUT_LEARNING_PROGRAMS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm sm:text-[15px] text-gray-600 leading-snug"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 md:mt-20 rounded-2xl sm:rounded-[2rem] bg-gray-900 text-white px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-12"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-400 mb-4 sm:mb-5">
            Our Mission
          </p>
          <p className="font-serif text-lg sm:text-xl md:text-2xl lg:text-[1.75rem] leading-[1.55] text-white/95 max-w-5xl">
            {BRAND_MISSION}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 md:mt-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-8 rounded-2xl sm:rounded-[2rem] bg-white border border-gray-200 px-6 py-6 sm:px-10 sm:py-8 shadow-sm"
        >
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
              Ready to start your journey?
            </h3>
            <p className="mt-1.5 text-sm text-gray-500">
              Join the next cohort or enquire about corporate training for your team.
            </p>
          </div>
          <button
            type="button"
            onClick={onEnrollClick}
            className="group shrink-0 inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-black text-white px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Apply for Admission
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
