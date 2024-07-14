$(document).ready(function () {
  function resizeMap() {
    let image = new Image();
    let img = document.getElementById("concertImage"); // Ensure this ID matches your HTML
    let imgWidth, imgHeight;

    image.onload = function () {
      imgWidth = image.naturalWidth;
      imgHeight = image.naturalHeight;

      // Get the current width and height of the image element
      const currentWidth = img.clientWidth;
      const currentHeight = img.clientHeight;

      // Calculate the scaling factors
      const xScale = currentWidth / imgWidth;
      const yScale = currentHeight / imgHeight;

      // Update the coordinates of each area
      $("map area").each(function () {
        const coords = $(this).data("coords").split(",").map(Number);
        const newCoords = coords.map((coord, index) => {
          return index % 2 === 0
            ? Math.round(coord * xScale)
            : Math.round(coord * yScale);
        });
        $(this).attr("coords", newCoords.join(","));
      });
    };

    image.src = "./img/F2.png"; // Adjust the path to your image

    // Store the original coordinates
    $("map area").each(function () {
      $(this).data("coords", $(this).attr("coords"));
    });
  }

  // Resize the map when the window is resized
  $(window).resize(resizeMap);

  // Initial resize
  resizeMap();
});

// Array of button data
const buttonsData = [
  { id: "btn01", href: "#", text: ["Info Booth", ""] },
  { id: "btn02", href: "#", text: ["Vendors", ""] },
  { id: "btn03", href: "#", text: ["Beer & Drink Garden", ""] },
  { id: "btn04", href: "#", text: ["Stage", ""] },
  { id: "btn05", href: "#", text: ["Ticket Booth", ""] },
  { id: "btn06", href: "#", text: ["Open Tent", ""] },
  { id: "btn07", href: "#", text: ["Disabled", ""] },
  { id: "btn08", href: "#", text: ["Restrooms", ""] },
  { id: "btn09", href: "#", text: ["Vendors Parking", ""] },
  { id: "btn10", href: "#", text: ["Overflow Parking", ""] },
  { id: "btn11", href: "#", text: ["Kids Zone", ""] },
  { id: "btn12", href: "#", text: ["Medical Booth", ""] },
];

