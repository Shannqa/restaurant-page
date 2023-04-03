// Imports
import "./style.css";

import createMenu from "./menu";
import createHome from "./home";

const body = document.querySelector("body");

// Navigation
const nav = document.createElement("div");
nav.classList.add("nav");
const home = document.createElement("button");
home.textContent = "Home";
home.addEventListener("click", createHome);
const menu = document.createElement("button");
menu.addEventListener("click", createMenu);
menu.textContent = "Menu";
const contact = document.createElement("button");
contact.textContent = "Contact";
nav.appendChild(home);
nav.appendChild(menu);
nav.appendChild(contact);
body.appendChild(nav);

// Content
const content = document.createElement("div");
content.id = "content";
body.appendChild(content);
createHome();
