export default {
  seo: {
    title: 'Covid-19 eus',
    desc: 'EAEan Covid-19ari buruzko datuak biltzen dituen ataria'
  },
  headers: {
    analisiak: 'Analisiak guztira',
    positiboak: 'Horietatik positiboak',
    ospitaleratuak: 'Ospitaleratuak guztira',
    altan: 'Altan emandakoak',
    hildakoak: 'Hildakoak',
    heriotzaTasa: 'Heriotza tasa',
    difference: {
      aurreko: 'Aurreko egunean baino',
      gehiago: 'gehiago',
      gutxiago: 'gutxiago'
    },
    uci: {
      guztietatik: 'Guztietatik',
      ucian: 'UCIan daude'
    }
  },
  dialogs: {
    positiboenZerrenda: 'positiboen zerrenda',
    herria: 'Herria',
    positiboak: 'Positiboak',
    bilakaera: 'Positiboen bilakaera {place}(e)n'
  },
  sections: {
    //Herrika
    herrika: 'Herrikoako bilaketa',
    herrikaText: 'Herri bakoitzean eman diren positiboak. Herriaren gainean klikatu dezakezu bilakaera osoa ikusteko. Herri bat agertzen ez bada, positiborik ez duelako da.',
    formText: 'Bilaketa egin',
    formSubmit: 'Bilatu',
    formLinkText: 'Herrien zerrenda oso ikusteko',
    formLink: 'egin klik hemen',
    positiboak: 'Positiboak',

    //notes
    herriakNotes: 'Udalerriko positiboak analisietako datuetatik datoz, goizeko 08:00etan. Horregatik, guztizkoak ez datoz bat arratsaldeko 20:00etako analisien emaitzekin. Baliteke, gainera, egunez egun desadostasun txikiak egotea. Informazioa etengabe berrikusten eta arazten ari da. Baliteke, gardentasunaren mesedetan, akats puntualen bat egotea, gerora zuzenduko dena.',
    hildakoakNotes: 'Hildakoen kopurua agian ez dator bat egunen batean ospitaleetatik datozen datuekin, bi informazio-sistemen artean dekalaje bat dagoelako, eta dekalaje hori hurrengo egunetan zuzenduko da.',

    //Lurraldeka
    lurraldeka: 'Lurraldeka',
    lurraldekaText: 'Lurralde bakoitzean eman diren positiboen bilakaera. Batetik egun bakoitzean eman diren positibo kopurua. Bestetik 10.000 biztanleko gaixo kopuruak egunez-egun izandako bilakaera.',

    //OSPITALERATUAK
    ospitaleratuak: 'Ospitaleratuak',
    ospitaleratuakText: 'Ospitaleratuen artean plantan edo UCIan daudenen eboluzioa.',
    ospitaleratuakGraph: {
      plantan: 'Plantan',
      ucian: 'UCIan',
    },

    //Adinaren arabera
    adinarenArabera: 'Adinaren arabera',
    adinarenAraberaText: 'Adinaren arabera birusak izan duen bilakaera ikusi daiteke grafiko honetan.',
    adinaGraph: {
      positiboak: 'Positiboak',
      hildakoak: 'Hildakoak',
      urte: ' urte',
      urteGehiago: ' urte edo gehiago'
    },

    //Egunez-eguneako (allGraphs)
    egunezEgunekoa: 'Egunez-eguneko bilakaera',
    egunezEgunekoaText: 'Egunez-egun EAEn eman diren datuak. Alde batetik positibo eta ospitaleratuak, bestetik, altan eman direnen eta hildakoen arteko bilakaera.',
    egunezGraph: {
      positiboak: 'Positiboak',
      hildakoak: 'Hildakoak',
      ospitaleratuak: 'Ospitaleratuak',
      altak: 'Altak'
    },
  },
  footer: {
    credits: 'Garapena @asiermusa | Datuak Opendata Euskadi'
  },
  nav: {
    mainText1: 'Aplikazio hau BETA bertsioan dago eta Opendata euskadiko webguneko datuak jasota egin da. Datu guztiak martxoaren 19az geroztik jaso dira.',
    mainText2: 'Egunero 14:00ak aldera modu automatikoan eguneratuko dira datuak.',
    code: 'Kodea',
    codeLink: 'githuben eskuragarri'
  },
  snackbar: {
    text: 'Datuak eguneratuta daude: ',
    close: 'Itxi'
  }
}
