# minisiti-studio

Minisiti di stagione dello Studio Elisabetta Acquaviva, fuori dal tema WordPress del sito principale.
Una cartella per campagna, un progetto Cloudflare Pages e un sottodominio ciascuna.

| cartella | indirizzo | progetto Pages |
|---|---|---|
| `natale/` | natale.elisabettacquaviva.it (CNAME da Edita) | `natale-acquaviva` → natale-acquaviva.pages.dev |

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
```

## Cloudflare Pages (per ogni campagna)
Framework preset Astro, **Root directory** `natale`, build `npm run build`, **output** `dist`.
Se l'output resta vuoto Pages serve la radice: il campo va controllato.
L'app GitHub «Cloudflare Workers and Pages» vede solo i repo scelti uno per uno: un repo nuovo va aggiunto da GitHub → Settings → Applications (chiede la password).
