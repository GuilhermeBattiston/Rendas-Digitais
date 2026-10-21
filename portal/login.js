import {BASE, SESSION_KEY, SESSION_DURATION, matchingAccount, passwordDigest, projectDestination} from './session.js?v=menus10';
const form = document.querySelector('#login-form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const error = document.querySelector('#error');
const submit = form.querySelector('[type=submit]');
const toggle = document.querySelector('#toggle-password');
function showError(message) { error.textContent = message; error.hidden = false; }
function busy(value) {
  submit.disabled = value;
  form.setAttribute('aria-busy', String(value));
  form.querySelector('.button-label').textContent = value ? 'Abrindo sua apresentação…' : 'Acessar cardápio';
  form.querySelector('.spinner').hidden = !value;
  form.querySelector('.button-arrow').hidden = value;
}
toggle.addEventListener('click', () => {
  const visible = password.type === 'password';
  password.type = visible ? 'text' : 'password';
  toggle.setAttribute('aria-label', visible ? 'Ocultar senha' : 'Mostrar senha');
  toggle.setAttribute('aria-pressed', String(visible));
  toggle.querySelector('.eye-open').hidden = visible;
  toggle.querySelector('.eye-closed').hidden = !visible;
});
if(new URLSearchParams(location.search).has('expired')) showError('Entre com o acesso do cardápio que você deseja visualizar.');
form.addEventListener('submit', async event => {
  event.preventDefault();
  if(submit.disabled) return;
  error.hidden = true;
  username.removeAttribute('aria-invalid'); password.removeAttribute('aria-invalid');
  if(!username.value.trim() || !password.value.trim()) {
    showError('Informe seu usuário e sua senha para continuar.');
    const field = !username.value.trim() ? username : password;
    field.setAttribute('aria-invalid','true'); field.setAttribute('aria-describedby','error'); field.focus(); return;
  }
  busy(true);
  try {
    const response = await fetch(new URL('portal/access.json', BASE), {cache:'no-store'});
    if(!response.ok) throw new Error('Configuração indisponível.');
    const accounts = await response.json();
    const account = matchingAccount(accounts, username.value, await passwordDigest(username.value, password.value));
    if(!account) {showError('Usuário ou senha incorretos.');password.setAttribute('aria-invalid','true');password.focus();return;}
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({project:account.project,expires:Date.now()+SESSION_DURATION}));
    location.replace(projectDestination(account.project));
  } catch {
    showError('Não foi possível abrir a apresentação. Verifique a conexão e se o navegador permite armazenamento nesta sessão.');
  } finally { busy(false); }
});
