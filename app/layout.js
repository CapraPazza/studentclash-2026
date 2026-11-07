import "./globals.css";

export const metadata = {
  title: "T2T — Teaching to Teach",
  description:
    "L'agente che insegna a insegnare: non scrive la lezione finché non hai scommesso dove i tuoi studenti si bloccano.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
