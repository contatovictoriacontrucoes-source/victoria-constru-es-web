import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { ProjectsSection } from "@/components/site/ProjectsSection";
import { ContactForm } from "@/components/site/ContactForm";
import logo from "@/assets/victoria-logo.png.asset.json";

const title = "Victoria Construções | Portfólio de empreendimentos em São Paulo";
const description =
  "Há mais de 10 anos construindo sonhos: portfólio da Victoria Construções com empreendimentos concluídos, em andamento e em estudo.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "13+", label: "Anos de experiência" },
  { value: "11", label: "Empreendimentos" },
  { value: "9.300+", label: "m² construídos" },
  { value: "2011", label: "Início da trajetória" },
];

const values = [
  {
    title: "Fé e Integridade",
    text: "nossa base se apoia em princípios Cristãos e morais sólidos, guiando nossas ações com honestidade e propósito.",
  },
  {
    title: "Qualidade e Compromisso",
    text: "buscamos constantemente superar expectativas, garantindo segurança, durabilidade e satisfação em cada projeto.",
  },
  {
    title: "Sustentabilidade",
    text: "atuamos com responsabilidade ambiental e social, promovendo práticas construtivas que respeitam o planeta e as futuras gerações.",
  },
  {
    title: "Respeito à Diversidade",
    text: "valorizamos as diferenças e acreditamos que a diversidade enriquece nosso ambiente de trabalho e nossas relações.",
  },
  {
    title: "Valorização das Pessoas",
    text: "reconhecemos o papel essencial de nossos colaboradores, parceiros e clientes na construção de nossa história.",
  },
  {
    title: "Tradição e Credibilidade",
    text: "com postura conservadora e sólida, mantemos a confiança do mercado e de todos que acreditam em nosso trabalho.",
  },
];

const contactItems = [
  { label: "Localização", value: "São Paulo, SP — Brasil" },
  {
    label: "WhatsApp Comercial",
    value: "(11) 91349-4717",
    href: "https://wa.me/5511913494717",
  },
  {
    label: "WhatsApp Operacional",
    value: "(11) 98864-2865",
    href: "https://wa.me/5511988642865",
  },
  {
    label: "Email",
    value: "contato.victoriaconstrucoes1@gmail.com",
    href: "mailto:contato.victoriaconstrucoes1@gmail.com",
  },
  { label: "Horário", value: "Segunda a sexta: 8h às 18h" },
];

