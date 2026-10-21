# Pastelaria Modelo — demonstração independente

Projeto: **pastelaria-modelo-prototipo**. Aplicação independente React 19 + TypeScript 5 + Vite 7, sem backend e com build próprio.

## Conceito e diferencial

Cardápio gráfico: azul cobalto, branco e amarelo pontual, tipografia sans forte e destaque de produto. Tabs horizontais e grade de comparação.

Categorias clássicos/especiais/doces organizam a comparação; CTA do destaque abre diretamente a personalização.

A identidade é conceitual, não uma reprodução de marca oficial. Há 12 produtos fictícios, busca sem acentos, categorias, estado vazio, foto ampliada, tamanhos obrigatórios, adicionais, quantidade e observações. A sacola permite editar/remover itens, calcular subtotal em centavos e recuperar o estado local. Editar um item retorna à sacola.

O checkout pede nome fictício, permite modalidade apenas simulada e gera mensagem formatada para copiar. **Nenhum pedido é enviado.** O WhatsApp da prospecção não foi confirmado; não há link de envio, pagamento, reserva, prazo ou frete real.

## Executar e verificar

Requer Node 24 e npm. Nesta pasta:

```powershell
npm.cmd ci
npm.cmd run dev
```

Desenvolvimento: http://127.0.0.1:5177/. No macOS/Linux, use npm no lugar de npm.cmd.

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd test
npm.cmd run build
npm.cmd run preview
```

Prévia estática: http://127.0.0.1:4177/. Cada build usa somente os arquivos desta pasta e gera dist/.

## Portal local do projeto

Na raiz de Rendas digitais: npm.cmd run setup, npm.cmd run build e npm.cmd start. Acesse http://127.0.0.1:4180/Rendas-Digitais/ com o acesso de apresentação entregue. A rota desta aplicação é /Rendas-Digitais/modelo/. O separador visual é inserido apenas pelo build do portal; o build independente abre diretamente.

O workflow do portal inclui a nova rota na publicação GitHub Pages, seguindo a autorização anterior da conversa para hospedar os cardápios em Rendas-Digitais. Os dez cardápios anteriores não foram reescritos.

## Editar dados e imagens

- src/data.ts: configuração comercial, fonte, contato não verificado, chave de armazenamento, categorias e produtos. Preços são inteiros em centavos.
- src/App.tsx e src/style.css: apresentação exclusiva.
- src/Catalog.tsx e src/foundation.css: componentes do catálogo e regras de acessibilidade.
- src/components.tsx, src/domain.ts, src/commerce.css: interação, carrinho, validação, formatação e componentes transacionais.
- public/images/: WebP locais. IMAGENS.json registra prompts integrais e originais gerados, com ferramenta integrada Imagegen.
- public/fonts/: DM Sans/Fraunces e licenças OFL.
- tests/: lógica do carrinho/mensagem e integridade do catálogo.

Mantenha ids estáveis ao editar produtos, escolhas e extras. Ao mudar estrutura ou valores incompatíveis, versione brand.storageKey. Confirme todos os dados com o proprietário antes de substituir exemplos por conteúdo oficial. Alterar verifiedWhatsapp não ativa envio: o fluxo de demonstração continua sem contato.

## Publicar separadamente

**GitHub Pages:** rode npm run build e publique o conteúdo de dist/ como artefato Pages com GitHub Actions no repositório autorizado. base './' em vite.config.ts mantém assets e fontes funcionais em subpastas; não há rotas de SPA dependentes de fallback. O portal deste repositório já possui workflow preparado, que inclui o diretório pelo registro portal/projects.js.

**Vercel:** importe o repositório autorizado, selecione esta pasta como Root Directory e use o vercel.json incluído: npm run build, saída dist, framework Vite. Não requer variáveis secretas. Nenhum projeto Vercel foi criado ou publicado.

## Fontes, confirmação e qualidade

A referência individual e seus limites constam em brand.source/researchNote e na seção informativa da página. Veja docs/PESQUISA.md, docs/SKILLS.md e docs/ENTREGA.md para pesquisa completa, skills efetivamente utilizadas, comparação e resultados dos testes.

Dados pendentes em cada empresa: responsável e telefone oficial, identidade real, endereço operacional, horários, catálogo, preços, ingredientes/alergênicos, direitos sobre materiais e condições de atendimento. Não foi comprovada ausência de sistema existente.

Limites: demonstração de navegador, armazenamento local sem sincronização, sem estoque, backoffice, pedidos reais ou pagamentos. As fotografias representam categorias ilustrativas; não garantem correspondência de recheio. Alguns itens usam placeholder acessível para evitar uma foto incorreta. Não houve auditoria em aparelho físico nem medição Lighthouse.
