import { Clock, Sparkles } from 'lucide-react';
import { BRAND_NAME, CONTACT_WHATSAPP_DISPLAY, WHATSAPP_ENROLL_MESSAGE } from '../constants.ts';
import { openWhatsAppChat } from '../lib/whatsapp.ts';
import BrandLogo from './BrandLogo.tsx';

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const perks = [
  'Program details & enrollment guidance',
  'Quick answers about courses & batches',
  'Friendly support from our team'
];

export function WhatsAppContactContent({ onContinue }: { onContinue?: () => void }) {
  const handleOpen = () => {
    onContinue?.();
    window.setTimeout(() => openWhatsAppChat(), onContinue ? 180 : 0);
  };

  return (
    <div className="space-y-5">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#128C7E] via-[#25D366] to-[#34eb77] p-5 text-white">
        <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/10" />
        <div className="absolute -bottom-8 -left-4 h-24 w-24 rounded-full bg-white/10" />
        <div className="relative flex items-center gap-4">
          <BrandLogo className="h-14 w-14 rounded-2xl shadow-lg ring-2 ring-white/30" />
          <div className="min-w-0 flex-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/80">WhatsApp Support</p>
            <p className="font-serif text-xl leading-tight truncate">{BRAND_NAME}</p>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-white/90">
              <span className="h-2 w-2 rounded-full bg-emerald-200 animate-pulse" />
              Available for inquiries
            </p>
          </div>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20 ring-1 ring-white/30">
            <WhatsAppIcon className="h-6 w-6" />
          </div>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-[#ece5dd] p-4">
        <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-500">
          Message preview
        </p>
        <div className="flex gap-2.5">
          <BrandLogo className="h-9 w-9 shrink-0 rounded-full shadow-sm ring-1 ring-black/5" />
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-[11px] font-semibold text-gray-600">{BRAND_NAME}</p>
            <div className="relative inline-block max-w-full rounded-2xl rounded-tl-md bg-white px-4 py-3 text-sm leading-relaxed text-gray-800 shadow-sm ring-1 ring-black/[0.04]">
              {WHATSAPP_ENROLL_MESSAGE}
              <span className="mt-1.5 block text-right text-[10px] font-medium text-gray-400">Now</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50/80 px-4 py-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">WhatsApp Number</p>
          <p className="text-base font-semibold text-gray-900 tracking-wide">{CONTACT_WHATSAPP_DISPLAY}</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <Clock className="h-3.5 w-3.5" />
          Fast reply
        </div>
      </div>

      <ul className="space-y-2">
        {perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2.5 text-sm text-gray-600">
            <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-500" />
            <span>{perk}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={handleOpen}
        className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 transition-all hover:bg-[#20bd5a] hover:shadow-xl hover:shadow-[#25D366]/30 active:scale-[0.98]"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Continue to WhatsApp
      </button>
    </div>
  );
}
