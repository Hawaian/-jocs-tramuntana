# Tramuntana · Ment Activa 3.0.2

**Actualització visual sobre la 3.0:** imatge de PWA substituïda per la icona original de quatre símbols (turquesa, groc, blau i coral) triada per l'usuari; versió `maskable` per Android. Paleta de categories i components coordinada. Capçalera estesa a tota l'amplada al PC i contingut més ample a pantalles grans, sense canviar la disposició de les tauletes i mòbils. Els recursos, els perfils, els favorits i l'analítica de la 3.0 es mantenen.

**Com actualitzar:** descomprimeix aquest ZIP i puja'n els fitxers a l'arrel de GitHub, substituint els fitxers antics. Espera la publicació i recarrega la PWA. **Si la icona antiga continua a l'escriptori o a l'inici d'Android, desinstal·la l'accés de Ment Activa i torna a instal·lar-la des de Brave o Chrome.** Aquest canvi pot no actualitzar les icones dels accessos directes ja instal·lats fins que els reinstal·lis.

**GoatCounter** i `favorits.json` continuen configurats com a la 3.0. Les estadístiques poden bloquejar-se per la protecció antirastreig del navegador. No hi ha un comptador d'usuaris identificats.

---

# Instruccions originals de la 3.0

Nova versió basada en Jocs Tramuntana 2.7.2. La capçalera conserva el logotip i el viver amb el molí, elimina els ornaments de sota del nom del centre, destaca «PLATAFORMA D’ACTIVITATS I RECURSOS» i afegeix «Estimulació cognitiva».

## Publicació
1. Fes còpia de seguretat del teu repositori actual.
2. Descomprimeix el ZIP. A GitHub > -jocs-tramuntana > Add file > Upload files, puja els fitxers de l'arrel (no una carpeta contenidora).
3. Confirma que `index.html`, `sw.js`, `manifest.webmanifest`, `favorits.json`, `analitica.json`, `marca-tramuntana.webp` i `capcalera-mobil-viver.webp` han quedat al costat de les icones. Pots deixar les imatges antigues: no molesten.
4. Prem Commit changes i espera la publicació. Obre primer al PC, comprova les 4 opcions del selector, els botons d'informació/lletra gran i toca 5 cops el molí.
5. Després prova la CUBOT 1; valida la resta quan funcioni correctament. Les PWA poden mostrar una versió antiga temporalment fins a l'actualització.

## Favorits compartits
Edita `favorits.json` directament a GitHub (icona del llapis). Cada array STO/STOA/SOI conté noms de jocs EXACTAMENT com al catàleg.
Exemple opcional: `"SOI": ["Seterra · Geografia", "JClic · Biblioteca"]` (són exemples, no recomanacions de nivell).
Mantén cometes dobles, comes entre elements, sense coma després de l'últim. Els jocs desconeguts s'ignoren.
El fitxer es consulta en línia amb prioritat i se'n conserva l'última còpia per si no hi ha Internet. Cap CUBOT té un mòdul fix.
Les estrelles locals de la 2.7.2 NO es migren automàticament als favorits compartits; no s'esborren de la tauleta, però la 3.0 mostra els oficials del fitxer.

## Estadístiques (COMPTADOR CONFIGURAT — CAL PUBLICAR)
**El compte GoatCounter ja està configurat** al fitxer `analitica.json` amb `enabled: true` i `siteCode: tramuntanamentactiva`. Només has de verificar el correu (des del missatge de GoatCounter) i pujar els fitxers del ZIP a GitHub perquè comencin a arribar visites. No cal enganxar manualment el codi `<script>` que mostra GoatCounter.

1. El correu del compte GoatCounter ja està verificat.
2. Publica el contingut del ZIP al repositori de GitHub Pages.
3. Obre la web des del navegador, comprova que apareix la pàgina inicial, i inicia una activitat.
4. Consulta el panell privat: https://tramuntanamentactiva.goatcounter.com/
5. Si no hi ha dades, desactiva temporalment el bloqueig d'estadístiques d'aquest lloc només per fer la prova. Alguns navegadors o bloquejadors poden impedir el recompte.

**Privacitat:** no s'envien noms de participants ni mòduls, ni identitats de persones. Només es registren visites agregades, obertures de recursos i inicis dels jocs propis. No s'afegeixen identificadors de visitants ni cookies de seguiment. El recompte de visitants únics és una estimació de sessions. El panell és privat, i les claus de l'usuari no s'inclouen al ZIP.

La web no guarda cap IP ni fa servir cookies de seguiment. Segons la seva documentació, GoatCounter fa servir temporalment IP i User-Agent en memòria per agrupar visites d'unes 8 hores, però NO desa la IP al disc. Les visites úniques són estimacions per sessió, no persones identificades. El servei pot ser bloquejat per Brave o per bloquejadors de publicitat, de manera que el recompte pot ser inferior al real.

Les visites es compten com a sessions estimades, i no com a persones identificades; els esdeveniments `recurs-*` i `propi-*` permeten un rànquing d'obertures i inicis, respectivament. A més, `dispositiu-actiu-dia` compta com a màxim una vegada per navegador i dia (guardant NOMÉS la data en localStorage, sense enviar cap identificador). És un indicador aproximat de dispositius actius per dia, no de persones: diverses persones amb una mateixa CUBOT comptaran com un sol dispositiu; una mateixa persona que faci servir dos dispositius en comptarà dos. GoatCounter, per la seva banda, pot agrupar dispositius de la mateixa xarxa amb el mateix User-Agent en una sessió de 8 hores. GoatCounter ofereix el panell d'administració privat amb inici de sessió; NO hi ha credencials amagades al codi públic de GitHub.

## Novetats finals de la capçalera
La franja de fulles i el traç verd que quedaven sota «Centre ocupacional i especial de treball» s’han eliminat del fitxer de marca; no s’ha modificat la il·lustració del molí ni els altres elements superiors. El text «Plataforma d’activitats i recursos» ara té una mida destacada, amb «Estimulació cognitiva» immediatament a sota.

## Proves recomanades
- A mòbil, PC i CUBOT: capçalera, selector, canvi de mòdul, tots els jocs i favorits A–Z.
- En una CUBOT, marca un nom al JSON de SOI i comprova que surti també en obrir l'altra tauleta connectada.
- Jocs propis: Parelles, Comptem, Què falta?, Troba l'intrús i Ordena nombres. Nivells 1, 2 i 3.
- PWA offline: carrega un cop amb Internet; desconnecta i comprova els jocs propis. Els recursos externs i les estadístiques necessiten connexió.

Canvi deliberat: el nom nou de la plataforma NO obliga a comprar cap domini. Seguim amb https://hawaian.github.io/-jocs-tramuntana/.


## Ajust visual 3.0.2
- Part esquerra de la capçalera amb cel blau/turquesa, colors suaus i flors de la il·lustració original.
- Targeta blanca de lectura i més espai per a la il·lustració a la dreta.
- No canvien les dades de GoatCounter, els favorits ni els jocs.
