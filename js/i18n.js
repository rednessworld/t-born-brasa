/* ============================================================
   i18n.js — T-Born Brasa
   Trilingual: Español · Català · English
   applyLang() uses innerHTML (not textContent) — supports HTML entities
   ============================================================ */

const LANG_KEY = 'preferred_lang';

const translations = {

  /* ── ESPAÑOL ─────────────────────────────────────────────── */
  es: {
    /* Skip nav */
    'skip.nav': 'Ir al contenido',

    /* Nav */
    'nav.about':    'Nosotros',
    'nav.menu':     'Carta',
    'nav.gallery':  'Galería',
    'nav.findus':   'Encuéntranos',
    'nav.reserve':  'Reservar Mesa',
    'nav.aria.open':  'Abrir menú de navegación',
    'nav.aria.close': 'Cerrar menú de navegación',

    /* Loader */
    'loader.text': 'T-Born Brasa',

    /* Hero */
    'hero.eyebrow':  'El Born &middot; Barcelona',
    'hero.headline': 'Fuego, tiempo y sabor',
    'hero.sub':      'Brasa y ahumado lento en el corazón de El Born. Carnes seleccionadas, técnica de fuego auténtica.',
    'hero.cta':      'Reservar Mesa',
    'hero.img.alt':  'Interior de T-Born Brasa con la brasa encendida',

    /* About */
    'about.label':   'Nuestra historia',
    'about.heading': 'El Arte del Fuego',
    'about.p1':      'En T-Born Brasa no solo cocinamos carne: la transformamos. Cada pieza pasa horas sobre el fuego y el humo de madera de encina, desarrollando una complejidad de sabor que solo el tiempo puede crear.',
    'about.p2':      'En el corazón de El Born, nuestro restaurante es un homenaje a la cocina de brasa más auténtica. Carnes de primera selección, ahumados lentos y una pasión por el producto que se siente en cada bocado.',
    'about.cta':     'Descubrir nuestra historia &rarr;',
    'about.img.alt': 'Interior del restaurante T-Born Brasa',

    /* Signature Selections */
    'selections.label':    'Selecciones especiales',
    'selections.heading':  'Nuestros Platos Estrella',
    'selections.sub':      'Los favoritos de nuestra cocina, lentos al fuego.',
    'sel.card1.badge': '350g &middot; €35',
    'sel.card1.name':  'Costillas de Cerdo',
    'sel.card1.desc':  'Ahumadas lentamente durante 6 horas con madera de encina. Jugosas, tiernas y llenas de sabor.',
    'sel.card1.alt':   'Costillas de cerdo ahumadas de T-Born Brasa',
    'sel.card2.badge': '700g &middot; €48',
    'sel.card2.name':  'Angus Ribs',
    'sel.card2.desc':  'Costillas premium Angus, 8 horas al humo, glaseadas con nuestra salsa BBQ de la casa.',
    'sel.card2.alt':   'Costillas Angus ahumadas de T-Born Brasa',
    'sel.card3.badge': '1kg &middot; €100',
    'sel.card3.name':  'Combo El Born',
    'sel.card3.desc':  'Lo mejor de la casa en un solo combo para dos: costillas, cerdo desmechado y ternera.',
    'sel.card3.alt':   'Combo El Born de T-Born Brasa',

    /* Reviews */
    'reviews.label':   'Opiniones',
    'reviews.heading': 'Lo que dicen nuestros clientes',
    'reviews.overall': 'en Google &middot; 127 reseñas',
    'reviews.google':  'Ver todas las reseñas',

    /* Menu section */
    'menu.label':   'La Carta',
    'menu.heading': 'Nuestra Carta',

    /* Menu tabs */
    'menu.tab.entradas': 'Entrantes',
    'menu.tab.smoked':   'Ahumados',
    'menu.tab.brasa':    'A la Brasa',
    'menu.tab.arroces':  'Arroces',
    'menu.tab.acomp':    'Acompañantes',
    'menu.tab.postres':  'Postres',

    /* Entrantes */
    'menu.ent1.name': 'Tomate con Burrata',
    'menu.ent1.desc': 'Tomate de temporada, burrata cremosa, albahaca fresca y aceite de oliva virgen extra.',
    'menu.ent2.name': 'Ensalada de Pepino y Tomate',
    'menu.ent2.desc': 'Ensalada fresca de pepino crujiente, tomate cherry, hierbas y aliño de limón.',
    'menu.ent3.name': 'Tuétano de Vaca Asado con Steak Tartar',
    'menu.ent3.desc': 'Tuétano de vaca asado a la brasa con steak tartar artesano y pan de payés tostado.',
    'menu.ent4.name': 'Carrillera de Ternera Estofada',
    'menu.ent4.desc': 'Carrillera cocinada a baja temperatura durante 12 horas, con jugo de brasa y parmentier.',
    'menu.ent5.name': 'Provolone con Tomates Secos',
    'menu.ent5.desc': 'Provolone fundido a la plancha con tomates secos, orégano y aceite de albahaca.',

    /* Ahumados */
    'menu.smk1.name': 'Costillas de Cerdo (350g)',
    'menu.smk1.desc': 'Ahumadas lentamente 6 horas con madera de encina. Jugosas y tiernas.',
    'menu.smk2.name': 'Costillas Angus (700g)',
    'menu.smk2.desc': 'Costillas premium Angus, 8 horas al humo, glaseadas con salsa BBQ de la casa.',
    'menu.smk3.name': 'Ternera Desmechada (200g)',
    'menu.smk3.desc': 'Ternera ahumada y desmechada a mano, servida con pan de payés tostado.',
    'menu.smk4.name': 'Cerdo Desmechado (400g)',
    'menu.smk4.desc': 'Paleta de cerdo ahumada lentamente, suculenta y tierna.',
    'menu.smk5.name': 'Combo Especial &ldquo;El Born&rdquo;',
    'menu.smk5.desc': 'Costillas de cerdo, cerdo desmechado y ternera. 1kg para 2 personas.',
    'menu.smk6.name': 'Combo Premium &ldquo;La Ciutat Vella&rdquo;',
    'menu.smk6.desc': 'Selección premium con costillas Angus, ternera desmechada y más. Para 2&ndash;3 personas.',

    /* A la Brasa */
    'menu.brs1.name': 'Costilla de Ternera (350g)',
    'menu.brs1.desc': 'Costilla de ternera a la brasa, punto jugoso y sabor intenso.',
    'menu.brs2.name': 'Falda de Ternera (350g)',
    'menu.brs2.desc': 'Corte sabroso, marinado y asado a fuego vivo sobre la brasa.',
    'menu.brs3.name': 'Vacío (350g)',
    'menu.brs3.desc': 'El corte argentino por excelencia: tierno, sabroso y con carácter.',
    'menu.brs4.name': 'Tri-Tip (350g)',
    'menu.brs4.desc': 'Corte americano de lomo bajo, jugoso y muy sabroso a la brasa.',
    'menu.brs5.name': 'Solomillo (350g)',
    'menu.brs5.desc': 'El corte más tierno de la ternera. Perfección a la brasa.',
    'menu.brs6.name': 'Entrecot (350g)',
    'menu.brs6.desc': 'Veteado perfecto para una experiencia intensa y rica en boca.',

    /* Arroces */
    'menu.arr1.name': 'Paella de Solomillo',
    'menu.arr1.desc': 'Arroz meloso con solomillo de ternera braseado. Para 2 personas.',
    'menu.arr2.name': 'Paella de Pollo Asado',
    'menu.arr2.desc': 'Arroz con pollo asado a la brasa y caldo de primera.',
    'menu.arr3.name': 'Paella de Paletilla de Cerdo Ibérico',
    'menu.arr3.desc': 'Arroz con paletilla ibérica ahumada y matices de brasa.',
    'menu.arr.perperson': 'por persona',

    /* Acompañantes */
    'menu.acp1.name': 'Arroz Blanco',
    'menu.acp1.desc': 'Para acompañar todos nuestros platos.',
    'menu.acp2.name': 'Patatas Fritas',
    'menu.acp2.desc': 'Caseras, crujientes y doradas.',
    'menu.acp3.name': 'Verduras a la Brasa',
    'menu.acp3.desc': 'Selección de verduras de temporada a la brasa.',
    'menu.acp4.name': 'Pan de Payés',
    'menu.acp4.desc': 'Pan artesano con aceite virgen y tomate de temporada.',

    /* Postres */
    'menu.pos1.name': 'Tarta de Queso Casera',
    'menu.pos1.desc': 'Receta de la casa, cremosa, suave y con base crujiente.',
    'menu.pos2.name': 'Coulant con Helado',
    'menu.pos2.desc': 'Coulant de chocolate negro con interior fundente y helado de vainilla.',
    'menu.pos3.name': 'Helado (2 bolas)',
    'menu.pos3.desc': 'Selección del día. Pregunta a tu camarero.',
    'menu.pos4.name': 'Tarta de Chocolate',
    'menu.pos4.desc': 'Intensa y cremosa, con ganache de chocolate negro.',
    'menu.pos5.name': 'Red Velvet',
    'menu.pos5.desc': 'Con frosting de queso crema y cobertura de cacao.',

    /* Gallery */
    'gallery.label':     'La Experiencia',
    'gallery.heading':   'Déjate llevar por el sabor',
    'gallery.instagram': 'Síguenos en Instagram',
    'gallery.img1.alt':  'Brasa encendida en T-Born Brasa',
    'gallery.img2.alt':  'Plato de costillas ahumadas de T-Born Brasa',
    'gallery.img3.alt':  'Interior del restaurante T-Born Brasa en El Born',

    /* Find Us */
    'findus.label':      'Encuéntranos',
    'findus.heading':    'Visítanos en El Born',
    'findus.sub':        'En el corazón del Born, Barcelona.',
    'findus.wa.heading': 'Reserva por WhatsApp',
    'findus.wa.desc':    'La forma más rápida de asegurar tu mesa. Te respondemos en minutos.',
    'findus.wa.cta':     'Escribirnos en WhatsApp',
    'findus.hours.heading': 'Horario',
    'findus.hours.tuesun':  'Mar &ndash; Dom',
    'findus.hours.lunch':   '13:00 &ndash; 16:00',
    'findus.hours.dinner':  '20:00 &ndash; 01:00',
    'findus.hours.closed':  'Lunes: Cerrado',
    'findus.address.heading': 'Dirección',
    'findus.phone.heading':   'Teléfono',
    'findus.map.aria':    'Mapa de ubicación de T-Born Brasa en Google Maps, Carrer del Comerç 24, Barcelona',

    /* Footer */
    'footer.copy':      '&copy; {year} T-Born Brasa. Todos los derechos reservados.',
    'footer.privacy':   'Política de Privacidad',
    'footer.instagram': 'Instagram',

    /* Cookie banner */
    'cookie.title':     'Aviso de cookies',
    'cookie.desc':      'Usamos cookies de análisis para mejorar tu experiencia. Requerido por el RGPD.',
    'cookie.accept':    'Aceptar todo',
    'cookie.necessary': 'Solo necesarias',

    /* WhatsApp */
    'whatsapp.tooltip':  'Reserva por WhatsApp',
    'whatsapp.message':  'Hola, me gustaría reservar una mesa en T-Born Brasa.',

    /* Accessibility */
    'backtotop.aria': 'Volver arriba',
  },

  /* ── CATALÀ ──────────────────────────────────────────────── */
  ca: {
    /* Skip nav */
    'skip.nav': 'Anar al contingut',

    /* Nav */
    'nav.about':    'Nosaltres',
    'nav.menu':     'Carta',
    'nav.gallery':  'Galeria',
    'nav.findus':   "Troba'ns",
    'nav.reserve':  'Reservar Taula',
    'nav.aria.open':  'Obrir menú de navegació',
    'nav.aria.close': 'Tancar menú de navegació',

    /* Loader */
    'loader.text': 'T-Born Brasa',

    /* Hero */
    'hero.eyebrow':  'El Born &middot; Barcelona',
    'hero.headline': 'Foc, temps i sabor',
    'hero.sub':      'Brasa i fumat lent al cor d\'El Born. Carns seleccionades, tècnica de foc autèntica.',
    'hero.cta':      'Reservar Taula',
    'hero.img.alt':  'Interior de T-Born Brasa amb la brasa encesa',

    /* About */
    'about.label':   'La nostra història',
    'about.heading': "L'Art del Foc",
    'about.p1':      'A T-Born Brasa no només cuinem carn: la transformem. Cada peça passa hores sobre el foc i el fum de fusta d\'alzina, desenvolupant una complexitat de sabor que només el temps pot crear.',
    'about.p2':      'Al cor d\'El Born, el nostre restaurant és un homenatge a la cuina de brasa més autèntica. Carns de primera selecció, fumats lents i una passió pel producte que es nota en cada mos.',
    'about.cta':     'Descobrir la nostra història &rarr;',
    'about.img.alt': 'Interior del restaurant T-Born Brasa',

    /* Signature Selections */
    'selections.label':   'Seleccions especials',
    'selections.heading': 'Els Nostres Plats Estrella',
    'selections.sub':     'Els favorits de la nostra cuina, lents al foc.',
    'sel.card1.badge': '350g &middot; €35',
    'sel.card1.name':  'Costelles de Porc',
    'sel.card1.desc':  'Fumades lentament durant 6 hores amb fusta d\'alzina. Suculentes, tendres i plenes de sabor.',
    'sel.card1.alt':   'Costelles de porc fumades de T-Born Brasa',
    'sel.card2.badge': '700g &middot; €48',
    'sel.card2.name':  'Angus Ribs',
    'sel.card2.desc':  'Costelles premium Angus, 8 hores al fum, vidriades amb la nostra salsa BBQ de la casa.',
    'sel.card2.alt':   'Costelles Angus fumades de T-Born Brasa',
    'sel.card3.badge': '1kg &middot; €100',
    'sel.card3.name':  'Combo El Born',
    'sel.card3.desc':  'El millor de la casa en un sol combo per a dos: costelles, porc desmuntat i vedella.',
    'sel.card3.alt':   'Combo El Born de T-Born Brasa',

    /* Reviews */
    'reviews.label':   'Opinions',
    'reviews.heading': 'El que diuen els nostres clients',
    'reviews.overall': 'a Google &middot; 127 ressenyes',
    'reviews.google':  'Veure totes les ressenyes',

    /* Menu section */
    'menu.label':   'La Carta',
    'menu.heading': 'La Nostra Carta',

    /* Menu tabs */
    'menu.tab.entradas': 'Entrants',
    'menu.tab.smoked':   'Fumats',
    'menu.tab.brasa':    'A la Brasa',
    'menu.tab.arroces':  'Arrossos',
    'menu.tab.acomp':    'Acompanyaments',
    'menu.tab.postres':  'Postres',

    /* Entrantes */
    'menu.ent1.name': 'Tomàquet amb Burrata',
    'menu.ent1.desc': 'Tomàquet de temporada, burrata cremosa, alfàbrega fresca i oli d\'oliva verge extra.',
    'menu.ent2.name': 'Amanida de Cogombre i Tomàquet',
    'menu.ent2.desc': 'Amanida fresca de cogombre cruixent, tomàquet cherry, herbes i vinagreta de llimona.',
    'menu.ent3.name': 'Moll de Vaca Rostit amb Steak Tartar',
    'menu.ent3.desc': 'Moll de vaca rostit a la brasa amb steak tartar artesà i pa de pagès torrat.',
    'menu.ent4.name': 'Galta de Vedella Estofada',
    'menu.ent4.desc': 'Galta cuinada a baixa temperatura durant 12 hores, amb suc de brasa i parmentier.',
    'menu.ent5.name': 'Provolone amb Tomàquets Secs',
    'menu.ent5.desc': 'Provolone fos a la planxa amb tomàquets secs, orenga i oli d\'alfàbrega.',

    /* Ahumados */
    'menu.smk1.name': 'Costelles de Porc (350g)',
    'menu.smk1.desc': 'Fumades lentament 6 hores amb fusta d\'alzina. Suculentes i tendres.',
    'menu.smk2.name': 'Costelles Angus (700g)',
    'menu.smk2.desc': 'Costelles premium Angus, 8 hores al fum, vidriades amb salsa BBQ de la casa.',
    'menu.smk3.name': 'Vedella Desmuntada (200g)',
    'menu.smk3.desc': 'Vedella fumada i desmuntada a mà, servida amb pa de pagès torrat.',
    'menu.smk4.name': 'Porc Desmuntat (400g)',
    'menu.smk4.desc': 'Espatlla de porc fumada lentament, suculenta i tendra.',
    'menu.smk5.name': 'Combo Especial &ldquo;El Born&rdquo;',
    'menu.smk5.desc': 'Costelles de porc, porc desmuntat i vedella. 1kg per a 2 persones.',
    'menu.smk6.name': 'Combo Premium &ldquo;La Ciutat Vella&rdquo;',
    'menu.smk6.desc': 'Selecció premium amb costelles Angus, vedella desmuntada i més. Per a 2&ndash;3 persones.',

    /* A la Brasa */
    'menu.brs1.name': 'Costella de Vedella (350g)',
    'menu.brs1.desc': 'Costella de vedella a la brasa, punt suculent i sabor intens.',
    'menu.brs2.name': 'Falda de Vedella (350g)',
    'menu.brs2.desc': 'Tall saborós, marinat i rostit a foc viu sobre la brasa.',
    'menu.brs3.name': 'Buit (350g)',
    'menu.brs3.desc': 'El tall argentí per excel·lència: tendre, saborós i amb caràcter.',
    'menu.brs4.name': 'Tri-Tip (350g)',
    'menu.brs4.desc': 'Tall americà de llom baix, suculent i molt saborós a la brasa.',
    'menu.brs5.name': 'Filet (350g)',
    'menu.brs5.desc': 'El tall més tendre de la vedella. Perfecció a la brasa.',
    'menu.brs6.name': 'Entrecot (350g)',
    'menu.brs6.desc': 'Veteig perfecte per a una experiència intensa i rica en boca.',

    /* Arroces */
    'menu.arr1.name': 'Paella de Filet',
    'menu.arr1.desc': 'Arròs melós amb filet de vedella brasejat. Per a 2 persones.',
    'menu.arr2.name': 'Paella de Pollastre Rostit',
    'menu.arr2.desc': 'Arròs amb pollastre rostit a la brasa i brou de primera.',
    'menu.arr3.name': "Paella d'Espatlla de Porc Ibèric",
    'menu.arr3.desc': 'Arròs amb espatlla ibèrica fumada i matisos de brasa.',
    'menu.arr.perperson': 'per persona',

    /* Acompanyaments */
    'menu.acp1.name': 'Arròs Blanc',
    'menu.acp1.desc': 'Per acompanyar tots els nostres plats.',
    'menu.acp2.name': 'Patates Fregides',
    'menu.acp2.desc': 'Casolanes, cruixents i daurades.',
    'menu.acp3.name': 'Verdures a la Brasa',
    'menu.acp3.desc': 'Selecció de verdures de temporada a la brasa.',
    'menu.acp4.name': 'Pa de Pagès',
    'menu.acp4.desc': 'Pa artesà amb oli verge i tomàquet de temporada.',

    /* Postres */
    'menu.pos1.name': 'Pastís de Formatge Casolà',
    'menu.pos1.desc': 'Recepta de la casa, cremosa, suau i amb base cruixent.',
    'menu.pos2.name': 'Coulant amb Gelat',
    'menu.pos2.desc': 'Coulant de xocolata negra amb interior fonent i gelat de vainilla.',
    'menu.pos3.name': 'Gelat (2 boles)',
    'menu.pos3.desc': 'Selecció del dia. Pregunta al teu cambrer.',
    'menu.pos4.name': 'Pastís de Xocolata',
    'menu.pos4.desc': 'Intens i cremós, amb ganache de xocolata negra.',
    'menu.pos5.name': 'Red Velvet',
    'menu.pos5.desc': 'Amb frosting de formatge crema i cobertura de cacau.',

    /* Gallery */
    'gallery.label':     "L'Experiència",
    'gallery.heading':   'Deixa\'t portar pel sabor',
    'gallery.instagram': 'Segueix-nos a Instagram',
    'gallery.img1.alt':  'Brasa encesa a T-Born Brasa',
    'gallery.img2.alt':  'Plat de costelles fumades de T-Born Brasa',
    'gallery.img3.alt':  'Interior del restaurant T-Born Brasa al Born',

    /* Find Us */
    'findus.label':      "Troba'ns",
    'findus.heading':    'Visita\'ns al Born',
    'findus.sub':        'Al cor del Born, Barcelona.',
    'findus.wa.heading': 'Reserva per WhatsApp',
    'findus.wa.desc':    'La manera més ràpida d\'assegurar la teva taula. Et responem en minuts.',
    'findus.wa.cta':     'Escriu-nos per WhatsApp',
    'findus.hours.heading': 'Horari',
    'findus.hours.tuesun':  'Dim &ndash; Diu',
    'findus.hours.lunch':   '13:00 &ndash; 16:00',
    'findus.hours.dinner':  '20:00 &ndash; 01:00',
    'findus.hours.closed':  'Dilluns: Tancat',
    'findus.address.heading': 'Adreça',
    'findus.phone.heading':   'Telèfon',
    'findus.map.aria':    'Mapa d\'ubicació de T-Born Brasa a Google Maps, Carrer del Comerç 24, Barcelona',

    /* Footer */
    'footer.copy':      '&copy; {year} T-Born Brasa. Tots els drets reservats.',
    'footer.privacy':   'Política de Privadesa',
    'footer.instagram': 'Instagram',

    /* Cookie */
    'cookie.title':     'Avís de cookies',
    'cookie.desc':      'Fem servir cookies d\'anàlisi per millorar la teva experiència. Requerit pel RGPD.',
    'cookie.accept':    'Acceptar tot',
    'cookie.necessary': 'Només necessàries',

    /* WhatsApp */
    'whatsapp.tooltip':  'Reserva per WhatsApp',
    'whatsapp.message':  "Hola, m'agradaria reservar una taula a T-Born Brasa.",

    /* Accessibility */
    'backtotop.aria': 'Tornar amunt',
  },

  /* ── ENGLISH ─────────────────────────────────────────────── */
  en: {
    /* Skip nav */
    'skip.nav': 'Skip to content',

    /* Nav */
    'nav.about':    'About',
    'nav.menu':     'Menu',
    'nav.gallery':  'Gallery',
    'nav.findus':   'Find Us',
    'nav.reserve':  'Book a Table',
    'nav.aria.open':  'Open navigation menu',
    'nav.aria.close': 'Close navigation menu',

    /* Loader */
    'loader.text': 'T-Born Brasa',

    /* Hero */
    'hero.eyebrow':  'El Born &middot; Barcelona',
    'hero.headline': 'Fire, time and flavour',
    'hero.sub':      'Slow-smoked and live-fire grilling in the heart of El Born. Hand-selected cuts, ancient fire craft.',
    'hero.cta':      'Book a Table',
    'hero.img.alt':  'T-Born Brasa restaurant interior with the live grill',

    /* About */
    'about.label':   'Our Story',
    'about.heading': 'The Art of Fire',
    'about.p1':      'At T-Born Brasa we don\'t just cook meat: we transform it. Every cut spends hours over fire and holm oak smoke, developing a depth of flavour that only time and craft can create.',
    'about.p2':      'In the heart of El Born, our restaurant is a tribute to authentic live-fire cooking. Hand-selected cuts, slow-smoked to perfection, and a passion for the product that shows in every bite.',
    'about.cta':     'Discover Our Story &rarr;',
    'about.img.alt': 'T-Born Brasa restaurant interior',

    /* Signature Selections */
    'selections.label':   'Signature Selections',
    'selections.heading': 'Our Signature Dishes',
    'selections.sub':     'The house favourites, slow over the flame.',
    'sel.card1.badge': '350g &middot; €35',
    'sel.card1.name':  'Pork Ribs',
    'sel.card1.desc':  'Slow-smoked for 6 hours over holm oak. Juicy, tender and packed with smoky flavour.',
    'sel.card1.alt':   'T-Born Brasa smoked pork ribs',
    'sel.card2.badge': '700g &middot; €48',
    'sel.card2.name':  'Angus Ribs',
    'sel.card2.desc':  'Premium Angus ribs, 8 hours in the smoker, glazed with our house BBQ sauce.',
    'sel.card2.alt':   'T-Born Brasa smoked Angus ribs',
    'sel.card3.badge': '1kg &middot; €100',
    'sel.card3.name':  'El Born Combo',
    'sel.card3.desc':  'The best of the house in one combo for two: ribs, pulled pork and pulled beef.',
    'sel.card3.alt':   "T-Born Brasa's El Born Combo",

    /* Reviews */
    'reviews.label':   'Reviews',
    'reviews.heading': 'What Our Guests Say',
    'reviews.overall': 'on Google &middot; 127 reviews',
    'reviews.google':  'View all reviews',

    /* Menu section */
    'menu.label':   'The Menu',
    'menu.heading': 'Our Menu',

    /* Menu tabs */
    'menu.tab.entradas': 'Starters',
    'menu.tab.smoked':   'Smoked',
    'menu.tab.brasa':    'On the Grill',
    'menu.tab.arroces':  'Rice',
    'menu.tab.acomp':    'Sides',
    'menu.tab.postres':  'Desserts',

    /* Starters */
    'menu.ent1.name': 'Tomato with Burrata',
    'menu.ent1.desc': 'Seasonal tomato, creamy burrata, fresh basil and extra virgin olive oil.',
    'menu.ent2.name': 'Cucumber and Tomato Salad',
    'menu.ent2.desc': 'Fresh salad of crispy cucumber, cherry tomatoes, herbs and lemon dressing.',
    'menu.ent3.name': 'Roasted Bone Marrow with Steak Tartare',
    'menu.ent3.desc': 'Grilled bone marrow with house-made steak tartare and toasted rustic bread.',
    'menu.ent4.name': 'Braised Veal Cheeks',
    'menu.ent4.desc': 'Veal cheeks slow-cooked for 12 hours, with grill jus and parmentier.',
    'menu.ent5.name': 'Provolone with Sun-Dried Tomatoes',
    'menu.ent5.desc': 'Grilled melted provolone with sun-dried tomatoes, oregano and basil oil.',

    /* Smoked */
    'menu.smk1.name': 'Pork Ribs (350g)',
    'menu.smk1.desc': 'Slow-smoked 6 hours over holm oak. Juicy and tender.',
    'menu.smk2.name': 'Angus Ribs (700g)',
    'menu.smk2.desc': 'Premium Angus ribs, 8 hours in the smoker, glazed with house BBQ sauce.',
    'menu.smk3.name': 'Pulled Beef (200g)',
    'menu.smk3.desc': 'Smoked, hand-pulled beef, served with toasted rustic bread.',
    'menu.smk4.name': 'Pulled Pork (400g)',
    'menu.smk4.desc': 'Slow-smoked pork shoulder, succulent and tender.',
    'menu.smk5.name': 'Special Combo &ldquo;El Born&rdquo;',
    'menu.smk5.desc': 'Pork ribs, pulled pork and pulled beef. 1kg for 2 people.',
    'menu.smk6.name': 'Premium Combo &ldquo;La Ciutat Vella&rdquo;',
    'menu.smk6.desc': 'Premium selection with Angus ribs, pulled beef and more. For 2&ndash;3 people.',

    /* On the Grill */
    'menu.brs1.name': 'Beef Rib (350g)',
    'menu.brs1.desc': 'Beef rib grilled over live fire, juicy and full of flavour.',
    'menu.brs2.name': 'Beef Flank (350g)',
    'menu.brs2.desc': 'Flavourful cut, marinated and charred over live fire.',
    'menu.brs3.name': 'Flank Steak (350g)',
    'menu.brs3.desc': 'The quintessential Argentine cut: tender, flavourful and full of character.',
    'menu.brs4.name': 'Tri-Tip (350g)',
    'menu.brs4.desc': 'American bottom sirloin, juicy and packed with flavour on the grill.',
    'menu.brs5.name': 'Tenderloin (350g)',
    'menu.brs5.desc': 'The most tender cut. Perfection on the grill.',
    'menu.brs6.name': 'Ribeye (350g)',
    'menu.brs6.desc': 'Perfect marbling for an intense, rich flavour experience.',

    /* Rice */
    'menu.arr1.name': 'Tenderloin Paella',
    'menu.arr1.desc': 'Creamy rice with braised beef tenderloin. For 2 people.',
    'menu.arr2.name': 'Roasted Chicken Paella',
    'menu.arr2.desc': 'Rice with grill-roasted chicken and first-class stock.',
    'menu.arr3.name': 'Iberian Pork Shoulder Paella',
    'menu.arr3.desc': 'Rice with smoked Iberian pork shoulder and smoky notes.',
    'menu.arr.perperson': 'per person',

    /* Sides */
    'menu.acp1.name': 'White Rice',
    'menu.acp1.desc': 'To accompany all our dishes.',
    'menu.acp2.name': 'French Fries',
    'menu.acp2.desc': 'House-made, crispy and golden.',
    'menu.acp3.name': 'Grilled Vegetables',
    'menu.acp3.desc': 'Selection of seasonal vegetables on the grill.',
    'menu.acp4.name': 'Rustic Bread',
    'menu.acp4.desc': 'Artisan bread with olive oil and seasonal tomato.',

    /* Desserts */
    'menu.pos1.name': 'Homemade Cheesecake',
    'menu.pos1.desc': 'Our own recipe, creamy, smooth and with a crispy base.',
    'menu.pos2.name': 'Chocolate Lava Cake with Ice Cream',
    'menu.pos2.desc': 'Dark chocolate lava cake with a molten centre and vanilla ice cream.',
    'menu.pos3.name': 'Ice Cream (2 scoops)',
    'menu.pos3.desc': 'Daily selection. Ask your server.',
    'menu.pos4.name': 'Chocolate Tart',
    'menu.pos4.desc': 'Rich and creamy, with dark chocolate ganache.',
    'menu.pos5.name': 'Red Velvet',
    'menu.pos5.desc': 'With cream cheese frosting and cocoa dusting.',

    /* Gallery */
    'gallery.label':     'The Experience',
    'gallery.heading':   'Let Yourself Be Carried by Flavour',
    'gallery.instagram': 'Follow us on Instagram',
    'gallery.img1.alt':  'Live fire grill at T-Born Brasa',
    'gallery.img2.alt':  'Plate of smoked ribs at T-Born Brasa',
    'gallery.img3.alt':  'T-Born Brasa restaurant interior in El Born',

    /* Find Us */
    'findus.label':      'Find Us',
    'findus.heading':    'Visit Us in El Born',
    'findus.sub':        'In the heart of El Born, Barcelona.',
    'findus.wa.heading': 'Reserve via WhatsApp',
    'findus.wa.desc':    'The fastest way to secure your table. We reply within minutes.',
    'findus.wa.cta':     'Message Us on WhatsApp',
    'findus.hours.heading': 'Hours',
    'findus.hours.tuesun':  'Tue &ndash; Sun',
    'findus.hours.lunch':   '13:00 &ndash; 16:00',
    'findus.hours.dinner':  '20:00 &ndash; 01:00',
    'findus.hours.closed':  'Monday: Closed',
    'findus.address.heading': 'Address',
    'findus.phone.heading':   'Phone',
    'findus.map.aria':    'Location map for T-Born Brasa on Google Maps, Carrer del Comerç 24, Barcelona',

    /* Footer */
    'footer.copy':      '&copy; {year} T-Born Brasa. All rights reserved.',
    'footer.privacy':   'Privacy Policy',
    'footer.instagram': 'Instagram',

    /* Cookie */
    'cookie.title':     'Cookie Notice',
    'cookie.desc':      'We use analytics cookies to improve your experience. Required by GDPR for EU visitors.',
    'cookie.accept':    'Accept All',
    'cookie.necessary': 'Necessary Only',

    /* WhatsApp */
    'whatsapp.tooltip':  'Reserve via WhatsApp',
    'whatsapp.message':  "Hello, I'd like to book a table at T-Born Brasa.",

    /* Accessibility */
    'backtotop.aria': 'Back to top',
  },
};

