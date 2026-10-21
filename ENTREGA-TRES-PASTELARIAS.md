# Entrega — três protótipos WebForge

Implementados e validados em 21/10/2026. Preparados para integrar o mesmo GitHub Pages, conforme a autorização anterior da conversa para hospedar os cardápios em Rendas-Digitais. O anexo exige autorização antes de modificar o remoto; essa autorização já foi dada para este repositório e finalidade. As novas rotas e os três acessos preservam os dez existentes. A publicação será confirmada pela execução GitHub Actions e pelos acessos no endereço público.

## Comparação de design e UX

| Empresa / pasta | Direção visual | Navegação e diferença comercial |
| --- | --- | --- |
| Zico — `pastelaria-zico-prototipo` | Verde profundo/creme, serifas clássicas, abertura com fotografia à esquerda e painel escuro à direita | Categorias em coluna fixa no desktop; no mobile, filtros quebram em linhas e produtos viram fichas compactas. Foco em localizar pastéis e lanches e montar tamanhos/adicionais. |
| Modelo — `pastelaria-modelo-prototipo` | Cobalto/branco, amarelo pontual, sans forte, apresentação gráfica e destaque de um produto | Categorias horizontais, catálogo em grade de quatro colunas no desktop; duas em celulares maiores e uma em telas estreitas. CTA do destaque abre diretamente o produto. Foco na comparação entre clássicos, especiais e doces. |
| Da Mi — `pastelaria-da-mi-prototipo` | Terracota/creme, serifas em itálico, abertura centralizada e narrativa de duas fotos | Entradas por momentos filtram o catálogo; fichas horizontais com imagem e descrição. Foco em transitar entre pastel, lanche, café e doce. |

Todas são identidades **conceituais demonstrativas**. Nenhuma dessas decisões é apresentada como característica comprovada da marca real. Não são três instâncias de um único template: cada App.tsx e estilo de apresentação são próprios. Reutilizam-se padrões de interação já validados do repositório, copiados para cada pasta para preservar independência de build.

## Funcionalidades nas três aplicações

- 12 produtos fictícios por empresa; categorias, descrições, preços em reais e busca sem acentos.
- Estado sem resultados com recuperação de filtros, imagens locais WebP e fallback acessível.
- Detalhe ampliado com opção de tamanho obrigatória, adicionais quando aplicáveis, observações, quantidade e total atualizado.
- Sacola com edição e remoção; subtotal em centavos inteiros; persistência local versionada e validação de dados recuperados.
- Nome de teste, modalidade estritamente simulada, mensagem de WhatsApp formatada e cópia. Não há pedido, pagamento ou envio real.
- Labels, dialog nativo, foco visível, retorno de foco, fechamento por Escape, fontes locais, redução de movimento e formulários de 16 px no celular.

## Pesquisa, assets e skills

Fontes individuais, divergências e hipóteses: [PESQUISA-TRES-PASTELARIAS.md](PESQUISA-TRES-PASTELARIAS.md). Skills efetivamente lidas e aplicadas: [SKILLS-TRES-PASTELARIAS.md](SKILLS-TRES-PASTELARIAS.md).

Sites, React best practices, Verification e Imagegen foram aplicadas às três aplicações. Navegador controlado pela ferramenta CUA com API Playwright. Não se alega execução de ferramentas ausentes, auditoria externa ou medição Lighthouse.

Nove fotografias foram geradas pela ferramenta integrada Imagegen, otimizadas e salvas em `public/images` dos respectivos projetos. Prompts integrais, caminhos originais e arquivos finais estão em cada `IMAGENS.json`. Originais preservados no ambiente de geração; o site depende apenas dos WebP locais. Bebidas complementares e fontes seguem as licenças em cada `ATIVOS.md`/`public/fonts`. Algumas fotos ilustram uma categoria, não um recheio individual. Alguns itens usam placeholder intencional para evitar foto incorreta.

## Testes executados

`npm run check` na raiz passou com **58 testes** distribuídos entre os seis aplicativos e o portal, além de lint e TypeScript. Depois do ajuste de retorno à sacola, lint, typecheck e os oito testes de cada novo projeto foram executados novamente e passaram.

Cada novo aplicativo passou por teste real de navegador em prévia local:

1. Login correto e abertura de 12 produtos; saída da apresentação.
2. Busca por “queijo”, filtro por categoria e recuperação de busca inexistente.
3. Produto aberto, Escape, fechamento e retorno de foco ao botão de origem.
4. Tentativa sem opção obrigatória: formulário permanece inválido.
5. Tamanho Grande + Queijo extra + observação; quantidade 2, inclusão e recarregamento.
6. Sacola recuperada, quantidade alterada para 3 e edição com opções/observação preservadas.
7. Salvar edição retorna à sacola — comportamento corrigido e novamente validado nos três.
8. Checkout sem nome permanece inválido; preenchimento fictício permite revisar.
9. Copiar mensagem, conferir quantidade, adicionais, observação, subtotal e aviso de simulação.
10. Remover item e verificar estado vazio da sacola.

