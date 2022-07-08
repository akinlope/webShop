const { data } = require("./data");

const addBtn = document.querySelectorAll(".add");
const subBtn = document.querySelectorAll(".sub");
const span = document.querySelectorAll("span");
const price = document.querySelectorAll(".price");
const approve = document.querySelectorAll(".approve");
const proceed = document.querySelector(".proceed");
const h2 = document.querySelectorAll("h2");
const finalPrice = document.querySelector(".finalPrice");

// console.log(removeBtn);

// const foodPriceContainer = document.querySelector(".foodPrice")

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

let arr = [];
function buy() {
  for (let i = 0; i < approve.length; i++) {
    approve[i].addEventListener("click", () => {
      /*Usinf JavaScript to create the DOM and adding class to them*/
      let holder = document.createElement("div");
      holder.classList.add(".foodPrice"); /*foodPrice*/
      let p = document.createElement("p");
      p.classList.add("foodName");
      let textHolder = document.createTextNode(h2[i].innerHTML);
      let p1 = document.createElement("p");
      p1.classList.add("foodNamePrice");
      let priceHolder = document.createTextNode(parseInt(price[i].innerHTML));
      let p2 = document.createElement("p");
      let removeHolder = document.createTextNode("Delete");
      p2.classList.add("removeBtn");

      /*Appending the DOM to each other*/
      p.append(textHolder);
      p1.append(priceHolder);
      p2.append(removeHolder);
      holder.appendChild(p);
      holder.appendChild(p1);
      holder.appendChild(p2);
      document.querySelector(".foodPrice").appendChild(holder);

      /*to display the total amount of the product to the user*/
      arr.push(data[i].price);
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        // console.log(sum);
        finalPrice.innerHTML = sum;
      }
    });
  }
}
buy();

const removeBtn = document.querySelectorAll(".removeBtn");
function remove() {
  for (let i = 0; i < removeBtn.length; i++) {
    if (removeBtn[i].classList.contains(".removeBtn")) {
      console.log("remove button  is clicked");
    }
  }
}
remove();

function btnProceed() {
  proceed.addEventListener("click", (e) => {
    // console.log(e.target);
  });
}
btnProceed();

// function buy() {
//   const foodName = document.querySelector(".foodName")
//   const foodNamePrice = document.querySelector(".foodNamePrice")
//   for(let i = 0; i<approve.length; i++){
//     approve[i].addEventListener("click", ()=> {

//       let sideBarFoodName = h2[i].innerHTML;
//       let sideBarFoodPrice = price[i].innerHTML;
//       foodName.append(sideBarFoodName)
//       foodNamePrice.append(sideBarFoodPrice)
//       foodPriceContainer.appendChild(foodName);
//       foodPriceContainer.appendChild(foodNamePrice);
//       // console.log(b, c);
//     })
//   }
// }
// buy()
