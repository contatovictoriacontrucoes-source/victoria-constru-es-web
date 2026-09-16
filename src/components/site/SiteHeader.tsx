import { useState } from "react";
import logo from "@/assets/victoria-logo.png.asset.json";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#missao-valores", label: "Visão & Valores" },
  { href: "#projetos", label: "Projetos" },
  { href: "#projetos-andamento", label: "Em andamento" },
  { href: "#projetos-estudo", label: "Em estudo" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#fundadores", label: "Fundadores" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-cream/95 backdrop-blur">
      <div className="mx-auto flex min-h-[78px] w-[92%] max-w-[1160px] items-center justify-between gap-6">
        <a href="#inicio" aria-label="Victoria Construções" className="flex items-center">
          <img
            src={logo.url}
            alt="Victoria Construções"
            className="h-14 w-[170px] object-contain object-left"
          />
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-brand-dark lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative py-2 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-sand after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Abrir menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md border border-border text-brand-dark lg:hidden"
        >
          <span className="block h-[2px] w-5 bg-current" />
          <span className="block h-[2px] w-5 bg-current" />
          <span className="block h-[2px] w-5 bg-current" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-cream lg:hidden">
          <ul className="mx-auto w-[92%] max-w-[1160px] py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border py-3 text-sm font-semibold text-brand-dark last:border-b-0"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
