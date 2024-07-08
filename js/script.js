// Array of button data
const buttonsData = [
  { id: "btn01", href: "#", text: "Info Booth" },
  { id: "btn02", href: "#", text: "Vendors" },
  { id: "btn03", href: "#", text: "Beer & Drink Garden" },
  { id: "btn04", href: "#", text: "Stage" },
  { id: "btn05", href: "#", text: "Ticket Booth" },
  { id: "btn06", href: "#", text: "Open Tent" },
  { id: "btn07", href: "#", text: "Disabled" },
  { id: "btn08", href: "#", text: "Restrooms" },
  { id: "btn09", href: "#", text: "Vendors Parking" },
  { id: "btn10", href: "#", text: "Overflow Parking" },
  { id: "btn11", href: "#", text: "Kids Zone" },
  { id: "btn12", href: "#", text: "Medical Booth" },
];

const vendorData = [
  { id: "vnd01", href: "#", text: "Vendor 01" },
  { id: "vnd02", href: "#", text: "Vendor 02" },
  { id: "vnd03", href: "#", text: "Vendor 03" },
  { id: "vnd04", href: "#", text: "Vendor 04" },
  { id: "vnd05", href: "#", text: "Vendor 05" },
  { id: "vnd06", href: "#", text: "Vendor 06" },
  { id: "vnd07", href: "#", text: "Vendor 07" },
  { id: "vnd08", href: "#", text: "Vendor 08" },
  { id: "vnd09", href: "#", text: "Vendor 09" },
  { id: "vnd10", href: "#", text: "Vendor 10" },
  { id: "vnd11", href: "#", text: "Vendor 11" },
  { id: "vnd12", href: "#", text: "Vendor 12" },
  { id: "vnd13", href: "#", text: "Vendor 13" },
  { id: "vnd14", href: "#", text: "Vendor 14" },
  { id: "vnd15", href: "#", text: "Vendor 15" },
  { id: "vnd16", href: "#", text: "Vendor 16" },
  { id: "vnd17", href: "#", text: "Vendor 17" },
  { id: "vnd18", href: "#", text: "Vendor 18" },
  { id: "vnd19", href: "#", text: "Vendor 19" },
  { id: "vnd20", href: "#", text: "Vendor 20" },
  { id: "vnd21", href: "#", text: "Vendor 21" },
  { id: "vnd22", href: "#", text: "Vendor 22" },
  { id: "vnd23", href: "#", text: "Vendor 23" },
  { id: "vnd24", href: "#", text: "Vendor 24" },
  { id: "vnd25", href: "#", text: "Vendor 25" },
  { id: "vnd26", href: "#", text: "Vendor 26" },
  { id: "vnd27", href: "#", text: "Vendor 27" },
  { id: "vnd28", href: "#", text: "Vendor 28" },
  { id: "vnd29", href: "#", text: "Vendor 29" },
  { id: "vnd30", href: "#", text: "Vendor 30" },
  { id: "vnd31", href: "#", text: "Vendor 31" },
  { id: "vnd32", href: "#", text: "Vendor 32" },
  { id: "vnd33", href: "#", text: "Vendor 33" },
  { id: "vnd34", href: "#", text: "Vendor 34" },
  { id: "vnd35", href: "#", text: "Vendor 35" },
  { id: "vnd36", href: "#", text: "Vendor 36" },
  { id: "vnd37", href: "#", text: "Vendor 37" },
  { id: "vnd38", href: "#", text: "Vendor 38" },
  { id: "vnd39", href: "#", text: "Vendor 39" },
  { id: "vnd40", href: "#", text: "Vendor 40" },
];

const tentData = [
  { id: "tnt01", href: "#", text: "Open Tent 01" },
  { id: "tnt02", href: "#", text: "Open Tent 02" },
  { id: "tnt03", href: "#", text: "Open Tent 03" },
];

const dblData = [
  { id: "dbl01", href: "#", text: "Diable Area 01" },
  { id: "dbl02", href: "#", text: "Diable Area 02" },
];

