alert("Welcome!");
// 🌐 LANGUAGE DATA
const translations = {
  en: {
    title: "🚍 HYD BUS CONTROL ROOM",
    totalBuses: "Total Buses",
    electricBuses: "Electric Buses",
    depots: "Total Depots",
    search: "Search Vehicle No...",
    vehicle: "Vehicle",
    type: "Type",
    depot: "Depot",
    engine: "Engine",
    status: "Status",
    layers: "Sheet Layers"
  },
  te: {
    title: "🚍 హైదరాబాద్ బస్ కంట్రోల్ రూమ్",
    totalBuses: "మొత్తం బస్సులు",
    electricBuses: "ఎలక్ట్రిక్ బస్సులు",
    depots: "మొత్తం డిపోలు",
    search: "వాహన నంబర్ వెతకండి...",
    vehicle: "వాహనం",
    type: "రకం",
    depot: "డిపో",
    engine: "ఇంజిన్",
    status: "స్థితి",
    layers: "షీట్ లేయర్లు"
  }
};

// 🌐 LANGUAGE SWITCH
document.getElementById("languageSelect").addEventListener("change", function(){

  let lang = this.value;

  document.getElementById("titleText").innerText = translations[lang].title;

  document.querySelector("#totalBuses").nextElementSibling.innerText = translations[lang].totalBuses;
  document.querySelector("#electricCount").nextElementSibling.innerText = translations[lang].electricBuses;
  document.querySelector("#depotCount").nextElementSibling.innerText = translations[lang].depots;

  document.getElementById("searchInput").placeholder = translations[lang].search;

  let headers = document.querySelectorAll("#busTable thead th");
  headers[0].innerText = translations[lang].vehicle;
  headers[1].innerText = translations[lang].type;
  headers[2].innerText = translations[lang].depot;
  headers[3].innerText = translations[lang].engine;
  headers[4].innerText = translations[lang].status;

});
