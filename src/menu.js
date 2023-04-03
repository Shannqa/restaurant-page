// Menu
let breakfast = [];
let starters = [];
let mains = [];
// Breakfast
class Food {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class BreakfastItem extends Food {
  constructor(name, price) {
    super(name, price);
    breakfast.push(this);
  }
}

const createMenu = function () {
  const contentDiv = document.querySelector("#content");
  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
};
const pancakes = new BreakfastItem("Pancakes", "8.99");
export default createMenu;
// Starters

// Main Dishes

// Desserts

// Beverages
