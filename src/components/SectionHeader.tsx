import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  label: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  dark = false
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <div className={isCenter ? 'max-w-2xl mx-auto text-center' : 'max-w-3xl'}>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className={`flex items-center gap-3 mb-4 ${isCenter ? 'justify-center' : ''}`}
      >
        {!isCenter && <span className="h-px w-8 shrink-0 bg-orange-500" />}
        <p
          className={`text-[11px] font-bold uppercase tracking-[0.22em] ${
            dark ? 'text-orange-400' : 'text-orange-600'
          }`}
        >
          {label}
        </p>
        {isCenter && <span className="h-px w-8 shrink-0 bg-orange-500" />}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={`font-serif text-[1.75rem] leading-[1.15] sm:text-4xl md:text-5xl font-medium tracking-tight ${
          dark ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className={`mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed ${
            isCenter ? 'mx-auto' : ''
          } max-w-lg ${dark ? 'text-gray-400' : 'text-gray-500'} ${isCenter ? '' : ''}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
