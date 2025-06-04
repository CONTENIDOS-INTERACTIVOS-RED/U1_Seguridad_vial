<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Estadísticas y panorama actual de la accidentalidad vial laboral'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center            
        .col-lg.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") Después de revisar los fundamentos y conceptos claves de la seguridad vial, es necesario analizar el panorama actual de la accidentalidad laboral, para luego enfocarnos en las cifras más recientes sobre seguridad vial en Colombia. Esta visión general permite comprender la magnitud del problema y reforzar la importancia de implementar planes efectivos de prevención, en los entornos de trabajo y movilidad.
        .col-lg-auto
          figure
            img.img-a.img-t(src='@/assets/curso/temas/19.png', alt='')    

    h3(data-aos="fade-down") Balance general de siniestralidad laboral en Colombia (2024)
    p(data-aos="fade-down") En el 2024, Colombia registró un total de 521.226 accidentes de trabajo, lo que equivale a un promedio diario de 1.428 incidentes. Aunque esta cifra representa una disminución con respecto a los años anteriores, el volumen total sigue siendo elevado y evidencia la urgencia de fortalecer las políticas de seguridad y salud en el trabajo.

    .titulo-figura(data-aos="fade-right")
      h5 Tabla 1. 
      span Balance general de siniestralidad laboral en Colombia (2024)

    .tabla-a-1.mb-5(data-aos="fade-left") 
      table
        thead.text-center
          tr
            th Indicador
            th Cifra / Descripción
        tbody
          tr
            td.text-bold Accidentes laborales totales
            td 521.226 (promedio de 1.428 diarios).
          tr
            td.text-bold Muertes laborales
            td 408 (reducción del 44 % frente al 2023).
          tr
            td.text-bold Enfermedades laborales
            td 10.429 casos registrados.
          tr
            td.text-bold Tasa nacional de accidentalidad
            td 4,02 por cada 100 trabajadores (descenso sostenido desde 2012).
          tr
            td.text-bold Departamentos con mayor accidentalidad
            td Magdalena (5,57), Caldas (5,50), Antioquia (5,41), Meta (5,25), Cundinamarca (4,99).
          tr
            td.text-bold Ciudades con mayor número de casos
            td Bogotá (151.478), Antioquia (119.058), Valle del Cauca (53.597).
          tr
            td.text-bold Sectores con más accidentes absolutos
            td Industrias manufactureras (84.119), servicios administrativos (58.377), construcción (58.048).     
          tr
            td.text-bold Sectores con mayor tasa de accidentes
            td Agricultura (13,50), minas y canteras (12,41), agua (9,72).                                                         

    .row.mb-5.align-items-center 
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/20.png", data-aos="zoom-in")                  
      .col-lg-8
        p(data-aos="fade-down") En términos de mortalidad laboral, la tasa más baja en 30 años, fue de 3,14 por cada 100.000 trabajadores. La Explotación de minas y canteras lideró en tasa de mortalidad con 51,28. Bogotá concentró el mayor número de fallecimientos, con 108 casos.      
        .bg-color-4.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/21.svg")
            .col-lg
              p.mb-0 En cuanto a enfermedades laborales, la tasa nacional fue de 80,34 por cada 100.000 trabajadores, siendo Quindío el más afectado, con un aumento del 671,6 % con respecto al año anterior. Las industrias manufactureras encabezaron la lista en volumen absoluto, con 2.197 casos.  

    h3(data-aos="fade-down") Estadísticas recientes de seguridad vial en Colombia (2024)
    p(data-aos="fade-down") El año 2024 fue especialmente crítico en cuanto a seguridad vial. Según datos de la Agencia Nacional de Seguridad Vial (ANSV) y el Observatorio Nacional de Seguridad Vial (ONSV), las muertes y lesiones por siniestros viales mostraron cifras preocupantes, especialmente entre población joven y conductores de motocicleta.
    .titulo-figura(data-aos="fade-right")
      h5 Tabla 2. 
      span Indicadores de mortalidad y siniestralidad por accidentes de tránsito en Colombia (2024)

    .tabla-a-1.mb-5(data-aos="fade-left") 
      table
        thead.text-center
          tr
            th Indicador
            th Cifra / Descripción
        tbody
          tr
            td.text-bold Fallecidos por accidentes de tránsito
            td 8.266 personas (aumento del 43,9 % frente al promedio 2019-2023).
          tr
            td.text-bold Lesionados en siniestros viales
            td 25.019 personas entre enero y octubre de 2024 (12,13 % más que el promedio de cinco años anteriores).
          tr
            td.text-bold Promedio mensual de muertes
            td 688 fallecimientos; picos en diciembre (773), enero (751), marzo (741), abril (739), octubre (731).
          tr
            td.text-bold Muertes, según Medicina Legal (noviembre)
            td 7.448 (159 menos que en mismo periodo del 2023).
          tr
            td.text-bold Aumento en diciembre (Bogotá)
            td 54 muertes viales (46 % más que en diciembre del 2023).
          tr
            td.text-bold Principales víctimas
            td Hombres jóvenes (20-30 años), 80 % de fallecidos; #[b motociclistas], 61,63 % del total.
          tr
            td.text-bold Departamentos con más víctimas fatales
            td Antioquia (13,5 %), Valle del Cauca (10,4 %), Bogotá y Cundinamarca (7,8 % cada uno), Santander (4,8 %), Huila (4 %).
          tr
            td.text-bold Distribución por zona
            td 3.906 muertes en zonas urbanas (+19,6 %) y 2.591 en rurales (+9,4 %) en comparación con promedio 2019-2023.                                                                                     
    .row.mb-5.align-items-center           
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/22.svg")
            .col-lg
              p.mb-0 Estas cifras evidencian que, aunque se observan tendencias positivas en algunos indicadores de seguridad y salud laboral, los niveles de siniestralidad siguen siendo alarmantes, tanto en el entorno laboral como en la movilidad general. Esto refuerza la urgencia de consolidar estrategias de prevención más sólidas, fomentar una cultura de seguridad vial y fortalecer la formación de conductores y trabajadores en el manejo del riesgo.

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/23.png", data-aos="zoom-in") 

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://ccs.org.co/observatorio/" target="_blank" rel="noopener noreferrer") Consejo Colombiano de Seguridad. (s.f.). Observatorio de SST.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.colombiaaprende.edu.co/contenidos/plataforma/escuela-virtual-de-seguridad-vial" target="_blank" rel="noopener noreferrer") Escuela virtual de seguridad vial | Colombia Aprende. (s.f.). 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Mih_g0iJ5m0" target="_blank" rel="noopener noreferrer") ISSLA. (2018). II Jornada Seguridad Vial Laboral 1/9.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
