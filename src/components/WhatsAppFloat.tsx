import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { CONTACT_YOUTUBE } from '../constants.ts';
import { openWhatsAppChat } from '../lib/whatsapp.ts';
import { WhatsAppIcon } from './WhatsAppContactContent.tsx';
import { YouTubeIcon } from './YouTubeIcon.tsx';

const fabBase =
  'relative z-10 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full text-white shadow-[0_8px_28px_rgba(0,0,0,0.18)] transition-transform duration-200 hover:scale-105 active:scale-95';

function FabWithWaves({
  waveColor,
  className,
  children,
  href,
  onClick,
  ariaLabel
}: {
  waveColor: string;
  className: string;
  children: ReactNode;
  ariaLabel: string;
  href?: string;
  onClick?: () => void;
}) {
  const waves = (
    <>
      <span className="fab-wave-ring" style={{ color: waveColor }} />
      <span className="fab-wave-ring fab-wave-ring--delay-1" style={{ color: waveColor }} />
    </>
  );

  if (href) {
    return (
      <div className="relative h-[3.25rem] w-[3.25rem]">
        {waves}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className={`${fabBase} ${className}`}
        >
          {children}
        </a>
      </div>
    );
  }

  return (
    <div className="relative h-[3.25rem] w-[3.25rem]">
      {waves}
      <button type="button" onClick={onClick} aria-label={ariaLabel} className={`${fabBase} ${className}`}>
        {children}
      </button>
    </div>
  );
}

export default function WhatsAppFloat() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-[90] flex flex-col-reverse items-center gap-3 sm:bottom-6 sm:right-6"
    >
      <FabWithWaves
        waveColor="rgba(37, 211, 102, 0.45)"
        ariaLabel="Chat on WhatsApp"
        onClick={() => openWhatsAppChat()}
        className="bg-[#25D366] hover:bg-[#22c55e]"
      >
        <WhatsAppIcon className="h-[1.35rem] w-[1.35rem]" />
      </FabWithWaves>

      <FabWithWaves
        waveColor="rgba(255, 0, 0, 0.35)"
        ariaLabel="Watch on YouTube"
        href={CONTACT_YOUTUBE}
        className="bg-[#FF0000] hover:bg-[#e60000]"
      >
        <YouTubeIcon className="h-[1.35rem] w-[1.35rem]" />
      </FabWithWaves>
    </motion.div>
  );
}
