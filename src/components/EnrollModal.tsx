import { useEffect, useRef, useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, ArrowLeft, Send, ChevronRight, ChevronDown, Check, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';
import { BRAND_NAME } from '../constants.ts';
import { OFFERING_PILLARS } from '../data/offerings.ts';
import { WhatsAppContactContent, WhatsAppIcon } from './WhatsAppContactContent.tsx';

const ease = [0.16, 1, 0.3, 1] as const;

const programOptions = [
  ...OFFERING_PILLARS.flatMap((pillar) =>
    pillar.programs.map((program) => ({
      value: `${pillar.label} — ${program.title}`,
      label: `${pillar.label} — ${program.title}`
    }))
  ),
  { value: 'Other / Not sure yet', label: 'Other / Not sure yet' }
];

const inputClass =
  'w-full rounded-xl border border-gray-200/90 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500/25 focus:border-orange-400/40 transition-shadow';

type EnrollStep = 'choice' | 'whatsapp' | 'email' | 'success';

interface EnrollModalProps {
  open: boolean;
  onClose: () => void;
  initialStep?: EnrollStep;
}

function ProgramSelect({
  value,
  onChange
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className={cn(inputClass, 'flex w-full items-center justify-between gap-3 text-left')}
      >
        <span className="truncate">{value}</span>
        <ChevronDown
          className={cn('w-4 h-4 shrink-0 text-gray-400 transition-transform', open && 'rotate-180')}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            role="listbox"
            className="mt-1.5 max-h-44 overflow-y-auto overscroll-contain rounded-xl border border-gray-200 bg-white shadow-lg ring-1 ring-black/[0.04] modal-scroll"
          >
            {programOptions.map((option) => {
              const selected = option.value === value;
              return (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={cn(
                    'flex w-full items-start gap-2 px-3.5 py-2.5 text-left text-sm transition-colors',
                    selected
                      ? 'bg-orange-50 text-orange-800 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  )}
                >
                  <Check
                    className={cn(
                      'mt-0.5 w-3.5 h-3.5 shrink-0',
                      selected ? 'opacity-100 text-orange-500' : 'opacity-0'
                    )}
                  />
                  <span className="leading-snug">{option.label}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function EnrollModal({ open, onClose, initialStep = 'choice' }: EnrollModalProps) {
  const [step, setStep] = useState<EnrollStep>(initialStep);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    program: programOptions[0]?.value ?? '',
    message: ''
  });

  useEffect(() => {
    if (!open) {
      setStep('choice');
      setForm({
        name: '',
        email: '',
        phone: '',
        program: programOptions[0]?.value ?? '',
        message: ''
      });
      return;
    }

    setStep(initialStep);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose, initialStep]);

  const handleWhatsApp = () => setStep('whatsapp');

  const handleEmailSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStep('success');
  };

  const modalTitle =
    step === 'choice'
      ? 'How would you like to connect?'
      : step === 'whatsapp'
        ? 'Connect on WhatsApp'
        : step === 'email'
          ? 'Send us an inquiry'
          : 'Inquiry Submitted';

  const modalSubtitle =
    step === 'choice'
      ? `Reach ${BRAND_NAME} — we'll help you choose the right program.`
      : step === 'whatsapp'
        ? 'Review your message and continue to WhatsApp chat.'
        : step === 'email'
          ? 'Fill in your details and send your inquiry.'
          : 'Thank you for reaching out to us.';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close enrollment"
            className="absolute inset-0 bg-gray-950/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enroll-modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.3, ease }}
            className="relative z-10 flex w-full max-w-lg max-h-[92dvh] sm:max-h-[min(90dvh,720px)] flex-col overflow-hidden rounded-t-2xl sm:rounded-2xl bg-white shadow-[0_24px_64px_-12px_rgba(0,0,0,0.28)] ring-1 ring-black/[0.05]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative shrink-0 border-b border-gray-100 px-4 py-4 sm:px-6 sm:py-5">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400" />
              <div className="flex items-start justify-between gap-4 pt-1">
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-orange-500 mb-1.5">
                    Enrollment
                  </p>
                  <h2 id="enroll-modal-title" className="font-serif text-xl sm:text-2xl text-gray-900 leading-tight">
                    {modalTitle}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">{modalSubtitle}</p>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition-colors shrink-0"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain modal-scroll px-4 py-4 sm:px-6 sm:py-5 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <AnimatePresence mode="wait" initial={false}>
                {step === 'choice' ? (
                  <motion.div
                    key="choice"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-3"
                  >
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="group flex w-full items-center gap-4 rounded-2xl border border-gray-200/90 bg-white px-4 py-4 text-left shadow-sm transition-all hover:border-[#25D366]/40 hover:shadow-md hover:shadow-[#25D366]/8"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-sm">
                        <WhatsAppIcon className="w-6 h-6" />
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-sm font-semibold text-gray-900">WhatsApp</span>
                        <span className="block text-xs text-gray-500 mt-0.5">Instant chat · fastest response</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-300 transition-transform group-hover:translate-x-0.5 group-hover:text-[#25D366]" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep('email')}
                      className="group flex w-full items-center gap-4 rounded-2xl border border-gray-200/90 bg-white px-4 py-4 text-left shadow-sm transition-all hover:border-gray-300 hover:shadow-md"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-white shadow-sm">
                        <Mail className="w-5 h-5" />
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-sm font-semibold text-gray-900">Email</span>
                        <span className="block text-xs text-gray-500 mt-0.5">Structured inquiry form</span>
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-300 transition-transform group-hover:translate-x-0.5 group-hover:text-gray-700" />
                    </button>
                  </motion.div>
                ) : step === 'whatsapp' ? (
                  <motion.div
                    key="whatsapp"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <button
                      type="button"
                      onClick={() => setStep('choice')}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Back to options
                    </button>
                    <WhatsAppContactContent onContinue={onClose} />
                  </motion.div>
                ) : step === 'email' ? (
                  <motion.form
                    key="email"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleEmailSubmit}
                    className="space-y-4"
                  >
                    <button
                      type="button"
                      onClick={() => setStep('choice')}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      Back to options
                    </button>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <label className="block space-y-1.5 sm:col-span-2">
                        <span className="text-xs font-semibold text-gray-700">Full Name</span>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </label>

                      <label className="block space-y-1.5">
                        <span className="text-xs font-semibold text-gray-700">Email</span>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                          placeholder="you@email.com"
                          className={inputClass}
                        />
                      </label>

                      <label className="block space-y-1.5">
                        <span className="text-xs font-semibold text-gray-700">Phone</span>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                          placeholder="+92 300 0000000"
                          className={inputClass}
                        />
                      </label>

                      <div className="block space-y-1.5 sm:col-span-2">
                        <span className="text-xs font-semibold text-gray-700">Program of Interest</span>
                        <ProgramSelect
                          value={form.program}
                          onChange={(program) => setForm((f) => ({ ...f, program }))}
                        />
                      </div>

                      <label className="block space-y-1.5 sm:col-span-2">
                        <span className="text-xs font-semibold text-gray-700">Message</span>
                        <textarea
                          rows={3}
                          value={form.message}
                          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                          placeholder="Your goals or questions (optional)"
                          className={cn(inputClass, 'resize-none')}
                        />
                      </label>
                    </div>

                    <div className="sticky bottom-0 -mx-6 px-6 pt-2 pb-1 bg-gradient-to-t from-white via-white to-white/80">
                      <button
                        type="submit"
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white hover:bg-gray-800 transition-colors active:scale-[0.98]"
                      >
                        Send Inquiry
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center text-center py-4 sm:py-6"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 ring-1 ring-green-100 mb-5">
                      <CheckCircle2 className="w-8 h-8 text-green-500" strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Inquiry Submitted Successfully</h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                      Your inquiry has been submitted. Our team will review it and reach out to you with a call
                      or message soon.
                    </p>
                    <button
                      type="button"
                      onClick={onClose}
                      className="mt-8 w-full rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white hover:bg-gray-800 transition-colors active:scale-[0.98]"
                    >
                      Done
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
