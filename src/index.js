const { data } = require("./data");
const { tempArray } = require("./data");

const addBtn = document.querySelectorAll(".add");
const subBtn = document.querySelectorAll(".sub");
const span = document.querySelectorAll("span");
const price = document.querySelectorAll(".price");
const approve = document.querySelectorAll(".approve");
const proceed = document.querySelector(".proceed");
const foodPrice = document.querySelector(".foodPrice");
const finalPrice = document.querySelector(".finalPrice");

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

const itemsArr = [];
const totalPriceArr = [];



/* buy button event listener*/
for (let x = 0; x < approve.length; x++) {
  approve[x].addEventListener("click", () => {
    itemsArr.push({
      id: data[x].id,
      name: data[x].name,
      price: price[x].innerHTML,
    });

    createElements(itemsArr);
    // console.log(itemsArr[x].price);

    totalPriceArr.push(parseInt(price[x].innerHTML));
    // console.log(totalPriceArr);
    let sum = 0;
    for (let i = 0; i < totalPriceArr.length; i++) {
      sum = sum + totalPriceArr[i];
      // console.log(sum);
    }
    // console.log(sum);

    finalPrice.innerHTML = sum;
  });
}

// console.log(itemsArr);
/* to create the elements holding the price, name and remove btn after user clicks BUY*/
function createElements(params) {
  /*map the data from the array*/
  const dataResult = params.map(({ id, name, price }) => {
    return `<p class="foodName" id=${id}>${name}</p>
    <p class="foodNamePrice">${price}</p>
    <p class="removeBtn">Delete</p>`;
  });
 

  /*remove the comma in between the element (log dataResult to see the comma) */

  const theHTML = dataResult.join(" ");
  /* send the new data to the html element */
  foodPrice.innerHTML = theHTML;

  /* get the delete element after it has been sent to the webshop */
  const deleteBtn = document.querySelectorAll(".removeBtn");
  for (let x = 0; x < deleteBtn.length; x++) {
    deleteBtn[x].addEventListener("click", () => {
      console.log();
      /* 
      
        having issue here, when the user delete a an item from the 
        buy list it should subtract the price from the total price.
      
      */

      if (deleteBtn[x] !== itemsArr.id) {
        itemsArr.splice(x, 1);
        // console.log(itemsArr.price)

        createElements(itemsArr);

        totalPriceArr.push(parseInt(price[x].innerHTML));
      }
      for (let i = 0; i < price.length; i++) {
        // console.log(price);
      }
    });
  }
}

// function remove() {
//   // console.log(removeBtn);
//   for (let i = 0; i < removeBtn.length; i++) {
//      console.log("remove button  is clicked");
//   }
// }
// remove();

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

// let arr = [100,200,300,400,500]
// let see = arr[2].shift()

// let sum = [5000] - 2000
// console.log(sum);
