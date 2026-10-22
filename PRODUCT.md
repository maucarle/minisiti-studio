# Product

<!-- impeccable:product-schema 1 -->

*Written 2026-10-22 from the studio's confirmed sources (Officina knowledge: studio-elisabetta, listino-studio-2026, cornici-studio, campagne-parco-clienti; Elisabetta's voice document `~/claude-workspace/context/voce-elisabetta.md`; the Natale 2026 handoff in direzione-commerciale). Site copy is Italian; this record is in English for the design tools. Read the voice document before writing any visitor-facing text.*

## Platform

web

## Stack

Astro (static output), one folder per campaign (`natale/`, later others), each published by its own Cloudflare Pages project on a subdomain of elisabettacquaviva.it. Vanilla JS for interactions; GSAP is allowed for motion. No backend on Pages: live parts (slot availability, gift-voucher requests) will live on the studio's existing PHP/MySQL VPS (eaprivate.com). Prices, dates and copy data live in one file per campaign (`natale/src/data/natale.ts`); `npm run verifica` checks the built site.

## Users

- **Mothers and families from Rimini and nearby**, arriving mostly from Elisabetta's Instagram stories and reels, on a phone, often in the evening with little time and a child nearby. Many are returning clients (about 1 in 3 Christmas families came the year before).
- **People buying a gift**: grandparents, godmothers, partners, friends, looking for something personal for a family or a mother-to-be.
- **Elisabetta herself** must recognise her own voice in every line; she approves before anything opens.

## Product Purpose

Seasonal minisites for the photo studio of Elisabetta Acquaviva, free from the constraints of the studio's WordPress theme. Each one sells one season or campaign (first: the Christmas set 2026, with three proposals; next: the "Ritratto 10 anni dopo" for families photographed about ten years ago). Success: the visitor understands what she gets and for how much, and writes to Elisabetta on WhatsApp with the message already composed. Booking and payment stay human: the site prepares the message, Elisabetta confirms.

## Positioning

Elisabetta Acquaviva is a family, newborn and maternity photographer with 35 years of practice, and also a trained doula: the doula training deepens her way of looking, it is never presented as her job. "Ritratti d'autore". Prints are made in the studio on fine art paper with a 12-ink plotter; frames are always delivered without glass, by choice (the paper stays visible, no reflections). The studio keeps the archive of past sessions, so it can pair a family's portrait from ten years ago with today's.

## Operating Context

- First contact happens on Instagram; closing happens on WhatsApp (+39 333 6265276). Messages must be plain text without emoji (wa.me corrupts them on WhatsApp Desktop).
- After a session the family receives a private online gallery and chooses photos at home.
- The gift voucher is a ritual, not a gift card: Elisabetta hand-packs it in a preserving jar ("vasetto della conserva") with the giver's dedication printed inside. Never offer downloadable or digital vouchers.
- The studio is at Via di Mezzo 87, 47923 Rimini.

## Capabilities and Constraints

- Static pages plus small client-side interactions (message composer, voucher dedication preview, frame preview, gift filter).
- Sites stay `noindex` until a campaign's `APERTO` flag is set after Elisabetta's approval.
- Mobile first: visitors are on phones, often on 4G. Heavy media must be lazy, light, with a poster image and a `prefers-reduced-motion` fallback. Test on iPhone Safari.
- Photos: only Elisabetta's own photos. Photos of children only with a web release. **Never synthetic or AI-generated images of children, not even as placeholders or product mockups. Never stock photos of families.** Until real photos arrive, use the placeholder component (`Foto.astro`).
- Prices come only from the campaign data file and the official price list; never invent offers, discounts, deadlines or delivery dates.
- Undecided for Christmas 2026: answers to some FAQ (minimum child age, crying child, illness and rescheduling, group size) and 2026 prices of the gift ideas.

## Brand Commitments

- **Voice**: Elisabetta's, first person, "voi" to families and "tu" to one person; warm, concrete, Romagna-direct. No em dashes. Banned words: magia, magico, ricordi per sempre, emozioni uniche, immortalare, posti limitati, affrettati. For the Christmas mini sessions never describe the session as calm ("con calma" only for choosing photos at home). No hype, no countdowns of fake scarcity, no struck-through prices.
- **Visual style "Diario d'inverno"** (chosen 2026-10-22, continuous with the launch reel and leaflet, "stile B"): Cormorant Garamond (italic for display) with Inter; cream background `#F5F0E4`, bordeaux `#6E191F`, forest green `#1E3A2A`, gold `#E3C7A6`, hairlines `#D8CFBF`. Editorial masthead "Edizione di Natale · N° 2026".
- **Set palette for clothing advice**: avorio `#EFE6D2`, corda `#CDB89A`, cammello `#A47A4F`, verde bosco `#2F4A35`, bordeaux `#6E191F`, noce `#5A3B26`.
- **Motifs already in use**: the red door of the 2026 set ("Natale è alle porte"), the opaline-glass bars of the launch reel ("vedo non vedo"), words arriving one by one.

## Evidence on Hand

- Approved copy: `~/Documents/GitHub/direzione-commerciale/filoni/proposta/` (natale-2026-handoff-eli.md, natale-2026-pagina-sito.html, natale-2026-testi-lancio.md) and the leaflet in `~/Documents/GitHub/reel-studio/materiali/lancio-natale-2026/pieghevole/`.
- Launch reel and its HTML source: `~/Documents/GitHub/reel-studio/materiali/lancio-natale-2026/vedo-non-vedo/`.
- Real Google reviews already published on the main site (first name and initial), listed in `natale/src/data/natale.ts`.
- **Absent, do not fabricate**: photos of the real 2026 set (expected 2026-10-25), photos of the gift objects and of the jar, backstage video, testimonials about the Christmas set specifically.

## Product Principles

1. The visitor sees herself, not a template: real photos, real words, the studio's own objects.
2. One strong signature moment per site; everything around it stays quiet.
3. The price is clear on the page; the booking is a human conversation.
4. True urgency only (real dates, real availability), never invented.
5. Respect for children's privacy beats any design effect.

## Accessibility & Inclusion

Readable on small phones at arm's length; tap targets at least 44px; visible focus; motion always optional (`prefers-reduced-motion`).
