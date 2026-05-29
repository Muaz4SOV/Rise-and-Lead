import { openWhatsAppChat } from '../lib/whatsapp.ts';
import { WhatsAppIcon } from './WhatsAppContactContent.tsx';

export default function WhatsAppFloat() {
  return (
    <div className="group/float fixed bottom-5 right-5 z-[90] sm:bottom-6 sm:right-6">
      <span className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover/float:opacity-100 sm:block">
        Chat with us
        <span className="absolute right-0 top-1/2 h-2 w-2 translate-x-1/2 -translate-y-1/2 rotate-45 bg-gray-900" />
      </span>

      <button
        type="button"
        onClick={() => openWhatsAppChat()}
        aria-label="Chat on WhatsApp"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 ring-1 ring-white/20 transition-all hover:scale-105 hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/35 active:scale-95"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </button>
    </div>
  );
}
