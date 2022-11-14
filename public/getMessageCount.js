const getCountBtn = document.querySelector("#getCountBtn"); // zoek de button met het id getCountBtn
const countContainer = document.querySelector("#countContainer"); // zoek de div met het id countContainer

getCountBtn.addEventListener("click", getMessageCount); // voer de functie getMessageCount() uit wanneer er op de button geklikt wordt

async function getMessageCount() {
  const res = await fetch("/message/count"); // maak een GET /message/count HTTP verzoek naar de server
  const data = await res.json(); // wanneer we het response hebben: zet de response JSON data om naar een JS object
  countContainer.innerText = data.count; // stop de count property uit het data object als tekst in de countContainer div
}
