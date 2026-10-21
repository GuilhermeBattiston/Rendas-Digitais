import { useState, useEffect, useRef, type ReactNode } from "react";
import { products, brand } from "./data";
import {
  type CartItem,
  type Product,
  money,
  total,
  unitPrice,
  readCart,
  orderMessage,
} from "./domain";
export function Icon({
  name,
}: {
  name:
    | "bag"
    | "search"
    | "arrow"
    | "close"
    | "pin"
    | "plus"
    | "check"
    | "coffee";
}) {
  const paths = {
    bag: (
      <>
        <path d="M5 7h14l1 14H4L5 7Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    pin: (
      <>
        <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
        <circle cx="12" cy="10" r="2" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    check: <path d="m5 12 4 4L19 6" />,
    coffee: (
      <>
        <path d="M4 8h12v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Zm12 0h2a3 3 0 0 1 0 6h-2M7 2v3m6-3v3" />
      </>
    ),
  };
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
export function FoodImage({
  file,
  alt,
  className = "",
  eager = false,
}: {
  file?: string;
  alt: string;
  className?: string;
  eager?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  return file && !failed ? (
    <img
      className={className}
      src={`${import.meta.env.BASE_URL}images/${file}`}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      width="800"
      height="600"
      onError={() => setFailed(true)}
    />
  ) : (
    <div
      className={`image-fallback ${className}`}
      role="img"
      aria-label={`Imagem ilustrativa indisponível: ${alt}`}
    >
      <Icon name="coffee" />
      <span>Feito para imaginar</span>
    </div>
  );
}
export function Modal({
  title,
  children,
  onClose,
  wide = false,
}: {
  title: string;
  children: ReactNode;
  onClose: () => void;
  wide?: boolean;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const d = ref.current!;
    d.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      d.close();
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  return (
    <dialog
      ref={ref}
      className={wide ? "modal wide" : "modal"}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-label={title}
    >
      <div className="modal-head">
        <span className="eyebrow">{title}</span>
        <button
          type="button"
          className="icon-button"
          aria-label="Fechar janela"
          onClick={onClose}
        >
          <Icon name="close" />
        </button>
      </div>
      {children}
    </dialog>
  );
}
export function Quantity({
  value,
  onChange,
  name,
}: {
  value: number;
  onChange: (n: number) => void;
  name: string;
}) {
  return (
    <div className="quantity">
      <button
        type="button"
        aria-label={`Diminuir ${name}`}
        disabled={value <= 1}
        onClick={() => onChange(value - 1)}
      >
        −
      </button>
      <output aria-label={`Quantidade de ${name}`}>{value}</output>
      <button
        type="button"
        aria-label={`Aumentar ${name}`}
        disabled={value >= 99}
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  );
}
export function useShop() {
  const [storageError, setStorageError] = useState("");
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      return readCart(localStorage.getItem(brand.storageKey), products);
    } catch {
      return [];
    }
  });
  const [notice, setNotice] = useState("");
  const [selected, setSelected] = useState<{
    product: Product;
    item?: CartItem;
  } | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  useEffect(() => {
    try {
      const raw = localStorage.getItem(brand.storageKey);
      if (raw) readCart(raw, products);
    } catch {
      setStorageError(
        "O carrinho salvo não pôde ser recuperado. Você pode começar um novo pedido de teste.",
      );
    }
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(
        brand.storageKey,
        JSON.stringify({ version: 1, items }),
      );
    } catch {
      setStorageError(
        "O navegador não permitiu salvar o carrinho. Ele ficará disponível apenas nesta sessão.",
      );
    }
  }, [items]);
  useEffect(() => {
    if (!notice) return;
    const id = setTimeout(() => setNotice(""), 3500);
    return () => clearTimeout(id);
  }, [notice]);
  const save = (item: CartItem) => {
    setItems((list) => {
      const old = list.some((i) => i.key === item.key);
      return old
        ? list.map((i) => (i.key === item.key ? item : i))
        : [...list, item];
    });
    if (selected?.item) setCartOpen(true);
    setSelected(null);
    setNotice("Pronto! Sua sacola de teste foi atualizada.");
  };
  return {
    items,
    selected,
    setSelected,
    cartOpen,
    setCartOpen,
    save,
    storageError,
    dismissStorageError: () => setStorageError(""),
    notice,
    count: items.reduce((s, i) => s + i.quantity, 0),
    subtotal: total(items, products),
    change: (key: string, quantity: number) =>
      setItems((list) =>
        list.map((i) =>
          i.key === key
            ? { ...i, quantity: Math.max(1, Math.min(99, quantity)) }
            : i,
        ),
      ),
    remove: (key: string) => {
      setItems((list) => list.filter((i) => i.key !== key));
      setNotice("Item removido da sacola.");
    },
  };
}
export type Shop = ReturnType<typeof useShop>;
export function ProductEditor({
  product,
  item,
  onSave,
  onClose,
}: {
  product: Product;
  item?: CartItem;
  onSave: (item: CartItem) => void;
  onClose: () => void;
}) {
  const [quantity, setQuantity] = useState(item?.quantity ?? 1);
  const [choice, setChoice] = useState(item?.choice ?? "");
  const [extras, setExtras] = useState<string[]>(item?.extras ?? []);
  const [notes, setNotes] = useState(item?.notes ?? "");
  return (
    <Modal title={item ? "Editar item" : "Do seu jeito"} onClose={onClose}>
      <FoodImage
        file={product.image}
        alt={`${product.name} — imagem ilustrativa`}
        className="detail-image"
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave({
            key: item?.key ?? crypto.randomUUID(),
            productId: product.id,
            quantity,
            choice,
            extras,
            notes: notes.trim(),
          });
        }}
      >
        <div className="detail-copy">
          <span className="eyebrow">{product.category} · exemplo fictício</span>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <strong className="price">A partir de {money(product.price)}</strong>
          {product.choices?.length ? (
            <fieldset>
              <legend>
                Escolha uma opção <span>Obrigatório</span>
              </legend>
              {product.choices.map((c) => (
                <label className="option" key={c.id}>
                  <input
                    required
                    type="radio"
                    name="choice"
                    checked={choice === c.id}
                    value={c.id}
                    onChange={() => setChoice(c.id)}
                  />
                  <span>{c.name}</span>
                  <b>{c.price ? `+ ${money(c.price)}` : "Incluso"}</b>
                </label>
              ))}
            </fieldset>
          ) : null}
          {product.extras?.length ? (
            <fieldset>
              <legend>
                Algo a mais? <span>Opcional</span>
              </legend>
              {product.extras.map((x) => (
                <label className="option" key={x.id}>
                  <input
                    type="checkbox"
                    checked={extras.includes(x.id)}
                    onChange={(e) =>
                      setExtras((prev) =>
                        e.target.checked
                          ? [...prev, x.id]
                          : prev.filter((id) => id !== x.id),
                      )
                    }
                  />
                  <span>{x.name}</span>
                  <b>+ {money(x.price)}</b>
                </label>
              ))}
            </fieldset>
          ) : null}
          <label className="field">
            Observações <span>Opcional · até 300 caracteres</span>
            <textarea
              maxLength={300}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex.: sem azeitona. Use apenas dados de teste."
            />
          </label>
          <p className="small">
            Ingredientes e preparo precisam ser confirmados com o
            estabelecimento. Não use este protótipo para decisões sobre
            alergias.
          </p>
        </div>
        <div className="modal-bottom">
          <Quantity
            value={quantity}
            onChange={setQuantity}
            name={product.name}
          />
          <button className="primary" type="submit">
            {item ? "Salvar item" : "Adicionar"} ·{" "}
            {money(unitPrice(product, { choice, extras }) * quantity)}
          </button>
        </div>
      </form>
    </Modal>
  );
}
export function Cart({ shop }: { shop: Shop }) {
  const [step, setStep] = useState<"cart" | "checkout" | "review">("cart");
  const [name, setName] = useState("");
  const [mode, setMode] = useState("Retirada");
  const [address, setAddress] = useState("");
  const [copied, setCopied] = useState("");
  const [checkoutError, setCheckoutError] = useState("");
  const message = orderMessage(
    brand.fullName,
    shop.items,
    products,
    name,
    mode,
    address,
  );
  return (
    <Modal
      title="Sua sacola de teste"
      onClose={() => shop.setCartOpen(false)}
      wide
    >
      <div className="cart-content">
        <div className="steps">
          <span className={step === "cart" ? "active" : ""}>01 Sacola</span>
          <span className={step === "checkout" ? "active" : ""}>
            02 Dados de teste
          </span>
          <span className={step === "review" ? "active" : ""}>03 Revisão</span>
        </div>
        {!shop.items.length ? (
          <div className="empty">
            <Icon name="bag" />
            <h2>Sua pausa começa aqui.</h2>
            <p>
              Escolha algo no cardápio para experimentar a montagem de um
              pedido.
            </p>
            <button className="primary" onClick={() => shop.setCartOpen(false)}>
              Explorar cardápio <Icon name="arrow" />
            </button>
          </div>
        ) : step === "cart" ? (
          <>
            <h2>Uma boa escolha.</h2>
            <p className="muted">Revise os itens antes de continuar.</p>
            {shop.items.map((i) => {
              const p = products.find((p) => p.id === i.productId)!;
              return (
                <article className="cart-line" key={i.key}>
                  <FoodImage
                    file={p.image}
                    alt={`${p.name} — imagem ilustrativa`}
                  />
                  <div>
                    <h3>{p.name}</h3>
                    <p>
                      {[
                        p.choices?.find((c) => c.id === i.choice)?.name,
                        ...(p.extras
                          ?.filter((e) => i.extras.includes(e.id))
                          .map((e) => e.name) ?? []),
                      ]
                        .filter(Boolean)
                        .join(" · ")}
                    </p>
                    {i.notes ? <p className="notes">{i.notes}</p> : null}
                    <div className="item-actions">
                      <button
                        onClick={() => {
                          shop.setCartOpen(false);
                          shop.setSelected({ product: p, item: i });
                        }}
                      >
                        Editar
                      </button>
                      <button
                        aria-label={`Remover ${p.name}`}
                        onClick={() => shop.remove(i.key)}
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                  <div className="line-end">
                    <b>{money(unitPrice(p, i) * i.quantity)}</b>
                    <Quantity
                      value={i.quantity}
                      onChange={(n) => shop.change(i.key, n)}
                      name={p.name}
                    />
                  </div>
                </article>
              );
            })}
            <div className="subtotal">
              <span>Subtotal ilustrativo</span>
              <strong>{money(shop.subtotal)}</strong>
            </div>
            <p className="small">
              Sem taxas ou cobrança. Este protótipo não recebe pedidos.
            </p>
            <button
              className="primary full"
              onClick={() => setStep("checkout")}
            >
              Continuar simulação <Icon name="arrow" />
            </button>
          </>
        ) : step === "checkout" ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!name.trim() || (mode === "Entrega" && !address.trim())) {
                setCheckoutError(
                  "Preencha o nome e o endereço fictício sem usar apenas espaços.",
                );
                return;
              }
              setCheckoutError("");
              setStep("review");
            }}
          >
            <button
              type="button"
              className="text-button"
              onClick={() => setStep("cart")}
            >
              ← Voltar à sacola
            </button>
            <h2>Vamos testar o próximo passo?</h2>
            {checkoutError ? <p role="alert">{checkoutError}</p> : null}
            <p>
              Use informações fictícias. Os dados abaixo não são enviados nem
              salvos.
            </p>
            <label className="field">
              Nome de teste
              <input
                required
                autoComplete="off"
                maxLength={70}
                value={name}
                onChange={(e) => setName(e.target.value)}
                pattern=".*\S.*"
                placeholder="Ex.: Cliente de demonstração"
              />
            </label>
            <fieldset>
              <legend>Como seria seu pedido?</legend>
              {["Retirada", "Entrega"].map((m) => (
                <label className="option" key={m}>
                  <input
                    type="radio"
                    name="mode"
                    value={m}
                    checked={mode === m}
                    onChange={() => setMode(m)}
                  />
                  <span>{m}</span>
                  <b>Simulação</b>
                </label>
              ))}
            </fieldset>
            <p className="small">
              Modalidades exclusivamente demonstrativas. Disponibilidade, prazo,
              cobertura e taxas precisam ser combinados com o proprietário.
            </p>
            {mode === "Entrega" ? (
              <label className="field">
                Endereço fictício
                <textarea
                  required
                  maxLength={200}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Use um endereço de teste, sem dados pessoais."
                />
              </label>
            ) : null}
            <button className="primary full" type="submit">
              Revisar mensagem <Icon name="arrow" />
            </button>
          </form>
        ) : (
          <>
            <button className="text-button" onClick={() => setStep("checkout")}>
              ← Editar dados de teste
            </button>
            <h2>Tudo pronto para visualizar.</h2>
            <p className="demo-callout">
              <Icon name="check" />
              Simulação concluída. Nenhum pedido foi enviado.
            </p>
            <label className="field">
              Prévia da mensagem para WhatsApp
              <textarea className="message" readOnly value={message} />
            </label>
            <button
              className="primary full"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(message);
                  setCopied("Mensagem copiada. Nenhum envio realizado.");
                } catch {
                  setCopied(
                    "Não foi possível copiar. Selecione o texto da prévia e copie manualmente.",
                  );
                }
              }}
            >
              Copiar mensagem de teste
            </button>
            <p className="small" role="status">
              {copied}
            </p>
            <p className="small">
              Envio ao estabelecimento desativado: o número comercial e a
              autorização de uso ainda precisam ser confirmados.
            </p>
            <button
              className="text-button"
              onClick={() => shop.setCartOpen(false)}
            >
              Continuar explorando
            </button>
          </>
        )}
      </div>
    </Modal>
  );
}
export function Search({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="search">
      <Icon name="search" />
      <input
        type="search"
        aria-label="Buscar no cardápio"
        placeholder="O que vai ser hoje?"
        maxLength={100}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value ? (
        <button
          type="button"
          aria-label="Limpar busca"
          onClick={() => onChange("")}
        >
          <Icon name="close" />
        </button>
      ) : null}
    </label>
  );
}
export function ProductCard({
  product,
  onSelect,
  editorial = false,
}: {
  product: Product;
  onSelect: () => void;
  editorial?: boolean;
}) {
  return (
    <article className={editorial ? "product editorial-product" : "product"}>
      <button
        className="product-open"
        aria-label={`Personalizar ${product.name}`}
        onClick={onSelect}
      >
        <div className="product-photo">
          <FoodImage
            file={product.image}
            alt={`${product.name} — foto ilustrativa`}
          />
          {product.tag ? (
            <span className="product-tag">{product.tag}</span>
          ) : null}
        </div>
        <div className="product-body">
          <span className="eyebrow">{product.category}</span>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <div className="product-bottom">
            <strong>
              {product.choices?.length ? <small>desde </small> : null}
              {money(product.price)}
            </strong>
            <span className="add-icon">
              <Icon name="plus" />
            </span>
          </div>
        </div>
      </button>
    </article>
  );
}
export function ShopOverlays({ shop }: { shop: Shop }) {
  return (
    <>
      {shop.selected ? (
        <ProductEditor
          key={shop.selected.item?.key ?? shop.selected.product.id}
          {...shop.selected}
          onSave={shop.save}
          onClose={() => shop.setSelected(null)}
        />
      ) : null}
      {shop.cartOpen ? <Cart shop={shop} /> : null}
      <div className="toast" role="status" aria-live="polite">
        {shop.notice}
      </div>
      {shop.storageError ? (
        <div className="storage-error" role="alert">
          {shop.storageError}
          <button
            aria-label="Fechar aviso de armazenamento"
            onClick={shop.dismissStorageError}
          >
            ×
          </button>
        </div>
      ) : null}
    </>
  );
}
