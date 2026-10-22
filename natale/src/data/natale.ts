// Unica fonte dei dati del minisito del Natale 2026: prezzi, date, contatti, regali, domande.
// Se cambia un prezzo o una data, si cambia SOLO qui (e nella pagina WordPress, finché esiste).
// Fonti: handoff per Eli (direzione-commerciale/filoni/proposta/natale-2026-handoff-eli.md, 19/10/2026),
// pieghevole e pagina "la-magia-del-natale".

/** false = sito in prova: noindex e robots chiusi. Si mette a true all'apertura, dopo il sì di Elisabetta. */
export const APERTO = false;

/**
 * Battenti della porta che si apre in home. Se esiste public/foto/set/porta.jpg (la porta vera, frontale,
 * ritagliata sul solo battente, niente davanti) i battenti diventano fotografici, altrimenti restano disegnati.
 * 'meta'   = ogni battente è metà della porta, il destro è il sinistro specchiato: stesse proporzioni della porta vera.
 * 'doppia' = ogni battente è la porta intera, il destro specchiato: una porta doppia, larga il doppio.
 */
export const MODO_PORTA: 'meta' | 'doppia' = 'meta';

export const contatti = {
  telefono: '333 6265276',
  whatsapp: '393336265276',
  email: 'info@elisabettacquaviva.it',
  indirizzo: 'Via di Mezzo 87, 47923 Rimini',
  mappa: 'https://maps.google.com/?q=Via+di+Mezzo+87+Rimini',
  sito: 'https://www.elisabettacquaviva.it',
  instagram: 'https://www.instagram.com/elisabettacquavivafotografa/',
};

/** Link WhatsApp col messaggio già scritto. Niente emoji nei testi: wa.me le rovina su WhatsApp Desktop. */
export function linkWhatsApp(testo: string): string {
  return `https://wa.me/${contatti.whatsapp}?text=${encodeURIComponent(testo)}`;
}

export const dateMini = [
  { id: 'sab7', etichetta: 'sabato 7 novembre' },
  { id: 'dom8', etichetta: 'domenica 8 novembre' },
  { id: 'sab14', etichetta: 'sabato 14 novembre' },
  { id: 'dom15', etichetta: 'domenica 15 novembre' },
];

export type Proposta = {
  id: string;
  nome: string;
  /** il nome con l'articolo, per i messaggi: "vorrei prenotare il Natale in Grande" */
  conArticolo: string;
  prezzo: number;
  quando: string;
  durata: string;
  sintesi: string;
  cosa: string[];
  settimana: boolean;
  ritratto: boolean;
};

// Sempre dalla più cara (regola dell'handoff).
export const proposte: Proposta[] = [
  {
    id: 'grande',
    nome: 'Natale in Grande',
    conArticolo: 'il Natale in Grande',
    prezzo: 350,
    quando: 'in settimana, su appuntamento',
    durata: 'circa 45-50 minuti',
    sintesi: "Per tutta la famiglia, con il tempo per tutti e due i set: il Natale e il ritratto in studio, con un cambio d'abito.",
    cosa: [
      'galleria privata con tutti i provini',
      '10 stampe Fine Art 13x19 e i loro 10 file in alta risoluzione',
      'una foto 30x40 in cornice bianca o nera, senza passepartout, pronta da appendere',
      '2 ingrandimenti Fine Art 20x30, da tenere o da regalare',
    ],
    settimana: true,
    ritratto: true,
  },
  {
    id: 'cornice',
    nome: 'Natale in Cornice',
    conArticolo: 'il Natale in Cornice',
    prezzo: 270,
    quando: 'in settimana, su appuntamento',
    durata: 'circa 35-40 minuti',
    sintesi: 'Il set di Natale e il ritratto classico della vostra famiglia, con una foto già in cornice.',
    cosa: [
      'galleria privata con i provini',
      '7 stampe Fine Art 13x19 e i loro 7 file in alta risoluzione, tra set di Natale e ritratto',
      'una foto 20x30 con passepartout bianco, in cornice 30x40 bianca o nera',
    ],
    settimana: true,
    ritratto: true,
  },
  {
    id: 'mini',
    nome: 'Mini Sessione',
    conArticolo: 'la Mini Sessione',
    prezzo: 190,
    quando: 'sabato 7 e domenica 8, sabato 14 e domenica 15 novembre',
    durata: 'circa 20-25 minuti',
    sintesi: 'Solo il set di Natale, raccolta ed essenziale.',
    cosa: [
      'galleria privata con circa 35-40 provini',
      '5 stampe Fine Art 13x19 e i loro 5 file in alta risoluzione',
    ],
    settimana: false,
    ritratto: false,
  },
];

