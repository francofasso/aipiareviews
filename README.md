# aipiarecensioni.com

Sito statico (nessun build necessario per andare online: questi sono già i file pronti da caricare).

## Contenuto

- `index.html`: home con le 102 recensioni (10 Google Maps + 2 Trustpilot con link alla recensione originale, 90 multi-canale da varie fonti dirette).
- `chi-siamo.html`, `privacy-policy.html`, `cookie-policy.html`, `lascia-recensione.html`, `404.html`: le altre pagine.
- `style.css`, `script.js`: stile (font Fraunces/Inter, palette navy/oro) e funzionalità (ricerca/filtro/ordinamento recensioni, banner cookie).
- `robots.txt`, `sitemap.xml`, `llms.txt`: file SEO e per i crawler AI.
- `site.webmanifest`, icone: PWA/favicon.
- `vercel.json`: URL puliti e header di sicurezza per Vercel.

## Nota

Questo file torna al design che avevi già approvato (quello caricato in chat), non alla versione "strana" generata subito dopo il ripristino dell'ambiente. Tutte le 102 recensioni sono state riportate dentro questo design.

## Fonti delle recensioni

- Google Maps (10): link alla scheda ufficiale AIPIA su Google, badge verde di fonte verificabile.
- Trustpilot (2): link diretto alla recensione originale, badge verde.
- LinkedIn (tra le 90): badge verde, essendo fonte pubblicamente verificabile.
- Le altre provengono da canali diretti (WhatsApp, email, Instagram, Facebook Messenger, Telegram, feedback post-corso/webinar/evento/call, soci): etichetta del canale ma senza badge verde, perché non pubblicamente verificabili.
- Le date delle 90 recensioni multi-canale non erano disponibili in modo preciso, quindi il sito mostra "Data non indicata" per queste.

## Prima di andare online

1. Crea un form gratuito su [formspree.io](https://formspree.io) e sostituisci l'URL segnaposto `https://formspree.io/f/SOSTITUISCI-CON-IL-TUO-ID-FORMSPREE` dentro `lascia-recensione.html` con il tuo endpoint reale.
2. Se vuoi vedere il sito in locale, non aprire `index.html` con doppio click (il browser blocca alcune risorse via `file://`). Usa un servizio come [Netlify Drop](https://app.netlify.com/drop) trascinando questa cartella, oppure carica direttamente su Vercel.

## Come pubblicare su Vercel

1. Vai su vercel.com, crea un nuovo progetto.
2. Carica questa cartella (o collega il repository GitHub dove l'hai messa).
3. Lascia vuoto il "Build Command" (è un sito statico, non serve build).
4. Collega il dominio aipiarecensioni.com nelle impostazioni del progetto, poi punta il DNS su Cloudflare come indicato da Vercel (di solito un record CNAME o A verso Vercel).

## Come aggiungere altre recensioni

Non serve toccare il codice: incollami in chat il testo delle recensioni (in qualsiasi formato, anche solo copia-incolla da Google/Trustpilot/WhatsApp) e ti rimando la home aggiornata o lo zip completo.

## Nota sul consenso

Alcune recensioni provengono da canali privati (WhatsApp, email, messaggi diretti). Prima di pubblicarle con nome e cognome, assicurati di avere il consenso della persona che le ha scritte.
