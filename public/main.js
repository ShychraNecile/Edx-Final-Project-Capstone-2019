// all the JS code

const apiUrl = "https://api.wheretheiss.at/v1/satellites/25544";

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
  const { latitude, longitude } = data;

  document.getElementById("lat").textContent = latitude;
  document.getElementById("lon").textContent = longitude;
}
getISS();

function showValue(id, value) {
  document.getElementById(id).textContent = value;
}

function onload() {
  var container = document.getElementById("buttonContainer");
  container.style.display = "none";
  container = document.getElementById("statusContainer");
  container.style.display = "none";
  weerUpdate();
  //pollweer();
}

function chooseMed() {
  const medication1 = document.getElementById("chooseMed");
  console.log(medication1);
}

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
function checkMed() {
  const invoerInput = document.getElementById("invoerKlacht").value;
  var item;
  if (item in arrayAzathioprine != invoerInput) {
    console.log("yes");

    //medicatieLijstTextArea = document.getElementById("medicatieLijst")
    // .innerHTML;
  } else {
    console.log("Noooooooooooooo!");
  }
}

function submitCheckOk() {
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

function drieOpEenRij(buttonid1, buttonid2, buttonid3) {
  return (
    document.getElementById(buttonid1).textContent == symbool &&
    document.getElementById(buttonid2).textContent == symbool &&
    document.getElementById(buttonid3).textContent == symbool
  );
}

function veldenVol() {
  if (!document.getElementById("b1").disabled) return false;
  if (!document.getElementById("b2").disabled) return false;
  if (!document.getElementById("b3").disabled) return false;
  if (!document.getElementById("b4").disabled) return false;
  if (!document.getElementById("b5").disabled) return false;
  if (!document.getElementById("b6").disabled) return false;
  if (!document.getElementById("b7").disabled) return false;
  if (!document.getElementById("b8").disabled) return false;
  if (!document.getElementById("b9").disabled) return false;
  return true;
}

function wisselSpeler() {
  if (spelerAanDeBeurt == document.getElementById("player1").value) {
    spelerAanDeBeurt = document.getElementById("player2").value;
    symbool = "O";
  } else {
    spelerAanDeBeurt = document.getElementById("player1").value;
    symbool = "X";
  }
  document.getElementById("huidigeSpeler").textContent = spelerAanDeBeurt;
  document.getElementById("symbool").textContent = symbool;
}
