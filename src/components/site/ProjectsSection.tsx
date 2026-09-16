import { useState } from "react";
import { projects, projectFilters, type Project, type ProjectStatus } from "@/data/projects";

type Filter = ProjectStatus | "todos";

const groupTitles: Record<ProjectStatus, string> = {
  andamento: "Novos projetos",
  concluido: "Projetos realizados",
  estudo: "Projetos em análise",
};

const emptyMessages: Record<ProjectStatus, string> = {
  concluido: "Nenhum empreendimento realizado cadastrado no momento.",
  andamento: "As obras em andamento serão publicadas em breve, com as respectivas imagens.",
  estudo: "Em breve novos estudos e lançamentos. Espaço reservado para as imagens deste projeto.",
};

const order: ProjectStatus[] = ["andamento", "concluido", "estudo"];

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("todos");
  const [gallery, setGallery] = useState<{ project: Project; index: number } | null>(null);

  const openGallery = (project: Project, index: number) => setGallery({ project, index });
  const step = (delta: number) =>
    setGallery((g) =>
      g
        ? { project: g.project, index: (g.index + delta + g.project.images.length) % g.project.images.length }
        : g,
    );

  const groups = order.filter((s) => filter === "todos" || filter === s);

  const renderCard = (p: Project) => {
    const featured = p.highlights && p.highlights.length > 0;
    const cover = p.images[0];
    return (
      <article
        key={p.id}
        className={`overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-transform hover:-translate-y-1.5 hover:shadow-card ${
          featured ? "sm:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-2" : ""
        }`}
      >
        <div className={featured ? "bg-photo" : "h-[245px] bg-photo"}>
          {cover ? (
            <button
              type="button"
              onClick={() => openGallery(p, 0)}
              aria-label={`Ampliar imagens de ${p.title}`}
              className="block h-full w-full cursor-zoom-in"
            >
              <img
                src={cover}
                alt={`${p.title} — Victoria Construções`}
                loading="lazy"
                className={`w-full object-cover ${featured ? "h-[300px] lg:h-full" : "h-full"}`}
              />
            </button>
          ) : (
            <div className="flex h-full min-h-[245px] flex-col items-center justify-center border border-dashed border-brand/25 bg-gradient-to-br from-beige-2 to-cream text-brand">
              <span className="font-bold">Imagem em breve</span>
              <small className="mt-1 text-muted-foreground">Registro em preparação</small>
            </div>
          )}
        </div>

        <div className="p-6">
          {p.statusNote && (
            <span className="mb-3 inline-block rounded-full bg-brand px-3 py-1 text-[11px] font-bold uppercase tracking-[1px] text-primary-foreground">
              {p.statusNote}
            </span>
          )}
          <div className="mb-2 text-[11px] font-bold uppercase tracking-[1.5px] text-brand-soft">
            {p.neighborhood}
          </div>
          <h3 className="font-display text-[23px] font-medium text-brand-dark">{p.title}</h3>
          <div className="mb-2 text-sm font-bold text-sand">{p.area}</div>
          <p className="text-sm text-muted-foreground">{p.description}</p>

          {p.highlights && (
            <ul className="mt-4 space-y-2">
              {p.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-brand-dark">
                  <span className="text-sand">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          )}

          {p.images.length > 1 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {p.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => openGallery(p, i)}
                  aria-label={`Ver imagem ${i + 1} de ${p.title}`}
                  className="h-16 w-20 overflow-hidden rounded-lg border border-border"
                >
                  <img
                    src={src}
                    alt={`${p.title} — imagem ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  };

  return (
    <section id="projetos" className="scroll-mt-24 bg-beige py-20 md:py-24">
      <div className="mx-auto w-[92%] max-w-[1160px]">
        <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-4xl font-medium text-brand-dark">Nossos projetos</h2>
          <p className="max-w-[510px] text-muted-foreground">
            Empreendimentos organizados por etapa: novos projetos, realizados e em análise.
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

        <div className="space-y-14">
          {groups.map((status) => {
            const list = projects.filter((p) => p.status === status);
            return (
              <div
                key={status}
                id={status === "andamento" ? "projetos-andamento" : status === "estudo" ? "projetos-estudo" : undefined}
                className="scroll-mt-24"
              >
                <h3 className="mb-6 font-display text-[28px] font-medium text-brand-dark">
                  {groupTitles[status]}
                </h3>
                {list.length === 0 ? (
                  <div className="rounded-2xl border border-dashed border-brand/25 bg-cream p-12 text-center">
                    <p className="font-display text-2xl font-medium text-brand-dark">Em breve</p>
                    <p className="mt-2 text-muted-foreground">{emptyMessages[status]}</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {list.map(renderCard)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {gallery && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-dark/90 p-6"
          onClick={() => setGallery(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Fechar"
            onClick={() => setGallery(null)}
            className="absolute right-6 top-3 text-4xl text-cream"
          >
            ×
          </button>

          {gallery.project.images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Imagem anterior"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                className="absolute left-4 rounded-full border border-cream/30 px-4 py-2 text-2xl text-cream"
              >
                ‹
              </button>
              <button
                type="button"
                aria-label="Próxima imagem"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                className="absolute right-4 rounded-full border border-cream/30 px-4 py-2 text-2xl text-cream"
              >
                ›
              </button>
            </>
          )}

          <figure className="text-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={gallery.project.images[gallery.index]}
              alt={`${gallery.project.title} — imagem ${gallery.index + 1}`}
              className="max-h-[80vh] max-w-[90vw] rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-sm text-cream/80">
              {gallery.project.title} — {gallery.index + 1}/{gallery.project.images.length}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