| Projeto | Cálculo verificado para 3 unidades | Resultado |
| --- | --- | --- |
| Zico | (R$ 12,00 + R$ 5,00 + R$ 3,50) × 3 | R$ 61,50 |
| Modelo | (R$ 13,00 + R$ 5,00 + R$ 3,50) × 3 | R$ 64,50 |
| Da Mi | (R$ 16,00 + R$ 5,00 + R$ 3,50) × 3 | R$ 73,50 |

**Responsividade:** página e modal de produto dos três em 320, 375, 390, 768, 1024 e 1440 px: nenhuma rolagem horizontal detectada. Inspeção visual das capas desktop/mobile, detalhe de produto em 320 px e revisão mobile. Fluxos completos em 375 px. Sem erros ou avisos no console durante esses fluxos. Não foi realizado teste em aparelho físico ou validação de todos os leitores de tela.

Os testes de domínio incluem JSON corrompido, schema desconhecido, quantidade inválida, adicionais desconhecidos, formatação de valores e mensagem. O navegador também confirmou estados vazios, campos obrigatórios e retorno por teclado. Não foi simulada falha de disco/rede no navegador; o fallback de erro de imagem está implementado, sem alegar teste de interrupção de rede.

Evidências em `evidencias/tres-pastelarias-{responsividade,modais,fluxos,independentes}.json`, capturas `*-fluxo-mobile.png`, `*-detalhe-320.png`, `pastelarias-mobile.png` e `pastelarias-desktop.png`. Capturas são locais e ignoradas no Git.

## Builds independentes e performance

| Projeto | Build | JavaScript bruto / gzip | CSS bruto / gzip | Prévia independente validada |
| --- | --- | --- | --- | --- |
| Zico | Sucesso | 247,02 / 77,31 kB | 26,28 / 6,03 kB | `http://127.0.0.1:4176/` |
| Modelo | Sucesso | 247,20 / 77,26 kB | 27,83 / 6,19 kB | `http://127.0.0.1:4177/` |
| Da Mi | Sucesso | 247,08 / 77,39 kB | 27,07 / 6,14 kB | `http://127.0.0.1:4178/` |

Vite gerou assets relativos, fontes locais e saída estática `dist/`. Cada prévia acima foi aberta sem portal ou importações dos demais projetos, exibindo seu título e 12 produtos. O build da raiz também produziu as 13 rotas do portal. Não há biblioteca extra de estado, animação, componentes ou pagamentos. Imagens de catálogo usam lazy loading; destaques carregam imediatamente.

## Executar e publicar

Em cada pasta: `npm.cmd ci`, `npm.cmd run dev`. Portas de desenvolvimento: Zico 5176, Modelo 5177, Da Mi 5178. Build: `npm.cmd run build`; prévia do build: `npm.cmd run preview`. Na raiz: `npm.cmd run setup`, `npm.cmd run build`, `npm.cmd start` para testar as 13 rotas em `http://127.0.0.1:4180/Rendas-Digitais/`.

Os acessos novos do portal local são `zico`, `modelo` e `dami`, com senhas de apresentação fornecidas na entrega da conversa. O login é somente um separador visual; arquivos continuam públicos por construção. Não usar senhas pessoais.

**GitHub Pages:** o workflow existente foi preparado para instalar, verificar, construir e publicar os três diretórios adicionais, sem alterar as dez aplicações publicadas. Um futuro push autorizado em main publica todas as rotas. Separadamente, cada `dist/` pode ser publicado como artefato Pages em repositório próprio autorizado.

**Vercel:** cada pasta inclui `vercel.json` com framework Vite, build `npm run build` e saída `dist`. Selecione a pasta como Root Directory. Não há variáveis de ambiente ou backend a provisionar. Nenhuma publicação Vercel foi feita.

## Pendências e limites

Por empresa, confirmar: identidade e titularidade, WhatsApp do responsável e autorização de uso, endereço atual, horários, cardápio, preços, ingredientes/alergênicos, modalidades e condições de atendimento. Não se confirmou ausência de sistema de pedidos existente. O escopo entregue é protótipo comercial, sem estoque, painel administrativo, sincronização entre dispositivos, pagamento ou pedido real.

Os projetos anteriores foram preservados. O registro do portal e seu workflow foram ampliados para as novas rotas. A publicação usa o repositório Rendas-Digitais e a hospedagem GitHub Pages já autorizados nesta conversa; nenhum serviço externo adicional foi criado.
