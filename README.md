# Tramuntana · Ment Activa

**Plataforma d’activitats i recursos d’estimulació cognitiva del Centre Ocupacional Tramuntana.**

▶️ **[Obre Ment Activa](https://hawaian.github.io/-jocs-tramuntana/)** · **[Registre de canvis](CHANGELOG.md)**

**Versió 3.2.4 · 25 de novembre de 2026**

## Què hi trobaràs

Ment Activa reuneix jocs i recursos per treballar l’atenció, la memòria, la comunicació, l’autonomia, el càlcul i altres habilitats. Es pot utilitzar al PC o a les tauletes compartides del centre.

- **Quatre serveis** amb recomanacions pròpies: STO, STOA, SOI i STO SFG.
- **Catàleg** ordenat alfabèticament, amb cerca i filtres per nivell i idioma. Les fitxes indiquen si l’enllaç obre un joc concret o un portal amb diverses activitats.
- **Activitats pròpies** amb tres nivells de dificultat: Comptem, Parelles, Què falta?, Troba l’intrús i Ordena nombres.
- **Activitats recents** per recuperar els recursos oberts a la mateixa tauleta.

## Com començar

1. Obre la web i tria **STO**, **STOA**, **SOI** o **STO SFG**. La pantalla es queda al lloc, es veu l’animació del servei i el catàleg queda disponible a sota.
2. Toca **⭐ Preferits** per veure els recursos recomanats del servei seleccionat. Per explorar el catàleg general, toca **Tots els jocs**.
3. Tria una categoria o cerca pel nom. Prem **Fitxa** si vols consultar l’objectiu, les indicacions i l’idioma abans d’obrir el recurs.
4. Per jugar a una activitat del centre, obre **Activitats pròpies** i selecciona el nivell.

## Accessibilitat i ús a les tauletes

El menú **⚙ Opcions de visualització** permet triar **Lletra gran**, **Lletra molt gran**, **Contrast alt** i **Reduir les animacions**. El mode **Lletra molt gran** mostra les fitxes en una sola columna. Les preferències es guarden al dispositiu.

A la CUBOT en vertical, la capçalera compacta deixa més espai al selector. Els botons d’informació i configuració queden a sobre de STO SFG tant en aquesta vista com al PC. En mòbil, queden a la franja blanca de sota la il·lustració.

### Animacions

En obrir Ment Activa, la roda verda del logotip de Tramuntana gira. Les icones dels quatre serveis tenen animacions pròpies i, quan en tries un, la pantalla es manté al lloc perquè puguis veure el moviment. El botó d’engranatge ⚙ obre el menú de visualització.

### Instal·lació i funcionament sense connexió

Obre Ment Activa a Brave o Chrome. Si el navegador ofereix **Instal·la l’aplicació** o **Afegeix a la pantalla d’inici**, fes servir aquesta opció per tenir-hi accés directe.

Després d’una primera càrrega amb connexió, la PWA i les activitats pròpies es poden obrir sense Internet. Els recursos externs i la sincronització de preferits necessiten connexió. Si la tauleta ja ha sincronitzat els preferits, la web pot mostrar l’última còpia disponible.

## Preferits compartits

Cada servei té la seva pròpia llista a Supabase. Els participants poden consultar-la sense iniciar sessió. L’edició està reservada als comptes autoritzats.

### Editar una llista

1. Obre **⚙ → Edita els preferits**. El primer cop, marca **Recorda l’accés en aquest dispositiu** i entra amb el compte de feina.
2. Tria el servei que vols editar i baixa al catàleg.
3. Toca **☆** per afegir un recurs o **★** per treure’l.
4. Prem **Desa i comparteix els canvis** i espera la confirmació abans de prémer **Tanca**.
5. En una altra tauleta, obre el mateix servei i toca **⭐ Preferits**. Recarrega la pàgina si vols comprovar el canvi immediatament.

A la CUBOT 1, **Tanca** surt del panell i conserva l’accés recordat. **Tanca la sessió d’administració** fa que la tauleta oblidi l’accés.

Per canviar la contrasenya, el panell d’edició inclou **Canvia la contrasenya**. Fes-ho des d’una sessió d’administració activa.

**Prova real de la 3.2.** S’ha desat **La Motxilla** com a favorita del **SOI** i s’ha comprovat que es veu des d’una altra tauleta.

## Fitxers principals

| Fitxer | Funció |
| --- | --- |
| [index.html](index.html) | Estructura de la pàgina i seccions. |
| [styles.css](styles.css) | Estils, accessibilitat visual i animacions. |
| [app.js](app.js) | Catàleg, activitats, preferits i connexió a Supabase. |
| [sw.js](sw.js) | Memòria cau i actualització de la PWA. |
| [manifest.webmanifest](manifest.webmanifest) | Identitat, icones i instal·lació de la PWA. |
| [favorits-cloud.json](favorits-cloud.json) | URL del projecte Supabase i clau publicable per a la web. |
| [favorits.json](favorits.json) | Llistes de reserva si el servei en línia no està disponible. |
| [analitica.json](analitica.json) | Configuració de l’analítica opcional. |
| [CHANGELOG.md](CHANGELOG.md) | Historial de versions i canvis. |

La web es publica amb **GitHub Pages**. Supabase gestiona l’accés d’administració i el desament de preferits. Les claus secretes i les contrasenyes es mantenen fora del repositori.

## Publicar una actualització

Puja els fitxers actualitzats a l’arrel del repositori. Quan GitHub Pages acabi, comprova la versió al peu de la web. Si la PWA mostra **Actualitza**, prem aquest botó per carregar la nova versió. Anota els canvis a [CHANGELOG.md](CHANGELOG.md).

*Centre Ocupacional Tramuntana · Recursos, estimulació i aprenentatge.*