const vendorData = [
  {
    id: "vnd01",
    href: "#",
    text: ["Vendor 01", " 01"],
    img: "./img/vendors/1.png",
    des: "Coming Soon...",
    Email: "hello@reallygreatsite.com",
    Phone: "+123-456-7890",
    Website: "www.reallygreatsite.com",
  },
  {
    id: "vnd02",
    href: "#",
    text: ["Vendor 02", " 02"],
    img: "./img/vendors/1.png",
    des: "Coming Soon...",
    Email: "hello@reallygreatsite.com",
    Phone: "+123-456-7890",
    Website: "www.reallygreatsite.com",
  },
  {
    id: "vnd03",
    href: "#",
    text: ["Vendor 03", " 03"],
    img: "./img/vendors/1.png",
    des: "Coming Soon...",
    Email: "hello@reallygreatsite.com",
    Phone: "+123-456-7890",
    Website: "www.reallygreatsite.com",
  },
  {
    id: "vnd04",
    href: "#",
    text: ["Vendor 04", " 04"],
    img: "./img/vendors/1.png",
    des: "Coming Soon...",
    Email: "hello@reallygreatsite.com",
    Phone: "+123-456-7890",
    Website: "www.reallygreatsite.com",
  },
  {
    id: "vnd05",
    href: "#",
    text: ["KP WOODWORKING AND CREATIONS", " 05"],
    img: "./img/vendors/5.png",
    des: "WOODEN CRAFTS",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vnd06",
    href: "#",
    text: ["HUMANA", " 06"],
    img: "./img/vendors/6.png",
    des: "INSURANCE",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vnd07",
    href: "#",
    text: ["THE UNDERGROUND CLOSET", " 07"],
    img: "./img/vendors/7.png",
    des: "JEWLERY",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vnd08",
    href: "#",
    text: ["IMPULSIVE, INC", " 08"],
    img: "./img/vendors/8.png",
    des: "TEMPORARY TATTOS & FACE PAINTING",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vnd09",
    href: "#",
    text: ["Vendor 09", " 09"],
    img: "./img/vendors/1.png",
    des: "Coming Soon...",
    Email: "hello@reallygreatsite.com",
    Phone: "+123-456-7890",
    Website: "www.reallygreatsite.com",
  },
  {
    id: "vnd10",
    href: "#",
    text: ["Vendor 10", " 10"],
    img: "./img/vendors/1.png",
    des: "Coming Soon...",
    Email: "hello@reallygreatsite.com",
    Phone: "+123-456-7890",
    Website: "www.reallygreatsite.com",
  },
  {
    id: "vnd11",
    href: "#",
    text: ["Vendor 11", " 11"],
    img: "./img/vendors/1.png",
    des: "Coming Soon...",
    Email: "hello@reallygreatsite.com",
    Phone: "+123-456-7890",
    Website: "www.reallygreatsite.com",
  },
  {
    id: "vnd12",
    href: "#",
    text: ["EVOLUTIONARY CREATTIONS", " 12"],
    img: "https://t.ly/r38NN",
    des: "IE DYE SHIRTS",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vnd13",
    href: "#",
    text: ["EVOLUTIONARY CREATTIONS", " 13"],
    img: "./img/vendors/13.png",
    des: "TIE DYE SHIRTS",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vnd14",
    href: "#",
    text: ["PAW PAWS BAKERY", " 14"],
    img: "./img/vendors/14.png",
    des: "DOG TREATS",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vnd15",
    href: "#",
    text: ["PHYSICS VISIONS", " 15"],
    img: "./img/vendors/15.png",
    des: "TAROT CARD & PALM READINGS",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vnd16",
    href: "#",
    text: ["RAGE INC", " 16"],
    img: "./img/vendors/16.png",
    des: "CLASH OF THE BANDS T-SHIRTS",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vnd17",
    href: "#",
    text: ["Vendor 17", " 17"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vnd18",
    href: "#",
    text: ["Vendor 18", " 18"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vnd19",
    href: "#",
    text: ["Vendor 19", " 19"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vnd20",
    href: "#",
    text: ["Vendor 20", " 20"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vnd21",
    href: "#",
    text: ["Vendor 21", " 21"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vnd22",
    href: "#",
    text: ["LAKE STATION FIRE DEPT", " 22"],
    img: "./img/vendors/22.png",
    des: "SHIRT SALES",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vnd23",
    href: "#",
    text: ["TITANS CRAFTS", " 23"],
    img: "./img/vendors/23.png",
    des: "CUSTOM T-SHIRTS",
    Email: "TINAGARY77@GMAIL.COM",
    Phone: "219-406-5023",
    Website: "WWW.FACEBOOK.COM/TINASCRAFTPAGE77",
  },
  {
    id: "vnd24",
    href: "#",
    text: ["TITANS CRAFTS", " 24"],
    img: "https://t.ly/r38NN",
    des: "COFFEE MUGS,KEY CHAINS,TUMBLERS",
    Email: "TINAGARY77@GMAIL.COM",
    Phone: "219-406-5023",
    Website: "WWW.FACEBOOK.COM/TINASCRAFTPAGE77",
  },
  {
    id: "vnd25",
    href: "#",
    text: ["Vendor 25", " 25"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vnd26",
    href: "#",
    text: ["Vendor 26", " 26"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vnd27",
    href: "#",
    text: ["Vendor 27", " 27"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vnd28",
    href: "#",
    text: ["Vendor 28", " 28"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vnd29",
    href: "#",
    text: ["Vendor 29", " 29"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vnd30",
    href: "#",
    text: ["JEN'S HOME GOODIES", " 30"],
    img: "./img/vendors/30.png",
    des: "HOMEMADE COOKIES",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.FACEBOOK.COM/JENSHOMEGOODIES",
  },
  {
    id: "vnd31",
    href: "#",
    text: ["AMELIA'S ART", " 31"],
    img: "./img/vendors/31.png",
    des: "PINS, KEY, CHAINS, BAGS",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vnd32",
    href: "#",
    text: ["C&C CUSTOM SHIRTS", " 32"],
    img: "https://t.ly/r38NN",
    des: "EVENT SHIRTS",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vnd33",
    href: "#",
    text: ["Vendor 33", " 33"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vnd34",
    href: "#",
    text: ["Vendor 34", " 34"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vnd35",
    href: "#",
    text: ["Vendor 35", " 35"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vnd36",
    href: "#",
    text: ["Vendor 36", " 36"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vnd37",
    href: "#",
    text: ["VFW", " 37"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vnd38",
    href: "#",
    text: ["AMERICAN LEGION", " 38"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vnd39",
    href: "#",
    text: ["EAGLES", " 39"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vnd40",
    href: "#",
    text: ["Vendor 40", " 40"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "vendor@example.com",
    Phone: "+1234567890",
    Website: "www.vendor.com",
  },
  {
    id: "vndA",
    href: "#",
    text: ["KETTLE CORN", " A"],
    img: "./img/vendors/A.png",
    des: "KTTLE CORN",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vndB",
    href: "#",
    text: ["SOCTTY JO'S", " B"],
    img: "./img/vendors/B.png",
    des: "HAMBURGER, TENDERLOIN",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vndC",
    href: "#",
    text: ["Vendor C", " C"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vndD",
    href: "#",
    text: ["EL GRINGO LOCO", " D"],
    img: "./img/vendors/D.png",
    des: "PUETRO RICAN FOOD",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vndE",
    href: "#",
    text: ["Vendor E", " E"],
    img: "https://t.ly/r38NN",
    des: "Image Description",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vndF",
    href: "#",
    text: ["LA MORENITA CARNICERIA", " F"],
    img: "./img/vendors/F.png",
    des: "TACOS, QUESADILLAS",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vndG",
    href: "#",
    text: ["SWEET TOOTH COOKIES", " G"],
    img: "./img/vendors/G.png",
    des: "GOURMET COOKIES",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vndH",
    href: "#",
    text: ["EL RANCHERO", " H"],
    img: "./img/vendors/H.png",
    des: "LEMONADES, AGUA FRESCAS",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vndI",
    href: "#",
    text: ["LAKE STATION", " I"],
    img: "./img/vendors/i.png",
    des: "BEER",
    img: "./img/vendors/I.png",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vndJ",
    href: "#",
    text: ["ACE CATERING", " J"],
    img: "./img/vendors/J.png",
    des: "LIQUOR AND SPIRITS",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
  {
    id: "vndK",
    href: "#",
    text: ["TINA'S", " K"],
    img: "./img/vendors/K.png",
    des: "KID ZONE,BOUNCE HOUSES,GAMES FOR KIDS ",
    Email: "************@*****.COM",
    Phone: "***-***-****",
    Website: "WWW.******.COM",
  },
];
const tentData = [
  { id: "tnt01", href: "#", text: ["Open Tent 01", ""] },
  { id: "tnt02", href: "#", text: ["Open Tent 02", ""] },
  { id: "tnt03", href: "#", text: ["Open Tent 03", ""] },
];

const dblData = [
  { id: "dbl01", href: "#", text: ["Diable Area 01", ""] },
  { id: "dbl02", href: "#", text: ["Diable Area 02", ""] },
];

const rstData = [
  { id: "rst01", href: "#", text: ["Restroom 01", ""] },
  { id: "rst02", href: "#", text: ["Restroom 02", ""] },
  { id: "rst03", href: "#", text: ["Restroom 03", ""] },
  { id: "rst04", href: "#", text: ["Restroom 04", ""] },
  { id: "rst05", href: "#", text: ["Restroom 05", ""] },
  { id: "rst06", href: "#", text: ["Restroom 06", ""] },
  { id: "rst07", href: "#", text: ["Restroom 07", ""] },
  { id: "rst08", href: "#", text: ["Restroom 08", ""] },
  { id: "rst09", href: "#", text: ["Restroom 09", ""] },
  { id: "rst10", href: "#", text: ["Restroom 10", ""] },
  { id: "rst11", href: "#", text: ["Restroom 11", ""] },
];

const VParkData = [
  { id: "vPark01", href: "#", text: ["Vendors Parking 01", ""] },
  { id: "vPark02", href: "#", text: ["Vendors Parking 02", ""] },
  { id: "vPark03", href: "#", text: ["Vendors Parking 03", ""] },
];

const OParkData = [
  { id: "oPark01", href: "#", text: ["Overflow Parking 01", ""] },
  { id: "oPark02", href: "#", text: ["Overflow Parking 02", ""] },
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
    anchor.textContent = button.text[0];

    // Create bookmark icon
    const bookmarkIcon = document.createElement("i");
    bookmarkIcon.className = "fas fa-bookmark bookmark-icon";
    bookmarkIcon.textContent = button.text[1];

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
    li.appendChild(btn);

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

    // Add click event listener for each button
    btn.addEventListener("click", function () {
      handleButtonClick(button.id);
      handleVendorClick(button.id);
    });

    // Create and append hr element
    const hr = document.createElement("hr");
    hr.className = "item-divider";
    li.appendChild(hr);
    // Append li to ul
    buttonList.appendChild(li);
  });
}

function VendorClick(DataId, id) {
  const buttonList = document.getElementById("map-list");
  buttonList.innerHTML = ""; // Clear existing content

  // Create the button
  const backButton = document.createElement("button");
  backButton.textContent = "< Back"; // Button text
  backButton.className = "back-button"; // Optional: Add a CSS class for styling
  backButton.addEventListener("click", function () {
    // Optional: Add functionality to go back or hide vendor info
    buttonList.innerHTML = "";
    createButtons(DataId); // Clear vendor info when clicking back button
  });
  buttonList.appendChild(backButton); // Append the button to map-list

  DataId.forEach((Data) => {
    console.log(Data);
    if (Data.id == id) {
      console.log(Data);
      // Second inner div for description
      const titleDiv = document.createElement("h1");
      titleDiv.textContent = Data.text[0];
      titleDiv.className = "vendor-header";
      buttonList.appendChild(titleDiv);

      // Create first div with two equal divs inside
      const div1 = document.createElement("div");
      div1.className = "vendor-info";

      // First inner div for message or image
      const messageDiv = document.createElement("div");
      // Example: Replace text with an image
      const image = document.createElement("img");
      image.src = Data.img;
      image.alt = "Vendor Image";
      image.style.width = "95%"; // Set image width to 50%
      messageDiv.appendChild(image); // Append image to messageDiv
      messageDiv.className = "vendor-message";
      div1.appendChild(messageDiv);

      // Second inner div for description
      const descriptionDiv = document.createElement("div");
      descriptionDiv.className = "vendor-description";
      const descriptionIcon = document.createElement("i");
      descriptionIcon.className = "fas fa-info-circle icon-spacing"; // Add the CSS class for spacing
      descriptionIcon.style.marginRight = "0.5vw";
      const descriptionText = document.createTextNode(Data.des);
      descriptionDiv.appendChild(descriptionIcon);
      descriptionDiv.appendChild(descriptionText);
      div1.appendChild(descriptionDiv);
      // Append first div to buttonList
      buttonList.appendChild(div1);

      // Create second div for email
      const emailDiv = document.createElement("div");
      emailDiv.className = "vendor-contact";
      const emailIcon = document.createElement("i");
      emailIcon.className = "fas fa-envelope";
      const emailLink = document.createElement("a");
      emailLink.href = "mailto:" + Data.Email; // Mailto link
      emailLink.textContent = Data.Email;
      emailLink.style.marginLeft = "0.5vw"; // Adjust margin as needed
      emailDiv.appendChild(emailIcon);
      emailDiv.appendChild(emailLink);
      buttonList.appendChild(emailDiv);

      // Assuming Data.Phone contains the phone number as a string
      const phoneNumber = Data.Phone;
      const phoneDiv = document.createElement("div");
      phoneDiv.className = "vendor-contact";
      const phoneIcon = document.createElement("i");
      phoneIcon.className = "fas fa-phone icon-spacing";
      phoneIcon.style.marginRight = "0.5vw";
      const phoneLink = document.createElement("a");
      phoneLink.href = `tel:${phoneNumber}`; // tel: protocol for phone calls
      phoneLink.appendChild(phoneIcon); // Append phone icon to the link
      const phoneText = document.createTextNode(phoneNumber);
      phoneLink.appendChild(phoneText); // Append phone number text to the link
      phoneDiv.appendChild(phoneLink);
      buttonList.appendChild(phoneDiv);

      // Create fourth div for website
      const websiteDiv = document.createElement("div");
      websiteDiv.className = "vendor-contact";
      const websiteIcon = document.createElement("i");
      websiteIcon.className = "fas fa-globe icon-spacing"; // Add the CSS class for spacing
      const websiteLink = document.createElement("a");
      websiteLink.href = "https://" + Data.Website; // Website URL
      websiteLink.target = "_blank"; // Open link in new tab
      websiteLink.textContent = Data.Website;
      websiteIcon.style.marginRight = "0.5vw";
      websiteDiv.appendChild(websiteIcon);
      websiteDiv.appendChild(websiteLink);
      buttonList.appendChild(websiteDiv);
    }
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
    case "vndA":
      switchMap("vendorA");
      highlightArea(".vendorA", 0, 0, 5);
      break;
    case "vndB":
      switchMap("vendorB");
      highlightArea(".vendorB", 0, 0, 5);
      break;
    case "vndC":
      switchMap("vendorC");
      highlightArea(".vendorC", 0, 0, 5);
      break;
    case "vndD":
      switchMap("vendorD");
      highlightArea(".vendorD", 0, 0, 5);
      break;
    case "vndE":
      switchMap("vendorE");
      highlightArea(".vendorE", 0, 0, 5);
      break;
    case "vndF":
      switchMap("vendorF");
      highlightArea(".vendorF", 0, 0, 5);
      break;
    case "vndG":
      switchMap("vendorG");
      highlightArea(".vendorG", 0, 0, 5);
      break;
    case "vndH":
      switchMap("vendorH");
      highlightArea(".vendorH", 0, 0, 5);
      break;
    case "vndI":
      switchMap("vendorI");
      highlightArea(".vendorI", 0, 0, 5);
      break;
    case "vndJ":
      switchMap("vendorJ");
      highlightArea(".vendorJ", 0, 0, 5);
      break;
    case "vndK":
      switchMap("vendorK");
      highlightArea(".vendorK", 0, 0, 5);
      break;
    default:
      break;
  }
}

function handleVendorClick(buttonId) {
  switch (buttonId) {
    case "vnd01":
      VendorClick(vendorData, "vnd01");
      break;
    case "vnd02":
      VendorClick(vendorData, "vnd02");
      break;
    case "vnd03":
      VendorClick(vendorData, "vnd03");
      break;
    case "vnd04":
      VendorClick(vendorData, "vnd04");
      break;
    case "vnd05":
      VendorClick(vendorData, "vnd05");
      break;
    case "vnd06":
      VendorClick(vendorData, "vnd06");
      break;
    case "vnd07":
      VendorClick(vendorData, "vnd07");
      break;
    case "vnd08":
      VendorClick(vendorData, "vnd08");
      break;
    case "vnd09":
      VendorClick(vendorData, "vnd09");
      break;
    case "vnd10":
      VendorClick(vendorData, "vnd10");
      break;
    case "vnd11":
      VendorClick(vendorData, "vnd11");
      break;
    case "vnd12":
      VendorClick(vendorData, "vnd12");
      break;
    case "vnd13":
      VendorClick(vendorData, "vnd13");
      break;
    case "vnd14":
      VendorClick(vendorData, "vnd14");
      break;
    case "vnd15":
      VendorClick(vendorData, "vnd15");
      break;
    case "vnd16":
      VendorClick(vendorData, "vnd16");
      break;
    case "vnd17":
      VendorClick(vendorData, "vnd17");
      break;
    case "vnd18":
      VendorClick(vendorData, "vnd18");
      break;
    case "vnd19":
      VendorClick(vendorData, "vnd19");
      break;
    case "vnd20":
      VendorClick(vendorData, "vnd20");
      break;
    case "vnd21":
      VendorClick(vendorData, "vnd21");
      break;
    case "vnd22":
      VendorClick(vendorData, "vnd22");
      break;
    case "vnd23":
      VendorClick(vendorData, "vnd23");
      break;
    case "vnd24":
      VendorClick(vendorData, "vnd24");
      break;
    case "vnd25":
      VendorClick(vendorData, "vnd25");
      break;
    case "vnd26":
      VendorClick(vendorData, "vnd26");
      break;
    case "vnd27":
      VendorClick(vendorData, "vnd27");
      break;
    case "vnd28":
      VendorClick(vendorData, "vnd28");
      break;
    case "vnd29":
      VendorClick(vendorData, "vnd29");
      break;
    case "vnd30":
      VendorClick(vendorData, "vnd30");
      break;
    case "vnd31":
      VendorClick(vendorData, "vnd31");
      break;
    case "vnd32":
      VendorClick(vendorData, "vnd32");
      break;
    case "vnd33":
      VendorClick(vendorData, "vnd33");
      break;
    case "vnd34":
      VendorClick(vendorData, "vnd34");
      break;
    case "vnd35":
      VendorClick(vendorData, "vnd35");
      break;
    case "vnd36":
      VendorClick(vendorData, "vnd36");
      break;
    case "vnd37":
      VendorClick(vendorData, "vnd37");
      break;
    case "vnd38":
      VendorClick(vendorData, "vnd38");
      break;
    case "vnd39":
      VendorClick(vendorData, "vnd39");
      break;
    case "vnd40":
      VendorClick(vendorData, "vnd40");
      break;
    case "vndA":
      VendorClick(vendorData, "vndA");
      break;
    case "vndB":
      VendorClick(vendorData, "vndB");
      break;
    case "vndC":
      VendorClick(vendorData, "vndC");
      break;
    case "vndD":
      VendorClick(vendorData, "vndD");
      break;
    case "vndE":
      VendorClick(vendorData, "vndE");
      break;
    case "vndF":
      VendorClick(vendorData, "vndF");
      break;
    case "vndG":
      VendorClick(vendorData, "vndG");
      break;
    case "vndH":
      VendorClick(vendorData, "vndH");
      break;
    case "vndI":
      VendorClick(vendorData, "vndI");
      break;
    case "vndJ":
      VendorClick(vendorData, "vndJ");
      break;
    case "vndK":
      VendorClick(vendorData, "vndK");
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
