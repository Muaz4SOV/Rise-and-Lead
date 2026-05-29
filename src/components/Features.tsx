import { motion } from 'motion/react';
import { Target, Zap, Shield, Globe, ArrowRight } from 'lucide-react';
import { BRAND_NAME, BRAND_TAGLINE } from '../constants.ts';
import SectionHeader from './SectionHeader.tsx';

const features = [
  {
    icon: Target,
    title: 'Structured Learning Paths',
    description:
      'Clear milestones from fundamentals to portfolio-ready projects — no guesswork, no wasted time.'
  },
  {
    icon: Zap,
    title: 'Expert Mentors',
    description:
      'Learn from practitioners who have shipped products, led teams, and built careers in tech.'
  },
  {
    icon: Shield,
    title: 'Real-World Projects',
    description:
      'Build work you can show employers — not just theory, but proof of what you can deliver.'
  },
  {
    icon: Globe,
    title: 'Global Community',
    description:
      'Network with peers and alumni who share your ambition to grow and lead in their fields.'
  }
];

export default function Features() {
  return (
    <section className="py-14 sm:py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="space-y-5 sm:space-y-6 lg:sticky lg:top-28">
            <SectionHeader
              label={`Why ${BRAND_NAME}`}
              title={
                <>
                  {BRAND_TAGLINE.split('.')[0]}.{' '}
                  <span className="italic text-gray-400">{BRAND_TAGLINE.split('.')[1]?.trim()}.</span>
                </>
              }
              description="A training experience built around outcomes — mentorship, projects, and the skills hiring managers actually look for."
            />
            <a
              href="#courses"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-orange-600 transition-colors"
            >
              Explore our programs
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-3 sm:space-y-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
                viewport={{ once: true, margin: '-40px' }}
                className="flex gap-4 rounded-2xl border border-gray-100 bg-[#fafafa] p-4 sm:p-5 lg:flex-col lg:p-6 lg:bg-white lg:hover:border-gray-200 lg:hover:shadow-lg transition-all group lg:odd:mt-8"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-gray-100 text-gray-900 shadow-sm group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900 transition-all lg:h-12 lg:w-12 lg:rounded-2xl lg:mb-2">
                  <feature.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
