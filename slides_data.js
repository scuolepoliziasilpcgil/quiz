// Dati condivisi delle slide, Corso Allievi Agenti
// Versione 11/07/2026 — title in apertura, 11 quiz Trieste, pausa, slides storiche

var slides = [

// 0 — TITLE (suono connessione su questa slide)
{ type:'title',
eyebrow:'SILP CGIL · Coordinamento Nazionale Scuole di Polizia',
title:'{{CORSO}}°',
sub:'Corso Allievi Agenti',
note:'Versione interattiva. Naviga con le freccette o i tasti ← →.'
},

// 1
{ type:'quiz', section:'p2', num:1,
q:'Quante ore di lavoro settimanali sono previste per il nostro contratto?',
options:['36 ore','40 ore','46 ore'],
correct:0,
answer:'Il contratto prevede 36 ore settimanali. È uno dei punti fondamentali che ogni poliziotto dovrebbe conoscere dal primo giorno.' },

// 2
{ type:'quiz', section:'p2', num:2,
q:'Cosa è la programmazione settimanale?',
options:["L'organizzazione dei turni della settimana successiva, che può essere modificata",'Una bozza dei servizi che si potrebbero fare','La certezza definitiva dei turni che si faranno'],
correct:0,
answer:'La programmazione settimanale organizza i turni della settimana successiva ma non è definitiva: può essere modificata per esigenze di servizio.' },

// 3
{ type:'quiz', section:'p2', num:3,
q:'Se viene disposto di lavorare in un giorno di riposo programmato, cosa deve essere garantito?',
options:['Un giorno di riposo recuperato in settimana','Il completamento delle 36 ore settimanali','Entrambe le risposte precedenti'],
correct:2,
answer:'Il contratto garantisce entrambe le cose: il recupero del giorno di riposo e il rispetto delle 36 ore settimanali di programmazione.' },

// 4
{ type:'quiz', section:'p2', num:4,
q:'Può essere sospeso il diritto alle ferie?',
options:['Sì','No','Solo quando manca personale','Solo in caso di ferie già fruite'],
correct:0,
answer:'Sì, il diritto alle ferie può essere sospeso per esigenze di servizio. Il contratto lo prevede, ma non può diventare prassi abituale.' },

// 5
{ type:'quiz', section:'p2', num:5,
q:'Dopo quanti anni di servizio aumentano le ferie per i poliziotti?',
options:['10 e 20 anni','15 e 25 anni','17 e 27 anni'],
correct:1,
answer:'Le ferie aumentano dopo 15 e 25 anni di servizio.' },

// 6
{ type:'quiz', section:'p2', num:6,
q:"Dopo quanti anni di servizio matura l'assegno di funzione?",
options:['10, 20 e 30 anni','17, 27 e 32 anni','15, 25 e 35 anni'],
correct:1,
answer:"L'assegno di funzione matura dopo 17, 27 e 32 anni di servizio." },

// 7
{ type:'quiz', section:'p2', num:7,
q:'Se ho lavorato nel privato o avuto una Partita IVA prima di entrare in Polizia, cosa devo fare?',
options:['Nulla','Riscatto','Ricongiunzione','Il collega anziano mi saprà consigliare'],
correct:2,
answer:'Devi fare la ricongiunzione contributiva, non il riscatto. Sono due strumenti diversi. SILP CGIL può guidarti nella procedura corretta.' },

// 8
{ type:'quiz', section:'p2', num:8,
q:'Se ho prestato servizio nelle forze armate, cosa posso fare ora che sono in Polizia?',
options:['Nulla, va tutto in automatico','Riscatto ai soli fini del TFS (Trattamento di Fine Servizio)','Riscatto ai fini pensionistici','Ricongiunzione'],
correct:1,
answer:'Il servizio nelle forze armate può essere riscattato ai soli fini del TFS, non ai fini pensionistici. Rivolgiti al SILP CGIL per la procedura.' },

// 9
{ type:'quiz', section:'p2', num:9,
q:"Cos'è l'estratto conto contributivo?",
options:['Il periodo di lavoro prestato nelle forze armate','Il periodo di lavoro prestato come privato',"Tutti i periodi di lavoro che risultano all'INPS"],
correct:2,
answer:"L'estratto conto contributivo INPS raccoglie tutti i periodi di lavoro registrati, sia privati che pubblici. È fondamentale verificarlo e mantenerlo aggiornato." },

// 10
{ type:'quiz', section:'p2', num:10,
q:'I poliziotti hanno la previdenza complementare?',
options:['Sì','No','Non lo so'],
correct:1,
answer:'No, i poliziotti non hanno ancora la previdenza complementare. È una delle battaglie che SILP CGIL porta avanti per garantire una pensione dignitosa.' },

// 11
{ type:'quiz', section:'p2', num:11,
q:"Come posso sistemare l'estratto conto INPS e valorizzare questi periodi ai fini del TFS?",
options:['Nulla, non si può fare','Rivolgermi a sindacati che mi fanno regali per accaparrarsi la mia iscrizione','Rivolgermi al SILP CGIL per una consulenza specializzata'],
correct:2,
answer:'Rivolgersi alla segreteria provinciale del SILP CGIL: offriamo consulenze mirate, puntuali e specializzate per il contratto difesa e sicurezza. Diffidate da soluzioni generiche o superficiali. Buona vita a tutti.' },

// 12 — PAUSA
{ type:'pausa', section:'pausa',
list:[
'Vieni a conoscerci al tavolo SILP CGIL',
'Fai le domande che non hai fatto allo schermo',
'Scopri cosa significa avere un sindacato al tuo fianco',
'Lascia un contatto per farti aiutare con la scelta delle preferenze',
'Fai due chiacchiere con i delegati',
'Si ricomincia tra poco'
]},

// 13 — Perche siamo qui
{ type:'narrazione', section:'p3',
titolo:'Perché siamo qui',
testo:'Il Coordinamento Nazionale Scuole di Polizia SILP CGIL organizza conferenze sindacali in tutti gli istituti di formazione. Vogliamo che tu conosca i tuoi diritti dal primo giorno.'
},

// 14 — D3, citta
{ type:'wordcloud', section:'p3', num:3,
q:'Con due parole. In quale città ti piacerebbe prestare servizio.',
options:['Roma','Milano','Napoli','Torino','Palermo','Genova','Bologna','Firenze','Bari','Catania','Venezia','Verona','Messina','Padova','Trieste','Brescia'],
maxSelect:2 },

// 15 — D2, reparto
{ type:'wordcloud', section:'p3', num:2,
q:'Con due parole. In quale tipo di reparto ti piacerebbe lavorare.',
options:['Volante','Squadra Mobile','Polizia Stradale','Polizia Ferroviaria','Polizia di Frontiera','Scientifica','DIGOS','Anticrimine','Cinofili','Reparto Mobile','Volo','Artificieri','NOCS','Tiratori Scelti','Cavalleria','Nautica','Postale','Corpo di Guardia'],
maxSelect:2 },

// 16 — D11, malattia ed esclusione dal corso
{ type:'quiz', section:'p3', num:11,
q:'Sai quanti giorni di malattia puoi fare prima di essere escluso dal corso?',
options:["Non c'è limite, siamo dipendenti",'Dipende dal medico','C’è un limite preciso nel bando','Non lo so'],
correct:2,
answer:"L'articolo 4 del decreto istitutivo del 233° fissa il limite massimo di assenze a 50 giorni per qualsiasi motivo, o 75 giorni se l'assenza è dovuta a infermità contratta durante il corso. Otto periodi didattici di assenza, anche in giorni diversi, valgono come una giornata intera. Superato il limite si rischia la dimissione dal corso." },

// 17 — D13, alloggiativa
{ type:'sondaggio', section:'p3', num:13,
q:'Hai già in mente una sistemazione alloggiativa?',
options:['Sì, penso di alloggiare con qualche collega in appartamento',"Conto sull'alloggio di servizio",'Scelgo solo sedi con alloggi','Non ci ho ancora pensato'] },

// 18 — D14, fidanzato
{ type:'sondaggio', section:'p3', num:14,
q:'Hai un fidanzato o una fidanzata che dovrà seguirti, o state già litigando sulla sede?',
options:['Sì, e siamo d’accordo','Sì, e ne stiamo discutendo','No, sono single e libero o libera','Non ci avevo ancora pensato'] },

// 19 — D15, portale
{ type:'quiz', section:'p3', num:15,
q:'Sapevi che nel portale non puoi escludere nessun reparto della provincia che scegli?',
options:['Sì, lo sapevo','No, non lo sapevo',"Ho capito solo adesso perché è importante l'ordine",'Sto rivalutando tutto'],
correct:0,
answer:'Esatto: una volta scelta la provincia sei disponibile per tutti i reparti al suo interno. Per questo conviene studiarla bene prima di metterla tra le preferenze.' },

// 20 — D20, primo passo
{ type:'quiz', section:'p3', num:20,
q:'Qual è il primo passo da compiere appena arrivati in sede?',
options:['Iscrivermi subito al sindacato','Aspettare e vedere come va','Cercare il delegato SILP del reparto','Studiare da solo il regolamento'],
correct:2,
answer:'Cercare il delegato SILP CGIL del reparto e iscriverti: è il modo più semplice per non restare solo davanti a qualsiasi domanda.' },

// 21 — CLOSING
{ type:'closing',
title:'Grazie',
sub:'SILP CGIL è il vostro riferimento da oggi in poi.'
}

];

var sectionLabels = {
pausa:'Pausa',
p1:'Periodo 1 · Preferenze e aspettative',
p2:'Periodo 2 · ANQ e diritti contrattuali',
p3:'Coordinamento nazionale Scuole di Polizia SILP CGIL'
};

var badgeLabels = {
wordcloud:{cls:'wordcloud', text:'Word cloud'},
sondaggio:{cls:'sondaggio', text:'Sondaggio'},
quiz:{cls:'quiz', text:'Quiz'},
narrazione:{cls:'narrazione', text:'SILP CGIL'}
};
