function updateTime() {
  // johannesburg
  let johannesburgElement = document.querySelector("#johannesburg");
  if (johannesburgElement) {
    let johannesburgDateElement = johannesburgElement.querySelector(".date");
    let johannesburgTimeElement = johannesburgElement.querySelector(".time");
    let johannesburgTime = moment().tz("africa/johannesburg");

    johannesburgDateElement.innerHTML = johannesburgTime.format("MMMM	Do YYYY");
    johannesburgTimeElement.innerHTML = johannesburgTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // jamaica
  let jamaicaElement = document.querySelector("#jamaica");
  if (jamaicaElement) {
    let jamaicaDateElement = jamaicaElement.querySelector(".date");
    let jamaicaTimeElement = jamaicaElement.querySelector(".time");
    let jamaicaTime = moment().tz("america/jamaica");

    jamaicaDateElement.innerHTML = jamaicaTime.format("MMMM	Do YYYY");
    jamaicaTimeElement.innerHTML = jamaicaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateTown(event) {
  let townTimeZone = event.target.value;
  if (townTimeZone === "current") {
    townTimeZone = moment.tz.guess();
  }
  let townName = townTimeZone.replace("_", " ").split("/")[1];
  let townTime = moment().tz(townTimeZone);
  let townsElement = document.querySelector("#towns");
  townsElement.innerHTML = `
  <div class="town">
    <div>
      <h2>${townName}</h2>
      <div class="date">${townTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${townTime.format("h:mm:ss")} <small>${townTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let townsSelectElement = document.querySelector("#town");
townsSelectElement.addEventListener("change", updateTown);