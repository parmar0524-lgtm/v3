export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://parmarbuilt.com";
  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/#services` },
    { url: `${base}/#residential` },
    { url: `${base}/#restaurants` },
    { url: `${base}/#industrial` },
    { url: `${base}/#projects` },
    { url: `${base}/#about` },
    { url: `${base}/#contact` },
  ];
}
