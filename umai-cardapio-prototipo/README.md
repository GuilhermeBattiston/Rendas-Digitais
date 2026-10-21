# Umai · Café & Lanches — manual do protótipo

Aplicação independente em React, Vite e TypeScript. Catálogo demonstrativo com 12 produtos. Sem backend, login, pagamento, reserva, envio automático ou integração real com WhatsApp/MenuDino.

## Executar

Pré-requisito recomendado: Node.js 24 LTS com npm. Abra o terminal nesta pasta:

```powershell
npm.cmd ci
npm.cmd run dev
```

O script imprime a URL local. As portas são fixas (`strictPort`): se houver conflito, encerre o processo que você reconhece ou use `npm.cmd run dev -- --port 5180`. Não encerre processos desconhecidos.

## Verificações

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd test
npm.cmd run build
npm.cmd run preview
```

`npm test` usa o test runner nativo do Node e remoção de tipos (Node 24 recomendado). Os testes cobrem dinheiro em centavos, totais, busca normalizada, hidratação/validação do carrinho e mensagem demonstrativa. A inspeção real por navegador e capturas está documentada em `docs/RELATORIO.md` no conjunto da entrega.

O build gera `dist/`; `preview` serve esse build. Não abra `dist/index.html` diretamente por `file://`, pois os módulos precisam de um servidor HTTP. Não é necessário instalar uma CLI global.

## Organização e alterações

| Arquivo | Responsabilidade |
| --- | --- |
| `src/App.tsx` | Composição e navegação próprias da marca |
| `src/data.ts` | Marca, contato de referência, categorias e todos os produtos |
| `src/domain.ts` | Tipos, valores, validação, persistência e mensagem |
| `src/components.tsx` | Produto, opções, sacola, checkout e feedback |
| `src/style.css` | Identidade visual, responsividade e foco |
| `public/images` | Fotografias ilustrativas otimizadas |
| `public/fonts` | Tipografia local e licenças |

**Produtos e preços:** edite `src/data.ts`. Use IDs estáveis e preços em **centavos inteiros**: 1250 significa R$ 12,50. Atualize as categorias e, na Umai, os momentos. Não coloque preços em componentes. `choices` são opções obrigatórias de escolha única; `extras` são adicionais opcionais. O total unitário é preço base + acréscimo da escolha + adicionais; o subtotal multiplica pela quantidade.

**Contato:** `brand.contact` é somente uma referência de pesquisa. `verifiedWhatsapp` fica nulo e não há botão de envio externo. Trocar o número não habilita envios por acidente. Uma versão operacional exige confirmação do contato, aprovação do proprietário, revisão das ressalvas e implementação deliberada de link WhatsApp com `encodeURIComponent`, mantendo a ação final sob controle do cliente.

**Imagens:** troque arquivos em `public/images` por materiais autorizados e atualize `image` no catálogo. Não altere a extensão sem converter o arquivo e atualizar a referência. Use WebP/JPEG otimizado; a área tem dimensões reservadas para evitar saltos. Há fallback se uma imagem falhar. `docs/ATIVOS.md` registra as origens.

**Identidade:** cores e tipografia estão nas variáveis de `src/style.css`; o desenho da página fica em `App.tsx`. As marcas apresentadas são conceitos independentes, sujeitos a aprovação.

## Privacidade e segurança da prévia

Somente os itens do carrinho são persistidos em `localStorage`, com chave e esquema versionados por marca. Nome e endereço de teste ficam em memória e não são enviados nem persistidos. Observações dos itens permanecem no navegador; use apenas informações fictícias. Para apagar a sacola, remova os itens. Nenhum serviço externo recebe os dados da simulação. O botão de cópia grava o texto no clipboard apenas após ação explícita; se o navegador bloquear, a prévia permite cópia manual.

React escapa os textos, sem `dangerouslySetInnerHTML`. Entradas têm limites; opções e valores salvos são validados contra o catálogo. O nome e o endereço fictícios são obrigatórios nas etapas pertinentes. O diálogo usa comportamento modal nativo, confinamento de foco e Escape. A interface respeita redução de movimento e usa feedback acessível.

`index.html` tem `noindex,nofollow`, que orienta mecanismos de busca mas **não é controle de acesso**. Para uma apresentação privada publicada, configure proteção na hospedagem quando disponível. Nenhuma credencial é necessária para o build.

## Publicar depois de autorizado

Nada foi publicado nesta entrega.

### Vercel

Após aprovação para criar/vincular o projeto remoto, importe o repositório e crie um projeto Vercel por aplicação. Configure **Root Directory** para a pasta desta aplicação, framework Vite, instalação `npm ci`, build `npm run build`, saída `dist`. O `vercel.json` já traz build e cabeçalhos básicos. Não há variáveis de ambiente ou banco. Confira conta, projeto e audiência antes de publicar. Abra a URL retornada e repita os cenários centrais. [Documentação oficial](https://vercel.com/docs/frameworks/frontend/vite).

### GitHub Pages

Após aprovação para criar/alterar o repositório e ativar Pages, publique **o conteúdo** de `dist/` em uma branch de publicação ou em um artefato do fluxo Pages. Não publique `src` como se fosse a saída compilada. `base: './'`, links por âncora e ativos relativos permitem hospedar em subdiretório; não há necessidade de redirects de SPA. Use uma raiz de publicação por site ou subpastas diferentes dentro do mesmo Pages. Teste imagens, fontes e recarga após publicar. [Documentação oficial](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Limites e próximos passos comerciais

Produtos, valores, modalidades, fotos e identidade são fictícios. Não há cálculo de frete nem promessa de cobertura/prazo. O resultado final é uma mensagem de teste, não um pedido aceito. Não há sincronização entre dispositivos, disponibilidade de estoque, painel administrativo ou recebimento de pagamentos.

Antes de operar: substituir catálogo e fotos, validar contato/atendimento, confirmar acessibilidade com usuários reais, definir privacidade e recebimento de pedidos e medir os resultados. Na Umai, decidir primeiro como a vitrine conviverá com o MenuDino existente. Os roteiros de apresentação e a pesquisa constam em `docs/PESQUISA.md`.

