import {restaurants,restaurantFor} from './catalogs';
const route=typeof location==='undefined'?'cwb-acai':new URLSearchParams(location.search).get('restaurante')??location.pathname.split('/').filter(Boolean).at(-1)??'cwb-acai';
export const restaurant=restaurantFor(route)??(route==='Rendas-Digitais'||route==='index.html'?restaurants[0]:undefined);
export const products=restaurant?.products??[];
export const categories=restaurant?.categories??[];
export const brand={name:restaurant?.short??'Prévia',fullName:restaurant?.name??'Cardápio não encontrado',storageKey:`${restaurant?.slug??'unknown'}-demo-cart-v1`,address:restaurant?.address??'',contact:restaurant?.phone??'',contactStatus:restaurant?.sourceNote??'',verifiedWhatsapp:null as string|null};
