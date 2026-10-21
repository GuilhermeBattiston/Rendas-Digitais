import { test } from "node:test";
import assert from "node:assert/strict";
import {
  money,
  normalize,
  unitPrice,
  total,
  readCart,
  orderMessage,
  type Product,
  type CartItem,
} from "../src/domain.ts";
const p: Product = {
  id: "p",
  name: "Pastel",
  description: "Teste",
  category: "Teste",
  price: 1200,
  choices: [{ id: "g", name: "Grande", price: 500 }],
  extras: [{ id: "q", name: "Queijo", price: 350 }],
};
const i: CartItem = {
  key: "item",
  productId: "p",
  quantity: 2,
  choice: "g",
  extras: ["q"],
  notes: "Sem azeitona",
};
test("preço unitário e total usam centavos inteiros", () => {
  assert.equal(unitPrice(p, i), 2050);
  assert.equal(total([i], [p]), 4100);
  assert.equal(total([{ ...i, quantity: 3 }], [p]), 6150);
  assert.equal(total([], [p]), 0);
});
test("formato brasileiro e busca sem acentos", () => {
  assert.match(money(12345), /123,45/);
  assert.equal(normalize("  PÃO de Queijo "), "pao de queijo");
});
test("carrinho versionado recupera as escolhas e observações", () => {
  assert.deepEqual(readCart(JSON.stringify({ version: 1, items: [i] }), [p]), [
    i,
  ]);
  assert.deepEqual(readCart(null, [p]), []);
});
test("dados obsoletos, quantidades inválidas e adicionais desconhecidos são descartados", () => {
  const invalid = [
    { ...i, productId: "inexistente" },
    { ...i, quantity: 0 },
    { ...i, quantity: 100 },
    { ...i, quantity: 1.5 },
    { ...i, choice: "invalida" },
    { ...i, extras: ["q", "q"] },
    { ...i, extras: ["xxx"] },
    { ...i, notes: "a".repeat(301) },
  ];
  assert.deepEqual(
    readCart(JSON.stringify({ version: 1, items: invalid }), [p]),
    [],
  );
});
test("JSON corrompido ou versão desconhecida é detectado", () => {
  assert.throws(() => readCart("{", [p]));
  assert.throws(() => readCart(JSON.stringify({ version: 2, items: [] }), [p]));
});
test("mensagem inclui marcação de simulação, extras, notas e total", () => {
  const message = orderMessage(
    "Marca",
    [i],
    [p],
    " Cliente de teste ",
    "Entrega",
    "Rua fictícia",
  );
  assert.match(message, /SIMULAÇÃO — NÃO É UM PEDIDO REAL/);
  assert.match(message, /2× Pastel \(Grande, Queijo\)/);
  assert.match(message, /41,00/);
  assert.match(message, /Sem azeitona/);
  assert.match(message, /cobertura e taxa não confirmadas/);
  assert.match(message, /Nome de teste: Cliente de teste/);
});
test("retirada não inclui endereço de entrega", () => {
  const message = orderMessage(
    "Marca",
    [i],
    [p],
    "Teste",
    "Retirada",
    "Não expor",
  );
  assert.doesNotMatch(message, /Não expor/);
});
