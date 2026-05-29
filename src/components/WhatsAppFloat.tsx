import { openWhatsAppChat } from '../lib/whatsapp.ts';
import { WhatsAppIcon } from './WhatsAppContactContent.tsx';

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[90] sm:bottom-6 sm:right-6">
      <button
        type="button"
        onClick={() => openWhatsAppChat()}
        aria-label="Chat on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 ring-1 ring-white/20 transition-all hover:scale-105 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/35 active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <WhatsAppIcon className="relative h-6 w-6 sm:h-7 sm:w-7" />
      </button>
    </div>
  );
}
