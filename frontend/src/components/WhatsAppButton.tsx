"use client";
// src/components/WhatsAppButton.tsx — Client component (floating WhatsApp button)
import React from 'react';

export default function WhatsAppButton({ phoneNumber }: { phoneNumber: string }) {
  const message = "Hi NeoFatbury, I'd like to book a consultation.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={widgetStyle}
      aria-label="Chat with us on WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        fill="currentColor"
        style={{ display: 'block' }}
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.006.332.013c.101.007.237-.038.37.281.144.346.491 1.2.532 1.287.04.088.067.19.01.303-.057.114-.087.185-.173.285-.085.1-.18.223-.258.303-.09.092-.185.193-.079.373.106.18.471.778.91 1.171.564.505 1.042.663 1.191.736.149.073.236.06.323-.04s.374-.437.475-.586c.101-.149.202-.124.341-.073s.88.415 1.034.492c.154.077.257.116.294.18.037.064.037.371-.107.776z" />
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 21.887c-5.46 0-9.887-4.427-9.887-9.887s4.427-9.887 9.887-9.887 9.887 4.427 9.887 9.887-4.427 9.887-9.887 9.887z" />
      </svg>
    </a>
  );
}

const widgetStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  width: '60px',
  height: '60px',
  backgroundColor: '#25D366',
  color: 'white',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
  zIndex: 1000,
  transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  cursor: 'pointer',
  textDecoration: 'none',
};
