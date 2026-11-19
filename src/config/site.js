/**
 * Central site configuration.
 * Update contact details here — every component reads from this file.
 */

export const company = {
  name: 'EL NORAN',
  fullName: 'EL NORAN for Trade & Export',
  founded: 2013,
  city: 'Cairo, Egypt',
  address: '23 Sahl Hamza Street, El Kom El Akhdar, El Haram, Giza, Egypt.',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('23 Sahl Hamza Street, El Kom El Akhdar, El Haram, Giza, Egypt'),
  markets: ['Europe', 'Africa', 'Asia', 'Arab Countries'],
  standards: ['GlobalG.A.P.', 'Fairtrade'],
};

/**
 * Inquiry email recipients.
 * NOTE: the email backend (server/email-api) has its own MAIL_TO setting — that is the list
 * that actually receives form submissions. This list is only used for display on the site.
 */
export const emailRecipients = [
  { name: 'Shahd Rafat', email: 'shahd.rafat@elnoranegypt.com' },
  { name: 'Mahmoud ElGazar', email: 'Mahmoud.ElGazar@elnoranegypt.com' },
];

/** Set to true to show a "pending domain confirmation" note next to the email addresses. */
export const emailsPendingConfirmation = false;

/**
 * WhatsApp contacts — international format, digits only (no "+", spaces or leading zeros).
 * The second number comes from the company profile PDF (+20 100 585 7878).
 */
export const whatsappContacts = [
  { id: 'shahd', name: 'Shahd', number: '201156002078', display: '+20 115 600 2078' },
  { id: 'mahmoud', name: 'Mahmoud', number: '201005857878', display: '+20 100 585 7878' },
];

/** Email API endpoint (serverless function). Configure via VITE_EMAIL_API_URL. */
export const emailApiUrl = import.meta.env.VITE_EMAIL_API_URL || '';
