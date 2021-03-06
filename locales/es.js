export default {
  seo: {
    title: 'Covid-19 eus',
    desc: 'Sitio web que muestra todos los datos sobre el Covid-19 en la CAV'
  },
  headers: {
    analisiak: 'Test PCR en total',
    analisiakQuick: 'Test rápidos en total',
    analisiakInfo: 'Diferencias entre tests',
    positiboak: 'Positivos',
    ospitaleratuak: 'Hospitalizados/as en total',
    altan: 'Altas',
    hildakoak: 'fallecidos/as',
    heriotzaTasa: 'Tasa de mortalidad',
    difference: {
      aurreko: '',
      gehiago: 'más que el día anterior',
      gutxiago: 'menos que el día anterior'
    },
    uci: {
      guztietatik: 'De los/as cuales',
      ucian: 'en la UCI'
    }
  },
  dialogs: {
    positiboenZerrenda: 'Listado de positivos',
    herria: 'Municipio',
    positiboak: 'Positivos',
    bilakaera: 'Positivos en {place}'
  },
  sections: {
    //Herrika
    herrika: 'Busqueda por localidad',
    herrikaText: 'Positivos que se han dado en cada municipio. Además puedes ver la evolución de los positivos del municipio seleccionado. Si no obtienes resultados, es porque el municipio no tiene ningún caso registrado.',
    formText: 'Escribe la localidad',
    formSubmit: 'Buscar',
    formLinkText: 'Para ver el listado completo',
    formLink: 'haz clic aquí',
    positiboak: 'Positivos',

    // notes
    herriakNotes: 'Los positivos por municipio provienen de datos de las analíticas a las 08:00 de la mañana. Es por ello que los totales no coinciden con los de los resultados de las analíticas de las 20:00 de la tarde. Puede además que haya pequeñas discrepancias de día a día. La información está continuamente siendo revisada y depurada. En aras de la transparencia puede que haya algún error puntual que posteriormente será corregido',
    hildakoakNotes: 'El número de fallecidos puede que algún día no coincida con los datos que provienen de los hospitales porque existe un decalaje entre ambos sistemas de información que se corregirá en días posteriores',

    //Lurraldeka
    lurraldeka: 'Por provincias',
    lurraldekaText: 'Evolución de los positivos en cada una de la provincias. Por un lado, los positivos día a día. Por otro, la evolución de los positivos por cada 10.000 habitantes. Se muestran los datos de los últimos 30 días para una mejor legibilidad de los gráficos.',

    //OSPITALERATUAK
    ospitaleratuak: 'Hospitalizados/as',
    ospitaleratuakText: 'Evolución de los/as hospitalizados/as tanto en planta como en la UCI.',
    ospitaleratuakGraph: {
      plantan: 'Planta',
      ucian: 'UCI',
    },

    //Adinaren arabera
    adinarenArabera: 'Por edad',
    adinarenAraberaText: 'Gráfico que muestra el impacto del virus por edad.',
    adinaGraph: {
      positiboak: 'Positivos',
      hildakoak: 'Fallecidos/as',
      urte: ' años',
      urteGehiago: ' años o más'
    },

    //Egunez-eguneako (allGraphs)
    egunezEgunekoa: 'Evolución día a día',
    egunezEgunekoaText: 'Datos obtenidos día a día en la CAV. Por una parte, los/as enfermos/as y hospitalizados/as. Por otra, evolución entre fallecidos/as y curados/as.',
    egunezGraph: {
      positiboak: 'Positivos',
      hildakoak: 'Fallecidos/as',
      ospitaleratuak: 'Hospitalizados/as',
      altak: 'Altas',
      yaxis1: 'Positivos y hospitalizados/as',
      yaxis2: 'Fallecidos/as y altas'
    },
  },
  footer: {
    credits: 'Desarrollo @asiermusa | Datos Opendata Euskadi'
  },
  nav: {
    mainText1: 'Esta aplicación ha sido desarrollada con los datos de Opendata Euskadi. La mayoría de los datos han sido obtenidos a partir del 19 de marzo.',
    mainText2: 'Toda la información se actualiza a diario sobre las 14:00 horas.',
    code: 'Código',
    codeLink: 'en github'
  },
  snackbar: {
    text: 'Los datos están actualizados: ',
    close: 'Cerrar'
  }
}
