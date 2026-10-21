# Entrega — Renda Digital

21/10/2026 · Curitiba / America/Sao_Paulo

## Resultado e caminhos

Foram implementadas duas aplicações independentes:

- `C:\Users\Win\Documents\ChatGPT\Rendas digitais\mhay-cardapio-prototipo`
- `C:\Users\Win\Documents\ChatGPT\Rendas digitais\umai-cardapio-prototipo`

React 19, Vite 7, TypeScript 5, CSS próprio, sem framework de componentes. Cada projeto tem lockfile, build, testes, catálogo, fontes, imagens, manual e configuração Vercel próprios. Podem ser copiados e hospedados individualmente. Nenhum projeto anterior foi sobrescrito: o checkout estava vazio, com apenas `.git` e estado limpo no início.

## Design e valor demonstrado

**Mhay:** pastelaria brasileira, terracota e creme com amarelo contido, lettering tipográfico expressivo, fotografia de pastel em destaque, faixas de categorias e grade direta. O foco é escolher e montar rapidamente um pedido, com tamanho, adicionais e observação visíveis.

**Umai:** direção editorial em verde-sálvia, fundo claro, fotografia em arco e tipografia serifada. A organização começa por momentos do dia e se desdobra em navegação lateral no desktop e horizontal no celular. O canal MenuDino já existe; o protótipo demonstra uma possível vitrine complementar. A paleta é proposta alternativa, não reprodução da marca vermelha observada no canal atual.

Não são duas páginas com nomes e cores trocados: a composição principal, hierarquia, entrada de navegação e organização do catálogo diferem. A lógica transacional equivalente foi mantida em cada aplicação para facilitar manutenção independente.

## Funcionalidades

Cada aplicação tem 12 produtos fictícios, categorias sem recarga, busca por nome/descrição/categoria com normalização de acentos, modal de detalhe, quantidade de 1 a 99, escolhas obrigatórias quando pertinentes, adicionais opcionais e observações limitadas a 300 caracteres. Dados centralizados em `src/data.ts`.

Sacola com inclusão, remoção, edição, alteração de quantidade, totais em centavos e persistência local validada contra o catálogo. Chaves distintas impedem mistura de carrinhos entre marcas no mesmo domínio. Nome/endereço de teste não são persistidos. O subtotal não inclui frete fictício.

Finalização com identificação de teste, retirada/entrega explicitamente simuladas, revisão de mensagem e botão de cópia. Contatos não validados operacionalmente: envio externo desativado. Não há cobrança, pagamento, backend fictício, aceite de pedido ou mensagens aos estabelecimentos.

Há estado inicial de carregamento, lazy loading, espaço reservado para imagens, fallback em falha de imagem, ausência de resultados, sacola vazia, erro de armazenamento e limite de erro geral com recuperação. Diálogos nativos, foco visível, labels, alertas/status acessíveis, navegação por teclado e respeito à redução de movimento. Nenhum conteúdo externo é injetado como HTML. Metadados e noindex incluídos.

## Fontes e confiança

A pesquisa detalhada e os roteiros comerciais estão em [PESQUISA.md](PESQUISA.md). A distinção entre informação publicada, pendências e conteúdo criado foi mantida na interface e na documentação.

