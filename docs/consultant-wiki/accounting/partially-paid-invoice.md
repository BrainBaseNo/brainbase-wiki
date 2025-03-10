---
id: partially_paid_invoice
title: Delvis betalt faktura
description: Beskriver fremgangsmåte fpr å håndtere delvis betalt faktura i Fiken
hide_table_of_contents: false
---
# **Anbefalt fremgangsmåte for håndtering av delvis betalte fakturaer i Fiken ved konvertering til aksjer**

Når du fakturerer en kunde der deler av fakturabeløpet skal konverteres til aksjer, bør dette håndteres riktig i regnskapet for å sikre korrekt bokføring og MVA-håndtering. Nedenfor er en anbefalt fremgangsmåte for å håndtere dette i Fiken.

---

## **1. Opprette og sende fakturaen**
- Opprett en faktura i Fiken for det totale beløpet (f.eks. 200 000 kr).
- Legg inn en tydelig beskrivelse i fakturateksten om at en del av beløpet skal konverteres til aksjer i henhold til en avtale.
- Påse at korrekt MVA-sats brukes på fakturaen. MVA må beregnes på hele beløpet, inkludert den delen som konverteres til aksjer.
- Send fakturaen til kunden.

---

## **2. Registrere delbetaling**
- Når kunden betaler den kontante delen av fakturaen (f.eks. 100 000 kr), registrer dette som en delbetaling i Fiken.
  - Gå til fakturaen i Fiken.
  - Klikk på **"Registrer betaling"** og velg riktig bankkonto.
  - Angi beløpet som er betalt (100 000 kr) og lagre.
- Restbeløpet (100 000 kr) blir stående som en utestående kundefordring.

---

## **3. Bokføre konverteringen til aksjer**
Når aksjene utstedes for det resterende beløpet, må du bokføre dette manuelt:

### **3.1 Opprett et manuelt bilag i Fiken**
   - **Debet** `1500 Kundefordringer` med beløpet som konverteres til aksjer (100 000 kr).
   - **Kredit** `2080 Aksjekapital` med samme beløp.
   - Legg til en beskrivelse som forklarer transaksjonen, f.eks. _"Konvertering av kundefordring til aksjer iht. avtale"._

### **3.2 Alternativ metode med balansekonto**
   - Hvis du vil spore dette på en balansekonto før aksjeutstedelsen er formelt gjennomført, kan du i stedet bruke en egen balansekonto, f.eks. `1579 Andre fordringer`, som et mellomledd før det overføres til aksjekapital.

---

## **4. Håndtering av MVA**
- MVA må betales i den perioden fakturaen er utstedt, uavhengig av om beløpet konverteres til aksjer eller betales kontant.
- Hvis kunden er MVA-registrert i Norge, bør de betale MVA-en på hele fakturabeløpet (40 000 kr ved 25 % MVA) selv om en del av fakturaen ikke betales i kontanter.
- Hvis kunden er i utlandet og tjenesten er MVA-fri, trenger du ikke å beregne MVA.

---

## **5. Oppfølging og dokumentasjon**
- Sørg for at det finnes et juridisk dokument som beskriver avtalen om konvertering av fakturabeløpet til aksjer.
- Dokumenter transaksjonen i regnskapet, og oppbevar avtalen som vedlegg til bilaget i Fiken.
- Hvis kunden betaler MVA separat, registrer dette som en ny innbetaling på fakturaen.

---

## **Sammendrag av regnskapsføringen**

| Konto                 | Debet     | Kredit    | Kommentar                                      |
|-----------------------|----------|----------|------------------------------------------------|
| 1500 Kundefordringer | 200 000  |          | Faktura utstedt                               |
| 1920 Bankkonto       | 100 000  |          | Delbetaling mottatt                           |
| 1500 Kundefordringer |          | 100 000  | Reduserer utestående kundefordring            |
| 2080 Aksjekapital    |          | 100 000  | Konvertering til aksjer                       |
| 2700 Utgående MVA    | 40 000   |          | MVA må betales uansett                        |
| 1920 Bankkonto       |          | 40 000   | Kunden betaler MVA-en separat                 |

---

## **Konklusjon**
Dette er en ryddig måte å håndtere delvis betalte fakturaer hvor en del av beløpet konverteres til aksjer. Ved å tydelig kommunisere dette til kunden, sørge for at MVA håndteres korrekt, og føre et manuelt bilag for konverteringen, unngår du regnskapsmessige utfordringer.
