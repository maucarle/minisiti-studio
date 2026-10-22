import type { APIRoute } from 'astro';
import { APERTO } from '../data/natale';

// Finché il sito è in prova (APERTO = false) i motori di ricerca restano fuori.
export const GET: APIRoute = () =>
  new Response(APERTO ? 'User-agent: *\nAllow: /\n' : 'User-agent: *\nDisallow: /\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
