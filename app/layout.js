import "./globals.css";

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://parmarbuilt.com"),
  title: "Parmar Built | Mechanical, Construction & Maintenance",
  description:
    "Owner-led mechanical, construction, renovation, commercial kitchen equipment maintenance, and industrial maintenance services.",
  keywords: [
    "Parmar Built",
    "mechanical contractor",
    "construction",
    "renovation",
    "industrial maintenance",
    "commercial kitchen equipment",
    "equipment maintenance",
  ],
  openGraph: {
    title: "Parmar Built",
    description: "Built to spec. Installed on time. Maintained for reliability.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
