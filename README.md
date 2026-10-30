# minisiti-studio

Minisiti di stagione dello Studio Elisabetta Acquaviva, fuori dal tema WordPress del sito principale.
Una cartella per campagna, un progetto Cloudflare Pages e un sottodominio ciascuna.

| cartella | indirizzo | progetto Pages |
|---|---|---|
| `natale/` | natale.elisabettacquaviva.it (CNAME messo da Edita il 22/10/2026, attivo) | `natale-acquaviva` → natale-acquaviva.pages.dev |

## Regole
- **Il repo resta privato.** Pages pubblica solo `natale/dist`, ma appunti, liste e documenti di lavoro non entrano mai qui: vivono in `~/projects-registry/projects/minisiti-studio/artefatti/`.
- **Foto**: solo con liberatoria per il web, mai immagini sintetiche di bambini, nemmeno come segnaposto.
- **Prezzi**: un solo posto. La pagina WordPress del Natale rimanda qui.

## Comandi (dentro la cartella della campagna)
```
cd natale
npm install
npm run dev      # anteprima locale
npm run build    # produce dist/
npm run verifica # controlla dist/: link, prezzi, parole vietate, WhatsApp, noindex
```

## Natale: dove si cambia cosa
- **Prezzi, date, contatti, idee regalo, domande**: solo in `natale/src/data/natale.ts`. Le pagine li leggono da lì.
- **Apertura al pubblico**: `APERTO = true` in `natale/src/data/natale.ts` (toglie il noindex e apre robots.txt). Prima: CNAME attivo, sì di Elisabetta, prezzi delle idee regalo confermati.
- **Foto**: si copiano in `natale/public/foto/` col nome giusto e compaiono da sole al posto del segnaposto. `npm run verifica` stampa l'elenco di quelle che mancano:
  - `set/set-01.jpg` (apertura, orizzontale 16:9), `set/set-02.jpg` la porta, `set/set-03.jpg` scala con le coperte e legna, `set/set-04.jpg` finestra e albero (verticali 4:5, ritagliate dalle prove del set in Studio2026/04 NATALE/PROVE)
  - `ritratto.jpg` (verticale 4:5, un ritratto di famiglia in studio, con liberatoria per il web)
  - `vasetto.jpg` (verticale 4:5)
  - `set/porta.jpg`: la porta vera del set, frontale e dritta, ritagliata sul solo battente, con niente davanti (lanterne, oggetti). Se c'è, i battenti della porta che si apre in home diventano fotografici; il modo (`meta` o `doppia`) si sceglie con `MODO_PORTA` in `natale/src/data/natale.ts`. Lato lungo almeno 1600 px.
  - `regali/insieme.jpg` (4:3) e una quadrata per ogni idea regalo (`regali/palla.jpg`, `regali/album.jpg`… i nomi sono in `natale.ts`)
  - Lato lungo 1600-2000 px, JPG di qualità 80 circa. Mai foto di bambini senza liberatoria per il web, mai immagini sintetiche.

## Cloudflare Pages (per ogni campagna)
Framework preset Astro, **Root directory** `natale`, build `npm run build`, **output** `dist`.
Se l'output resta vuoto Pages serve la radice: il campo va controllato.
L'app GitHub «Cloudflare Workers and Pages» vede solo i repo scelti uno per uno: un repo nuovo va aggiunto da GitHub → Settings → Applications (chiede la password).

## Skill di design (in `.claude/`, valgono per chi apre Claude Code in questo repo)
- **frontend-design** (Anthropic): è nella cartella personale `~/.claude/skills/`, va caricata prima di ogni lavoro di design.
- **GSAP**, le skill ufficiali (`gsap-core`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-plugins`, `gsap-performance`, `gsap-utils`), copiate il 22/10/2026 da github.com/greensock/gsap-skills (MIT). Solo istruzioni, nessun codice.
- **Impeccable** 4.7.0 (`/impeccable`, con i comandi critique, audit, animate, bolder, polish…), copiata il 22/10/2026 da github.com/pbakaus/impeccable (Apache 2.0), con i suoi quattro agenti in `.claude/agents/`. Il lanciatore `scripts/impeccable` scarica una volta il suo programma da GitHub, con verifica dell'impronta, in `~/.impeccable`. **Gli hook di Impeccable NON sono installati** (nel repo originale girano a ogni modifica di file e a fine turno): si attivano solo se decide Mauro.
- **PRODUCT.md**, nella radice: le regole dello studio (voce, foto, privacy dei minori, prezzi, stile) che Impeccable legge a ogni comando. Si aggiorna lì, non nei prompt.
- Per aggiornare le skill: si riscaricano dai due repo e si ricopiano le cartelle, guardando cosa cambia prima di committare.