/* ── Public API ──────────────────────────────────────────── */

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'es';
}

function applyLang(lang) {
  const t = translations[lang];
  if (!t) return;

  const year = new Date().getFullYear();

  /* Swap text content — uses innerHTML to support HTML entities */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] === undefined) return;
    let value = t[key];
    if (value.includes('{year}')) value = value.replace('{year}', year);
    el.innerHTML = value;
  });

  /* Swap aria-label attributes */
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (t[key] !== undefined) el.setAttribute('aria-label', t[key]);
  });

  /* Swap placeholder attributes */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  /* Swap title attributes */
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (t[key] !== undefined) el.title = t[key];
  });

  /* Update WhatsApp links */
  document.querySelectorAll('[id="whatsapp-btn"], .whatsapp-link').forEach(el => {
    const phone = el.dataset.phone || '+34935577591';
    const msg = t['whatsapp.message'] || '';
    if (msg) el.href = `https://wa.me/${phone.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;
    if (t['whatsapp.tooltip']) el.title = t['whatsapp.tooltip'];
  });

  /* Sync lang switcher state — aria-pressed on all .lang-btn */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('lang-btn--active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  /* Update <html lang> attribute */
  document.documentElement.lang = lang;

  localStorage.setItem(LANG_KEY, lang);
}

function initLang() {
  applyLang(getLang());
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
}

initLang();
