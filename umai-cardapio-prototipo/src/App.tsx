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
const moments = [
  { name: "Café da manhã", subtitle: "Para começar com calma", number: "01" },
  { name: "Almoço", subtitle: "Seu intervalo tem sabor", number: "02" },
  { name: "Pausa da tarde", subtitle: "Um respiro no seu dia", number: "03" },
];
export default function App() {
  const shop = useShop();
  const [category, setCategory] = useState("Todos");
  const [moment, setMoment] = useState("Todos");
  const [query, setQuery] = useState("");
  const filtered = products.filter(
    (p) =>
      (category === "Todos" || p.category === category) &&
      (moment === "Todos" || p.moment?.includes(moment)) &&
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
        CONCEITO INDEPENDENTE · Produtos, fotos e preços fictícios. Sem pedidos
        reais.
      </div>
      <header className="header wrap">
        <a className="wordmark" href="#inicio" aria-label="Umai, início">
          umai<span>CAFÉ & LANCHES</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#momentos">Encontre sua pausa</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#sobre">Sobre a prévia</a>
        </nav>
        <button
          className="cart-button"
          aria-label={`Abrir sacola de teste, ${shop.count} itens`}
          onClick={() => shop.setCartOpen(true)}
        >
          <Icon name="bag" />
          <span>Sua seleção</span>
          <b>{shop.count}</b>
        </button>
      </header>
      <main id="inicio">
        <section className="umai-hero wrap">
          <div className="editorial-heading">
            <span className="eyebrow">
              CURITIBA, CENTRO · UM CONCEITO PARA A UMAI
            </span>
            <span className="edition">A BOA PAUSA / Nº 01</span>
          </div>
          <div className="umai-hero-grid">
            <div className="umai-hero-copy">
              <h1>
                O dia corre.
                <br />
                <em>A pausa</em>
                <br />é sua.
              </h1>
              <p>
                Um café, um lanche, um tempo para você.
                <br />
                Escolha o que combina com o seu momento.
              </p>
              <a className="primary" href="#cardapio">
                Encontre sua escolha <Icon name="arrow" />
              </a>
            </div>
            <div className="umai-hero-image">
              <FoodImage
                file="cafe-mesa.webp"
                alt="Cappuccino e sanduíche sobre uma mesa verde — imagem produzida para demonstração"
                eager
              />
              <span className="image-caption">
                CAFÉ, CONVERSA & UMA BOA ESCOLHA <small>FOTO ILUSTRATIVA</small>
              </span>
            </div>
            <div className="side-note">
              <Icon name="coffee" />
              <span>
                Pequenos rituais.
                <br />
                Boas pausas.
              </span>
            </div>
          </div>
        </section>
        <section
          className="moments wrap"
          id="momentos"
          aria-label="Escolher por momento do dia"
        >
          <div className="moments-title">
            <span className="eyebrow">UM CARDÁPIO, SEU TEMPO</span>
            <h2>Qual é a sua pausa?</h2>
          </div>
          <div className="moment-options">
            {moments.map((m) => (
              <button
                key={m.name}
                aria-pressed={moment === m.name}
                onClick={() => {
                  setMoment(moment === m.name ? "Todos" : m.name);
                  setCategory("Todos");
                  document
                    .getElementById("cardapio")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span className="moment-number">{m.number}</span>
                <span>
                  <strong>{m.name}</strong>
                  <small>{m.subtitle}</small>
                </span>
                <Icon name="arrow" />
              </button>
            ))}
          </div>
        </section>
        <section className="umai-menu wrap" id="cardapio">
          <div className="section-intro">
            <div>
              <span className="eyebrow">ESCOLHAS QUE CABEM NO SEU DIA</span>
              <h2>O cardápio da pausa.</h2>
            </div>
            <Search value={query} onChange={setQuery} />
          </div>
          <div className="umai-menu-layout">
            <aside className="category-rail">
              <span className="eyebrow">EXPLORE O CARDÁPIO</span>
              <div role="group" aria-label="Categorias do cardápio">
                {categories.map((c) => (
                  <button
                    key={c}
                    aria-pressed={category === c}
                    onClick={() => {
                      setCategory(c);
                      setMoment("Todos");
                    }}
                  >
                    {c}
                    <span>↗</span>
                  </button>
                ))}
              </div>
              <div className="rail-note">
                <Icon name="coffee" />
                <p>
                  Escolha. Personalize.
                  <br />
                  Faça uma pausa.
                </p>
                <span>Experiência demonstrativa</span>
              </div>
            </aside>
            <div className="menu-products">
              <div className="results-heading">
                <h3>
                  {query
                    ? `Resultados para “${query}”`
                    : moment !== "Todos"
                      ? moment
                      : category === "Todos"
                        ? "Para todas as pausas"
                        : category}
                </h3>
                <span role="status">{filtered.length} opções ilustrativas</span>
              </div>
              {moment !== "Todos" ? (
                <button
                  className="clear-moment"
                  onClick={() => setMoment("Todos")}
                >
                  {moment} <span>× Limpar momento</span>
                </button>
              ) : null}
              {filtered.length ? (
                <div className="product-grid">
                  {filtered.map((p) => (
                    <ProductCard
                      key={p.id}
                      product={p}
                      editorial
                      onSelect={() => shop.setSelected({ product: p })}
                    />
                  ))}
                </div>
              ) : (
                <div className="empty">
                  <Icon name="search" />
                  <h3>Que tal uma nova escolha?</h3>
                  <p>
                    Nenhum produto encontrado. Tente outro termo ou remova os
                    filtros.
                  </p>
                  <button
                    className="primary"
                    onClick={() => {
                      setQuery("");
                      setCategory("Todos");
                      setMoment("Todos");
                    }}
                  >
                    Explorar tudo
                  </button>
                </div>
              )}
            </div>
          </div>
          <p className="menu-disclaimer">
            Produtos e preços criados para demonstrar a experiência. Não
            correspondem ao cardápio oficial.
          </p>
        </section>
        <section className="umai-about wrap" id="sobre">
          <div>
            <span className="eyebrow">UMA NOVA FORMA DE APRESENTAR</span>
            <h2>
              Mais espaço para
              <br />
              cada escolha.
            </h2>
          </div>
          <div>
            <p>
              Uma proposta de vitrine digital para a {brand.fullName},
              organizada pelas pausas do dia e com espaço para personalizar cada
              item.
            </p>
            <p className="small">
              <Icon name="pin" /> {brand.address}. Número do imóvel a confirmar:
              fontes divergem entre 358 e 384.
            </p>
            <details>
              <summary>Transparência desta demonstração</summary>
              <p>
                O canal MenuDino foi encontrado e consultado. Esta prévia não é
                uma operação oficial nem está integrada ao sistema existente.
                Identidade, produtos, preços e imagens são propostas
                ilustrativas. Contato em listagens: {brand.contact}.{" "}
                {brand.contactStatus}
              </p>
              <a
                className="source-link"
                href="https://umailanches.menudino.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar canal existente ↗
              </a>
            </details>
          </div>
        </section>
      </main>
      <footer className="footer wrap">
        <a className="wordmark" href="#inicio">
          umai
        </a>
        <p>O dia corre. A pausa é sua.</p>
        <span>CONCEITO INDEPENDENTE · 2026</span>
      </footer>
      <button className="mobile-cart" onClick={() => shop.setCartOpen(true)}>
        <Icon name="bag" />
        <span>
          {shop.count
            ? `${shop.count} itens na seleção`
            : "Sua seleção de teste"}
        </span>
        <b>{money(shop.subtotal)}</b>
      </button>
      <ShopOverlays shop={shop} />
    </>
  );
}
