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

    const leftSide = document.createElement("div");
    leftSide.classList.add("left-side");
    contactContainer.appendChild(leftSide);

    const rightSide = document.createElement("div");
    rightSide.classList.add("right-side");
    contactContainer.appendChild(rightSide);

    // photo
    const photoContact = new Image();
    photoContact.src = photo2;
    photoContact.classList.add("photo-contact");
    rightSide.appendChild(photoContact);

    // fill the page with data
    const contactParagraph1 = document.createElement("p");
    contactParagraph1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.";
    leftSide.appendChild(contactParagraph1);

    const contactParagraph2 = document.createElement("p");
    contactParagraph2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.";
    leftSide.appendChild(contactParagraph2);

    const address = document.createElement("div");
    address.classList.add("address");
    const address1 = document.createElement("div");
    address1.textContent = "359 Sunshine Alley,";
    const address2 = document.createElement("div");
    address2.textContent = "New York, NY 99271";
    address.appendChild(address1);
    address.appendChild(address2);
    leftSide.appendChild(address);

    const hours = document.createElement("div");
    hours.classList.add("opening-hours");
    const hours1 = document.createElement("div");
    hours1.textContent = "Mon - Fri: 10am - 9pm";
    const hours2 = document.createElement("div");
    hours2.textContent = "Sat - Sun: 10am - 11pm";
    leftSide.appendChild(hours);
    hours.appendChild(hours1);
    hours.appendChild(hours2);

    const phone = document.createElement("div");
    phone.classList.add("phone");
    phone.textContent = "Call us: 123 456 789";
    leftSide.appendChild(phone);


}

export default createContact;