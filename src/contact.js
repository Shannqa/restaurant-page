import photo2 from "./patrick-schneider-5xltWMpkN3E-unsplash.jpg";

function createContact() {
    const contentDiv = document.querySelector("#content");

    // remove content from a previous page
    while (contentDiv.firstChild) {
      contentDiv.removeChild(contentDiv.lastChild);
    }
    contentDiv.className = "";
    contentDiv.classList.add("content-contact");

    // add page title and container
    const contactH1 = document.createElement("h1");
    contactH1.textContent = "Contact";
    contentDiv.appendChild(contactH1);
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    contentDiv.appendChild(contactContainer);

    // fill the page with data
    const contactParagraph = document.createElement("p");
    contactParagraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.";
    contactContainer.appendChild(contactParagraph);

    const address = document.createElement("div");
    address.classList.add("address");
    const address1 = document.createElement("div");
    address1.textContent = "359 Sunshine Alley,";
    const address2 = document.createElement("div");
    address2.textContent = "New York, NY 99271";
    address.appendChild(address1);
    address.appendChild(address2);
    contactContainer.appendChild(address);

    const phone = document.createElement("div");
    phone.classList.add("phone");
    phone.textContent = "Call us: 123 456 789";
    contactContainer.appendChild(phone);


}

export default createContact;