const rstData = [
  { id: "rst01", href: "#", text: "Restroom 01" },
  { id: "rst02", href: "#", text: "Restroom 02" },
  { id: "rst03", href: "#", text: "Restroom 03" },
  { id: "rst04", href: "#", text: "Restroom 04" },
  { id: "rst05", href: "#", text: "Restroom 05" },
  { id: "rst06", href: "#", text: "Restroom 06" },
  { id: "rst07", href: "#", text: "Restroom 07" },
  { id: "rst08", href: "#", text: "Restroom 08" },
  { id: "rst09", href: "#", text: "Restroom 09" },
  { id: "rst10", href: "#", text: "Restroom 10" },
  { id: "rst11", href: "#", text: "Restroom 11" },
];

const VParkData = [
  { id: "vPark01", href: "#", text: "Vendors Parking 01" },
  { id: "vPark02", href: "#", text: "Vendors Parking 02" },
  { id: "vPark03", href: "#", text: "Vendors Parking 03" },
];

const OParkData = [
  { id: "oPark01", href: "#", text: "Overflow Parking 01" },
  { id: "oPark02", href: "#", text: "Overflow Parking 02" },
];

const allData = [
  ...buttonsData,
  ...vendorData,
  ...tentData,
  ...dblData,
  ...rstData,
  ...VParkData,
  ...OParkData,
];

let bookmarkedItems = [];

// Call the function to create buttons when the page loads
createButtons(buttonsData);

// Add event listener to input field
document.getElementById("search").addEventListener("input", performSearch);

// Add event listener to the bookmark button
const bBookMark = document.getElementById("bMark");
bBookMark.addEventListener("click", function () {
  createButtons(bookmarkedItems);
});

// Fetch map areas data and create map elements
document.addEventListener("DOMContentLoaded", function () {
  fetch("mapAreas.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        // Create map element
        const map = document.createElement("map");
        map.name = item.name;

        // Create area elements
        item.areas.forEach((areaData) => {
          const area = document.createElement("area");
          area.className = areaData.class;
          area.title = areaData.title;
          area.coords = areaData.coords;
          area.shape = areaData.shape;
          map.appendChild(area);
        });

        // Append map to the body
        document.body.appendChild(map);
      });
    })
    .catch((error) => console.error("Error fetching the JSON data:", error));
});

// Function to create buttons
function createButtons(buttons) {
  const buttonList = document.getElementById("map-list");
  buttonList.innerHTML = ""; // Clear existing buttons

  buttons.forEach((button) => {
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

    // Create bookmark icon
    const bookmarkIcon = document.createElement("i");
    bookmarkIcon.className = "fas fa-bookmark bookmark-icon";

    // Check if the item is already bookmarked
    if (bookmarkedItems.find((item) => item.id === button.id)) {
      bookmarkIcon.classList.add("bookmarked");
    }

    // Add event listener for the bookmark icon
    bookmarkIcon.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent the button click from being triggered
      toggleBookmark(button);
    });

    // Append anchor and bookmark icon to button
    btn.appendChild(anchor);
    btn.appendChild(bookmarkIcon);

    // Add mouseover event listener for each button
    btn.addEventListener("mouseover", function () {
      handleButtonMouseover(button.id);
      handleVendorMouseover(button.id);
      handleTentMouseover(button.id);
      handleDisableMouseover(button.id);
      handleRestMouseover(button.id);
      handleVParkMouseover(button.id);
      handleOParkMouseover(button.id);
    });

    // Add mouseover event listener for each button
    btn.addEventListener("click", function () {
      handleButtonClick(button.id);
    });

    // Append button to li, li to ul
    li.appendChild(btn);
    buttonList.appendChild(li);
  });
}

