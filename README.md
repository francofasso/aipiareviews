# aipiarecensioni.com

Sito statico pronto all'uso: HTML, CSS e JS puri, nessun programma da
installare, nessun comando da lanciare. Carichi questa cartella così com'è
e funziona.

## Cosa c'è dentro

- `index.html`, la home con le recensioni (22 in totale: 12 placeholder da
  sostituire, marcate "Esempio, Sostituire", più 10 recensioni reali
  importate da Google Maps, con badge dedicato e filtro per fonte)
- `chi-siamo.html`
- `lascia-recensione.html`, modulo per ricevere nuove recensioni, con
  protezione anti-spam
- `privacy-policy.html`, `cookie-policy.html`, con i dati reali di AIPIA
  (sede, CF, contatti)
- `404.html`, pagina di errore
- `style.css`, `script.js`, stile e funzioni (filtro recensioni per testo
  e per fonte, banner cookie), tema chiaro e scuro entrambi corretti
- `robots.txt`, `sitemap.xml`, `llms.txt`, file tecnici per Google e per
  gli assistenti AI
- `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`,
  `icon-512.png`, `og-image.png`, icone e immagine di anteprima social
- `vercel.json`, URL puliti e header di sicurezza (Vercel li legge da
  sola)

## Le recensioni da Google Maps

Le 10 recensioni reali che mi hai passato sono già inserite, ordinate per
data, con un badge verde "Google Maps" accanto a ciascuna. Sopra l'elenco
c'è un menu a tendina per filtrare solo quelle, solo le altre, o vederle
tutte insieme. Una di loro (Nicola Schiaffino) aveva solo il voto senza
testo su Google: l'ho mostrata comunque, con una nota che indica che è una
valutazione senza testo, invece di inventare un contenuto che non c'era.

Le date esatte non erano disponibili (Google mostra "2 mesi fa", "3
settimane fa" eccetera): ho calcolato una data approssimativa per poterle
ordinare correttamente, ma sul sito continua a comparire la dicitura
originale ("2 mesi fa"), per non mostrare una precisione che i dati di
partenza non avevano.

## Il modulo "Lascia una recensione", cosa devi fare prima di pubblicare

Il modulo in `lascia-recensione.html` invia i dati a **Formspree**, un
servizio gratuito che raccoglie le risposte di un form senza bisogno di un
server: tu ricevi le recensioni via email/dashboard, le controlli, e solo
dopo le pubblichi sul sito. Per attivarlo:

1. Vai su **formspree.io** e crea un account gratuito.
2. Crea un nuovo "Form" e copia l'ID che ti dà (una stringa tipo
   `xzzpqwer`).
3. Apri `lascia-recensione.html`, cerca il testo
   `SOSTITUISCI-CON-IL-TUO-ID-FORMSPREE` e sostituiscilo con quell'ID.
4. Da quel momento, ogni recensione inviata dal sito ti arriva su
   Formspree, pronta da controllare.

Protezioni anti-spam già incluse, senza bisogno di captcha: un campo
nascosto che solo i bot compilano (honeypot), e un controllo che blocca
gli invii troppo rapidi per essere umani. L'email di chi scrive non viene
mai pubblicata: serve solo per verificare che la recensione sia reale.

## Come aggiungere altre recensioni verificate al sito

1. Raccogli le recensioni verificate in un file JSON, una voce per
   recensione: nome, ruolo/azienda (facoltativo), data, valutazione da 1 a
   5, testo (facoltativo se manca), link LinkedIn se disponibile, e
   indica "source": "google-maps" se vengono da lì (altrimenti si può
   omettere).
2. Mandami quel file JSON in chat.
3. Controllo che ogni voce sia valida e ti segnalo eventuali problemi.
4. Ti rimando `index.html` già aggiornato, pronto da sostituire nella
   cartella.

## Perché non si vede bene aprendo index.html con doppio click

I file usano percorsi assoluti (`/style.css`, `/script.js`) che funzionano
solo quando il sito è online o servito da un vero server locale, non con
`file://`. Per vederlo com'è veramente prima di pubblicarlo, trascina questa
cartella su **https://app.netlify.com/drop** (nessun account richiesto).

## Come metterlo online (Vercel)

1. Vai su vercel.com e crea un account, se non ce l'hai già.
2. Crea un nuovo progetto e carica questa cartella.
3. Non serve impostare nessun "Build Command": lascia tutto vuoto/di
   default.
4. Nelle impostazioni del progetto, sezione "Domains", aggiungi
   `aipiarecensioni.com`. Vercel ti mostra un valore DNS da configurare.
5. Passa quel valore a chi gestisce il dominio su Cloudflare, così può
   creare il record DNS corrispondente (in modalità "DNS only", nuvoletta
   grigia). Finché questo passaggio non è fatto, il sito non è
   raggiungibile "da fuori" digitando aipiarecensioni.com: è normale.
6. Quando il dominio risulta verificato su Vercel, il sito è online con
   HTTPS attivato automaticamente.

## Prima di pubblicare davvero

- Sostituisci le 12 recensioni segnaposto con recensioni vere, o rimuovile
  se vuoi pubblicare solo quelle di Google Maps per ora.
- Collega il modulo recensioni a un account Formspree vero.
- Fai controllare `privacy-policy.html` e `cookie-policy.html` dal
  referente privacy di AIPIA.
