const { data } = require("./data");

const addBtn = document.querySelectorAll(".add");
const subBtn = document.querySelectorAll(".sub");
const span = document.querySelectorAll("span");
const price = document.querySelectorAll(".price");
const approve = document.querySelectorAll(".approve");
const foodPrice = document.querySelector(".foodPrice");

function add() {
  for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].addEventListener("click", () => {
      if (addBtn[i].classList.contains("add")) {
        /*For the counter*/
        let quantityDisplay = span[i].innerHTML;
        span[i].innerHTML = parseInt(quantityDisplay) + 1;
        /* for the price */
        let finalPrice = data[i].price * span[i].innerHTML;
        price[i].innerHTML = finalPrice;
      }
    });
  }
}
add();

function sub() {
  for (let i = 0; i < subBtn.length; i++) {
    subBtn[i].addEventListener("click", () => {
      if (subBtn[i].classList.contains("sub")) {
        /*for the counter*/
        let quantityDisplay = span[i].innerHTML;
        if (parseInt(quantityDisplay) > 1) {
          span[i].innerHTML = parseInt(quantityDisplay) - 1;
          /*for the price */
          let finalPrice = data[i].price * span[i].innerHTML;
          price[i].innerHTML = finalPrice;
        }
      }
    });
  }
}
sub();

let itemsArr = [];

// buy button event listener
for (let x = 0; x < approve.length; x++) {
  approve[x].addEventListener("click", () => {
    itemsArr.push({
      id: data[x].id,
      name: data[x].name,
      price: price[x].innerHTML,
    });

    createElements(itemsArr);
    console.log(itemsArr);
  });
}

function createElements(params) {
  // map the data from the array
  const dataResult = params.map(({ id, name, price }) => {
    return `<p class="foodName" id=${id}>${name}</p>
    <p class="foodNamePrice">${price}</p>
    <p class="removeBtn">Delete</p>`;
  });

  // remove the comma in between the element (log dataResult to see the comma)
  // console.log(dataResult);
  
  const theHTML = dataResult.join(" ");
  console.log(theHTML);

  // send the new data to the html element
  foodPrice.innerHTML = theHTML;

  // get the delete element after it has been sent to the webshop
  const deleteBtn = document.querySelectorAll(".removeBtn");

  for (let x = 0; x < deleteBtn.length; x++) {
    deleteBtn[x].addEventListener("click", () => {
      console.log("Hello World");
    });
  }
}