// Function to handle click events on buttons
function handleButtonClick(buttonId) {
  switch (buttonId) {
    case "btn02":
      createButtons(vendorData);
      break;
    case "btn06":
      createButtons(tentData);
      break;
    case "btn07":
      createButtons(dblData);
      break;
    case "btn08":
      createButtons(rstData);
      break;
    case "btn09":
      createButtons(VParkData);
      break;
    case "btn10":
      createButtons(OParkData);
      break;
    default:
      break;
  }
}

// Function to handle mouseover events on buttons
function handleButtonMouseover(buttonId) {
  switch (buttonId) {
    case "btn01":
      switchMap("info-booth");
      highlightArea(".info-booth");
      break;
    case "btn02":
      switchMap("vendor");
      highlightArea(".vendor");
      break;
    case "btn03":
      switchMap("bdg");
      highlightArea(".bdg");
      break;
    case "btn04":
      switchMap("stage");
      highlightArea(".stage");
      break;
    case "btn05":
      switchMap("tbooth");
      highlightArea(".tbooth");
      break;
    case "btn06":
      switchMap("optent");
      highlightArea(".optent");
      break;
    case "btn07":
      switchMap("dble");
      highlightArea(".dble");
      break;
    case "btn08":
      switchMap("rstRoom");
      highlightArea(".rstRoom");
      break;
    case "btn09":
      switchMap("vPark");
      highlightArea(".vPark");
      break;
    case "btn10":
      switchMap("oPark");
      highlightArea(".vPark");
      break;
    case "btn11":
      switchMap("kZone");
      highlightArea(".kZone");
      break;
    case "btn12":
      switchMap("mBooth");
      highlightArea(".mBooth");
      break;
    default:
      break;
  }
}

function handleVendorMouseover(buttonId) {
  switch (buttonId) {
    case "vnd01":
      switchMap("vendor01");
      highlightArea(".vendor01", 0, 0, 5);
      break;
    case "vnd02":
      switchMap("vendor02");
      highlightArea(".vendor02", 0, 0, 5);
      break;
    case "vnd03":
      switchMap("vendor03");
      highlightArea(".vendor03", 0, 0, 5);
      break;
    case "vnd04":
      switchMap("vendor04");
      highlightArea(".vendor04", 0, 0, 5);
      break;
    case "vnd05":
      switchMap("vendor05");
      highlightArea(".vendor05", 0, 0, 5);
      break;
    case "vnd06":
      switchMap("vendor06");
      highlightArea(".vendor06", 0, 0, 5);
      break;
    case "vnd07":
      switchMap("vendor07");
      highlightArea(".vendor07", 0, 0, 5);
      break;
    case "vnd08":
      switchMap("vendor08");
      highlightArea(".vendor08", 0, 0, 5);
      break;
    case "vnd09":
      switchMap("vendor09");
      highlightArea(".vendor09", 0, 0, 5);
      break;
    case "vnd10":
      switchMap("vendor10");
      highlightArea(".vendor10", 0, 0, 5);
      break;
    case "vnd11":
      switchMap("vendor11");
      highlightArea(".vendor11", 0, 0, 5);
      break;
    case "vnd12":
      switchMap("vendor12");
      highlightArea(".vendor12", 0, 0, 5);
      break;
    case "vnd13":
      switchMap("vendor13");
      highlightArea(".vendor13", 0, 0, 5);
      break;
    case "vnd14":
      switchMap("vendor14");
      highlightArea(".vendor14", 0, 0, 5);
      break;
    case "vnd15":
      switchMap("vendor15");
      highlightArea(".vendor15", 0, 0, 5);
      break;
    case "vnd16":
      switchMap("vendor16");
      highlightArea(".vendor16", 0, 0, 5);
      break;
    case "vnd17":
      switchMap("vendor17");
      highlightArea(".vendor17", 0, 0, 5);
      break;
    case "vnd18":
      switchMap("vendor18");
      highlightArea(".vendor18", 0, 0, 5);
      break;
    case "vnd19":
      switchMap("vendor19");
      highlightArea(".vendor19", 0, 0, 5);
      break;
    case "vnd20":
      switchMap("vendor20");
      highlightArea(".vendor20", 0, 0, 5);
      break;
    case "vnd21":
      switchMap("vendor21");
      highlightArea(".vendor21", 0, 0, 5);
      break;
    case "vnd22":
      switchMap("vendor22");
      highlightArea(".vendor22", 0, 0, 5);
      break;
    case "vnd23":
      switchMap("vendor23");
      highlightArea(".vendor23", 0, 0, 5);
      break;
    case "vnd24":
      switchMap("vendor24");
      highlightArea(".vendor24", 0, 0, 5);
      break;
    case "vnd25":
      switchMap("vendor25");
      highlightArea(".vendor25", 0, 0, 5);
      break;
    case "vnd26":
      switchMap("vendor26");
      highlightArea(".vendor26", 0, 0, 5);
      break;
    case "vnd27":
      switchMap("vendor27");
      highlightArea(".vendor27", 0, 0, 5);
      break;
    case "vnd28":
      switchMap("vendor28");
      highlightArea(".vendor28", 0, 0, 5);
      break;
    case "vnd29":
      switchMap("vendor29");
      highlightArea(".vendor29", 0, 0, 5);
      break;
    case "vnd30":
      switchMap("vendor30");
      highlightArea(".vendor30", 0, 0, 5);
      break;
    case "vnd31":
      switchMap("vendor31");
      highlightArea(".vendor31", 0, 0, 5);
      break;
    case "vnd32":
      switchMap("vendor32");
      highlightArea(".vendor32", 0, 0, 5);
      break;
    case "vnd33":
      switchMap("vendor33");
      highlightArea(".vendor33", 0, 0, 5);
      break;
    case "vnd34":
      switchMap("vendor34");
      highlightArea(".vendor34", 0, 0, 5);
      break;
    case "vnd35":
      switchMap("vendor35");
      highlightArea(".vendor35", 0, 0, 5);
      break;
    case "vnd36":
      switchMap("vendor36");
      highlightArea(".vendor36", 0, 0, 5);
      break;
    case "vnd37":
      switchMap("vendor37");
      highlightArea(".vendor37", 0, 0, 5);
      break;
    case "vnd38":
      switchMap("vendor38");
      highlightArea(".vendor38", 0, 0, 5);
      break;
    case "vnd39":
      switchMap("vendor39");
      highlightArea(".vendor39", 0, 0, 5);
      break;
    case "vnd40":
      switchMap("vendor40");
      highlightArea(".vendor40", 0, 0, 5);
      break;
    default:
      break;
  }
}

