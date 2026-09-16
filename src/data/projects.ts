import proj04 from "@/assets/proj04.jpg.asset.json";
import proj06 from "@/assets/proj06.jpg.asset.json";
import proj08 from "@/assets/proj08.jpg.asset.json";
import proj10 from "@/assets/proj10.jpg.asset.json";
import proj12 from "@/assets/proj12.jpg.asset.json";
import proj14 from "@/assets/proj14.jpg.asset.json";
import proj16 from "@/assets/proj16.jpg.asset.json";
import proj18 from "@/assets/proj18.jpg.asset.json";
import proj20 from "@/assets/proj20.jpg.asset.json";
import proj22 from "@/assets/proj22.jpg.asset.json";
import proj24 from "@/assets/proj24.jpg.asset.json";
import fernandes1 from "@/assets/fernandes-1.jpg.asset.json";
import fernandes2 from "@/assets/fernandes-2.jpg.asset.json";
import fernandes3 from "@/assets/fernandes-3.jpg.asset.json";
import fernandes5 from "@/assets/fernandes-5.jpg.asset.json";

export type ProjectStatus = "concluido" | "andamento" | "estudo";

export type Project = {
  id: string;
  neighborhood: string;
  title: string;
  area: string;
  description: string;
  images: string[];
  status: ProjectStatus;
  statusNote?: string;
  highlights?: string[];
};

export const projectFilters: { value: ProjectStatus | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "concluido", label: "Projetos concluídos" },
  { value: "andamento", label: "Projetos em andamento" },
  { value: "estudo", label: "Projetos em estudo" },
];

export const projects: Project[] = [
  {
    id: "fernandes-portalegre",
    neighborhood: "Jardim Maringá — Zona Leste, São Paulo",
    title: "Residencial Fernandes Portalegre",
    area: "1.088 m²",
    description:
      "Rua Fernandes Portalegre, 511. Construção horizontal no Jardim Maringá, unindo a tranquilidade do bairro residencial à infraestrutura da Vila Carrão e da Vila Matilde.",
    images: [fernandes1.url, fernandes3.url, fernandes2.url, fernandes5.url],
    status: "andamento",
    statusNote: "Em andamento — Unidades à venda",
    highlights: [
      "2 dormitórios, com ou sem suíte e opção de sacada",
      "Duplex com 2 dormitórios",
      "Enquadrado no programa Minha Casa Minha Vida",
      "Construção horizontal com 1.088 m² de área construída",
    ],
  },
  {
    id: "nhandeara",
    neighborhood: "Vila Carrão",
    title: "Rua Nhandeara, 34",
    area: "800 m²",
    description:
      "Empreendimento residencial na Vila Carrão, com fachada contemporânea e amplo acesso à garagem.",
    images: [proj04.url],
    status: "concluido",
  },
  {
    id: "pinguins",
    neighborhood: "Vila Carrão",
    title: "Rua Pinguins",
    area: "700 m²",
    description:
      "Prédio residencial com linguagem contemporânea e atenção aos detalhes de fachada.",
    images: [proj06.url],
    status: "concluido",
  },
  {
    id: "carlitos",
    neighborhood: "Vila Formosa",
    title: "Rua Carlitos",
    area: "1.800 m²",
    description:
      "Empreendimento residencial e comercial, com diferentes soluções de uso e acabamento.",
    images: [proj08.url],
    status: "concluido",
  },
  {
    id: "canto-do-sabia",
    neighborhood: "Itaquera",
    title: "Rua Canto do Sabiá",
    area: "700 m²",
    description:
      "Conjunto residencial com integração entre acesso, garagem e áreas de uso cotidiano.",
    images: [proj10.url],
    status: "concluido",
  },
  {
    id: "bruna",
    neighborhood: "Tatuapé",
    title: "Rua Bruna",
    area: "1.400 m²",
    description:
      "Empreendimento com áreas residenciais e comerciais, valorizando funcionalidade e fachada.",
    images: [proj12.url],
    status: "concluido",
  },
  {
    id: "henrique-churing",
    neighborhood: "Itaquera",
    title: "Rua Henrique Churing",
    area: "500 m²",
    description:
      "Projeto residencial com composição de fachadas e soluções de aproveitamento do lote.",
    images: [proj14.url],
    status: "concluido",
  },
  {
    id: "jose-barbosa",
    neighborhood: "Cambui - MG",
    title: "Avenida Prefeito José Barbosa",
    area: "1.000 m²",
    description:
      "Empreendimento com uso residencial e comercial, inserido na paisagem urbana local.",
    images: [proj16.url],
    status: "concluido",
  },
  {
    id: "joaquim-marra",
    neighborhood: "Vila Matilde",
    title: "Rua Joaquim Marra",
    area: "600 m²",
    description:
      "Projeto residencial integrado ao bairro, com foco em aproveitamento e funcionalidade.",
    images: [proj18.url],
    status: "concluido",
  },
  {
    id: "juca-mendes",
    neighborhood: "Vila Carrão",
    title: "Rua Juca Mendes",
    area: "600 m²",
    description: "Residências com proposta contemporânea e organização eficiente dos espaços.",
    images: [proj20.url],
    status: "concluido",
  },
  {
    id: "janita",
    neighborhood: "Itaquera",
    title: "Rua Janita",
    area: "500 m²",
    description:
      "Projeto residencial desenvolvido com atenção ao uso dos espaços e à qualidade construtiva.",
    images: [proj22.url],
    status: "concluido",
  },
  {
    id: "brigida-vasconcelos",
    neighborhood: "Itaquera",
    title: "Brígida Vasconcelos",
    area: "960 m²",
    description:
      "Empreendimento apresentado no portfólio da Victoria Construções, com destaque para sua fachada.",
    images: [proj24.url],
    status: "concluido",
  },
];
