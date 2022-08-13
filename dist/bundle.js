/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((module) => {

eval("module.exports.data = [\r\n  {\r\n    id: 1,\r\n    name: \"Semo and Okra Soup\",\r\n    price: 2000,\r\n  },\r\n  {\r\n    id: 2,\r\n    name: \"Jollof Rice & Chicken\",\r\n    price: 3000,\r\n  },\r\n  {\r\n    id: 3,\r\n    name: \"Big Burger & Fries\",\r\n    price: 1000,\r\n  },\r\n  {\r\n    id: 4,\r\n    name: \"Noodles, Turkey & Egg\",\r\n    price: 3500,\r\n  },\r\n];\r\n\r\nmodule.exports.tempArray = [\r\n  \r\n]\n\n//# sourceURL=webpack://webshop/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { data } = __webpack_require__(/*! ./data */ \"./src/data.js\");\r\nconst { tempArray } = __webpack_require__(/*! ./data */ \"./src/data.js\");\r\n\r\nconst addBtn = document.querySelectorAll(\".add\");\r\nconst subBtn = document.querySelectorAll(\".sub\");\r\nconst span = document.querySelectorAll(\"span\");\r\nconst price = document.querySelectorAll(\".price\");\r\nconst approve = document.querySelectorAll(\".approve\");\r\nconst proceed = document.querySelector(\".proceed\");\r\nconst foodPrice = document.querySelector(\".foodPrice\");\r\nconst finalPrice = document.querySelector(\".finalPrice\");\r\n\r\nfunction add() {\r\n  for (let i = 0; i < addBtn.length; i++) {\r\n    addBtn[i].addEventListener(\"click\", () => {\r\n      if (addBtn[i].classList.contains(\"add\")) {\r\n        /*For the counter*/\r\n        let quantityDisplay = span[i].innerHTML;\r\n        span[i].innerHTML = parseInt(quantityDisplay) + 1;\r\n        /* for the price */\r\n        let finalPrice = data[i].price * span[i].innerHTML;\r\n        price[i].innerHTML = finalPrice;\r\n      }\r\n    });\r\n  }\r\n}\r\nadd();\r\n\r\nfunction sub() {\r\n  for (let i = 0; i < subBtn.length; i++) {\r\n    subBtn[i].addEventListener(\"click\", () => {\r\n      if (subBtn[i].classList.contains(\"sub\")) {\r\n        /*for the counter*/\r\n        let quantityDisplay = span[i].innerHTML;\r\n        if (parseInt(quantityDisplay) > 1) {\r\n          span[i].innerHTML = parseInt(quantityDisplay) - 1;\r\n          /*for the price */\r\n          let finalPrice = data[i].price * span[i].innerHTML;\r\n          price[i].innerHTML = finalPrice;\r\n        }\r\n      }\r\n    });\r\n  }\r\n}\r\nsub();\r\n\r\nconst itemsArr = [];\r\nconst totalPriceArr = [];\r\n\r\n\r\n\r\n/* buy button event listener*/\r\nfor (let x = 0; x < approve.length; x++) {\r\n  approve[x].addEventListener(\"click\", () => {\r\n    itemsArr.push({\r\n      id: data[x].id,\r\n      name: data[x].name,\r\n      price: price[x].innerHTML,\r\n    });\r\n\r\n    createElements(itemsArr);\r\n    // console.log(itemsArr[x].price);\r\n\r\n    totalPriceArr.push(parseInt(price[x].innerHTML));\r\n    // console.log(totalPriceArr);\r\n    let sum = 0;\r\n    for (let i = 0; i < totalPriceArr.length; i++) {\r\n      sum = sum + totalPriceArr[i];\r\n      // console.log(sum);\r\n    }\r\n    // console.log(sum);\r\n\r\n    finalPrice.innerHTML = sum;\r\n  });\r\n}\r\n\r\n// console.log(itemsArr);\r\n/* to create the elements holding the price, name and remove btn after user clicks BUY*/\r\nfunction createElements(params) {\r\n  /*map the data from the array*/\r\n  const dataResult = params.map(({ id, name, price }) => {\r\n    return `<p class=\"foodName\" id=${id}>${name}</p>\r\n    <p class=\"foodNamePrice\">${price}</p>\r\n    <p class=\"removeBtn\">Delete</p>`;\r\n  });\r\n \r\n\r\n  /*remove the comma in between the element (log dataResult to see the comma) */\r\n\r\n  const theHTML = dataResult.join(\" \");\r\n  /* send the new data to the html element */\r\n  foodPrice.innerHTML = theHTML;\r\n\r\n  /* get the delete element after it has been sent to the webshop */\r\n  const deleteBtn = document.querySelectorAll(\".removeBtn\");\r\n  for (let x = 0; x < deleteBtn.length; x++) {\r\n    deleteBtn[x].addEventListener(\"click\", () => {\r\n      console.log();\r\n      /* \r\n      \r\n        having issue here, when the user delete a an item from the \r\n        buy list it should subtract the price from the total price.\r\n      \r\n      */\r\n\r\n      if (deleteBtn[x] !== itemsArr.id) {\r\n        itemsArr.splice(x, 1);\r\n        // console.log(itemsArr.price)\r\n\r\n        createElements(itemsArr);\r\n\r\n        totalPriceArr.push(parseInt(price[x].innerHTML));\r\n      }\r\n      for (let i = 0; i < price.length; i++) {\r\n        // console.log(price);\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\n// function remove() {\r\n//   // console.log(removeBtn);\r\n//   for (let i = 0; i < removeBtn.length; i++) {\r\n//      console.log(\"remove button  is clicked\");\r\n//   }\r\n// }\r\n// remove();\r\n\r\nfunction btnProceed() {\r\n  proceed.addEventListener(\"click\", (e) => {\r\n    // console.log(e.target);\r\n  });\r\n}\r\nbtnProceed();\r\n\r\n// function buy() {\r\n//   const foodName = document.querySelector(\".foodName\")\r\n//   const foodNamePrice = document.querySelector(\".foodNamePrice\")\r\n//   for(let i = 0; i<approve.length; i++){\r\n//     approve[i].addEventListener(\"click\", ()=> {\r\n\r\n//       let sideBarFoodName = h2[i].innerHTML;\r\n//       let sideBarFoodPrice = price[i].innerHTML;\r\n//       foodName.append(sideBarFoodName)\r\n//       foodNamePrice.append(sideBarFoodPrice)\r\n//       foodPriceContainer.appendChild(foodName);\r\n//       foodPriceContainer.appendChild(foodNamePrice);\r\n//       // console.log(b, c);\r\n//     })\r\n//   }\r\n// }\r\n// buy()\r\n\r\n// let arr = [100,200,300,400,500]\r\n// let see = arr[2].shift()\r\n\r\n// let sum = [5000] - 2000\r\n// console.log(sum);\r\n\n\n//# sourceURL=webpack://webshop/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;