export const fileExtra = 'Ogni file in alta risoluzione in più costa 10 €, solo per il set di Natale.';

export const palette = [
  { nome: 'Avorio', hex: '#EFE6D2' },
  { nome: 'Corda', hex: '#CDB89A' },
  { nome: 'Cammello', hex: '#A47A4F' },
  { nome: 'Verde bosco', hex: '#2F4A35' },
  { nome: 'Bordeaux', hex: '#6E191F' },
  { nome: 'Noce', hex: '#5A3B26' },
];

// Recensioni Google già pubblicate sul sito (pagina Detto da voi e pagina del buono), nome e iniziale.
export const voci = {
  famiglie: [
    { testo: 'Le foto sono meravigliose, tanto che il "problema" è che si fa fatica a sceglierle! Noi continuiamo a sceglierla per le nostre foto di famiglia.', chi: 'Marianna M.', quando: 'agosto 2026' },
    { testo: 'Una grande professionista, simpatica ed ha una capacità pazzesca nel far divertire e metterti a proprio agio.', chi: 'Ludmila B.', quando: 'settembre 2026' },
    { testo: 'Ad oggi tre album bellissimi (…) Non vediamo l\'ora di rivederci per il prossimo round :)', chi: 'Anna P.', quando: 'agosto 2026' },
  ],
  regalo: [
    { testo: 'Ho ricevuto in regalo dal mio compagno un servizio fotografico in gravidanza e sono rimasta super soddisfatta.', chi: 'Sara G.', quando: 'ottobre 2026' },
    { testo: 'Siamo andati da Elisabetta perché gli amici ci hanno regalato un servizio fotografico per la nascita di nostro figlio.', chi: 'Anastasia S.', quando: 'ottobre 2026' },
  ],
};

// Cosa si può regalare col buono nel vasetto. Le proposte di Natale valgono solo finché c'è il set.
export const cosaRegalare = [
  { id: 'mini', nome: 'la Mini Sessione di Natale', nota: '190 €, nei weekend del 7-8 e 14-15 novembre' },
  { id: 'cornice', nome: 'il Natale in Cornice', nota: '270 €, in settimana su appuntamento' },
  { id: 'grande', nome: 'il Natale in Grande', nota: '350 €, in settimana su appuntamento' },
  { id: 'progetto', nome: 'un altro progetto dello studio', nota: 'pancione, neonato, famiglia: ne parliamo insieme' },
];

// Idee regalo: catalogo del Natale 2025. PREZZI DA CONFERMARE con Elisabetta prima dell'apertura (PUNTI-APERTI, punto 4).
export type Idea = {
  nome: string;
  prezzo: string;
  cosa: string;
  per: Array<'nonni' | 'primo' | 'casa' | 'pensiero'>;
  foto: string;
};

