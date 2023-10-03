import photo1 from "./chris-liverani-oCsaxvGCehM-unsplash.jpg";

const createHome = function () {
  // remove content from a previous page
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  content.className = "";
  content.classList.add("content-home");
  const leftSide = document.createElement("div");
  content.appendChild(leftSide);

// Photo
  const photoMain = new Image();
  photoMain.src = photo1;
  photoMain.classList.add("photo-main");
  leftSide.appendChild(photoMain);

const rightSide = document.createElement("div");
  rightSide.classList.add("right-side");
  content.appendChild(rightSide);

  const restName = document.createElement("div");
  restName.classList.add("rest-name");
  restName.textContent = "The Second Sun";
  rightSide.appendChild(restName);

  const restSummary = document.createElement("div");
  restSummary.classList.add("rest-summary");
  restSummary.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex. Order your food online or visit our place!";
  rightSide.appendChild(restSummary);

  const orderBtn = document.createElement("button");
  orderBtn.classList.add("order-btn");
  orderBtn.textContent = "Order now";
  rightSide.appendChild(orderBtn);

 const address = document.createElement("div");
  address.classList.add("address");
  const address1 = document.createElement("div");
  address1.textContent = "359 Sunshine Alley,";
  const address2 = document.createElement("div");
  address2.textContent = "New York, NY 99271";
  address.appendChild(address1);
  address.appendChild(address2);
  rightSide.appendChild(address);


const hours = document.createElement("div");
  hours.classList.add("opening-hours");
  const hours1 = document.createElement("div");
  hours1.textContent = "Mon - Fri: 10am - 9pm";
  const hours2 = document.createElement("div");
  hours2.textContent = "Sat - Sun: 10am - 11pm";
  rightSide.appendChild(hours);
  hours.appendChild(hours1);
  hours.appendChild(hours2);
};

export default createHome;



