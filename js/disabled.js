//variable
const buttons = {};
for (let i = 1; i <= 2; i++) {
  buttons[`button${i.toString().padStart(2, "0")}`] = document.getElementById(
    `btn${i.toString().padStart(2, "0")}`
  );
}

//various
$("img[usemap]").rwdImageMaps();

//event listener
// Assuming you have already defined the buttons object as shown previously

for (let i = 1; i <= 2; i++) {
  const buttonKey = `button${i.toString().padStart(2, "0")}`;
  buttons[buttonKey].addEventListener("click", function () {
    const areaClass = `.dble${i.toString().padStart(2, "0")}`;
    highlightArea(areaClass, 0, 50, 5);
  });
}

//functions

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
