# Renda Digital — protótipos comerciais

Dez cardápios comerciais em três aplicações, criados em 21/10/2026. Sem vínculo oficial com os estabelecimentos. Não recebem pedidos, não cobram e não enviam mensagens.

| Aplicação | Diretório | Desenvolvimento | Prévia do build |
| --- | --- | --- | --- |
| Mhay | `mhay-cardapio-prototipo` | http://127.0.0.1:5173 | http://127.0.0.1:4173 |
| Umai | `umai-cardapio-prototipo` | http://127.0.0.1:5174 | http://127.0.0.1:4174 |
| Oito novos cardápios | `cardapios-restaurantes` | http://127.0.0.1:5175/?restaurante=cwb-acai | http://127.0.0.1:4175 |

Abra um terminal por aplicação, entre na pasta e execute `npm ci` e `npm run dev`. No PowerShell, use `npm.cmd` se a política local bloquear `npm.ps1`. Node.js 24 LTS recomendado; Vite exige versão compatível, a partir de Node 20.19/22.12.

Para preparar e apresentar o **portal com login e os dez cardápios**, execute na pasta raiz:

```powershell
npm.cmd run setup
npm.cmd run build
npm.cmd start
```

Abra http://127.0.0.1:4180/Rendas-Digitais/. Entre com o usuário e a senha de apresentação de cada restaurante, fornecida na entrega. O servidor é estático e só escuta neste computador. Encerre com Ctrl+C. Se alterar o código, execute `npm.cmd run build` na raiz novamente. `npm.cmd run check` verifica os três aplicativos e o portal.

O portal segue a apresentação WebForge do repositório `GuilhermeBattiston/projetos`, adaptada para este repositório. O acesso é apenas um separador visual: arquivos são públicos, o fluxo roda no navegador e não constitui autenticação de servidor. Nenhum dado confidencial deve depender dessa tela. Cada conta direciona ao seu cardápio, mantém a seleção durante a sessão e tem uma ação de saída. Navegação cruzada volta ao cardápio selecionado; entrada direta sem sessão volta ao portal.

`portal/access.json` contém um acesso por cardápio com hash SHA-256 de `usuario:senha`, sem senha em texto. O build do portal fica em `pages-dist/`, ignorado no Git; builds individuais em `dist/` continuam disponíveis para desenvolvimento independente e não incluem essa tela de entrada.

## Repositório e publicação

Repositório: https://github.com/GuilhermeBattiston/Rendas-Digitais. O GitHub Pages está configurado com origem GitHub Actions. O workflow `.github/workflows/portal.yml` instala, verifica, constrói e publica os projetos em pushes para `main`. Também pode ser executado manualmente com **Publicar no GitHub Pages** marcado. Endereço do portal: https://guilhermebattiston.github.io/Rendas-Digitais/.

Não são necessárias variáveis secretas para os protótipos nem para o separador visual. O arquivo de acessos é público por construção; não use senhas pessoais ou reutilizadas.

Cada pasta tem seu próprio `package.json`, lockfile, código, imagens, fontes e configuração de publicação. Mhay e Umai são aplicações independentes; os oito novos conceitos compartilham o aplicativo `cardapios-restaurantes`, com catálogos e identidades próprios. Consulte [os oito novos cardápios](NOVOS-CARDAPIOS.md).

- [Pesquisa e confiabilidade](PESQUISA.md)
- [Relatório da entrega](RELATORIO.md)
- [Ativos e licenças](ATIVOS.md)
- [Verificações e capturas](evidencias/)
- [Manual Mhay](mhay-cardapio-prototipo/README.md)
- [Manual Umai](umai-cardapio-prototipo/README.md)

Os endereços de loopback funcionam neste computador enquanto os servidores estiverem em execução. Para apresentação online, utilize o endereço do GitHub Pages acima.
