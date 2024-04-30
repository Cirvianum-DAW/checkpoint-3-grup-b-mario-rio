# Exercicis UF3

## Aquest exercici només correpson amb la nota per UF3

- UF 3: Esdeveniments. Manejament de formularis. Model d’objectes del document

En aquesta UF es treballa amb la interacció de l'usuari amb la pàgina web mitjançant esdeveniments i formularis. A més, s'aprofundeix en el model d'objectes del document (DOM) per a manipular els elements de la pàgina web.

A continuació tens diversos reptes de JS que determinaran el teu nivell de coneixements en aquesta UF. Tots ells giren entorn a accions que has de fer amb el formulari que et presentem a `formulari.html`.

Aquest formulari és una manera senzilla d'obtenir una comanda de productes d'un usuari. Tenim informació bàsica general de l'usuari (nom, cognom, adreça de correu electrònic, gènere) i un camp per seleccionar el producte i la quantitat que es vol d'aquest producte.

**Important**: En funció de si l'error és més o menys greu, es pot penalitzar amb 0,25p o 0,5p. Finalment hi ha 1 punt global que s'avaluarà en funció de la qualitat del codi, la seva estructura, la seva llegibilitat i els comentaris que hi hagi.

Llegeix abans de començar tots els reptes, també el Repte 2, de manera que puguis planificar el teu temps i el teu codi. Intenta separar lògiques i fer el codi el més modular possible. Et faràs més fàcil la tasca!

## Repte 1 - Validació de Formularis (4p)

Tens un fitxer anomenat `validacions.js` ja associat a l'html. Hauràs de realitzar els següents passos:

- **Totes les validacions les hauries de poder realitzar a través del teu codi JS**. No hauries de fer servir cap validació a través del codi HTML. Recorda que per evitar que HTML faci les seves pròpies validacions, pots fer servir l'atribut `novalidate` al formulari. **(0,5p)**

- Has de **fer servir almenys tres esdeveniments diferents per les teves validacions**. Intenta fer-ho amb una certa lògica. Fem un petit recordatori dels principals esdeveniments que podríem fer servir en aquest cas: **(0,5p)**

1. `input`: Aquest esdeveniment es dispara cada vegada que l'usuari introdueix o modifica dades en un camp de formulari.
2. `change`: Aquest esdeveniment es dispara quan l'usuari canvia el valor d'un camp de formulari i després surt del camp (per exemple, fent clic fora del camp o passant a un altre camp amb la tecla Tab).
3. `submit`: Aquest esdeveniment es dispara quan l'usuari intenta enviar el formulari. És útil per a validacions finals abans que les dades del formulari siguin enviades al servidor.
4. `focus`: Aquest esdeveniment es dispara quan un camp de formulari rep el focus, és a dir, quan l'usuari fa clic en ell o navega fins a ell amb el teclat.
5. `blur`: Aquest esdeveniment es dispara quan un camp de formulari perd el focus, és a dir, quan l'usuari fa clic fora d'ell o navega fora d'ell amb el teclat. És similar a change, però es dispara encara que el valor del camp no hagi canviat.

### Tens tres apartats de Validacions - 1a Part (1p)

- El nom i cognom han de tenir com a mínim 3 caràcters i menys de 50.
- No poden contenir números (el regex necessari per aquesta validació és `/[0-9]/`)
- L'adreça de correu electrònic ha de tenir com a mínim un caràcter `@` i un caràcter `.`. El regex: `/^[^@]+@[^@]+\.[^@]+$/`

Pots fer servir un altre mètode si vols però seria interessant crear un missatge d'error i fer-lo aparèix (o fer desaparèixer si és correcte) a través d'un `div` amb un missatge d'error a sota de cada camp de text. Tens un exemple al codi.

### Validacions - 2a Part (1p)

- El gènere ha de ser una de les opcions disponibles al formulari.
- Ha de ser major d'edat per poder realitzar la comanda. En aquest cas, mostra un `alert` amb el missatge d'error.
- El text a "Message" ha de tenir com a mínim 10 caràcters i com a màxim 200.

### Validacions - 3a Part (1p)

**Important!:** Per fer aquesta part hauràs de realitzar alguns passos del Repte 2 abans.

- Has de realitzar les següents validacions (normalment quan l'usuari fa clic al botó de "Enviar" o "Submit" del formulari) (1p):
  - El producte ha de ser una de les opcions disponibles al formulari.
  - La quantitat ha de ser un nombre enter entre 1 i 10.
  - En aquest cas mostra l'error a través d'un `alert` amb el missatge d'error.

## Repte 2 - Afegir Productes al Formulari(5p)

Fes un cop d'ull al fitxer `productes.js` i afegeix el codi necessari per:

- **(2p)** Carregar els productes disponibles al formulari. Aquests hauran d'aparèixer com opcions de la llista de selecció de productes (`select`).
  - Quan un usuari hagi canviat/seleccionat un producte (pensa bé quin mètode faràs servir!), ha d'apareixer una quantitat per defecte de 1 i el preu unitari d'aquesta en el camp amb id `price`. Aquest preu harà d'anar canviant en funció del producte seleccionat.
- **(2p)** Quan l'usuari seleccioni un producte i una quantitat, a través del botó "add-product" aquest s'ha d'afegir a una llista de productes que es mostrarà a sota del formulari.
  Aquesta llista haurà de mostrar:
  - El nom del producte
  - La quantitat i el preu total (preu unitari \* quantitat).
- **(1p)** Modifica i finalitza el formulari tenint en compte:
- Assegura't que el formulari tingui un comportament lògic. No has de poder afegir un producte si no s'ha seleccionat un producte i una quantitat vàlida. Mira que només surtin dos decimals com a molt i no és necessari que verifiquis si ja s'ha afegit un producte a la llista. Es torna a afegir amb la quantitat i el preu final quan l'afegeix.
- Es validen correctament tots els camps quan fem un submit i mostra un missatge perosnalitzat per l'usuari dient-li que la comanda s'ha realitzat correctament i l'import final que ha de pagar.
