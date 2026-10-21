# Oito novos cardápios comerciais

Publicação: https://guilhermebattiston.github.io/Rendas-Digitais/

CWB Açaí, Chewie Burger and Beer, Fogo & Gelo, Lanchonete 21 Sabores, Djalma Lanches, Harlem Hamburgueria Curitiba, Jalapeño Burger e Divinas Tetas receberam 12 produtos demonstrativos cada, fotografias locais, identidade própria, busca, categorias, personalização e sacola. Os dois cardápios anteriores e seus acessos foram preservados.

O aplicativo compartilhado fica em `cardapios-restaurantes`. Cada endereço seleciona seu catálogo e sua identidade; a sacola usa uma chave independente por restaurante. O registro `portal/projects.js` dirige os builds e as rotas. O portal usa hashes de credenciais para uma barreira visual, sem autenticação de servidor. Não protege conteúdo confidencial.

Todos os preços, composições, fotografias e identidades são propostas fictícias, identificadas nas páginas. Não há pagamento, reserva ou envio de pedidos. Não foram enviados contatos comerciais. O telefone não é usado como destino ativo.

## Referências públicas

Os nomes, endereços e contatos iniciais foram fornecidos pelo usuário. A confirmação de funcionamento do contato permanece pendente.

- CWB: https://www.econodata.com.br/consulta-empresa/41119903000173-vanessa-de-lima-souza-cruz
- Chewie: https://www.solutudo.com.br/empresas/pr/curitiba/hamburguerias/chewie-burger-and-beer-22195551 e https://www.tripadvisor.com.br/Restaurant_Review-g303441-d19456959-Reviews-Chewie_Burger_and_Beer-Curitiba_State_of_Parana.html (divergência de bairro nas listagens).
- Fogo & Gelo: https://www.rappi.com.br/restaurantes/900633574-fogo-e-gelo
- 21 Sabores: https://brasilrestaurante.com/state-of-parana/curitiba/lanchonete21sabores (telefone não confirmado).
- Djalma: https://www.solutudo.com.br/empresas/pr/curitiba/hamburguerias/djalma-lanches-22195517
- Harlem: https://curitiba-pr.harlemhamburgueria.com/ (já possui presença de pedidos online).
- Jalapeño: https://wanderlog.com/place/details/3448378/jalape%C3%B1o-burger
- Divinas Tetas: https://www.divinastetas.com.br/cardapio-confeitaria-vegana (cardápio existente; proposta de navegação por bolos, kits, docinhos e presentes).

Consulta em 21/10/2026. Nenhum preço ou fotografia oficial foi copiado. Os prompts e originais gerados estão registrados em `cardapios-restaurantes/IMAGENS.json`; imagens compartilhadas e fontes locais seguem os registros ATIVOS.md e dos protótipos anteriores.

## Validação

Lint e TypeScript nos três aplicativos; testes de domínio e portal; oito testes adicionais de integridade dos catálogos, opções e ativos. Build produz dez rotas no GitHub Pages. No navegador: oito acessos e saídas, 12 produtos por catálogo, desktop e celular de 390 px sem rolagem horizontal; personalização do açaí e subtotal de R$ 24,00 (500 ml + granola), sacola e revisão sem envio.
