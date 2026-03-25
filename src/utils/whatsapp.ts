const DEFAULT_WHATSAPP_NUMBER = "5511999999999";

const normalizeDigits = (value: string) => value.replace(/\D/g, "");

export const getWhatsAppNumber = () => {
  const configured = import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined;
  return normalizeDigits(configured ?? "") || DEFAULT_WHATSAPP_NUMBER;
};

export const buildWhatsAppUrl = (message: string) => {
  const number = getWhatsAppNumber();
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${number}?text=${encodedMessage}`;
};

export const normalizePhone = (phone: string) => normalizeDigits(phone);
