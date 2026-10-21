import type {Product} from './domain.ts';
export const brand={
  "name": "Da Mi",
  "fullName": "Pastelaria e Lanchonete da Mi",
  "storageKey": "pastelaria-da-mi-prototipo-cart-v1",
  "address": "Curitiba · PR — endereço operacional a confirmar",
  "contact": "(41) 99693-6162",
  "contactStatus": "Contato da prospecção, não confirmado como canal oficial. Envio desativado.",
  "verifiedWhatsapp": null,
  "source": "https://cnpj.biz/51830471000168",
  "researchNote": "Uma base cadastral cita Loja Pastelaria e Lanchonete da Mi na Estrada do Ganchinho, 4234. É uma pista de identificação, sem confirmação operacional ou ligação com o telefone fornecido."
};
export const categories=["Todos","Pastéis","Pausa salgada","Doces","Bebidas"];
export const products:Product[]=[
  {
    "id": "frango",
    "name": "Pastel de frango cremoso",
    "description": "Frango desfiado com requeijão. Uma receita para experimentar.",
    "category": "Pastéis",
    "price": 1600,
    "image": "mi-pasteis.webp",
    "choices": [
      {
        "id": "tradicional",
        "name": "Tradicional",
        "price": 0
      },
      {
        "id": "grande",
        "name": "Grande",
        "price": 500
      }
    ],
    "extras": [
      {
        "id": "queijo",
        "name": "Queijo extra",
        "price": 350
      },
      {
        "id": "requeijao",
        "name": "Requeijão",
        "price": 300
      }
    ],
    "tag": "Comece por aqui"
  },
  {
    "id": "queijo",
    "name": "Pastel de queijo",
    "description": "Massa crocante com queijo derretido.",
    "category": "Pastéis",
    "price": 1300,
    "image": "mi-pasteis.webp",
    "choices": [
      {
        "id": "tradicional",
        "name": "Tradicional",
        "price": 0
      },
      {
        "id": "grande",
        "name": "Grande",
        "price": 500
      }
    ],
    "extras": [
      {
        "id": "queijo",
        "name": "Queijo extra",
        "price": 350
      },
      {
        "id": "requeijao",
        "name": "Requeijão",
        "price": 300
      }
    ]
  },
  {
    "id": "carne",
    "name": "Pastel de carne",
    "description": "Carne temperada com azeitona.",
    "category": "Pastéis",
    "price": 1500,
    "image": "mi-pasteis.webp",
    "choices": [
      {
        "id": "tradicional",
        "name": "Tradicional",
        "price": 0
      },
      {
        "id": "grande",
        "name": "Grande",
        "price": 500
      }
    ],
    "extras": [
      {
        "id": "queijo",
        "name": "Queijo extra",
        "price": 350
      },
      {
        "id": "requeijao",
        "name": "Requeijão",
        "price": 300
      }
    ]
  },
  {
    "id": "palmito",
    "name": "Pastel de palmito",
    "description": "Palmito cremoso em uma montagem ilustrativa.",
    "category": "Pastéis",
    "price": 1700,
    "image": "mi-pasteis.webp",
    "choices": [
      {
        "id": "tradicional",
        "name": "Tradicional",
        "price": 0
      },
      {
        "id": "grande",
        "name": "Grande",
        "price": 500
      }
    ],
    "extras": [
      {
        "id": "queijo",
        "name": "Queijo extra",
        "price": 350
      },
      {
        "id": "requeijao",
        "name": "Requeijão",
        "price": 300
      }
    ]
  },
  {
    "id": "misto",
    "name": "Misto quentinho",
    "description": "Pão tostado, queijo e presunto.",
    "category": "Pausa salgada",
    "price": 1400,
    "image": "salgado.webp"
  },
  {
    "id": "pao-queijo",
    "name": "Pão de queijo",
    "description": "Porção ilustrativa de três unidades pequenas.",
    "category": "Pausa salgada",
    "price": 900,
    "image": "mi-pausa.webp"
  },
  {
    "id": "sanduiche",
    "name": "Sanduíche de queijo e tomate",
    "description": "Pão tostado com queijo, tomate e orégano.",
    "category": "Pausa salgada",
    "price": 1600,
    "image": "salgado.webp",
    "extras": [
      {
        "id": "queijo",
        "name": "Queijo extra",
        "price": 350
      },
      {
        "id": "requeijao",
        "name": "Requeijão",
        "price": 300
      }
    ]
  },
  {
    "id": "bolo",
    "name": "Bolo de cenoura",
    "description": "Fatia de bolo de cenoura com cobertura de chocolate.",
    "category": "Doces",
    "price": 1100,
    "image": "mi-pausa.webp"
  },
  {
    "id": "banana",
    "name": "Pastel doce de banana",
    "description": "Banana e canela em uma massa crocante.",
    "category": "Doces",
    "price": 1400,
    "image": "doce.webp",
    "choices": [
      {
        "id": "tradicional",
        "name": "Tradicional",
        "price": 0
      },
      {
        "id": "grande",
        "name": "Grande",
        "price": 500
      }
    ]
  },
  {
    "id": "cafe-leite",
    "name": "Café com leite",
    "description": "Café e leite em xícara ilustrativa de 180 ml.",
    "category": "Bebidas",
    "price": 850,
    "image": "bebida.webp"
  },
  {
    "id": "cafe",
    "name": "Café passado",
    "description": "Uma xícara ilustrativa de café de 100 ml.",
    "category": "Bebidas",
    "price": 600,
    "image": "bebida.webp"
  },
  {
    "id": "suco",
    "name": "Suco de laranja",
    "description": "Copo ilustrativo de 300 ml.",
    "category": "Bebidas",
    "price": 1000,
    "image": undefined
  }
];