- [Mhay / Restaurant Guru](https://restaurantguru.com.br/Pastelaria-Miyake-Curitiba) e [CNPJ.biz](https://cnpj.biz/31815906000198): referências de nome/endereço; fontes secundárias, sem validação operacional dos contatos.
- [Umai / MenuDino](https://umailanches.menudino.com/): canal efetivamente aberto e inspecionado, inclusive detalhe com personalização. Não se fez checkout ou pedido.
- [Umai / Restaurant Guru](https://restaurantguru.com.br/Umai-Pasteis-Curitiba) e [FindGlocal](https://www.findglocal.com/BR/Curitiba/432019840248277/Umai-Delivery): referências para contato e divergência 358/384. Nenhuma taxa, prazo ou horário foi adotado.
- Instagram direto indisponível para leitura pela ferramenta. Google Maps não foi validado diretamente. Não se declara inexistência de canais da Mhay.

Todos os preços, catálogos, modalidades, textos de apresentação e identidades propostas são demonstrativos. Fotografias locais geradas e Unsplash, sem reaproveitamento de ativos do canal existente. Proveniência e licenças em [ATIVOS.md](ATIVOS.md).

## Skills e ferramentas efetivamente usadas

- **Sites**: lida integralmente e aplicada no fluxo de desenvolvimento local, preparação de ativos, verificação e entrega sem registro/publicação externa; referência de preview local também lida.
- **Imagegen**: lida integralmente e aplicada com a ferramenta integrada; prompts e caminhos dos ativos salvos em `prompts-imagens.json` e `public/images` de cada aplicação. Sem API key ou fallback CLI.
- **Vercel React Best Practices**: lida integralmente; aplicada a estado derivado, inicialização preguiçosa, atualizações funcionais, armazenamento versionado, imports diretos, ausência de bibliotecas pesadas e acessibilidade dos componentes.
- **Verification**: lida integralmente; fluxo verificado é interface → catálogo local → opções → sacola → armazenamento → revisão/cópia. API, banco e serviços pagos não se aplicam.
- **Vercel Deployments/CI-CD**: lida integralmente; configuração por aplicação, documentação de root/build/output e limites de autorização. Nenhum deploy, promoção ou CI remoto foi executado.
- **Computer Use**: instrução local disponível foi lida; nenhuma automação de aplicativo nativo foi usada. A inspeção foi feita pelo navegador com documentação própria, via `cua_repl` e locators Playwright.
- Ferramentas: pesquisa web, npm, Node, TypeScript, ESLint, Vite, testes nativos do Node, Prettier (formatação pontual), Sharp (conversão/otimização), Git para inspeção e navegador para interação/capturas.

O catálogo de skills e integrações disponibilizado na sessão foi considerado. Não havia necessidade de acionar GitHub, Figma, Canva, banco, autenticação ou integrações pagas. Não havia skill específica de Vite/UI/UX/segurança a carregar além das orientações relevantes acima; essas áreas foram tratadas com os recursos disponíveis. Não se instalou navegador extra, framework de UI, runner de testes ou CLI de deploy. Não se usaram subagentes.

## Verificações executadas

Em **ambos**: instalação de dependências, `npm run lint`, `npm run typecheck`, `npm test` e `npm run build`, todos com saída bem-sucedida. Logs por aplicação em `evidencias/*-lint.log`, `*-typecheck.log`, `*-test.log`, `*-build.log`. Foram 7 testes unitários por aplicação, 14 execuções aprovadas. O teste de domínio é equivalente nos projetos, preservando autonomia.

Os testes cobrem preços/totais, busca sem acentos, recuperação do carrinho, rejeição de quantidades/opções inválidas/JSON corrompido, mensagem detalhada e distinção entre entrega e retirada. A auditoria npm somente das dependências de produção foi executada na Mhay, cujo conjunto React/React DOM é igual ao da Umai: **zero vulnerabilidades reportadas na consulta**. Isso não constitui uma auditoria completa do software.

A inspeção no navegador registrou 36 verificações de interação em `evidencias/interacoes.json`: categorias, busca, nenhum resultado, seleção obrigatória, adicionais, totais, edição, quantidade, persistência após recarga, revisão, cópia de mensagem, remoção, sacola vazia, uso mobile e teclado. Exemplos conferidos: 2 pastéis de R$ 12 + R$ 5 + R$ 3,50 = R$ 41; 2 cappuccinos de R$ 12 + R$ 4 + R$ 3,50 = R$ 39.

Viewports de 320×740, 390×844 e 768×1024 sem transbordamento horizontal; desktop no viewport padrão do navegador. Enter abre o produto, Shift+Tab mantém foco no diálogo e Escape fecha. Capturas de desktop, mobile, sacola e revisão foram salvas. Não se declara auditoria WCAG completa, teste em Safari/iOS real, Lighthouse ou verificação remota pós-deploy.

Verificação adicional dos builds finais em `/mhay/` e `/umai/`: produto, sacola, rejeição de endereço só com espaços e revisão funcionaram. Todas as 13 imagens renderizadas por aplicação (destaque + 12 produtos) carregaram e as fontes ficaram em estado `loaded`. Os logs capturados desses builds não mostraram avisos ou erros. Evidência em `evidencias/build-producao.json`.

Foram corrigidos: acesso do navegador ao servidor local inicialmente limitado pelo sandbox; quebras de título em celular; labels da sacola; validação de endereço composto só de espaços; tratamento de aviso por estado React; dependência externa de tipografia; fotografias incoerentes com nomes iniciais do catálogo. Fontes e imagens finais são locais.

## Como abrir e publicar

Na raiz, `node apresentar.mjs` abre os builds em `http://127.0.0.1:4180/mhay/` e `http://127.0.0.1:4180/umai/`. Somente neste computador. Os servidores de verificação são encerrados ao final; execute o comando para apresentar novamente.

Desenvolvimento em cada pasta: `npm.cmd ci`, `npm.cmd run dev`. Mhay usa 5173, Umai 5174. Build: `npm.cmd run build`; prévia independente: `npm.cmd run preview` em 4173/4174.

Para Vercel, criar um projeto por pasta, Root Directory da aplicação, `npm ci`, `npm run build`, saída `dist`. Para Pages, publicar o conteúdo compilado de `dist` na origem aprovada; o build usa base relativa. Instruções completas em cada README, baseadas nas documentações oficiais. **Não houve publicação, criação de repositório, domínio, compra ou alteração de ambiente externo.**

Pacotes portáteis em `entrega/mhay-cardapio-prototipo.zip` e `entrega/umai-cardapio-prototipo.zip`: código, documentação, testes, ativos e build de cada aplicação, sem `node_modules`, Git ou credenciais. Para editar em outro computador, extrair e executar `npm ci`; para compilar, `npm run build`; para visualizar, `npm run preview`.

## Limites e evolução comercial

Links públicos só poderão ser fornecidos após autorização de publicação. O material está pronto para revisão local e hospedagem individual. Não se confirmou nenhum telefone como WhatsApp comercial ativo; o envio permanece bloqueado no produto por ausência de validação operacional, sem impedir o teste da experiência.

Antes da versão oficial: obter consentimento do responsável, resolver dados conflitantes, substituir catálogo/preços/fotos, confirmar ingredientes/alergênicos e regras de atendimento. Depois, definir recebimento de pedidos, privacidade, integração existente e métricas de uso. Nenhuma melhoria de vendas, performance comercial ou integração é garantida pelo protótipo.
