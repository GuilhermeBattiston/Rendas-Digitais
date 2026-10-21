# Ativos e licenças

As fotografias são **ilustrativas**, sem vínculo com os estabelecimentos. Não documentam produtos reais, tamanhos, quantidades servidas ou ingredientes. Algumas fotos de pastéis representam a categoria e não cada recheio. Não foram copiadas fotos, logotipos ou textos do MenuDino/Restaurant Guru/Instagram.

## Fotografias geradas

Geradas com a ferramenta integrada Imagegen, otimizadas em WebP com Sharp e copiadas para `public/images` das aplicações. Não se usou a API/CLI de fallback. Prompts integrais e arquivos finais: `prompts-imagens.json`. Originais permanecem em `.codex/generated_images` no ambiente de criação; o site não depende deles.

- `pastel.webp`: pastéis com queijo, mesa alaranjada; presente nas duas aplicações e no destaque Mhay.
- `cafe-mesa.webp`: cappuccino, sanduíche e croissant; destaque exclusivo da Umai.
- `salgados.webp`, `pao-queijo.webp`, `refeicao.webp`: ilustrações fotográficas de categorias.
- `omelete.webp`: omelete com salada, utilizada na Umai.

## Fotografias Unsplash

Arquivos locais, sem hotlink. [Licença Unsplash](https://unsplash.com/license), consultada em 21/10/2026: permite download e uso comercial, sujeito às restrições descritas na licença. Não são ativos Unsplash+ nem se usa a API Unsplash. Os IDs abaixo identificam os arquivos consultados; não se inventou autoria individual.

| Arquivo local | Origem |
| --- | --- |
| `cafe.webp` | https://images.unsplash.com/photo-1509042239860-f550ce710b93 |
| `cappuccino.webp` | https://images.unsplash.com/photo-1572442388796-11668a67e53d |
| `sanduiche.webp` e `natural.webp` | https://images.unsplash.com/photo-1528735602780-2552fd46c7af |
| `bolo.webp` | https://images.unsplash.com/photo-1578985545062-69928b1d9587 |
| `cookie.webp` | https://images.unsplash.com/photo-1499636136210-6f4ee915583e |
| `suco.webp` | https://images.unsplash.com/photo-1600271886742-f049cd451bba |

## Tipografia e elementos gráficos

DM Sans e Fraunces distribuídas via Fontsource/jsDelivr, com os arquivos de licença OFL junto dos WOFF2 em `public/fonts`. Fontes carregadas localmente, com `font-display: swap` e alternativas do sistema. Os símbolos, favicon e lettering do protótipo são construídos em SVG/CSS/texto; não reproduzem o logotipo oficial. SVGs são estáticos e não recebem conteúdo externo.
