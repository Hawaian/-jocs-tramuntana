# Tramuntana · Ment Activa 3.0.4

Plataforma d'activitats i recursos per al Centre Ocupacional Tramuntana.

## Fitxers

- `index.html`: pàgina, catàleg i activitats pròpies.
- `marca-tramuntana.webp` i `capcalera-mobil-viver.webp`: capçalera i paisatge.
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`: icones de l'aplicació.
- `manifest.webmanifest` i `sw.js`: instal·lació i ús bàsic sense connexió.
- `favorits.json`: favorits compartits per als mòduls STO, STOA i SOI.
- `analitica.json`: configuració del comptador GoatCounter.

## Actualització

Puja els fitxers del ZIP a l'**arrel** del repositori, reemplaçant els existents. GitHub no elimina automàticament els fitxers antics.

Després de confirmar que la 3.0.4 funciona, pots eliminar aquests fitxers **obsolets** de GitHub:

- `capcalera-tramuntana.webp`
- `capcalera-mobil-titol.webp`
- `INSTRUCCIONS.txt`
- `INSTRUCCIONS_3.0.md`

**No eliminis** `capcalera-mobil-viver.webp` ni `marca-tramuntana.webp`: la capçalera actual les utilitza. Conserva `favorits.json` i `analitica.json`, perquè controlen dades compartides i estadístiques.

## Perfils i favorits

Les tauletes són compartides. Els favorits oficials es configuren editant `favorits.json` a GitHub, amb els noms exactes dels recursos. El navegador consulta aquest fitxer amb preferència per la xarxa i pot utilitzar-ne la darrera còpia quan està sense connexió.

## Estadístiques

GoatCounter: `https://tramuntanamentactiva.goatcounter.com/`. La configuració pública és a `analitica.json`. No s'hi desen noms d'usuaris ni IP completes a la web. Els visitants únics són estimats, i les proteccions antiseguiment del navegador poden impedir que es comptin algunes visites.

## Si encara apareix la versió anterior

Comprova que GitHub Pages ha acabat la publicació. Obre la web en una pestanya normal i refresca-la. El `sw.js` de la versió 3.0.4 renova la memòria cau de la PWA. Si utilitzes una aplicació instal·lada, tanca-la completament i torna a obrir-la després d'actualitzar la pàgina al navegador.
