import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users,
  Clapperboard,
  Code2,
  Mic2,
  Briefcase,
  BookOpen,
  Check,
  ChevronDown
} from 'lucide-react';
import { OFFERING_PILLARS } from '../data/offerings.ts';
import { OfferingPillarId, OfferingProgram } from '../types.ts';
import { cn } from '../lib/utils';
import SectionHeader from './SectionHeader.tsx';

const pillarIcons: Record<OfferingPillarId, typeof Users> = {
  hr: Users,
  film: Clapperboard,
  technology: Code2,
  singing: Mic2,
  services: Briefcase,
  islam360: BookOpen
};

const ease = [0.16, 1, 0.3, 1] as const;

const tabPanelVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease,
      staggerChildren: 0.055,
      delayChildren: 0.04
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease }
  }
} as const;

const tabItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease }
  }
} as const;

const MOBILE_TOPICS_PREVIEW = 4;

function ProgramCard({ program }: { program: OfferingProgram }) {
  const [expanded, setExpanded] = useState(false);
  const hasMoreTopics = program.items.length > MOBILE_TOPICS_PREVIEW;
  const mobileTopics = expanded
    ? program.items
    : program.items.slice(0, MOBILE_TOPICS_PREVIEW);

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease }}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-xl sm:rounded-2xl border border-gray-200 bg-white',
        'shadow-sm transition-[box-shadow,border-color,transform] duration-300',
        'hover:border-orange-200 hover:shadow-[0_14px_40px_-12px_rgba(0,0,0,0.12)]'
      )}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex h-full flex-col p-4 sm:p-6 md:p-7">
        <div className="flex flex-col gap-2.5 pb-4 mb-4 border-b border-gray-100 shrink-0 sm:flex-row sm:items-start sm:justify-between sm:gap-3 sm:pb-5 sm:mb-5">
          <h3 className="text-[15px] sm:text-lg font-bold text-gray-900 leading-snug">{program.title}</h3>
          <span className="self-start text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-orange-600 bg-orange-50 border border-orange-100 px-2.5 py-1 rounded-full shrink-0">
            {program.duration}
          </span>
        </div>

        <div className="flex-1 space-y-3 sm:space-y-4">
          {program.description && (
            <p className="text-sm text-gray-600 leading-relaxed">{program.description}</p>
          )}

          {program.technologies && program.technologies.length > 0 && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Core stack</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {program.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] sm:text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {program.items.length > 0 && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Key topics covered</p>

              {/* Mobile: truncated list with expand */}
              <ul className="space-y-2 sm:hidden">
                {mobileTopics.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[13px] text-gray-600 leading-snug">
                    <Check className="w-3.5 h-3.5 shrink-0 text-orange-500 mt-0.5" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {hasMoreTopics && (
                <button
                  type="button"
                  onClick={() => setExpanded((prev) => !prev)}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 sm:hidden"
                >
                  {expanded ? 'Show less' : `+${program.items.length - MOBILE_TOPICS_PREVIEW} more topics`}
                  <ChevronDown className={cn('w-3.5 h-3.5 transition-transform', expanded && 'rotate-180')} />
                </button>
              )}

              {/* Desktop: full list always */}
              <ul className="hidden sm:block space-y-2.5">
                {program.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-gray-600 leading-snug">
                    <Check className="w-4 h-4 shrink-0 text-orange-500 mt-0.5" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Courses() {
  const [activePillar, setActivePillar] = useState<OfferingPillarId>('hr');
  const pillar = OFFERING_PILLARS.find((p) => p.id === activePillar) ?? OFFERING_PILLARS[0];
  const ActiveIcon = pillarIcons[pillar.id];

  return (
    <section id="courses" className="relative py-14 sm:py-16 md:py-28 lg:py-36 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[#fafafa]" />
      <div className="absolute top-0 right-0 w-[min(50vw,480px)] h-[min(50vw,480px)] bg-orange-100/30 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-200/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-8 sm:space-y-10 md:space-y-14">
        <SectionHeader
          label="What we offer"
          title={
            <>
              Programs built for <span className="italic text-gray-400">real careers.</span>
            </>
          }
          description="Structured paths across six domains — workshops, certifications, Islamic learning, and industry-ready skills."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease }}
          className="rounded-xl sm:rounded-2xl lg:rounded-[2rem] border border-gray-200/90 bg-white shadow-sm sm:shadow-[0_20px_60px_-24px_rgba(0,0,0,0.08)] overflow-hidden"
        >
          <div className="border-b border-gray-100 bg-gray-50/80 px-3 py-3 sm:px-5 sm:py-4 lg:hidden">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2.5 px-1">
              Select category
            </p>
            <nav
              className="flex gap-2 overflow-x-auto snap-x snap-mandatory pb-0.5 scrollbar-hide"
              aria-label="Program categories"
            >
              {OFFERING_PILLARS.map((p) => {
                const Icon = pillarIcons[p.id];
                const isActive = activePillar === p.id;
                return (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setActivePillar(p.id)}
                    className={cn(
                      'snap-start shrink-0 inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold transition-all',
                      isActive
                        ? 'bg-gray-900 text-white shadow-md shadow-gray-900/15'
                        : 'bg-white text-gray-600 border border-gray-200'
                    )}
                  >
                    <Icon className={cn('w-3.5 h-3.5', isActive ? 'text-orange-300' : 'text-gray-400')} />
                    {p.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="flex flex-col lg:flex-row gap-0 lg:gap-10 p-3 sm:p-5 md:p-8 lg:p-10">
            <nav className="hidden lg:flex lg:w-56 shrink-0 flex-col gap-1.5" aria-label="Program categories">
              {OFFERING_PILLARS.map((p, i) => {
                const Icon = pillarIcons[p.id];
                const isActive = activePillar === p.id;
                return (
                  <motion.button
                    key={p.id}
                    type="button"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                    onClick={() => setActivePillar(p.id)}
                    className={cn(
                      'relative flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold transition-colors duration-300',
                      isActive
                        ? 'bg-gray-900 text-white shadow-md shadow-gray-900/15'
                        : 'bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    )}
                  >
                    <Icon className={cn('w-4 h-4 shrink-0', isActive ? 'text-orange-300' : 'text-gray-400')} />
                    <span className="leading-snug">{p.label}</span>
                  </motion.button>
                );
              })}
            </nav>

            <div className="flex-1 min-w-0 relative pt-1 lg:pt-0">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={pillar.id}
                  variants={tabPanelVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="w-full"
                >
                  <motion.div
                    variants={tabItemVariants}
                    className="flex items-center gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-100"
                  >
                    <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-lg sm:rounded-xl bg-orange-50 border border-orange-100 text-orange-600 shrink-0">
                      <ActiveIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-xl font-bold text-gray-900">
                        {pillar.label}
                        {pillar.subtitle && (
                          <span className="font-normal text-gray-500"> {pillar.subtitle}</span>
                        )}
                      </h3>
                      <p className="text-[11px] sm:text-sm text-gray-500 mt-0.5">
                        {pillar.programs.length} program{pillar.programs.length !== 1 ? 's' : ''} available
                      </p>
                    </div>
                  </motion.div>

                  {pillar.description && (
                    <motion.div
                      variants={tabItemVariants}
                      className="mb-4 sm:mb-6 rounded-xl border border-orange-100 bg-orange-50/50 px-4 py-4 sm:px-5 sm:py-5"
                    >
                      {pillar.description.split('\n\n').map((paragraph) => (
                        <p
                          key={paragraph.slice(0, 40)}
                          className="text-sm text-gray-600 leading-relaxed [&+&]:mt-3"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </motion.div>
                  )}

                  <div
                    className={cn(
                      'grid items-stretch gap-3 sm:gap-5 md:gap-6',
                      pillar.programs.length === 1 ? 'grid-cols-1 max-w-2xl' : 'grid-cols-1 md:grid-cols-2'
                    )}
                  >
                    {pillar.programs.map((program) => (
                      <motion.div key={program.id} variants={tabItemVariants} className="h-full">
                        <ProgramCard program={program} />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
