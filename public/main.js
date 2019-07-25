// all the JS code

//const apiUrl = "https://api.wheretheiss.at/v1/satellites/25544";
const apiUrl = "http://worldtimeapi.org/api/timezone/Europe/Amsterdam";

const arrayAzathioprine = [
  "bloedarmoede”, “bloedingen”, “infecties”, “vermoeidheid”, “bloedneus”, “keelpijn”, “koorts”, “misselijkheid”, “braken”, “haaruitval”, “huidkanker”, “PML”, “spierzwakte”, “overgevoeligheid”, “jeuk”, “galbulten”, “koorts”, “benauwdheid”, “flauwvallen”, “huidaandoening”, “leveraandoening"
];
const arrayAmlodipine = [
  "oedeem”, “hoofdpijn”, “warmtegevoel”, “blozen”, “spierkramp”, “duizeligheid”, “slaperigheid”, “vermoeidheid”, “maagdarmklachten”, “misselijkheid”, “buikpijn”, “diarree”, “verstopping”, ḧartkloppingen”, “spierpijn”, “gewrichtspijn”, “slapeloosheid”, “depressiviteit, “stemmingswisselingen”, verwardheid”, angstgevoelens”, “smaakverandereingen”, “tandvleesproblemen”, “trillen”, “impotentie”, “loopneus”, “kortademigheid”, “oorsuizen”, “haaruitval”, “huiduitslag”, “jeuk”, “zweten”, “huidverkleuring”, “overgevoeligheid"
];
const arrayRenitec = [
  "kriebelhoest",
  "duizeligheid”, “maagdarmklachten”, “misselijkheid”, “buikpijn”, “diarree”, “hoofdpijn”, “vermoeidheid”, “smaakveranderingen”, “lusteloosheid”, “hartritmestoornissen”, “overgevoeligheid”, “huiduitslag”, “galbulten”, “angio-oedeem”, “zwellingen”, “benauwd”, “spierkramp”, “oorsuizen”, “haaruitval”, “blozen”, ”slaperigheid”, “slapeloosheid”, “zenuwachtigheid”, “draaiduizeligheid”, “verwardheid”, “impotentie”, “ernstige huidaandoening”,  “blaren op de huid”, “vurig rode huis”, “griepachtige verschijnselen”, “loopneus”, “keelpijn”, “heesheid”, “kortademigheid”, “zweten”, “longontsteking”, ernstige benauwdheid”, “verminderde nierwerking”, “ontsteking van de alvleesklier”, “ontsteking van de lever”, “bloedafwijkingen”, “geelzucht”, “koorts"
];

async function getISS() {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const { timezone, datetime } = data;

  document.getElementById("timezone").textContent = timezone;
  document.getElementById("dayTime").textContent = datetime;
}

getISS();

function showValue(id, value) {
  document.getElementById(id).textContent = value;
}

function chooseMed() {
  const medication1 = document.getElementById("chooseMed");
  console.log(medication1);
}
// index
function ENclick() {
  const NLvlag = document.getElementById("NLvlag");
  NLvlag.style.display = "block";
  const ENvlag = document.getElementById("ENvlag");
  ENvlag.style.display = "none";
  localStorage.setItem("language", "NL");
  const introP = document.getElementById("intro");
  introP.innerText =
    "Not feeling right? This could be from one of the following medication. Please click one to check.";
}
//index
function NLclick() {
  const NLvlag = document.getElementById("NLvlag");
  NLvlag.style.display = "none";
  const ENvlag = document.getElementById("ENvlag");
  ENvlag.style.display = "block";
  localStorage.setItem("language", "EN");
  const introP = document.getElementById("intro");
  introP.innerText =
    "Voel jij je lekker? Dit zou door je medicatie kunnen komen. Klik en controleer welke.";
}

function bodyOnload() {
  if (localStorage.getItem("language") == "NL") {
    const NLvlag = document.getElementById("NLvlag");
    NLvlag.style.display = "none";
    const ENvlag = document.getElementById("ENvlag");
    ENvlag.style.display = "block";
    localStorage.setItem("language", "EN");
    // inhoud aanpassen nav gekozen taal
    const introP = document.getElementById("intro");
    introP.innerText =
      "Not feeling right? This could be from one of the following medication. Please click one to check.";
  } else {
    const ENvlag = document.getElementById("NLvlag");
    ENvlag.style.display = "block";
    const NLvlag = document.getElementById("ENvlag");
    NLvlag.style.display = "none";
    localStorage.setItem("language", "NL");
    // inhoud aanpassen nav gekozen taal
    const introP = document.getElementById("intro");
    introP.innerText =
      "Voel jij je niet helemaal lekker? Dit zou een bijwerking van een medicijn kunnen zijn:";
  }
}
//checks if the medication is responsible for the side effect or not
function checkMed() {
  const invoerInput = document.getElementById("invoerKlacht").value;
  var item;
  const arrayAzathioprine = [
    "bloedarmoede”, “bloedingen”, “infecties”, “vermoeidheid”, “bloedneus”, “keelpijn”, “koorts”, “misselijkheid”, “braken”, “haaruitval”, “huidkanker”, “PML”, “spierzwakte”, “overgevoeligheid”, “jeuk”, “galbulten”, “koorts”, “benauwdheid”, “flauwvallen”, “huidaandoening”, “leveraandoening"
  ];
  if (item in arrayAzathioprine != invoerInput) {
    console.log("yes");
  } else {
    console.log("Noooooooooooooo!");
  }
}

function submitCheckOk() {
  const container = document.getElementById("resultatenLijst");
  container.style.display = "block";
  const invoerInput = document.getElementById("invoerKlacht").value;
  if (invoerInput) {
    //var containerDiv = document.getElementById("container");
    //containerDiv.style.display = "block";
    //const medicatieLijstTextArea = document.getElementById("medicatieLijst");
    checkMed();
    //medicatieLijstTextArea = document.getElementById("medicatieLijst")
    // .innerHTML;
  } else {
    alert("Vul een kwaal in.");
  }
}
