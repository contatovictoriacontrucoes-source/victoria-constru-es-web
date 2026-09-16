import { useState } from "react";
import { projects, projectFilters, type ProjectStatus } from "@/data/projects";

type Filter = ProjectStatus | "todos";

const emptyMessages: Record<ProjectStatus, string> = {
  concluido: "Nenhum empreendimento concluído cadastrado no momento.",
  andamento: "As obras em andamento serão publicadas em breve, com as respectivas imagens.",
  estudo: "Os projetos em estudo serão publicados em breve, com as respectivas imagens.",
};

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("todos");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const visible = filter === "todos" ? projects : projects.filter((p) => p.status === filter);

  return (
    <section id="projetos" className="scroll-mt-24 bg-beige py-20 md:py-24">
      {/* Âncoras do menu para as categorias */}
      <span id="projetos-andamento" className="sr-only" />
      <span id="projetos-estudo" className="sr-only" />

      <div className="mx-auto w-[92%] max-w-[1160px]">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-4xl font-medium text-brand-dark">Nossos projetos</h2>
          <p className="max-w-[510px] text-muted-foreground">
            Empreendimentos organizados por etapa: concluídos, em andamento e em estudo.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Categorias de projetos">
          {projectFilters.map((f) => {
            const active = filter === f.value;
            const count =
              f.value === "todos"
                ? projects.length
                : projects.filter((p) => p.status === f.value).length;
            return (
              <button
                key={f.value}
                role="tab"
                aria-selected={active}
                type="button"
                onClick={() => setFilter(f.value)}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  active
                    ? "border-brand bg-brand text-primary-foreground"
                    : "border-border bg-card text-brand-dark hover:bg-beige-2"
                }`}
              >
                {f.label}
                <span className={active ? "ml-2 opacity-80" : "ml-2 text-muted-foreground"}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {visible.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-brand/25 bg-cream p-12 text-center">
            <p className="font-display text-2xl font-medium text-brand-dark">Em breve</p>
            <p className="mt-2 text-muted-foreground">
              {filter === "todos" ? "" : emptyMessages[filter]}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <article
                key={p.id}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1.5 hover:shadow-card"
              >
                <div className="h-[245px] bg-photo">
                  {p.image ? (
                    <button
                      type="button"
                      onClick={() => setLightbox({ src: p.image!, alt: p.title })}
                      aria-label={`Ampliar foto de ${p.title}`}
                      className="block h-full w-full cursor-zoom-in"
                    >
                      <img
                        src={p.image}
                        alt={`${p.title} — Victoria Construções`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center border border-dashed border-brand/25 bg-gradient-to-br from-beige-2 to-cream text-brand">
                      <span className="font-bold">Imagem em breve</span>
                      <small className="mt-1 text-muted-foreground">Registro em preparação</small>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="mb-2 text-[11px] font-bold uppercase tracking-[1.5px] text-brand-soft">
                    {p.neighborhood}
                  </div>
                  <h3 className="font-display text-[23px] font-medium text-brand-dark">{p.title}</h3>
                  <div className="mb-2 text-sm font-bold text-sand">{p.area}</div>
                  <p className="text-sm text-muted-foreground">{p.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/90 p-8"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-3 text-4xl text-cream"
          >
            ×
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[86vh] max-w-[92vw] rounded-xl object-contain"
          />
        </div>
      )}
    </section>
  );
}
