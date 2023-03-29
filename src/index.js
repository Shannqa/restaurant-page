// Imports
import "./style.css";
import photo1 from "./chris-liverani-oCsaxvGCehM-unsplash.jpg";

const body = document.querySelector("body");

// Navigation
const nav = document.createElement("div");
nav.classList.add("nav");
const home = document.createElement("div");
home.textContent = "Home";
const menu = document.createElement("div");
menu.textContent = "Menu";
const contact = document.createElement("div");
contact.textContent = "Contact";
nav.appendChild(home);
nav.appendChild(menu);
nav.appendChild(contact);
body.appendChild(nav);

// Content
const content = document.createElement("div");
content.id = "content";
body.appendChild(content);

// Photo
const photoMain = new Image();
photoMain.src = photo1;
photoMain.classList.add("photo-main");
content.appendChild(photoMain);

const restName = document.createElement("div");
restName.classList.add("rest-name");
restName.textContent = "The Second Sun";
content.appendChild(restName);

const restSummary = document.createElement("div");
restSummary.classList.add("rest-summary");
restSummary.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Order your food online or visit our place!";
content.appendChild(restSummary);

const orderBtn = document.createElement("button");
orderBtn.textContent = "Order now";
content.appendChild(orderBtn);

const address = document.createElement("div");
address.textContent = "359 Sunshine Alley, New York, NY 99271";
content.appendChild(address);

const hours = document.createElement("div");
const hours1 = document.createElement("span");
hours1.textContent = "Mon - Fri: 10am - 9pm";
const hours2 = document.createElement("span");
hours2.textContent = "Sat - Sun: 10am - 11pm";
content.appendChild(hours);
hours.appendChild(hours1);
hours.appendChild(hours2);
