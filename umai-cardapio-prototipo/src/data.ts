import type { Product } from "./domain";
export const brand = {
  name: "Umai",
  fullName: "Umai Café e Lanches",
  storageKey: "umai-demo-cart-v1",
  address: "Rua Dr. Pedrosa · Centro, Curitiba",
  contact: "(41) 99711-7000",
  contactStatus:
    "Número encontrado em fontes públicas; WhatsApp e autorização não confirmados. Há divergência entre os números 358 e 384 do endereço.",
  verifiedWhatsapp: null as string | null,
};
const extras = [
  { id: "queijo", name: "Queijo extra", price: 350 },
  { id: "ovo", name: "Ovo", price: 400 },
];
export const products: Product[] = [
  {
    id: "cappuccino",
    name: "Cappuccino cremoso",
    description:
      "Café e leite vaporizado, com espuma delicada. Uma pausa em forma de xícara.",
    category: "Cafés & quentes",
    price: 1200,
    image: "cappuccino.webp",
    tag: "Sua primeira pausa",
    moment: ["Café da manhã", "Pausa da tarde"],
    choices: [
      { id: "classico", name: "Clássico · 180 ml", price: 0 },
      { id: "generoso", name: "Generoso · 250 ml", price: 400 },
    ],
    extras: [
      { id: "canela", name: "Toque de canela", price: 0 },
      { id: "extra-shot", name: "Dose extra de café", price: 350 },
    ],
  },
  {
    id: "coado",
    name: "Café com leite",
    description:
      "Café com leite, sem pressa. Uma xícara para acompanhar seu momento.",
    category: "Cafés & quentes",
    price: 600,
    image: "cafe.webp",
    moment: ["Café da manhã", "Pausa da tarde"],
    choices: [
      { id: "pequeno", name: "Pequeno · 100 ml", price: 0 },
      { id: "grande", name: "Grande · 180 ml", price: 200 },
    ],
  },
  {
    id: "misto",
    name: "Misto de queijo & presunto",
    description:
      "Pão tostado, queijo derretido e presunto. O encontro que sempre combina.",
    category: "Sanduíches",
    price: 1600,
    image: "sanduiche.webp",
    moment: ["Café da manhã", "Pausa da tarde"],
    extras,
  },
  {
    id: "natural",
    name: "Sanduíche tostado de frango",
    description:
      "Pão tostado com frango e queijo. Um lanche para a pausa no dia.",
    category: "Sanduíches",
    price: 1900,
    image: "natural.webp",
    moment: ["Almoço", "Pausa da tarde"],
    extras,
  },
  {
    id: "pao-queijo",
    image: "pao-queijo.webp",
    name: "Pão de queijo",
    description: "Casquinha leve e miolo macio, bom parceiro de um café.",
    category: "Salgados & pastéis",
    price: 650,
    moment: ["Café da manhã", "Pausa da tarde"],
  },
  {
    id: "pastel",
    name: "Pastel de queijo",
    description:
      "Massa crocante com queijo. Um clássico brasileiro para a sua pausa.",
    category: "Salgados & pastéis",
    price: 1300,
    image: "pastel.webp",
    moment: ["Almoço", "Pausa da tarde"],
    choices: [
      { id: "tradicional", name: "Tradicional", price: 0 },
      { id: "grande", name: "Grande", price: 500 },
    ],
    extras,
  },
  {
    id: "coxinha",
    image: "salgados.webp",
    name: "Coxinha cremosa",
    description:
      "Recheio de frango e requeijão, envolvido em casquinha dourada.",
    category: "Salgados & pastéis",
    price: 950,
    moment: ["Almoço", "Pausa da tarde"],
  },
  {
    id: "omelete",
    image: "omelete.webp",
    name: "Omelete da pausa",
    description: "Ovos, tomate e ervas, com acompanhamento à escolha.",
    category: "Refeições",
    price: 2500,
    moment: ["Café da manhã", "Almoço"],
    choices: [
      { id: "salada", name: "Com salada", price: 0 },
      { id: "arroz", name: "Com arroz", price: 0 },
    ],
    extras,
  },
  {
    id: "prato",
    image: "refeicao.webp",
    name: "Prato do intervalo",
    description: "Arroz, feijão, salada e uma proteína para a pausa do almoço.",
    category: "Refeições",
    price: 3200,
    moment: ["Almoço"],
    choices: [
      { id: "frango", name: "Frango grelhado", price: 0 },
      { id: "omelete", name: "Omelete", price: 0 },
    ],
  },
  {
    id: "bolo",
    name: "Bolo de chocolate",
    description:
      "Uma fatia de bolo com cobertura de chocolate para adoçar a conversa.",
    category: "Doces",
    price: 1100,
    image: "bolo.webp",
    moment: ["Pausa da tarde"],
  },
  {
    id: "cookie",
    name: "Cookie de chocolate",
    description:
      "Bordas crocantes e pedaços de chocolate em uma pausa pequena.",
    category: "Doces",
    price: 950,
    image: "cookie.webp",
    moment: ["Pausa da tarde"],
  },
  {
    id: "suco",
    name: "Suco de laranja",
    description: "Copo ilustrativo de 300 ml para acompanhar o seu momento.",
    category: "Bebidas geladas",
    price: 1100,
    image: "suco.webp",
    moment: ["Café da manhã", "Almoço", "Pausa da tarde"],
  },
];
export const categories = [
  "Todos",
  "Cafés & quentes",
  "Sanduíches",
  "Salgados & pastéis",
  "Refeições",
  "Doces",
  "Bebidas geladas",
];
