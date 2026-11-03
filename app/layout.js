export const metadata = {
  title: "Studia con me",
  description: "Il tutor AI che legge il tuo materiale e ti interroga.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
