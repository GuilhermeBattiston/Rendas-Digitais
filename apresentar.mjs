import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const publicRoot=path.resolve(root,'pages-dist');
const base='/Rendas-Digitais/';
const mime={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.webp':'image/webp','.svg':'image/svg+xml','.woff2':'font/woff2'};
http.createServer(async(req,res)=>{
 try{
  const pathname=decodeURIComponent(new URL(req.url,'http://127.0.0.1').pathname);
  if(pathname==='/'||pathname==='/Rendas-Digitais'){res.writeHead(302,{Location:base});res.end();return}
  if(['/mhay/','/umai/'].includes(pathname)){res.writeHead(302,{Location:base+pathname.slice(1)});res.end();return}
  if(!pathname.startsWith(base)){res.writeHead(404);res.end('Prévia não encontrada.');return}
  let file=path.resolve(publicRoot,pathname.slice(base.length));
  if(file!==publicRoot&&!file.startsWith(publicRoot+path.sep)){res.writeHead(403);res.end('Acesso não permitido.');return}
  if((await stat(file)).isDirectory())file=path.join(file,'index.html');
  const data=await readFile(file);res.writeHead(200,{'Content-Type':mime[path.extname(file)]??'application/octet-stream','X-Content-Type-Options':'nosniff','Cache-Control':'no-store'});res.end(data);
 }catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Arquivo não encontrado. Execute npm run build na raiz antes de apresentar.');}
}).listen(4180,'127.0.0.1',()=>console.log('Portal: http://127.0.0.1:4180/Rendas-Digitais/\nSomente apresentação local. Ctrl+C para encerrar.'));
