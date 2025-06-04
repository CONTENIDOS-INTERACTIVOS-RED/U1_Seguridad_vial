export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de la seguridad vial laboral',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos y generalidades de la seguridad vial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Estadísticas y panorama actual de la accidentalidad vial labora',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Marco Legal y Normativo de la Seguridad Vial en Colombia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Decreto 1079 del 2015 Sector Transporte. (2015). Por medio del cual se expide el Decreto Único Reglamentario del Sector Transporte. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77889 ',
    },
    {
      referencia:
        'Decreto 1430 del 2022. (2022). Por medio del cual se aprueba el "Plan Nacional de Seguridad Vial 2022-2023. ',
      link: 'https://www.ani.gov.co/decreto-1430-de-2022',
    },
    {
      referencia:
        'Consejo Colombiano de Seguridad. (s.f.). Cifras de siniestralidad laboral en Colombia – Fasecolda. ',
      link: 'https://ccs.org.co/observatorio/Home/fasecolda ',
    },
    {
      referencia:
        'Caicedo Camacho, D. A. (2025). Esta es la radiografía de los accidentes de tránsito en 2024: cifra superó el promedio de los últimos 5 años. El Tiempo. ',
      link:
        'https://www.eltiempo.com/justicia/cifra-de-victimas-de-accidentes-viales-en-2024-supero-el-promedio-de-los-ultimos-cinco-anos-3416561 ',
    },
    {
      referencia:
        'Giraldo, C. (2025). En el país hubo un accidente laboral fatal diario en promedio en 2024, según la CCS. Portafolio.co. ',
      link:
        'https://www.portafolio.co/negocios/industrias/en-el-pais-hubo-un-accidente-laboral-fatal-diario-en-promedio-en-2024-ccs-626959 ',
    },
    {
      referencia:
        'Resolución 20223040040595 de 2022. (2022). Por la cual se adopta la metodología para el diseño, implementación y verificación de los Planes Estratégicos de Seguridad Vial y se dictan otras disposiciones. ',
      link:
        'https://www.cancilleria.gov.co/sites/default/files/Normograma/docs/resolucion_mintransporte_40595_2022.htm. ',
    },
    {
      referencia:
        'Decreto 1252 del 2021. (2021). Por el cual se modifica el literal a del artículo 2.3.2.1 del Título 2 de la Parte 3 del Li­bro 2 y se sustituye el Capítulo 3 del Título 2 de la Parte 3 del Libro 2 del Decreto 1079 de 2015, único Reglamentario del Sector Transporte, en lo relacionado con los Planes Estratégicos de Seguridad Vial. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=172386 ',
    },
    {
      referencia:
        'ICONTEC (2014). Sistemas de gestión de la seguridad vial. Requisitos con guía para uso. (NTC-ISO 39001:2014).',
      link: 'https://es.scribd.com/document/619624195/NTC-39001-2014-1',
    },
  ],
  glosario: [
    {
      termino: 'Accidente de tránsito',
      significado:
        'Suceso imprevisto, en la vía, que involucra vehículos, personas y daños.',
    },
    {
      termino: 'Comportamiento seguro',
      significado:
        'Conductas responsables que reducen el riesgo de siniestros viales.',
    },
    {
      termino: 'Educación vial',
      significado:
        'Procesos formativos que promueven el respeto a normas y prácticas seguras.',
    },
    {
      termino: 'Factores de riesgo',
      significado:
        'Condiciones o conductas que aumentan la probabilidad de accidentes.',
    },
    {
      termino: 'Factores protectores',
      significado:
        'Elementos que disminuyen el riesgo de siniestralidad en la vía.',
    },
    {
      termino: 'Infraestructura vial',
      significado:
        'Conjunto de obras físicas que facilitan y regulan la circulación vial.',
    },
    {
      termino: 'Ley 2251 del 2022',
      significado:
        'Ley que protege a los usuarios vulnerables y promueve Visión Cero.',
    },
    {
      termino: 'Marco normativo',
      significado:
        'Conjunto de leyes, decretos y resoluciones que regulan la seguridad vial.',
    },
    {
      termino: 'Movilidad sostenible',
      significado:
        'Sistema de transporte seguro, accesible y ambientalmente responsable.',
    },
    {
      termino: 'Normas de tránsito',
      significado:
        'Reglas legales que regulan la circulación vial de personas y vehículos.',
    },
    {
      termino: 'PESV',
      significado:
        'Plan Estratégico de Seguridad Vial, implementado por las organizaciones.',
    },
    {
      termino: 'Prevención',
      significado:
        'Acciones orientadas a evitar la ocurrencia de accidentes de tránsito.',
    },
    {
      termino: 'Resolución 40595 del 2022',
      significado:
        'Norma que establece la metodología para diseñar y verificar los PESV.',
    },
    {
      termino: 'Seguridad vial',
      significado:
        'Estrategias y medidas para proteger la vida de los usuarios de las vías.',
    },
    {
      termino: 'Visión Cero',
      significado: 'Enfoque que plantea que ninguna muerte vial es aceptable.',
    },
  ],
}
