### Avaluació del Codi de l'Exercici 3

#### Repte 1 - Validació de Formularis (4p)

**Validacions a través de JS (0.5p)**

- Correcte.

**Ús d'almenys tres esdeveniments diferents per les validacions (0.5p)**

- Correcte, es fan servir `input`, `blur`, `change`, i `submit`.

**Validacions - 1a Part (1p)**

- El nom i cognom tenen com a mínim 3 caràcters i menys de 50: Correcte.
- No poden contenir números: Correcte.
- L'adreça de correu electrònic té un `@` i un `.`: Correcte.

**Validacions - 2a Part (1p)**

- El gènere és una de les opcions disponibles al formulari: Correcte.
- Ha de ser major d'edat per realitzar la comanda: Correcte.
- El text a "Message" té entre 10 i 200 caràcters: Correcte.

**Validacions - 3a Part (1p)**

- El producte és una de les opcions disponibles al formulari: Correcte.
- La quantitat és un nombre enter entre 1 i 10: Correcte.

#### Repte 2 - Afegir Productes al Formulari (5p)

**Carregar productes disponibles al formulari (2p)**

- Els productes es carreguen correctament al selector: Correcte.
- Es mostra la quantitat per defecte i el preu unitari: Correcte.

**Afegir producte a la llista (2p)**

- **Incorrecte:** El producte no s'afegeix correctament a la llista.
  - El botó "Add" afegeix el producte a la llista, però no s'actualitza correctament el preu total abans d'afegir-lo.
  - No s'actualitza la quantitat total correctament quan es canvia la quantitat abans de fer clic al botó "Add".

**Comportament lògic del formulari (1p)**

- **Incorrecte:** El comportament lògic no està completament implementat.
  - Les validacions dels camps es fan correctament quan es fa un submit.
  - No es mostra un missatge personalitzat amb l'import total a pagar quan es fa un submit del formulari.

**Mancances:**

- La quantitat total no es recalcula dinàmicament abans d'afegir el producte al carret. És important mostrar el preu total actualitzat quan l'usuari canvia la quantitat abans de fer clic al botó "Add".
- El codi no inclou la funcionalitat per actualitzar el preu total quan es canvia la quantitat abans d'afegir-lo al carret de la compra.
- No es mostra un missatge personalitzat amb l'import total a pagar quan es fa un submit del formulari.

#### Qualitat del Codi, Estructura, Llegibilitat i Comentaris (1p)

**Qualitat del codi**

- Correcte.

**Estructura i llegibilitat**

- Correcte.

**Comentaris**

- Incloure comentaris per explicar la funcionalitat del codi és essencial per millorar la seva mantenibilitat: Correcte.
- La gestió d'errors es podria millorar afegint feedback a l'usuari per a casos en què hi ha errors en la selecció dels productes o la quantitat: Correcte.
- Implementar la funcionalitat per actualitzar el preu total abans d'afegir el producte al carret: No implementat correctament. Quan es canvia la quantitat, no s'actualitza el preu total abans d'afegir-lo al carret. Això es podria millorar per donar un millor feedback a l'usuari.
