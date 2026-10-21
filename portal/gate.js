import {BASE,SESSION_KEY,readSession,validSession,projectDestination} from './session.js?v=menus10';
const script = document.querySelector('script[data-cardapio]');
const project = script?.dataset.cardapio;
function check() {
  const session = readSession(sessionStorage);
  if (validSession(session, project)) {document.documentElement.removeAttribute('data-gate-pending');return true;}
  if (session && validSession(session, session.project)) location.replace(projectDestination(session.project));
  else location.replace(new URL('?expired=1',BASE));
  return false;
}
if(check()) {
  window.addEventListener('pageshow',check);
  window.addEventListener('focus',check);
  function mountExit(){
    const button=document.createElement('button');button.type='button';button.className='presentation-exit';button.textContent='Sair da apresentação';
    button.addEventListener('click',()=>{try{sessionStorage.removeItem(SESSION_KEY);}finally{location.replace(BASE.href);}});
    document.body.append(button);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',mountExit,{once:true}); else mountExit();
}
