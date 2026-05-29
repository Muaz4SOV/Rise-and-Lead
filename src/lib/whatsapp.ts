import { CONTACT_WHATSAPP, WHATSAPP_ENROLL_MESSAGE } from '../constants.ts';

export function openWhatsAppChat(message = WHATSAPP_ENROLL_MESSAGE) {
  const text = encodeURIComponent(message);
  const phone = CONTACT_WHATSAPP.replace(/\D/g, '');
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = `whatsapp://send?phone=${phone}&text=${text}`;
    return;
  }

  window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener,noreferrer');
}
