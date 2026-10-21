import type {Product} from './domain.ts';
export const brand={
  "name": "Modelo",
  "fullName": "Pastelaria Modelo",
  "storageKey": "pastelaria-modelo-prototipo-cart-v1",
  "address": "Curitiba · PR — endereço operacional a confirmar",
  "contact": "(41) 99874-7656",
  "contactStatus": "Contato da prospecção, não confirmado como canal oficial. Envio desativado.",
  "verifiedWhatsapp": null,
  "source": "https://www.locaisdobrasil.com.br/encontre/pastelarias/curitiba-pr?pagina=6",
  "researchNote": "Diretórios públicos listam uma Pastelaria Modelo na Rua Pedro Zagonel, 333, em Curitiba. Não foi confirmado vínculo entre a listagem e o telefone da prospecção, nem um catálogo oficial atualizado."
};
export const categories=["Todos","Clássicos","Especiais","Doces","Para acompanhar"];
export const products:Product[]=[
  {
    "id": "queijo",
    "name": "Queijo",
    "description": "Queijo derretido, massa fina e uma escolha simples.",
    "category": "Clássicos",
    "price": 1300,
    "image": "modelo-pasteis.webp",
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
    "tag": "Primeira escolha"
  },
  {
    "id": "carne",
    "name": "Carne",
    "description": "Carne temperada e azeitona em recheio ilustrativo.",
    "category": "Clássicos",
    "price": 1500,
    "image": "modelo-pasteis.webp",
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
    "id": "pizza",
    "name": "Pizza",
    "description": "Queijo, tomate e orégano. Receita demonstrativa.",
    "category": "Clássicos",
    "price": 1500,
    "image": "modelo-pasteis.webp",
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
    "id": "frango",
    "name": "Frango cremoso",
    "description": "Frango desfiado com requeijão.",
    "category": "Especiais",
    "price": 1800,
    "image": "modelo-pasteis.webp",
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
    "name": "Palmito e queijo",
    "description": "Palmito cremoso e queijo, em combinação fictícia.",
    "category": "Especiais",
    "price": 1900,
    "image": "modelo-pasteis.webp",
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
    "id": "brocolis",
    "name": "Brócolis e queijo",
    "description": "Brócolis, queijo e um toque de alho.",
    "category": "Especiais",
    "price": 1800,
    "image": "modelo-pasteis.webp",
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
    "id": "chocolate",
    "name": "Chocolate e banana",
    "description": "Chocolate derretido, banana e canela.",
    "category": "Doces",
    "price": 1700,
    "image": "modelo-doces.webp",
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
    "id": "banana",
    "name": "Banana e canela",
    "description": "Banana com açúcar e canela. Sugestão doce.",
    "category": "Doces",
    "price": 1400,
    "image": "modelo-doces.webp",
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
    "id": "goiabada",
    "name": "Goiabada e queijo",
    "description": "Goiabada e queijo em um pastel ilustrativo.",
    "category": "Doces",
    "price": 1600,
    "image": "modelo-doces.webp",
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
    "id": "suco",
    "name": "Suco de laranja",
    "description": "Copo ilustrativo de 300 ml.",
    "category": "Para acompanhar",
    "price": 1100,
    "image": "bebida.webp"
  },
  {
    "id": "cafe",
    "name": "Café",
    "description": "Xícara ilustrativa de 100 ml.",
    "category": "Para acompanhar",
    "price": 700,
    "image": undefined
  },
  {
    "id": "agua",
    "name": "Água",
    "description": "Garrafa ilustrativa de 500 ml.",
    "category": "Para acompanhar",
    "price": 500,
    "image": undefined
  }
];
