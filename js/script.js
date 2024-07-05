// Array of button data
const buttonsData = [
  { id: "btn01", href: "./html/infoBooth.html", text: "Info Booth" },
  { id: "btn02", href: "./html/vendor.html", text: "Vendors" },
  { id: "btn03", href: "./html/bdg.html", text: "Beer & Drink Garden" },
  { id: "btn04", href: "./html/stage.html", text: "Stage" },
  { id: "btn05", href: "./html/tbooth.html", text: "Ticket Booth" },
  { id: "btn06", href: "./html/otent.html", text: "Open Tent" },
  { id: "btn07", href: "./html/disabled.html", text: "Disabled" },
  { id: "btn08", href: "./html/rroom.html", text: "Restrooms" },
  { id: "btn09", href: "./html/venPark.html", text: "Vendors Parking" },
  { id: "btn10", href: "./html/ovPark.html", text: "Overflow Parking" },
  { id: "btn11", href: "./html/kZone.html", text: "Kids Zone" },
  { id: "btn12", href: "./html/mBooth.html", text: "Medical Booth" },
];

// Call the function to create buttons when the page loads
createButtons();

//variable
const button01 = document.getElementById(buttonsData[0].id);
const button02 = document.getElementById(buttonsData[1].id);
const button03 = document.getElementById(buttonsData[2].id);
const button04 = document.getElementById(buttonsData[3].id);
const button05 = document.getElementById(buttonsData[4].id);
const button06 = document.getElementById(buttonsData[5].id);
const button07 = document.getElementById(buttonsData[6].id);
const button08 = document.getElementById(buttonsData[7].id);
const button09 = document.getElementById(buttonsData[8].id);
const button10 = document.getElementById(buttonsData[9].id);
const button11 = document.getElementById(buttonsData[10].id);
const button12 = document.getElementById(buttonsData[11].id);

console.log(button01);

//various
$("img[usemap]").rwdImageMaps();

//add eventListener
document.addEventListener("DOMContentLoaded", function () {
  button01.addEventListener("mouseover", function () {
    switchMap("info-booth");
    highlightArea(".info-booth", 0, 50, 5);
  });

  button02.addEventListener("mouseover", function () {
    switchMap("vendor");
    highlightArea(".vendor", 0, 115, 3);
  });

  button03.addEventListener("mouseover", function () {
    switchMap("bdg");
    highlightArea(".bdg", 50, 50, 4);
  });

  button04.addEventListener("mouseover", function () {
    switchMap("stage");
    highlightArea(".stage", -100, 140, 4);
  });

  button05.addEventListener("mouseover", function () {
    switchMap("tbooth");
    highlightArea(".tbooth", -100, 200, 4);
  });

  button06.addEventListener("mouseover", function () {
    switchMap("optent");
    highlightArea(".optent", 100, 50, 3);
  });

  button07.addEventListener("mouseover", function () {
    switchMap("dble");
    highlightArea(".dble", 0, 50, 5);
  });

  button08.addEventListener("mouseover", function () {
    switchMap("rstRoom");
    highlightArea(".rstRoom", 0, 200, 2);
  });

  button09.addEventListener("mouseover", function () {
    switchMap("vPark");
    highlightArea(".vPark", -50, 225, 1.9);
  });

  button10.addEventListener("mouseover", function () {
    switchMap("oPark");
    highlightArea(".oPark", 0, 100, 2);
  });

  button11.addEventListener("mouseover", function () {
    switchMap("kZone");
    highlightArea(".kZone", -50, 0, 4);
  });

  button12.addEventListener("mouseover", function () {
    switchMap("mBooth");
    highlightArea(".mBooth", 200, 140, 4);
  });
});

//functions

function switchMap(mapName) {
  document.getElementById("concertImage").useMap = `#${mapName}`;
}

function calAvg(array) {
  // Find the maximum & minimum value in the array
  const max = Math.max(...array);
  const min = Math.min(...array);

  // Calculate the average of the maximum and minimum values
  const average = (max + min) / 2;

  return average;
}

function moveZoom(arr, conx = 0, cony = 0, zoom = 0) {
  const numbers = arr;

  // Initialize arrays to hold odd index elements and even index elements
  const y = [];
  const x = [];

  // Iterate through the array
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
      x.push(numbers[i]);
    } else {
      y.push(numbers[i]);
    }
  }

  let calcAvgX = calAvg(x) + conx;
  let calcAvgY = calAvg(y) + cony;

  $(".map").css({
    "transform-origin": `${calcAvgX}px ${calcAvgY}px`,
    transform: `scale(${zoom})`, // Example zoom level, adjust as needed
  });
  console.log(arr);
}

function combAreas(vendorElements) {
  // Initialize an array to store coords
  const coordsArray = [];

  // Loop through the selected elements
  vendorElements.forEach((element) => {
    // Get the coords attribute
    const coords = element.getAttribute("coords").split(",");
    coords.forEach((e) => {
      coordsArray.push(e);
    });
    // Push the coords into the array
  });

  return coordsArray;
}

function highlightArea(cls, x, y, z) {
  $(".map").maphilight({ alwaysOn: true });
  const areaCoords = combAreas(document.querySelectorAll(cls));
  moveZoom(areaCoords, x, y, z);
  console.log(areaCoords);
  //console.log(areaCoords);
}

function createButtons() {
  const buttonList = document.getElementById("map-list");

  buttonsData.forEach((button) => {
    // Create li element
    const li = document.createElement("li");

    // Create button element
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.id = button.id;
    btn.style.margin = "0px";

    // Create anchor element
    const anchor = document.createElement("a");
    anchor.href = button.href;
    anchor.textContent = button.text;

    // Append anchor to button, button to li, li to ul
    btn.appendChild(anchor);
    li.appendChild(btn);
    buttonList.appendChild(li);
  });
}
