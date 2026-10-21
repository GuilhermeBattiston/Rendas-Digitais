import {projects} from './projects.js?v=menus13';
export const SESSION_KEY = 'renda-digital-presentation-v1';
export const PROJECTS = projects.map(project => project.slug);
export const SESSION_DURATION = 8 * 60 * 60 * 1000;
export const BASE = new URL('../', import.meta.url);
export function validSession(value, project, now = Date.now()) {
  return !!value && typeof value === 'object' && PROJECTS.includes(value.project) && value.project === project && Number.isFinite(value.expires) && value.expires > now && value.expires <= now + SESSION_DURATION;
}
export function readSession(storage) {
  try { return JSON.parse(storage.getItem(SESSION_KEY)); } catch { return null; }
}
export function projectDestination(project, base = BASE) {
  if (!PROJECTS.includes(project)) throw new Error('Cardápio desconhecido.');
  return new URL(`${project}/`, base).href;
}
export async function passwordDigest(username, password) {
  const data = new TextEncoder().encode(`${username.trim()}:${password}`);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return [...new Uint8Array(digest)].map(n => n.toString(16).padStart(2, '0')).join('');
}
export function matchingAccount(accounts, username, digest) {
  if (!Array.isArray(accounts)) throw new Error('Configuração inválida.');
  return accounts.find(account => account && account.username === username.trim() && PROJECTS.includes(account.project) && typeof account.passwordHash === 'string' && account.passwordHash === digest) ?? null;
}
