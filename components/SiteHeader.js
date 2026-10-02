 "use client";

import { useState } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Services", "#services"],
    ["Residential", "#residential"],
    ["Restaurants", "#restaurants"],
    ["Commercial & Industrial", "#industrial"],
    ["Projects", "#projects"],
    ["About", "#about"],
  ];

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Parmar Built home">
          <span className="brand-mark" aria-hidden="true">
            <span className="mark-p">P</span>
            <span className="mark-b">B</span>
            <span className="mark-roof" />
            <span className="mark-bars" />
          </span>
          <span className="brand-name">PARMAR <b>BUILT</b></span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>

        <nav id="main-nav" className={`site-nav ${open ? "open" : ""}`} aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Get a Quote <span>→</span></a>
        </nav>
      </div>
    </header>
  );
}
