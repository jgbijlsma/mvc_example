const getCountBtn = document.querySelector("#getCountBtn");
const countContainer = document.querySelector("#countContainer");

getCountBtn.addEventListener("click", getMessageCount);

async function getMessageCount() {
  const res = await fetch("/message/count");
  const data = await res.json();
  countContainer.innerText = data.count;
}