function Index() {
  return (
    <div className="min-h-screen bg-cream font-sans text-foreground">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section
          id="inicio"
          className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-beige to-cream py-16 md:py-24"
        >
          <div className="pointer-events-none absolute -right-40 -top-56 h-[440px] w-[440px] rounded-full border border-brand/15" />
          <div className="relative mx-auto grid w-[92%] max-w-[1160px] items-center gap-12 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <div className="mb-4 text-xs font-bold uppercase tracking-[3px] text-brand-soft">
                Victoria Construções Ltda.
              </div>
              <h1 className="mb-5 font-display text-5xl font-medium leading-[1.05] text-brand-dark md:text-[74px]">
                A mais de 10 anos
                <br />
                <span className="text-sand">construindo sonhos.</span>
              </h1>
              <p className="max-w-[630px] text-lg text-muted-foreground">
                Uma apresentação mais leve e contemporânea da nossa trajetória, dos empreendimentos
                realizados e do cuidado presente em cada projeto.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card/70 p-5 shadow-card">
              <img
                src={logo.url}
                alt="Victoria Construções Ltda."
                className="block h-[310px] w-full rounded-xl bg-card object-contain p-6"
              />
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="scroll-mt-24 bg-card py-20 md:py-24">
          <div className="mx-auto w-[92%] max-w-[1160px]">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="font-display text-4xl font-medium text-brand-dark">Sobre a empresa</h2>
              <p className="max-w-[510px] text-muted-foreground">
                História, experiência e uma visão voltada para a qualidade dos empreendimentos.
              </p>
            </div>
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
              <div>
                <h3 className="mb-3 text-[13px] uppercase tracking-[2px] text-brand-soft">
                  Construindo sonhos
                </h3>
                <h2 className="mb-5 font-display text-4xl font-medium text-brand-dark">
                  Uma história iniciada em 2011
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Iniciamos nossas atividades em 2011 com o primeiro empreendimento, uma casa que
                    se tornou o marco da realização de um sonho. Desde então, não paramos de crescer
                    e evoluir no mercado da construção civil.
                  </p>
                  <p>
                    Com uma trajetória de 13 anos no ramo, realizamos mais de 9.300m² em
                    empreendimentos residenciais e comerciais, consolidando nossa reputação como
                    construtora confiável e comprometida com a qualidade.
                  </p>
                  <p>
                    Nossa atuação se concentra nos bairros de São Paulo, onde desenvolvemos projetos
                    que transformam comunidades e oferecem qualidade de vida aos nossos clientes.
                  </p>
                </div>
                <div className="mt-7 grid grid-cols-2 gap-3.5">
                  {stats.map((s) => (
                    <div key={s.label} className="rounded-2xl border border-border bg-beige p-5">
                      <strong className="block text-3xl text-brand">{s.value}</strong>
                      <span className="text-[13px] text-muted-foreground">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid min-h-[380px] place-items-center rounded-3xl border border-border bg-beige p-9">
                <img
                  src={logo.url}
                  alt="Logo Victoria Construções"
                  className="max-h-[280px] w-[90%] max-w-[390px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Quem somos */}
        <section id="quem-somos" className="scroll-mt-24 bg-card py-20 md:py-24">
          <div className="mx-auto w-[92%] max-w-[1160px]">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="font-display text-4xl font-medium text-brand-dark">Quem somos</h2>
              <p className="max-w-[510px] text-muted-foreground">
                A identidade, a essência e a forma de atuação da Victoria Construções.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <article className="rounded-2xl border border-border bg-cream p-7 shadow-soft">
                <div className="mb-4 text-xs font-bold tracking-[2px] text-brand-soft">01</div>
                <h3 className="mb-3 font-display text-2xl font-medium text-brand-dark">
                  Quem somos
                </h3>
                <p className="text-muted-foreground">
                  Há mais de uma década, somos uma construtora e incorporadora comprometida em
                  transformar projetos em realidade com responsabilidade, qualidade e respeito.
                  Nossa trajetória é marcada por solidez, seriedade e fé, pilares que sustentam cada
                  empreendimento que realizamos. Atuamos com ética, transparência e foco em
                  resultados duradouros, sempre buscando entregar obras que unam funcionalidade,
                  conforto e sustentabilidade.
                </p>
              </article>
              <article className="rounded-2xl border border-border bg-cream p-7 shadow-soft">
                <div className="mb-4 text-xs font-bold tracking-[2px] text-brand-soft">02</div>
                <h3 className="mb-3 font-display text-2xl font-medium text-brand-dark">Visão</h3>
                <p className="text-muted-foreground">
                  Ser reconhecida como referência em construção e incorporação imobiliária pela
                  excelência técnica, cumprimento de compromissos e atuação responsável, sustentada
                  por princípios éticos, fé e respeito às pessoas e ao meio ambiente.
                </p>
              </article>
              <article className="rounded-2xl border border-border bg-cream p-7 shadow-soft">
                <div className="mb-4 text-xs font-bold tracking-[2px] text-brand-soft">03</div>
                <h3 className="mb-3 font-display text-2xl font-medium text-brand-dark">Valores</h3>
                <p className="text-muted-foreground">
                  Fé e Integridade · Qualidade e Compromisso · Sustentabilidade · Respeito à
                  Diversidade · Valorização das Pessoas · Tradição e Credibilidade.
                </p>
                <p className="mt-3">
                  <a href="#missao-valores" className="font-bold text-brand">
                    Ver todos os valores →
                  </a>
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Missão e valores */}
        <section
          id="missao-valores"
          className="scroll-mt-24 border-y border-border bg-beige py-20 md:py-24"
        >
          <div className="mx-auto w-[92%] max-w-[1160px]">
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[2px] text-brand-soft">
                  Nossa essência
                </span>
                <h2 className="mt-2 max-w-[700px] font-display text-[34px] font-medium text-brand-dark">
                  Construir com propósito, qualidade e confiança.
                </h2>
              </div>
              <p className="text-muted-foreground">
                Ser reconhecida como referência em construção e incorporação imobiliária pela
                excelência técnica, cumprimento de compromissos e atuação responsável, sustentada
                por princípios éticos, fé e respeito às pessoas e ao meio ambiente.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((v) => (
                <article key={v.title} className="rounded-2xl border border-border bg-cream p-6">
                  <h4 className="mb-2 font-display text-xl font-medium text-brand-dark">
                    {v.title}
                  </h4>
                  <p className="text-[15px] text-muted-foreground">{v.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <ProjectsSection />

        {/* Trajetória */}
        <section id="trajetoria" className="scroll-mt-24 bg-brand-dark py-20 md:py-24">
          <div className="mx-auto w-[92%] max-w-[1160px]">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="font-display text-4xl font-medium text-cream">Trajetória em números</h2>
              <p className="max-w-[510px] text-cream/75">
                Indicadores apresentados no material institucional utilizado como base do portfólio.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-cream/15 bg-cream/5 px-5 py-7"
                >
                  <strong className="block text-[38px] font-semibold text-gold">{s.value}</strong>
                  <span className="text-sm text-cream/75">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fundadores */}
        <section id="fundadores" className="scroll-mt-24 bg-card py-20 md:py-24">
          <div className="mx-auto w-[92%] max-w-[1160px]">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="font-display text-4xl font-medium text-brand-dark">
                Nossos fundadores
              </h2>
              <p className="max-w-[510px] text-muted-foreground">
                As pessoas que estão por trás da trajetória da Victoria Construções.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="rounded-2xl border border-border bg-cream p-7">
                <h3 className="mb-4 border-b border-border pb-3.5 font-display text-2xl font-medium text-brand-dark">
                  Mauricio Fernandes Eloy
                </h3>
                <p className="text-muted-foreground">
                  Formado em técnico em processamento de dados, contabilidade e administração com
                  ênfase em análise de sistemas. Teve desde sua formação o sonho de empreender.
                  Iniciou sua carreira no ramo do vestuário de 1994 à 2010, totalizando 16 anos no
                  mercado. Conseguiu capitalizar recursos e realizou seu sonho de construir. Também
                  possui experiência em imobiliária por 6 anos. Atualmente lidera a Victoria
                  Construções com profissionalismo e dedicação.
                </p>
              </article>
              <article className="rounded-2xl border border-border bg-cream p-7">
                <h3 className="mb-4 border-b border-border pb-3.5 font-display text-2xl font-medium text-brand-dark">
                  Teresa Matayoshi F. Eloy
                </h3>
                <p className="text-muted-foreground">
                  Co-fundadora e sócia estratégica da Victoria Construções. Trabalha ao lado de
                  Mauricio desde o início do empreendimento, contribuindo com expertise em gestão e
                  visão empresarial. Sua participação foi fundamental para a consolidação e
                  crescimento contínuo da empresa.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="scroll-mt-24 bg-beige py-20 md:py-24">
          <div className="mx-auto w-[92%] max-w-[1160px]">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="font-display text-4xl font-medium text-brand-dark">Fale conosco</h2>
              <p className="max-w-[510px] text-muted-foreground">
                Um espaço simples e direto para contato.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
              <div className="rounded-2xl border border-border bg-card p-7">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-border py-4 last:border-b-0 last:pb-0"
                  >
                    <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-brand-soft">
                      {item.label}
                    </div>
                    <div className="mt-1 text-brand-dark">
                      {item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold hover:text-brand"
                        >
                          {item.value}
                        </a>
                      ) : (
                        item.value
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-footer py-9 text-center text-[13px] text-cream/75">
        <div className="mx-auto w-[92%] max-w-[1160px]">
          <div className="mb-1 font-display text-xl text-cream">Victoria Construções Ltda.</div>
          <div>Construindo sonhos desde 2011</div>
          <div className="mt-3.5">
            © 2026 Victoria Construções. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
