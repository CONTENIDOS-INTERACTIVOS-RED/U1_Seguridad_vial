<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Marco Legal y Normativo de la Seguridad Vial en Colombia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5.align-items-center           
      .col-lg-8.mb-3.mb-lg-0
        p(data-aos="fade-down") La seguridad vial en Colombia se apoya en un marco normativo sólido, compuesto por leyes, decretos y resoluciones, que regulan el tránsito, la prevención de siniestros y la protección de todos los actores viales. Este marco legal guía la planeación, implementación y control de políticas públicas, y permite la coordinación interinstitucional entre sectores como transporte, salud, educación y seguridad ciudadana.
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/24.svg")
            .col-lg
              p.mb-0 Además, se incorpora el uso de tecnologías modernas y buenas prácticas internacionales, incluyendo señalización, control de velocidad, uso obligatorio del cinturón y regulación de la conducción bajo efectos de alcohol o sustancias psicoactivas. La legislación se actualiza de manera continua para adaptarse a los cambios en los patrones de movilidad, las nuevas formas de transporte y los retos emergentes. Así, se garantiza una convivencia vial, basada en educación, respeto y corresponsabilidad.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/25.png", data-aos="zoom-in") 

    h3(data-aos="fade-down") Ley 769 del 2002: Código Nacional de Tránsito Terrestre
    p(data-aos="fade-down") La Ley 769 del 2002, constituye el pilar normativo de la movilidad en Colombia. Fue creada para unificar la legislación dispersa que existía antes de su promulgación y establecer una estructura coherente que garantice la seguridad, eficiencia y sostenibilidad vial.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/26.png", alt="")        
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Contexto y antecedentes")
            p Antes del 2002, las normas de tránsito estaban dispersas, enfocadas en aspectos puntuales del transporte público y privado. El aumento del parque automotor y los problemas de seguridad vial, motivaron la creación de un código integral alineado con estándares internacionales, que promoviera la cooperación regional y mejores prácticas.
          .div(titulo="Disposiciones generales")
            p Establecen los principios rectores del sistema: prioridad a la vida, protección del medio ambiente, equidad en la movilidad y responsabilidad compartida entre los actores viales.
          .div(titulo="Clasificación de vehículos")
            p Define las categorías de vehículos (automóviles, motocicletas, transporte de carga, transporte público, especiales), sus requisitos técnicos, condiciones de seguridad, revisión técnico-mecánica y control de emisiones, promoviendo una movilidad sostenible.

          .div(titulo="Normas de comportamiento")
            p Regula la conducta de conductores, peatones y ciclistas. Incluye el respeto a señales de tránsito, límites de velocidad, uso del cinturón, y la prohibición de conducir bajo efectos del alcohol o drogas.                                 
            

    .row.align-items-start.mb-5      
      .col-lg-8.mb-3.mb-lg-0 
        AcordionA(tipo="b")
          .div(titulo="Regulación del transporte")
            p Establece requisitos para el transporte público y particular, como permisos, tarifas, matrícula, circulación y control de calidad del servicio.
          .div(titulo="Licencias de conducción")
            p Regula la emisión, suspensión y cancelación de licencias. Incluye categorías por tipo de vehículo, requisitos, formación teórica y práctica, y procesos de renovación.
          .div(titulo="Infracciones y sanciones")
            p Define conductas sancionables, tipos de multas, procesos de inmovilización de vehículos, emisión de comparendos, y garantiza el debido proceso en la aplicación de sanciones.                                  
            
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/27.png", alt="")             

    p(data-aos="fade-down") Esta Ley es la columna vertebral de la normativa de tránsito en Colombia. Regula los comportamientos viales, define obligaciones y promueve una movilidad segura, sostenible y ordenada. A continuación, se resumen sus elementos claves:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/temas/28.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="2.3%" y="30.4%" numero="+")
                  h5 Principios rectores                
                  p.mb-0 Enfatiza la responsabilidad compartida entre conductores, peatones, ciclistas, pasajeros y autoridades. Promueve la prudencia, el respeto mutuo y el uso de tecnologías para el control. 
                .bg-color-white.box-shadow.p-3(x="97.6%" y="23.5%" numero="+")
                  h5 Impacto y desafíos              
                  p.mb-0 Ha reducido la siniestralidad y formalizado el transporte. No obstante, aún hay retos en cultura vial, infraestructura y educación ciudadana. La norma requiere actualización continua. 
                .bg-color-white.box-shadow.p-3(x="96.4%" y="85.7%" numero="+")
                  h5 Modificaciones y adaptaciones             
                  ul.lista-ul--color
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 Normas sobre tecnología inteligente.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 Regulación del transporte de mercancías peligrosas.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 Límites de velocidad más estrictos.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 Vehículos eléctricos y autónomos.
                    li.mb-3.d-flex
                      i.far.fa-arrow-alt-circle-right.color-1
                      p.mb-0 Requisitos de infraestructura vial segura.                                    

    h3(data-aos="fade-down") Decreto 1079 del 2015: Decreto Único Reglamentario del Sector Transporte
    p(data-aos="fade-down") Este Decreto organiza y unifica la normativa del sector transporte. Facilita la comprensión y aplicación de la Ley por parte de autoridades, empresas y ciudadanos.

    TabsC(data-aos="fade-right").color-primario.mb-5
      .bg-color-10.border.px-4.p-md-5.py-3(titulo="Alcance normativo" :icon="require('@/assets/curso/temas/31.svg')")
        .row.justify-content-center
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/29.png', alt='')          
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Alcance normativo  
            p Compila la reglamentación del transporte terrestre, marítimo, fluvial, aéreo y férreo. Incluye temas como infraestructura, tránsito y movilidad.
      .bg-color-10.border.px-4.p-md-5.py-3(titulo="Objetivo" :icon="require('@/assets/curso/temas/31.svg')")
        .row.justify-content-center
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img.img-a.img-t(src='@/assets/curso/temas/30.png', alt='')          
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Objetivo  
            p Simplificar, sistematizar y facilitar el acceso a las normas vigentes para su correcta implementación.    

    h3(data-aos="fade-down") Ley 2251 del 2022: Ley Julián Esteban
    p(data-aos="fade-down") EstaL representa un avance significativo en la protección de los usuarios vulnerables y en el fortalecimiento de la cultura vial preventiva. Fue inspirada por el caso de Julián Esteban Gómez, un niño ciclista fallecido en el 2021.
    .bg-full-width-1.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5 
          .col-lg-4.mb-3.mb-lg-0 
            figure
              img.img-a.img-t(src='@/assets/curso/temas/32.png', alt='')   

          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/33.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Infraestructura segura
                p Exige espacios adaptados para peatones, ciclistas y personas con movilidad reducida: pasos seguros, zonas calmadas, carriles exclusivos. 
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/34.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Educación vial escolar 
                p Incorpora contenidos obligatorios de seguridad vial en la educación básica y media.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/35.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Campañas de cultura vial
                p Fomenta campañas de sensibilización con énfasis en el respeto a los actores más vulnerables.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/36.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Visión Cero
                p Adopta el principio de que ninguna muerte en tránsito es aceptable. El sistema debe minimizar el impacto de los errores humanos. 
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/37.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Profundización y desafíos
                p Impulsa un cambio de enfoque de lo reactivo a lo preventivo. Su eficacia dependerá de recursos, vigilancia, articulación y participación ciudadana.                                                                 
        h3(data-aos="fade-down") Decreto 1252 del 2021: Gestión de los Planes Estratégicos de Seguridad Vial (PESV)
        p(data-aos="fade-down") Este decreto redefine los lineamientos para los PESV, obligatorios para organizaciones que gestionan vehículos o conductores. Introduce un enfoque de gestión preventiva basado en mejora continua.

        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/38.svg" alt="" style="width: 90px")
              h5.text-center Reforma clave
              p.mb-0.text-center Rediseña los PESV para instituciones públicas y privadas que poseen, contratan o administran vehículos.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/39.svg" alt="" style="width: 90px")
              h5.text-center Modelo de gestión
              p.mb-0.text-center Impone el uso del ciclo PHVA (Planear - Hacer - Verificar - Actuar).
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/40.svg" alt="" style="width: 90px")
              h5.text-center Articulación normativa
              p.mb-0.text-center Alinea los PESV con la Ley 2251 y el enfoque Visión Cero. Amplía su obligatoriedad a más entidades.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/41.svg" alt="" style="width: 90px")
              h5.text-center Control y sanciones
              p.mb-0.text-center Las autoridades de tránsito pueden verificar su cumplimiento e imponer sanciones cuando corresponda.  

    h3(data-aos="fade-down") Resolución 40595 del 2022: Metodología para el diseño y verificación de los PESV
    p(data-aos="fade-down") Esta resolución complementa el Decreto 1252 y establece la metodología específica para el desarrollo y control de los PESV. Es aplicable a organizaciones con 10 o más vehículos (propios o contratados).


    .row.align-items-start.mb-5      
      .col-lg-8.mb-3.mb-lg-0 
        AcordionA(tipo="b")
          .div(titulo="Obligatoriedad")
            p Aplica a entidades públicas o privadas con diez o más vehículos.
          .div(titulo="Enfoque de gestión")
            p Se basa en el modelo PHVA con trazabilidad documental, auditorías internas y mejora continua.
          .div(titulo="Líneas de acción")
            ul.lista-ul--color
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Comportamiento humano (capacitación y campañas).
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Vehículos seguros (mantenimiento).
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Infraestructura segura (señalización).
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Gestión institucional.
              li.mb-3.d-flex
                i.far.fa-arrow-alt-circle-right.color-1
                p.mb-0 Atención a víctimas.            
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/42.png", alt="")      

    h3(data-aos="fade-down") Plan Nacional de Seguridad Vial 2022–2031
    p(data-aos="fade-down") Este plan nacional establece la estrategia de Colombia para reducir la siniestralidad en los próximos diez años. Propone una gestión articulada con participación de instituciones públicas, sector privado y ciudadanía.           
    .bg-full-width-2.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/43.svg" alt="" style="width: 90px")
              h5.text-center Reducción de siniestros
              p.mb-0.text-center Disminuir víctimas mortales mediante educación, control y uso de tecnología.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/44.svg" alt="" style="width: 90px")
              h5.text-center Medidas preventivas
              p.mb-0.text-center Uso obligatorio del cinturón, control de alcohol y drogas, vigilancia electrónica.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/45.svg" alt="" style="width: 90px")
              h5.text-center Tecnología e infraestructura
              p.mb-0.text-center Recopilación de datos para identificar zonas de riesgo y mejorar la respuesta ante emergencias.

          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100.br-1
              img.mx-auto.d-block.mb-4(src="@/assets/curso/temas/46.svg" alt="" style="width: 90px")
              h5.text-center Participación y cultura
              p.mb-0.text-center Promover una cultura de movilidad segura involucrando a todos los sectores sociales.

        p(data-aos="fade-down") El marco legal colombiano en seguridad vial, ha pasado de una lógica correctiva a un enfoque preventivo, integral y participativo. Su evolución, desde la Ley 769 hasta el Plan Nacional 2022–2031, refleja el compromiso del país con la protección de la vida en las vías. No obstante, la implementación efectiva, el seguimiento y la corresponsabilidad de todos los actores, siguen siendo claves para lograr una movilidad verdaderamente segura y sostenible.

    .bg-full-width.bg-color-7.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/47.png', alt='')                              

          .col-lg-8
            h2.mb-4(data-aos="flip-up") Estándares internacionales y guías de buenas prácticas en seguridad vial
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Estándares internacionales y guías de buenas prácticas en seguridad vial, donde se aborda la Norma ISO 39001 como marco principal para la gestión de la seguridad vial en organizaciones. Este material ofrece explicaciones detalladas, ejemplos y reflexiones sobre la estructura, los requisitos y los beneficios de implementar esta norma, con el fin de reducir riesgos asociados al transporte y promover una cultura de seguridad.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Estándares internacionales y guías de buenas prácticas en seguridad vial

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://mintransporte.gov.co/publicaciones/10363/mintransporte-establece-nueva-norma-para-que-empresas-actualicen-los-planes-estrategicos-de-seguridad-vial/" target="_blank" rel="noopener noreferrer") Mintransporte. (2021). Mintransporte establece nueva norma para que empresas actualicen los Planes Estratégicos de Seguridad Vial. Mintransporte. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.bsigroup.com/en-GB/products-and-services/standards/iso-39001-road-traffic-safety-management" target="_blank" rel="noopener noreferrer") BSI Group. (s.f.). Road Traffic Safety Management (ISO 39001). BSI. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://mintransporte.gov.co/ " target="_blank" rel="noopener noreferrer") Mintransporte. (s.f.). Ministerio de Transporte. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.isotools.us/normas/riesgos-y-seguridad/iso-39001/" target="_blank" rel="noopener noreferrer") ISOTools. (2025). ISO 39001 - Software ISO 39001 de Sistemas de Gestión. Software ISO. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=VsA_cKoVbN0" target="_blank" rel="noopener noreferrer") Senado Colombia. (2021). CÓDIGO NACIONAL DE TRÁNSITO.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=M4az-J1BwSA" target="_blank" rel="noopener noreferrer") CESVIMAP. (2014). ISO 39001: Gestión de la Seguridad Vial. XII jornada Ciclo de conferencias de la Cátedra CESVIMAP.
          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Seguridad vial en el entorno laboral',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto: '¿Cuál es el principal objetivo de la seguridad vial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Incrementar el uso de vehículos motorizados',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Prevenir accidentes y minimizar sus consecuencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Aumentar la velocidad de circulación',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Eliminar el uso de señales de tránsito',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de los siguientes factores NO hace parte del triángulo de la seguridad vial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Vía',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Vehículo',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Clima',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Conductor',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es una causa común de accidentes viales relacionada con el factor humano?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Conducir bajo efectos del alcohol',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Desgaste de los frenos',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Mal estado del pavimento',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Falta de señalización',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué tipo de señal advierte sobre condiciones peligrosas en la vía?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Reglamentaria',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Informativa',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Preventiva',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Provisional',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué elemento de seguridad activa ayuda a prevenir el accidente?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Airbags',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Sistema de frenos ABS',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Cinturón de seguridad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Apoyacabezas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
