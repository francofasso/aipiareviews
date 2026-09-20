# aipiarecensioni.com

Sito statico (nessun build necessario per andare online: questi sono già i file pronti da caricare).

## Contenuto

- `index.html`: home con le recensioni (102 in totale: 10 Google Maps con link alla scheda AIPIA, 2 Trustpilot con link alla recensione originale, 90 multi-canale da varie fonti dirette).
- `chi-siamo.html`, `privacy-policy.html`, `cookie-policy.html`, `lascia-recensione.html`: le altre pagine.
- `style.css`, `script.js`: stile e funzionalità (ricerca/filtro/ordinamento recensioni, banner cookie, invio form).
- `robots.txt`, `sitemap.xml`, `llms.txt`: file SEO e per i crawler AI.
- `site.webmanifest`, icone: PWA/favicon.
- `vercel.json`: URL puliti e header di sicurezza per Vercel.

## Fonti delle recensioni

- Google Maps (10): link alla scheda ufficiale AIPIA su Google.
- Trustpilot (2): link diretto alla recensione originale.
- Le altre 90 provengono da canali diretti (WhatsApp, email, LinkedIn, Instagram, Facebook Messenger, Telegram, feedback post-corso/webinar/evento/call, soci). Queste fonti non hanno un link pubblico, quindi non mostrano il badge "fonte verificabile" ma solo l'etichetta del canale.
- Le date delle 90 recensioni multi-canale non erano disponibili in modo preciso, quindi il sito mostra "Data non indicata" per queste; per Google Maps e Trustpilot viene mostrata la data reale o relativa come su Google.

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

## Nota

Alcune recensioni provengono da canali privati (WhatsApp, email, messaggi diretti). Prima di pubblicarle con nome e cognome, assicurati di avere il consenso della persona che le ha scritte.
