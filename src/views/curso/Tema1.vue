<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Fundamentos y generalidades de la seguridad vial'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .row.align-items-start.mb-5
      .col-lg
        p.mb-0 La seguridad vial es un componente esencial en la organización de las sociedades modernas. Su objetivo principal es proteger la vida, la integridad física y la salud de todos los usuarios de las vías públicas: conductores, pasajeros, peatones y ciclistas. Este campo abarca un conjunto de aspectos normativos, técnicos, sociales y culturales, los cuales permiten entender su funcionamiento y aplicabilidad de manera integral.
      .col-lg-auto
        img.img-a.img-t(src="@/assets/curso/temas/3.svg")

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Conceptual y normativa                          
              p La seguridad vial no se limita a leyes y regulaciones. Involucra también comportamientos responsables de todos los actores. La educación vial es clave: promueve el conocimiento de normas, el respeto a señales y la prevención de riesgos.            
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/4.png")           
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Infraestructura                           
              p Una infraestructura adecuada, con señalización clara, buena iluminación y mantenimiento vial, contribuye a reducir accidentes y mejorar la fluidez del tránsito.            
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/5.png")  
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Perspectiva técnica                          
              p Incluye el uso de tecnologías avanzadas: sistemas de control de tráfico, dispositivos de seguridad vehicular y mejoras en la ingeniería de caminos. También se apoya en análisis estadísticos de accidentes para identificar áreas de riesgo y diseñar estrategias preventivas.            
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/6.png")  
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Enfoque social y cultural                          
              p La seguridad vial está vinculada a la conciencia ciudadana y a los hábitos culturales. Campañas de sensibilización, participación comunitaria y programas educativos ayudan a construir una cultura de respeto y responsabilidad.             
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/7.png")  
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              h5 Responsabilidad compartida                          
              p No es solo responsabilidad del gobierno. También involucra a empresas, instituciones educativas y organizaciones civiles. La cooperación entre sectores es vital para lograr un entorno vial seguro y reducir la mortalidad y los traumatismos derivados de los accidentes. Esto contribuye además a un desarrollo social y económico sostenible.            
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/8.png")                                                        
    h3(data-aos="fade-down") Definiciones y conceptos clave en seguridad vial laboral
    .row.mb-5           
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/9.svg")
            .col-lg
              p.mb-0 La seguridad vial laboral comprende un conjunto de políticas, normas y prácticas orientadas a prevenir siniestros viales y proteger la vida e integridad física de quienes participan en la movilidad, especialmente en el contexto del trabajo. Implica infraestructura, vehículos adecuados, educación vial y un comportamiento responsable de todos los actores.
        p(data-aos="fade-down") A continuación, se presentan las definiciones claves para comprender este campo y estructurar planes estratégicos eficaces en seguridad vial:

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/10.png", data-aos="zoom-in") 

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/11.png", alt="")        
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Seguridad vial")
            p Medidas y acciones para reducir riesgos de accidentes en las vías, garantizando un entorno seguro. Incluye normativas, infraestructura, educación y control.
          .div(titulo="Accidente de tránsito")
            p Suceso imprevisto en la vía pública que involucra vehículos, peatones o ciclistas, con resultado de lesiones o daños. Puede deberse a errores humanos, fallos técnicos o condiciones externas.
          .div(titulo="Factores de riesgo")
            p Condiciones o comportamientos que aumentan la probabilidad de un accidente. 
            p #[b Ejemplo.] Exceso de velocidad, uso del móvil al conducir, consumo de alcohol o fallas mecánicas.

          .div(titulo="Normativas y leyes de tránsito")
            p Reglas para regular la circulación en vías públicas. Incluyen límites de velocidad, requisitos de conducción, señalización y sanciones por incumplimiento.                                    
            

    .row.align-items-start.mb-5      
      .col-lg-8.mb-3.mb-lg-0 
        AcordionA(tipo="b")
          .div(titulo="Infraestructura vial")
            p Elementos físicos como carreteras, señalización, pasos peatonales, iluminación y semáforos. Una infraestructura adecuada, reduce riesgos y mejora la movilidad.
          .div(titulo="Educación vial")
            p Campañas y programas para formar a los usuarios sobre normas de tránsito y comportamiento responsable.
          .div(titulo="Comportamiento seguro")
            p Acciones preventivas como respetar señales, usar cinturón de seguridad, no conducir bajo efectos de sustancias, y mantener atención al entorno.
          .div(titulo="Sistema de gestión de seguridad vial")
            p Estrategia integral para planificar, implementar y evaluar acciones que reduzcan la siniestralidad. 
            p Involucra análisis de datos, coordinación entre actores y diseño de políticas.
                                    
            
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/12.png", alt="")                          

    .bg-full-width-3.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5 
          .col-lg-4.mb-3.mb-lg-0 
            figure
              img.img-a.img-t(src='@/assets/curso/temas/13.png', alt='')   

          .col-lg-8
            SlyderF.text-center(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Prevención
                p Acciones anticipadas para evitar accidentes, mediante la identificación y control de factores de riesgo.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Respuesta
                p Procedimientos para atender accidentes cuando ocurren, reduciendo sus consecuencias.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Accidentes con víctimas
                p Aquellos con lesionados o fallecidos. Reducir su número es una meta central de la seguridad vial.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Tasa de siniestralidad
                p Indicador que relaciona el número de accidentes con vehículos, población o kilómetros recorridos. Sirve para medir la eficacia de políticas de seguridad vial.
              .bg-color-white.p-4.h-100.sha.brounded-sm
                img(src='@/assets/curso/temas/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.mb-4 Movilidad sostenible
                p Enfoque de transporte que sea seguro, accesible, eficiente y ecológico, con el fin de reducir riesgos viales y cuidar el entorno.
                                            


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.paho.org/es/temas/seguridad-vial" target="_blank" rel="noopener noreferrer") Organización Panamericana de la Salud. (s.f.). Seguridad vial.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.movilidadbogota.gov.co/web/" target="_blank" rel="noopener noreferrer") Secretaría Distrital de Movilidad. (s.f.). 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=zezHweGJMwY" target="_blank" rel="noopener noreferrer") Escuela de Sabiduría. (2017). Programa de seguridad vial.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
