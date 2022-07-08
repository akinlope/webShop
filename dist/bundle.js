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

eval("module.exports.data = [\r\n  {\r\n    id: 1,\r\n    name: \"Semo and Okra Soup\",\r\n    price: 2000,\r\n  },\r\n  {\r\n    id: 2,\r\n    name: \"Jollof Rice & Chicken\",\r\n    price: 3000,\r\n  },\r\n  {\r\n    id: 3,\r\n    name: \"Big Burger & Fries\",\r\n    price: 1000,\r\n  },\r\n  {\r\n    id: 4,\r\n    name: \"Noodles, Turkey & Egg\",\r\n    price: 3500,\r\n  },\r\n];\r\n\n\n//# sourceURL=webpack://webshop/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { data } = __webpack_require__(/*! ./data */ \"./src/data.js\");\r\n\r\nconst addBtn = document.querySelectorAll(\".add\");\r\nconst subBtn = document.querySelectorAll(\".sub\");\r\nconst span = document.querySelectorAll(\"span\");\r\nconst price = document.querySelectorAll(\".price\");\r\nconst approve = document.querySelectorAll(\".approve\");\r\nconst proceed = document.querySelector(\".proceed\");\r\nconst h2 = document.querySelectorAll(\"h2\");\r\nconst finalPrice = document.querySelector(\".finalPrice\");\r\n\r\n// console.log(removeBtn);\r\n\r\n// const foodPriceContainer = document.querySelector(\".foodPrice\")\r\n\r\nfunction add() {\r\n  for (let i = 0; i < addBtn.length; i++) {\r\n    addBtn[i].addEventListener(\"click\", () => {\r\n      if (addBtn[i].classList.contains(\"add\")) {\r\n        /*For the counter*/\r\n        let quantityDisplay = span[i].innerHTML;\r\n        span[i].innerHTML = parseInt(quantityDisplay) + 1;\r\n        /* for the price */\r\n        let finalPrice = data[i].price * span[i].innerHTML;\r\n        price[i].innerHTML = finalPrice;\r\n      }\r\n    });\r\n  }\r\n}\r\nadd();\r\n\r\nfunction sub() {\r\n  for (let i = 0; i < subBtn.length; i++) {\r\n    subBtn[i].addEventListener(\"click\", () => {\r\n      if (subBtn[i].classList.contains(\"sub\")) {\r\n        /*for the counter*/\r\n        let quantityDisplay = span[i].innerHTML;\r\n        if (parseInt(quantityDisplay) > 1) {\r\n          span[i].innerHTML = parseInt(quantityDisplay) - 1;\r\n          /*for the price */\r\n          let finalPrice = data[i].price * span[i].innerHTML;\r\n          price[i].innerHTML = finalPrice;\r\n        }\r\n      }\r\n    });\r\n  }\r\n}\r\nsub();\r\n\r\nlet arr = [];\r\nfunction buy() {\r\n  for (let i = 0; i < approve.length; i++) {\r\n    approve[i].addEventListener(\"click\", () => {\r\n      /*Usinf JavaScript to create the DOM and adding class to them*/\r\n      let holder = document.createElement(\"div\");\r\n      holder.classList.add(\".foodPrice\"); /*foodPrice*/\r\n      let p = document.createElement(\"p\");\r\n      p.classList.add(\"foodName\");\r\n      let textHolder = document.createTextNode(h2[i].innerHTML);\r\n      let p1 = document.createElement(\"p\");\r\n      p1.classList.add(\"foodNamePrice\");\r\n      let priceHolder = document.createTextNode(parseInt(price[i].innerHTML));\r\n      let p2 = document.createElement(\"p\");\r\n      let removeHolder = document.createTextNode(\"Delete\");\r\n      p2.classList.add(\"removeBtn\");\r\n\r\n      /*Appending the DOM to each other*/\r\n      p.append(textHolder);\r\n      p1.append(priceHolder);\r\n      p2.append(removeHolder);\r\n      holder.appendChild(p);\r\n      holder.appendChild(p1);\r\n      holder.appendChild(p2);\r\n      document.querySelector(\".foodPrice\").appendChild(holder);\r\n\r\n      /*to display the total amount of the product to the user*/\r\n      arr.push(data[i].price);\r\n      let sum = 0;\r\n      for (let i = 0; i < arr.length; i++) {\r\n        sum = sum + arr[i];\r\n        // console.log(sum);\r\n        finalPrice.innerHTML = sum;\r\n      }\r\n    });\r\n  }\r\n}\r\nbuy();\r\n\r\nconst removeBtn = document.querySelectorAll(\".removeBtn\");\r\nfunction remove() {\r\n  for (let i = 0; i < removeBtn.length; i++) {\r\n    if (removeBtn[i].classList.contains(\".removeBtn\")) {\r\n      console.log(\"remove button  is clicked\");\r\n    }\r\n  }\r\n}\r\nremove();\r\n\r\nfunction btnProceed() {\r\n  proceed.addEventListener(\"click\", (e) => {\r\n    // console.log(e.target);\r\n  });\r\n}\r\nbtnProceed();\r\n\r\n// function buy() {\r\n//   const foodName = document.querySelector(\".foodName\")\r\n//   const foodNamePrice = document.querySelector(\".foodNamePrice\")\r\n//   for(let i = 0; i<approve.length; i++){\r\n//     approve[i].addEventListener(\"click\", ()=> {\r\n\r\n//       let sideBarFoodName = h2[i].innerHTML;\r\n//       let sideBarFoodPrice = price[i].innerHTML;\r\n//       foodName.append(sideBarFoodName)\r\n//       foodNamePrice.append(sideBarFoodPrice)\r\n//       foodPriceContainer.appendChild(foodName);\r\n//       foodPriceContainer.appendChild(foodNamePrice);\r\n//       // console.log(b, c);\r\n//     })\r\n//   }\r\n// }\r\n// buy()\r\n\n\n//# sourceURL=webpack://webshop/./src/index.js?");

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