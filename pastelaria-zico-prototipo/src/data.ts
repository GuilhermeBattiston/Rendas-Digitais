import type {Product} from './domain.ts';
export const brand={
  "name": "Zico",
  "fullName": "Pastelaria & Lanchonete do Zico",
  "storageKey": "pastelaria-zico-prototipo-cart-v1",
  "address": "Curitiba · PR — endereço operacional a confirmar",
  "contact": "(41) 99781-8410",
  "contactStatus": "Contato da prospecção, não confirmado como canal oficial. Envio desativado.",
  "verifiedWhatsapp": null,
  "source": "https://www.tripadvisor.com.br/Restaurant_Review-g303441-d8222081-Reviews-Lanchonete_E_Pastelaria_Do_Zico-Curitiba_State_of_Parana.html",
  "researchNote": "Uma listagem pública identifica Lanchonete e Pastelaria do Zico na Rua Mateus Leme, 2655, e outro telefone. A correspondência com o contato da prospecção e os dados atuais precisam de confirmação."
};
export const categories=["Todos","Pastéis salgados","Pastéis doces","Lanches","Bebidas"];
export const products:Product[]=[
  {
    "id": "queijo",
    "name": "Pastel de queijo",
    "description": "Queijo derretido em massa fina. Receita demonstrativa.",
    "category": "Pastéis salgados",
    "price": 1200,
    "image": "zico-pasteis.webp",
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
    "tag": "Explore o clássico"
  },
  {
    "id": "carne",
    "name": "Pastel de carne",
    "description": "Carne temperada e azeitona. Montagem ilustrativa.",
    "category": "Pastéis salgados",
    "price": 1400,
    "image": "zico-pasteis.webp",
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
    "id": "carne-ovo",
    "name": "Pastel de carne e ovo",
    "description": "Carne, ovo e azeitona em uma sugestão de recheio.",
    "category": "Pastéis salgados",
    "price": 1600,
    "image": "zico-pasteis.webp",
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
    "name": "Pastel de frango",
    "description": "Frango desfiado e requeijão. Receita de demonstração.",
    "category": "Pastéis salgados",
    "price": 1600,
    "image": "zico-pasteis.webp",
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
    "description": "Palmito cremoso para variar a escolha.",
    "category": "Pastéis salgados",
    "price": 1700,
    "image": "zico-pasteis.webp",
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
    "id": "banana",
    "name": "Pastel de banana",
    "description": "Banana, açúcar e canela. Sugestão doce fictícia.",
    "category": "Pastéis doces",
    "price": 1300,
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
    "id": "chocolate",
    "name": "Pastel de chocolate",
    "description": "Chocolate em uma massa crocante. Receita ilustrativa.",
    "category": "Pastéis doces",
    "price": 1500,
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
    "id": "misto",
    "name": "Misto na chapa",
    "description": "Pão, queijo e presunto tostados.",
    "category": "Lanches",
    "price": 1400,
    "image": "zico-pausa.webp"
  },
  {
    "id": "sanduiche",
    "name": "Sanduíche com ovo",
    "description": "Pão tostado, queijo, ovo e tomate.",
    "category": "Lanches",
    "price": 1800,
    "image": "zico-pausa.webp",
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
    "id": "cafe",
    "name": "Café passado",
    "description": "Café em xícara ilustrativa de 100 ml.",
    "category": "Bebidas",
    "price": 650,
    "image": "bebida.webp"
  },
  {
    "id": "suco",
    "name": "Suco de laranja",
    "description": "Copo ilustrativo de 300 ml.",
    "category": "Bebidas",
    "price": 1000,
    "image": undefined
  },
  {
    "id": "cafe-leite",
    "name": "Café com leite",
    "description": "Café com leite em xícara ilustrativa.",
    "category": "Bebidas",
    "price": 850,
    "image": "bebida.webp"
  }
];