export const ideeRegalo: Idea[] = [
  { nome: 'Palla di Natale con foto', prezzo: '18 €', cosa: 'due immagini fronte e retro, 10 cm, nastro di velluto rosso. Quella del 2026, da appendere ogni anno accanto alle altre.', per: ['primo', 'pensiero', 'nonni'], foto: 'regali/palla.jpg' },
  { nome: 'Biglietto di Natale a due ante', prezzo: '5 € l\'uno, almeno 4', cosa: 'carta naturale rigata, con la vostra foto del set.', per: ['pensiero'], foto: 'regali/biglietto.jpg' },
  { nome: 'Portachiavi', prezzo: '29 €', cosa: 'ecopelle, due immagini, a cuore, tondo o rettangolare.', per: ['pensiero'], foto: 'regali/portachiavi.jpg' },
  { nome: 'Puzzle', prezzo: '39 €', cosa: '30x45, 252 pezzi, con la stampa di riferimento e la custodia.', per: ['pensiero', 'nonni'], foto: 'regali/puzzle.jpg' },
  { nome: 'Cornice da tavolo in acrilico', prezzo: '39 €', cosa: '16x24, stampa montata su plexiglass, piedistallo in ceramica fatto a mano.', per: ['nonni', 'casa'], foto: 'regali/acrilico.jpg' },
  { nome: 'Foto Desk', prezzo: '39 €', cosa: 'una stampa su passepartout, con il piedistallo in ceramica fatto a mano.', per: ['nonni', 'casa'], foto: 'regali/foto-desk.jpg' },
  { nome: 'Memory Box', prezzo: '49 €', cosa: 'stile Polaroid, cinque slitte e cinque foto comprese.', per: ['primo', 'pensiero'], foto: 'regali/memory-box.jpg' },
  { nome: 'Calendario da tavolo "cards"', prezzo: '49 €', cosa: '12x17, dodici foto quadrate, piedistallo in ceramica.', per: ['nonni', 'casa'], foto: 'regali/calendario-tavolo.jpg' },
  { nome: 'Portfolio Fine Art', prezzo: '54 €', cosa: 'due o tre immagini su passepartout, a due o tre ante.', per: ['nonni', 'casa'], foto: 'regali/portfolio.jpg' },
  { nome: 'Calendario quadrimestrale', prezzo: '54 €', cosa: '30x40 o 30x45, tre immagini, rilegato con la gruccia in metallo.', per: ['casa'], foto: 'regali/calendario-quadrimestrale.jpg' },
  { nome: 'Portafoto con 10 cornicette', prezzo: '69 €', cosa: '13x18, dieci fotografie comprese.', per: ['nonni', 'primo'], foto: 'regali/portafoto.jpg' },
  { nome: 'Album artigianale', prezzo: '129 €', cosa: '23x23, interno bianco, venti fotografie comprese.', per: ['primo', 'nonni'], foto: 'regali/album.jpg' },
  { nome: 'Calendario multipagina', prezzo: '139 €', cosa: 'tredici fogli, 30x30 o 30x45: un mese, una foto.', per: ['nonni', 'casa'], foto: 'regali/calendario-multipagina.jpg' },
];

export const perChi = [
  { id: 'tutti', nome: 'Tutte' },
  { id: 'nonni', nome: 'Per i nonni' },
  { id: 'primo', nome: 'Per il primo Natale' },
  { id: 'casa', nome: 'Per la casa' },
  { id: 'pensiero', nome: 'Un pensiero piccolo' },
];

// Domande con risposta presa dai testi approvati. Le domande senza risposta decisa da Eli stanno in PUNTI-APERTI, non qui.
export const domande = [
  { d: 'Come si prenota?', r: "Scrivetemi su WhatsApp o chiamatemi al 333 6265276, oppure scrivete a info@elisabettacquaviva.it. La proposta si sceglie quando si prenota, perché giorno e durata cambiano. Per la Mini Sessione le date sono sabato 7 e domenica 8, sabato 14 e domenica 15 novembre; Natale in Cornice e Natale in Grande sono in settimana, su appuntamento." },
  { d: 'Quanto dura la sessione?', r: 'La Mini Sessione circa 20-25 minuti, il Natale in Cornice circa 35-40, il Natale in Grande circa 45-50.' },
  { d: 'Come e quando scegliamo le foto?', r: 'Dopo la sessione vi mando la galleria privata, protetta da password: le foto le scegliete voi, con calma, a casa.' },
  { d: 'E le cornici?', r: 'Sono già in studio, bianche o nere. Appena scegliete la foto preferita la ritocchiamo, la mettiamo in cornice e passate a ritirarla. Sono senza vetro, per scelta.' },
  { d: 'Posso avere più foto di quelle comprese?', r: 'Sì: per il set di Natale ogni file in alta risoluzione in più costa 10 €. Le stampe in più e le idee regalo si ordinano dalla galleria o qui in studio.' },
  { d: 'Come ci vestiamo?', r: 'Colori caldi e naturali, quelli del set: c\'è una pagina apposta, con la palette e qualche consiglio. Se avete un dubbio, mandatemi una foto dei vestiti prima della sessione e li guardiamo insieme.' },
  { d: 'Si può regalare?', r: 'Sì, con un buono regalo, per tutte e tre le proposte. Lo preparo io a mano, nel suo vasetto della conserva, con la vostra dedica stampata dentro.' },
];
