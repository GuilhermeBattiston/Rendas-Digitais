import type { Product } from "./domain";
export const brand = {
  name: "Mhay",
  fullName: "Mhay Pastelaria e Lanchonete",
  storageKey: "mhay-demo-cart-v1",
  address: "Av. Sete de Setembro, 3460 · Loja 01",
  contact: "(41) 99817-7519",
  contactStatus:
    "Encontrado em listagem pública; atividade e WhatsApp não confirmados.",
  verifiedWhatsapp: null as string | null,
};
const savoryExtras = [
  { id: "queijo", name: "Queijo extra", price: 350 },
  { id: "requeijao", name: "Requeijão", price: 300 },
];
const size = [
  { id: "tradicional", name: "Tradicional", price: 0 },
  { id: "grande", name: "Grande", price: 500 },
];
export const products: Product[] = [
  {
    id: "pastel-queijo",
    name: "Pastel de queijo",
    description:
      "Massa fina e crocante, com recheio de queijo derretido. Um clássico para montar do seu jeito.",
    category: "Pastéis",
    price: 1200,
    image: "pastel.webp",
    tag: "Para começar",
    choices: size,
    extras: savoryExtras,
  },
  {
    id: "pastel-carne",
    name: "Pastel de carne",
    description:
      "Recheio de carne temperada, azeitona e aquele contraste de massa crocante.",
    category: "Pastéis",
    price: 1400,
    image: "pastel.webp",
    choices: size,
    extras: savoryExtras,
  },
  {
    id: "pastel-frango",
    name: "Pastel de frango cremoso",
    description: "Frango desfiado e requeijão em uma combinação cremosa.",
    category: "Pastéis",
    price: 1600,
    image: "pastel.webp",
    choices: size,
    extras: savoryExtras,
  },
  {
    id: "pastel-palmito",
    name: "Pastel de palmito",
    description:
      "Palmito e tomate em um recheio delicado, envolvido em massa dourada.",
    category: "Pastéis",
    price: 1500,
    image: "pastel.webp",
    choices: size,
  },
  {
    id: "coxinha",
    image: "salgados.webp",
    name: "Coxinha de frango",
    description: "Casquinha dourada e recheio de frango desfiado.",
    category: "Salgados",
    price: 850,
    extras: savoryExtras,
  },
  {
    id: "pao-queijo",
    image: "pao-queijo.webp",
    name: "Pão de queijo",
    description: "Uma pausa com queijo, casquinha leve e miolo macio.",
    category: "Da padaria",
    price: 650,
  },
  {
    id: "misto",
    name: "Misto na chapa",
    description: "Pão, queijo e presunto, tostados na chapa.",
    category: "Lanches",
    price: 1400,
    image: "sanduiche.webp",
    extras: savoryExtras,
  },
  {
    id: "prato",
    image: "refeicao.webp",
    name: "Prato da casa",
    description:
      "Exemplo de refeição com arroz, feijão, salada e proteína à escolha.",
    category: "Refeições",
    price: 2900,
    choices: [
      { id: "frango", name: "Frango grelhado", price: 0 },
      { id: "omelete", name: "Omelete", price: 0 },
    ],
  },
  {
    id: "pastel-banana",
    name: "Pastel de banana e canela",
    description: "Banana com canela em uma versão doce e crocante.",
    category: "Doces",
    price: 1300,
    image: "pastel.webp",
  },
  {
    id: "bolo",
    name: "Fatia de bolo de chocolate",
    description: "Bolo de chocolate com cobertura cremosa.",
    category: "Doces",
    price: 1000,
    image: "bolo.webp",
  },
  {
    id: "cafe",
    name: "Café com leite",
    description: "Café com leite para acompanhar sua pausa.",
    category: "Bebidas",
    price: 550,
    image: "cafe.webp",
    choices: [
      { id: "pequeno", name: "Pequeno · 100 ml", price: 0 },
      { id: "medio", name: "Médio · 180 ml", price: 200 },
    ],
  },
  {
    id: "suco",
    name: "Suco de laranja",
    description:
      "Uma opção cítrica para acompanhar o lanche. Copo ilustrativo de 300 ml.",
    category: "Bebidas",
    price: 1000,
    image: "suco.webp",
  },
];
export const categories = [
  "Todos",
  "Pastéis",
  "Salgados",
  "Da padaria",
  "Lanches",
  "Refeições",
  "Doces",
  "Bebidas",
];
