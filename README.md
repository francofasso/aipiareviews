# aipiarecensioni.com

Sito statico pronto all'uso: HTML, CSS e JS puri, nessun programma da
installare, nessun comando da lanciare. Carichi questa cartella così com'è
e funziona.

## Cosa c'è dentro

- `index.html` — la home con le recensioni (12 recensioni placeholder,
  chiaramente marcate "Esempio — Sostituire" e `[PLACEHOLDER]`)
- `chi-siamo.html`
- `lascia-recensione.html` — modulo per ricevere nuove recensioni, con
  protezione anti-spam (vedi sotto)
- `privacy-policy.html`, `cookie-policy.html` — con i dati reali di AIPIA
  (sede, CF, contatti), scoped a cosa fa davvero questo sito
- `404.html` — pagina di errore
- `style.css`, `script.js` — stile e funzioni (filtro recensioni, banner
  cookie), tema chiaro e scuro entrambi corretti
- `robots.txt`, `sitemap.xml`, `llms.txt` — file tecnici per Google e per
  gli assistenti AI
- `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-192.png`,
  `icon-512.png`, `og-image.png` — icone e immagine di anteprima social
- `vercel.json` — URL puliti e header di sicurezza (Vercel li legge da
  sola)

## Il modulo "Lascia una recensione" — cosa devi fare prima di pubblicare

Il modulo in `lascia-recensione.html` invia i dati a **Formspree**, un
servizio gratuito che raccoglie le risposte di un form senza bisogno di un
server: tu ricevi le recensioni via email/dashboard, le controlli, e solo
dopo le pubblichi sul sito. Per attivarlo:

1. Vai su **formspree.io** e crea un account gratuito (bastano email e
   password, non serve carta).
2. Crea un nuovo "Form" e copia l'ID che ti dà (una stringa tipo
   `xzzpqwer`).
3. Apri `lascia-recensione.html`, cerca il testo
   `SOSTITUISCI-CON-IL-TUO-ID-FORMSPREE` e sostituiscilo con quell'ID,
   nell'unico punto dove appare (l'attributo `action` del form).
4. Da quel momento, ogni recensione inviata dal sito ti arriva su
   Formspree (via email o dashboard), pronta da controllare.

Protezioni anti-spam già incluse, senza bisogno di captcha:
- **Campo nascosto (honeypot)**: invisibile per una persona, ma i bot che
  compilano automaticamente ogni campo del form ci cascano. Se risulta
  compilato, l'invio viene scartato in automatico.
- **Controllo tempo di compilazione**: se il form viene inviato in meno di
  4 secondi dall'apertura della pagina, è quasi certamente un bot, e
  l'invio viene bloccato con un messaggio d'errore.
- L'email di chi scrive **non viene mai pubblicata**: serve solo alla
  segreteria per verificare che la recensione sia reale.

## Come aggiungere le recensioni verificate al sito

Le recensioni pubblicate vivono direttamente dentro `index.html`. Il modo
più semplice per aggiornarle resta questo:

1. Raccogli le recensioni verificate (quelle arrivate da Formspree e
   controllate, oppure quelle che avete già) in un file JSON, una voce per
   recensione, con questi campi: nome, ruolo/azienda, data, valutazione da
   1 a 5, testo, e link LinkedIn se disponibile.
2. Mandami quel file JSON in chat.
3. Controllo che ogni voce sia valida (niente campi mancanti, valutazioni
   fuori range, date scritte male, id duplicati) e ti segnalo eventuali
   problemi prima di procedere.
4. Ti rimando `index.html` già aggiornato con tutte le recensioni,
   pronto da sostituire nella cartella.

Puoi ripetere questo passaggio ogni volta che hai nuove recensioni da
aggiungere, anche a piccoli gruppi.

## Perché non si vede bene aprendo index.html con doppio click

I file usano percorsi assoluti (`/style.css`, `/script.js`) che funzionano
solo quando il sito è online o servito da un vero server locale, non con
`file://`. Per vederlo com'è veramente prima di pubblicarlo, trascina questa
cartella su **https://app.netlify.com/drop** (nessun account richiesto):
ottieni un link vero in pochi secondi.

## Come metterlo online (Vercel)

1. Vai su vercel.com e crea un account, se non ce l'hai già.
2. Crea un nuovo progetto e carica questa cartella (trascinala nell'area
   di upload, oppure collegala da GitHub se preferisci).
3. Non serve impostare nessun "Build Command": lascia tutto vuoto/di
   default, è già un sito pronto.
4. Nelle impostazioni del progetto, sezione "Domains", aggiungi
   `aipiarecensioni.com`. Vercel ti mostra un valore DNS da configurare.
5. Passa quel valore a chi gestisce il dominio su Cloudflare, così può
   creare il record DNS corrispondente (in modalità "DNS only", nuvoletta
   grigia). **Finché questo passaggio non è fatto, il sito non è
   raggiungibile "da fuori" digitando aipiarecensioni.com: è normale.**
6. Quando il dominio risulta verificato su Vercel, il sito è online con
   HTTPS attivato automaticamente.

## Prima di pubblicare davvero

- Sostituisci le recensioni segnaposto con quelle vere (vedi sopra).
- Collega il modulo recensioni a un account Formspree vero (vedi sopra).
- Fai controllare `privacy-policy.html` e `cookie-policy.html` dal
  referente privacy di AIPIA: i dati del Titolare (sede, CF, contatti)
  sono quelli reali presi da aipia.it/privacy-policy, ma va confermato che
  l'uso di Formspree per il modulo sia coerente con le vostre procedure
  interne.