function handleTentMouseover(buttonId) {
  switch (buttonId) {
    case "tnt01":
      switchMap("optent01");
      highlightArea(".optent01", 0, 0, 5);
      break;
    case "tnt02":
      switchMap("optent02");
      highlightArea(".optent02", 0, 0, 5);
      break;
    case "tnt03":
      switchMap("optent03");
      highlightArea(".optent03", 0, 0, 5);
      break;
  }
}

function handleDisableMouseover(buttonId) {
  switch (buttonId) {
    case "dbl01":
      switchMap("dble01");
      highlightArea(".dble01", 0, 0, 5);
      break;
    case "dbl02":
      switchMap("dble02");
      highlightArea(".dble02", 0, 0, 5);
      break;
  }
}

function handleRestMouseover(buttonId) {
  switch (buttonId) {
    case "rst01":
      switchMap("rstRoom01");
      highlightArea(".rstRoom01", 0, 0, 5);
      break;
    case "rst02":
      switchMap("rstRoom02");
      highlightArea(".rstRoom02", 0, 0, 5);
      break;
    case "rst03":
      switchMap("rstRoom03");
      highlightArea(".rstRoom03", 0, 0, 5);
      break;
    case "rst04":
      switchMap("rstRoom04");
      highlightArea(".rstRoom04", 0, 0, 5);
      break;
    case "rst05":
      switchMap("rstRoom05");
      highlightArea(".rstRoom05", 0, 0, 5);
      break;
    case "rst06":
      switchMap("rstRoom06");
      highlightArea(".rstRoom06", 0, 0, 5);
      break;
    case "rst07":
      switchMap("rstRoom07");
      highlightArea(".rstRoom07", 0, 0, 5);
      break;
    case "rst08":
      switchMap("rstRoom08");
      highlightArea(".rstRoom08", 0, 0, 5);
      break;
    case "rst09":
      switchMap("rstRoom09");
      highlightArea(".rstRoom09", 0, 0, 5);
      break;
    case "rst10":
      switchMap("rstRoom10");
      highlightArea(".rstRoom10", 0, 0, 5);
      break;
    case "rst11":
      switchMap("rstRoom11");
      highlightArea(".rstRoom11", 0, 0, 5);
      break;
    default:
      // Handle default case if needed
      break;
  }
}

