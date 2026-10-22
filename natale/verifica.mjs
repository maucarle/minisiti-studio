// Controllo del minisito costruito (dist/). Si lancia dopo la build: `npm run verifica`.
// Esce con 1 se qualcosa non va, e dice cosa e dove.
import fs from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const errori = [];
const sbaglia = (dove, cosa) => errori.push(`${dove}: ${cosa}`);

const html = [];
(function giro(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) giro(p);
    else if (p.endsWith('.html')) html.push(p);
  }
})(DIST);

const attese = ['index.html', 'sessioni/index.html', 'ritratto/index.html', 'regala/index.html', 'idee-regalo/index.html', 'come-vestirsi/index.html', '404.html'];
for (const a of attese) if (!fs.existsSync(path.join(DIST, a))) sbaglia(a, 'pagina mancante');

// Dati unici: i prezzi scritti nelle pagine devono essere quelli di src/data/natale.ts
const dati = fs.readFileSync('src/data/natale.ts', 'utf8');
const APERTO = /export const APERTO = true/.test(dati);
const prezzi = [...dati.matchAll(/nome: '([^']+)',\s*(?:conArticolo: '[^']+',\s*)?prezzo: (\d+),/g)].map((m) => ({ nome: m[1], prezzo: m[2] }));
if (prezzi.length !== 3) sbaglia('src/data/natale.ts', `attese 3 proposte, trovate ${prezzi.length}`);

// Parole che la voce di Elisabetta non usa (documento voce e handoff del Natale)
const vietate = [/\bmagi[ac]\w*/i, /ricordi per sempre/i, /emozioni uniche/i, /immortal/i, /posti limitati/i, /affrettat/i, /—/];

for (const file of html) {
  const rel = path.relative(DIST, file);
  const s = fs.readFileSync(file, 'utf8');
  const testo = s.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

  for (const v of vietate) { const m = testo.match(v); if (m) sbaglia(rel, `parola o segno da evitare: "${m[0]}"`); }
  for (const m of testo.matchAll(/\bcalma\b.{0,20}/gi)) if (!/a casa/.test(m[0])) sbaglia(rel, `"calma" fuori da "con calma, a casa": "${m[0]}"`);
  if (/lorem|ipsum|TODO|undefined|NaN/.test(testo)) sbaglia(rel, 'testo segnaposto o valore rotto');

  // Robots: finché il sito è in prova, ogni pagina dice noindex
  if (!APERTO && !s.includes('name="robots" content="noindex, nofollow"')) sbaglia(rel, 'manca il noindex del sito in prova');
  if (!/<title>[^<]{10,}<\/title>/.test(s)) sbaglia(rel, 'titolo mancante o troppo corto');
  if (!/<meta name="description" content="[^"]{40,}"/.test(s)) sbaglia(rel, 'descrizione mancante o troppo corta');

  // Link interni: ogni href che comincia con / deve esistere in dist
  for (const m of s.matchAll(/href="(\/[^"#?]*)(#[^"]*)?"/g)) {
    const u = m[1];
    const candidati = [path.join(DIST, u), path.join(DIST, u, 'index.html')];
    if (!candidati.some((c) => fs.existsSync(c) && fs.statSync(c).isFile())) sbaglia(rel, `link interno rotto: ${u}`);
  }

  // Link WhatsApp: numero giusto, testo leggibile, niente emoji (wa.me le rovina su WhatsApp Desktop)
  for (const m of s.matchAll(/href="https:\/\/wa\.me\/(\d+)\?text=([^"]+)"/g)) {
    if (m[1] !== '393336265276') sbaglia(rel, `numero WhatsApp inatteso: ${m[1]}`);
    const t = decodeURIComponent(m[2].replace(/&amp;/g, '&'));
    if (/\p{Extended_Pictographic}/u.test(t)) sbaglia(rel, `emoji nel messaggio WhatsApp: ${t}`);
    if (!t.startsWith('Ciao Elisabetta')) sbaglia(rel, `messaggio WhatsApp senza saluto: ${t}`);
  }

  // Prezzi: se una pagina nomina una proposta col prezzo, il prezzo è quello dei dati
  for (const p of prezzi) {
    for (const m of testo.matchAll(new RegExp(`${p.nome}[^€\\d]{0,6}(\\d{3}) €`, 'g'))) {
      if (m[1] !== p.prezzo) sbaglia(rel, `${p.nome} a ${m[1]} € invece di ${p.prezzo} €`);
    }
  }
}

const robots = fs.readFileSync(path.join(DIST, 'robots.txt'), 'utf8');
if (!APERTO && !/Disallow: \//.test(robots)) sbaglia('robots.txt', 'il sito in prova deve chiudere i motori di ricerca');

// Le foto mancanti restano segnaposto: elenco per sapere cosa manca, non è un errore
const mancanti = new Set();
for (const file of html) for (const m of fs.readFileSync(file, 'utf8').matchAll(/data-file="([^"]+)"/g)) mancanti.add(m[1]);

console.log(`Pagine controllate: ${html.length}. Sito ${APERTO ? 'APERTO' : 'in prova (noindex)'}.`);
console.log(`Foto ancora da mettere (${mancanti.size}):\n  ${[...mancanti].sort().join('\n  ')}`);
if (errori.length) {
  console.error(`\n${errori.length} problemi:\n  ${errori.join('\n  ')}`);
  process.exit(1);
}
console.log('\nTutto a posto.');
