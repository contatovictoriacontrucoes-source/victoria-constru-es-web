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

export type ProjectStatus = "concluido" | "andamento" | "estudo";

export type Project = {
  id: string;
  neighborhood: string;
  title: string;
  area: string;
  description: string;
  image?: string;
  status: ProjectStatus;
};

export const projectFilters: { value: ProjectStatus | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "concluido", label: "Projetos concluídos" },
  { value: "andamento", label: "Projetos em andamento" },
  { value: "estudo", label: "Projetos em estudo" },
];

export const projects: Project[] = [
  {
    id: "nhandeara",
    neighborhood: "Vila Carrão",
    title: "Rua Nhandeara, 34",
    area: "800 m²",
    description:
      "Empreendimento residencial na Vila Carrão, com fachada contemporânea e amplo acesso à garagem.",
    image: proj04.url,
    status: "concluido",
  },
  {
    id: "pinguins",
    neighborhood: "Vila Carrão",
    title: "Rua Pinguins",
    area: "700 m²",
    description:
      "Prédio residencial com linguagem contemporânea e atenção aos detalhes de fachada.",
    image: proj06.url,
    status: "concluido",
  },
  {
    id: "carlitos",
    neighborhood: "Vila Formosa",
    title: "Rua Carlitos",
    area: "1.800 m²",
    description:
      "Empreendimento residencial e comercial, com diferentes soluções de uso e acabamento.",
    image: proj08.url,
    status: "concluido",
  },
  {
    id: "canto-do-sabia",
    neighborhood: "Itaquera",
    title: "Rua Canto do Sabiá",
    area: "700 m²",
    description:
      "Conjunto residencial com integração entre acesso, garagem e áreas de uso cotidiano.",
    image: proj10.url,
    status: "concluido",
  },
  {
    id: "bruna",
    neighborhood: "Tatuapé",
    title: "Rua Bruna",
    area: "1.400 m²",
    description:
      "Empreendimento com áreas residenciais e comerciais, valorizando funcionalidade e fachada.",
    image: proj12.url,
    status: "concluido",
  },
  {
    id: "henrique-churing",
    neighborhood: "Itaquera",
    title: "Rua Henrique Churing",
    area: "500 m²",
    description:
      "Projeto residencial com composição de fachadas e soluções de aproveitamento do lote.",
    image: proj14.url,
    status: "concluido",
  },
  {
    id: "jose-barbosa",
    neighborhood: "Cambui - MG",
    title: "Avenida Prefeito José Barbosa",
    area: "1.000 m²",
    description:
      "Empreendimento com uso residencial e comercial, inserido na paisagem urbana local.",
    image: proj16.url,
    status: "concluido",
  },
  {
    id: "joaquim-marra",
    neighborhood: "Vila Matilde",
    title: "Rua Joaquim Marra",
    area: "600 m²",
    description:
      "Projeto residencial integrado ao bairro, com foco em aproveitamento e funcionalidade.",
    image: proj18.url,
    status: "concluido",
  },
  {
    id: "juca-mendes",
    neighborhood: "Vila Carrão",
    title: "Rua Juca Mendes",
    area: "600 m²",
    description: "Residências com proposta contemporânea e organização eficiente dos espaços.",
    image: proj20.url,
    status: "concluido",
  },
  {
    id: "janita",
    neighborhood: "Itaquera",
    title: "Rua Janita",
    area: "500 m²",
    description:
      "Projeto residencial desenvolvido com atenção ao uso dos espaços e à qualidade construtiva.",
    image: proj22.url,
    status: "concluido",
  },
  {
    id: "brigida-vasconcelos",
    neighborhood: "Itaquera",
    title: "Brígida Vasconcelos",
    area: "960 m²",
    description:
      "Empreendimento apresentado no portfólio da Victoria Construções, com destaque para sua fachada.",
    image: proj24.url,
    status: "concluido",
  },
];
