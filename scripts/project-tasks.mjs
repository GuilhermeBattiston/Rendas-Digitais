import {spawnSync} from 'node:child_process';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {projects} from '../portal/projects.js';
const root=path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const operation=process.argv[2];
if(!['setup','check'].includes(operation))throw new Error('Operação inválida.');
function run(source,args){
  const result=spawnSync(process.platform==='win32'?'cmd.exe':'npm',process.platform==='win32'?['/d','/s','/c',`npm.cmd ${args.join(' ')}`]:args,{cwd:path.join(root,source),stdio:'inherit'});
  if(result.error)throw result.error;if(result.status!==0)process.exit(result.status??1);
}
for(const source of new Set(projects.map(p=>p.source))){
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(source))throw new Error('Diretório de projeto inválido.');
  if(operation==='setup')run(source,['ci']);else for(const script of ['lint','typecheck','test'])run(source,['run',script]);
}
if(operation==='check')run('.',['test']);
