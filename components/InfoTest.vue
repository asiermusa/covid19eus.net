<template>
  <v-card>
    <div class="pa-5">
      <h3 class="mb-3">Técnica PCR</h3>
      <v-divider class="mb-3"></v-divider>
      <p class="text-sm-left">En la técnica PCR (siglas en inglés de "reacción en cadena de la polimerasa"),
        que se utiliza de forma frecuente desde hace años para diagnosticar enfermedades infecciosas,
        se puede detectar un fragmento del material genético del virus, en concreto de su ARN.</p>
      <p class="text-sm-left">En esta prueba, se localiza y amplifica un fragmento del ARN del virus.
        Tiene alta especificidad y sensibilidad, y permite detectar la infección incluso en sus primeras
        fases, pero requiere de personal entrenado para su utilización, dada su complejidad, y el resultado
        no se obtiene hasta horas después de su realización.</p>

      <v-alert
      text
      dense
      color="info">
      <span style="font-size: 13px;">
      Esta es la prueba que se ha utilizado desde los primeros días de la epidemia,
      porque los test rápidos no han estado disponibles desde un primer momento.</span>
      </v-alert>

      <h3 class="mb-3">Test rápidos</h3>
      <v-divider class="mb-3"></v-divider>
      <p class="text-sm-left">Los test rápidos detectan anticuerpos producidos frente al virus, utilizando
        una muestra de sangre o proteínas del virus presentes en las muestras respiratorias de exudado
        nasofaríngeo.</p>
      <p class="text-sm-left">Sus principales ventajas son que se pueden realizar en el domicilio del enfermo,
        y que sus resultados se obtienen en 10 o 15 minutos. Se basan en una inmunocromatografía en papel, una plataforma
        que tiene 'pegadas' las proteínas del virus para detectar anticuerpos o anticuerpos específicos para detectar las
        proteínas del virus. Su funcionamiento es similar al de los test de embarazo.</p>

      <v-alert
      text
      dense
      color="teal">
      <span style="font-size: 13px;">Gracias a estas herramientas rápidas, se podrá mejorar el cribado en la población,
        y limitar los ensayos de PCR solo a aquellos pacientes que, con sintomatología, den un resultado negativo mediante
        los test rápidos.</span>
      </v-alert>
    </div>
  </v-card>
</template>