function handleVParkMouseover(buttonId) {
  switch (buttonId) {
    case "vPark01":
      switchMap("vPark01");
      highlightArea(".vPark01", 0, 0, 3);
      break;
    case "vPark02":
      switchMap("vPark02");
      highlightArea(".vPark02", 0, 0, 3);
      break;
    case "vPark03":
      switchMap("vPark03");
      highlightArea(".vPark03", 0, 0, 3);
      break;
    default:
      // Handle default case if needed
      break;
  }
}

function handleOParkMouseover(buttonId) {
  switch (buttonId) {
    case "oPark01":
      switchMap("oPark01");
      highlightArea(".oPark01", 0, 0, 3);
      break;
    case "oPark02":
      switchMap("oPark02");
      highlightArea(".oPark02", 0, 0, 3);
      break;
    default:
      // Handle default case if needed
      break;
  }
}

// Function to toggle bookmark status
function toggleBookmark(button) {
  const bookmarkIcon = document.querySelector(`#${button.id} .bookmark-icon`);
  const index = bookmarkedItems.findIndex((item) => item.id === button.id);

  if (index !== -1) {
    bookmarkedItems.splice(index, 1);
    bookmarkIcon.classList.remove("bookmarked");
    bookmarkIcon.style.color = "white";
    console.log(`Removed bookmark: ${button.id}`);
  } else {
    bookmarkedItems.push(button);
    bookmarkIcon.classList.add("bookmarked");
    bookmarkIcon.style.color = "red";
    console.log(`Added bookmark: ${button.id}`);
  }
  console.log(bookmarkedItems);
  // Save the bookmarked items to local storage or other persistent storage if needed
  // localStorage.setItem('bookmarkedItems', JSON.stringify(bookmarkedItems));
}

// Function to switch the map
function switchMap(mapName) {
  document.getElementById("concertImage").useMap = `#${mapName}`;
}

// Function to highlight areas
function highlightArea(cls, x, y, z) {
  $(".map").maphilight({ alwaysOn: true });
  const areaCoords = combAreas(document.querySelectorAll(cls));
  moveZoom(areaCoords, x, y, z);
}

// Function to combine area coordinates
function combAreas(vendorElements) {
  const coordsArray = [];
  vendorElements.forEach((element) => {
    const coords = element.getAttribute("coords").split(",");
    coords.forEach((e) => {
      coordsArray.push(e);
    });
  });
  return coordsArray;
}

function moveZoom(arr, conx = 0, cony = 0, zoom = 1) {
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
  //console.log(arr);
}

function calAvg(array) {
  // Find the maximum & minimum value in the array
  const max = Math.max(...array);
  const min = Math.min(...array);

  // Calculate the average of the maximum and minimum values
  const average = (max + min) / 2;

  return average;
}

function performSearch() {
  const searchTerm = document
    .getElementById("search")
    .value.trim()
    .toLowerCase();
  console.log(searchTerm);

  if (searchTerm) {
    const filteredButtons = allData.filter((button) =>
      button.text.toLowerCase().includes(searchTerm)
    );
    createButtons(filteredButtons);
  } else {
    // If search term is empty, show all buttons
    createButtons(buttonsData);
  }
}
