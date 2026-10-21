export type Option = { id: string; name: string; price: number };
export type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image?: string;
  tag?: string;
  moment?: string[];
  choices?: Option[];
  extras?: Option[];
};
export type CartItem = {
  key: string;
  productId: string;
  quantity: number;
  choice: string;
  extras: string[];
  notes: string;
};
export const money = (cents: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    cents / 100,
  );
export const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
export function unitPrice(
  product: Product,
  item: Pick<CartItem, "choice" | "extras">,
): number {
  return (
    product.price +
    (product.choices?.find((c) => c.id === item.choice)?.price ?? 0) +
    (product.extras
      ?.filter((e) => item.extras.includes(e.id))
      .reduce((sum, e) => sum + e.price, 0) ?? 0)
  );
}
export function total(items: CartItem[], products: Product[]): number {
  return items.reduce((sum, item) => {
    const p = products.find((p) => p.id === item.productId);
    return sum + (p ? unitPrice(p, item) * item.quantity : 0);
  }, 0);
}
export function readCart(raw: string | null, products: Product[]): CartItem[] {
  if (!raw) return [];
  const parsed: unknown = JSON.parse(raw);
  if (
    !parsed ||
    typeof parsed !== "object" ||
    !("version" in parsed) ||
    parsed.version !== 1 ||
    !("items" in parsed) ||
    !Array.isArray(parsed.items)
  )
    throw new Error("Formato de carrinho inválido");
  return parsed.items.slice(0, 100).filter((i): i is CartItem => {
    if (!i || typeof i !== "object") return false;
    const p = products.find((p) => p.id === i.productId);
    return (
      !!p &&
      typeof i.key === "string" &&
      i.key.length <= 100 &&
      Number.isInteger(i.quantity) &&
      i.quantity > 0 &&
      i.quantity <= 99 &&
      typeof i.choice === "string" &&
      (!p.choices?.length || p.choices.some((c) => c.id === i.choice)) &&
      Array.isArray(i.extras) &&
      i.extras.every(
        (e: unknown) =>
          typeof e === "string" && p.extras?.some((o) => o.id === e),
      ) &&
      new Set(i.extras).size === i.extras.length &&
      typeof i.notes === "string" &&
      i.notes.length <= 300
    );
  });
}
export function orderMessage(
  brand: string,
  items: CartItem[],
  products: Product[],
  name: string,
  mode: string,
  address: string,
): string {
  return [
    "SIMULAÇÃO — NÃO É UM PEDIDO REAL",
    brand,
    `Nome de teste: ${name.trim()}`,
    `Modalidade simulada: ${mode}`,
    ...(mode === "Entrega"
      ? [
          `Endereço de teste: ${address.trim()}`,
          "Entrega, cobertura e taxa não confirmadas.",
        ]
      : []),
    "",
    ...items.map((i) => {
      const p = products.find((p) => p.id === i.productId)!;
      const options = [
        p.choices?.find((c) => c.id === i.choice)?.name,
        ...(p.extras
          ?.filter((e) => i.extras.includes(e.id))
          .map((e) => e.name) ?? []),
      ]
        .filter(Boolean)
        .join(", ");
      return `${i.quantity}× ${p.name}${options ? ` (${options})` : ""} — ${money(unitPrice(p, i) * i.quantity)}${i.notes ? `\n  Obs.: ${i.notes}` : ""}`;
    }),
    "",
    `Subtotal ilustrativo: ${money(total(items, products))}`,
    "Produtos, preços, imagens e modalidades fictícios. Sem cobrança, reserva ou envio automático.",
  ].join("\n");
}
