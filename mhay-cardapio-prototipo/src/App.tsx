import { useState } from "react";
import { categories, products, brand } from "./data";
import { normalize, money } from "./domain";
import {
  FoodImage,
  Icon,
  Search,
  ProductCard,
  ShopOverlays,
  useShop,
} from "./components";
export default function App() {
  const shop = useShop();
  const [category, setCategory] = useState("Todos");
  const [query, setQuery] = useState("");
  const filtered = products.filter(
    (p) =>
      (category === "Todos" || p.category === category) &&
      normalize(`${p.name} ${p.description} ${p.category}`).includes(
        normalize(query),
      ),
  );
  return (
    <>
      <a className="skip" href="#cardapio">
        Pular para o cardápio
      </a>
      <div className="demo-strip">
        PRÉVIA INDEPENDENTE <span>·</span> Produtos, imagens e preços fictícios.
        Nenhum pedido real.
      </div>
      <header className="header wrap">
        <a className="wordmark" href="#inicio" aria-label="Mhay, início">
          mhay<span>PASTELARIA & LANCHONETE</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#cardapio">Cardápio</a>
          <a href="#sobre">A casa</a>
        </nav>
        <button
          className="cart-button"
          aria-label={`Abrir sacola de teste, ${shop.count} itens`}
          onClick={() => shop.setCartOpen(true)}
        >
          <Icon name="bag" />
          <span>Sua sacola</span>
          <b>{shop.count}</b>
        </button>
      </header>
      <main id="inicio">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <span className="eyebrow">
              <i /> UM CONCEITO DE SABOR, EM CURITIBA
            </span>
            <h1 id="hero-title">
              Tem pausa que
              <br />
              pede <em>um pastel.</em>
            </h1>
            <p>
              Do primeiro café ao lanche da tarde.
              <br />
              Encontre sua vontade e monte do seu jeito.
            </p>
            <a className="primary" href="#cardapio">
              Escolher meu pedido <Icon name="arrow" />
            </a>
            <div className="hero-foot">
              <span>Escolha.</span>
              <span>Personalize.</span>
              <span>Aproveite a prévia.</span>
            </div>
          </div>
          <div className="hero-visual">
            <FoodImage
              file="pastel.webp"
              alt="Pastéis dourados com queijo em uma mesa alaranjada — imagem produzida para demonstração"
              eager
            />
            <span className="photo-label">IMAGEM ILUSTRATIVA</span>
            <div className="round-stamp">
              crocância
              <br />
              <strong>em cada</strong>
              <br />
              escolha
            </div>
          </div>
        </section>
        <div className="ribbon" aria-hidden="true">
          <span>PASTÉIS</span>
          <b>✳</b>
          <span>CAFÉ & PROSA</span>
          <b>✳</b>
          <span>UMA BOA PAUSA</span>
          <b>✳</b>
          <span>DO SEU JEITO</span>
        </div>
        <section className="menu-section wrap" id="cardapio">
          <div className="section-intro">
            <div>
              <span className="eyebrow">ESCOLHA A SUA VONTADE</span>
              <h2>O que vai bem hoje?</h2>
            </div>
            <Search value={query} onChange={setQuery} />
          </div>
          <div
            className="menu-nav"
            role="group"
            aria-label="Categorias do cardápio"
          >
            {categories.map((c, i) => (
              <button
                key={c}
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
              >
                <span>{String(i + 1).padStart(2, "0")}</span>
                {c}
              </button>
            ))}
          </div>
          <div className="results-heading">
            <h3>
              {query
                ? `Resultados para “${query}”`
                : category === "Todos"
                  ? "Um pouco de cada vontade"
                  : category}
            </h3>
            <span role="status">{filtered.length} opções ilustrativas</span>
          </div>
          {filtered.length ? (
            <div className="product-grid">
              {filtered.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onSelect={() => shop.setSelected({ product: p })}
                />
              ))}
            </div>
          ) : (
            <div className="empty">
              <Icon name="search" />
              <h3>Essa vontade ainda não está por aqui.</h3>
              <p>Tente outro termo ou explore todas as categorias.</p>
              <button
                className="primary"
                onClick={() => {
                  setQuery("");
                  setCategory("Todos");
                }}
              >
                Ver todo o cardápio
              </button>
            </div>
          )}
          <p className="menu-disclaimer">
            Um cardápio para experimentar a ideia. Todos os produtos e valores
            são exemplos fictícios.
          </p>
        </section>
        <section className="about wrap" id="sobre">
          <div>
            <span className="eyebrow">UMA PRÉVIA FEITA PARA A MHAY</span>
            <h2>
              Da rua para a tela.
              <br />
              Com a mesma vontade
              <br />
              de uma boa pausa.
            </h2>
          </div>
          <div>
            <h3>{brand.fullName}</h3>
            <p>
              <Icon name="pin" />
              {brand.address}
              <br />
              Curitiba · PR
            </p>
            <p className="small">
              Endereço encontrado em fontes públicas, sujeito a confirmação.
            </p>
            <details>
              <summary>Informações e limites desta prévia</summary>
              <p>
                Conceito visual independente, sem vínculo oficial. Contato de
                listagem: {brand.contact}. {brand.contactStatus} Não há serviço
                de pedidos ativo neste protótipo. Imagens e identidade não
                representam materiais oficiais da Mhay.
              </p>
            </details>
          </div>
        </section>
      </main>
      <footer className="footer wrap">
        <a className="wordmark" href="#inicio">
          mhay
        </a>
        <p>Uma demonstração de como pedir pode ser simples.</p>
        <span>PROTÓTIPO · 2026</span>
      </footer>
      <button className="mobile-cart" onClick={() => shop.setCartOpen(true)}>
        <Icon name="bag" />
        <span>
          {shop.count ? `${shop.count} itens na sacola` : "Experimentar sacola"}
        </span>
        <b>{money(shop.subtotal)}</b>
      </button>
      <ShopOverlays shop={shop} />
    </>
  );
}
