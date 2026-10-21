import {cp,mkdir,readFile,rm,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
const root=path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const out=path.resolve(root,'pages-dist');
if(path.dirname(out)!==root||path.basename(out)!=='pages-dist') throw new Error('Saída de build inválida.');
await rm(out,{recursive:true,force:true});await mkdir(out,{recursive:true});
await cp(path.join(root,'portal'),path.join(out,'portal'),{recursive:true,filter:sourcePath=>path.basename(sourcePath)!=='index.html'});
await writeFile(path.join(out,'index.html'),await readFile(path.join(root,'portal','index.html'),'utf8'));
await writeFile(path.join(out,'.nojekyll'),'');
for(const [slug,source] of [['mhay','mhay-cardapio-prototipo'],['umai','umai-cardapio-prototipo']]) {
  const command=process.platform==='win32'?'cmd.exe':'npm';
  const args=process.platform==='win32'?['/d','/s','/c','npm.cmd run build']:['run','build'];
  const result=spawnSync(command,args,{cwd:path.join(root,source),stdio:'inherit'});
  if(result.error)throw result.error;if(result.status!==0)process.exit(result.status??1);
  const target=path.join(out,slug);await cp(path.join(root,source,'dist'),target,{recursive:true});
  const file=path.join(target,'index.html');let html=await readFile(file,'utf8');
  html=html.replace('<html lang="pt-BR">','<html lang="pt-BR" data-gate-pending>');
  html=html.replace('<head>',`<head>\n<link rel="stylesheet" href="../portal/session.css">\n<script type="module" data-cardapio="${slug}" src="../portal/gate.js"></script>`);
  await writeFile(file,html);
}
console.log('Portal e dois cardápios preparados em pages-dist. Separador visual, sem autenticação de servidor.');
