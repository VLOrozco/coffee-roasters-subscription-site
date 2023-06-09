"use strict";
// Global variables
// Accordion menu elements question and group of option buttons
const planQ = document.querySelectorAll(".plan-q");
// const optionButtons = document.querySelectorAll(".option-btns");

// Desktop view plan navigation table and steps
// const planNavigation = document.querySelectorAll(".plan-navigation");
const planNum = document.querySelectorAll(".plan-num");
const planStep = document.querySelectorAll(".plan-step");

// orderSummary & corresponding span elements
const orderSummary = document.querySelector("#order-summary");
const preference = document.querySelector("#preference");
const beanType = document.querySelector("#bean-type");
const quantity = document.querySelector("#quantity");
const grindOption = document.querySelector("#grind-option");
const deliveries = document.querySelector("#deliveries");

// Set Boolean value of false for each selection
let preferenceSelected = false,
    beanTypeSelected = false,
    quantitySelected = false,
    grindOptionSelected = false,
    deliveriesSelected = false;

// ALL selection plan buttons
// iterate through buttons adding event listener
const orderButtons = document.querySelectorAll(".option-btns button");
// buttons for styling the background of selected button
const buttons = document.querySelectorAll(".option-btns button");

const orderSelectionObj = {};
orderSelectionObj["preferenceOrder"] = sessionStorage.getItem("preference");
orderSelectionObj["beanTypeOrder"] = sessionStorage.getItem("beanType");
orderSelectionObj["quantityOrder"] = sessionStorage.getItem("quantity");
orderSelectionObj["grindOptionOrder"] = sessionStorage.getItem("grindOption");
orderSelectionObj["deliveriesOrder"] = sessionStorage.getItem("deliveries");

let keys = Object.keys(sessionStorage);
let values = Object.values(sessionStorage);
// SessionStorage value strings
const preferenceString = sessionStorage.getItem("preference");
const beanTypeString = sessionStorage.getItem("beanType");
const quantityString = sessionStorage.getItem("quantity");
const grindOptionString = sessionStorage.getItem("grindOption");
const deliveriesString = sessionStorage.getItem("deliveries");

///////////////////////////////////////////////////////////////////////////
// ACCORDION MENU & PLAN NAVIGATION

// Accordion Menu: For loop to iterate over each item in .plan-q {question} and toggle the active state to rotate the arrow and open the accordion menu for the node that is being iterated over

const accordionMenu = () => {
  // take order by iterating over the number of questions required for creating customer's coffee plan
  for (let i = 0; i < planQ.length; i++) {

    // iterate through each .plan-step node in aside navigation table
    for (let j = 0; j < planStep.length; j++) {

      // conditional if statement to check equality of planQ[i] and planStep[j] of the same index no.
      if(j == i) {
        // when planQ[i] clicked toggle accordion menu and arrow
        planQ[i].addEventListener("click", function() {
          this.classList.toggle("active"); // rotate Q arrow up/down
          this.nextElementSibling.classList.toggle("active"); // show/hide option buttons from underneath the question
          planStep[j].lastElementChild.classList.toggle("active"); // style aside navbar text; !numbers; returns light grey or black text depending if accordion menu is closed/opened

          // toggle rotating question arrow
          // toggle showing option buttons for accordion menu when Q is clicked; this.nextElementSibling = the set of option buttons per question
          // change color of the default font in aside navigation table; lastElementChild = navigation menu text; toggle color of .plan-text to light grey or black (default) while selection is open

        }); // .planQ eventListener "click" end

        // when planStep[j] is clicked toggle accordion menu and arrow
        planStep[j].addEventListener("click", function() {
          planQ[i].classList.toggle("active"); // rotate arrow
          planQ[i].nextElementSibling.classList.toggle("active"); // show/hide option buttons
          this.lastElementChild.classList.toggle("active"); // style navbar text light grey/black

          // when .plan-step element is clicked, toggle arrow rotation
          // open corresponding accordion menu set of option buttons
          // style aside navbar text; !numbers; returns light grey or black text depending if accordion menu is closed/opened

        }); // .planStep evenListener "click" end

      } // conditional if statement j = i end
    } // for loop .planStep end
  } // for loop .planQ end
}; // accordionMenu(); end


/////////////////////////////////////////////////////////////////////////////
// SESSION STORAGE KEYS & STYLE ASIDE NAVIGATION TABLE NUMBERS

// if key of keys == true style color of the aside navigation table number
// Iterate over all items in the window.sessionStorage
// from Object.keys(sessionStorage); 
for(let key of keys) {
  // If statements to check for current Boolean value/text
  if(key == "preference") {
    preference.textContent = preferenceString;
    preferenceSelected = true;
    preferenceSelected !== true ? planNum[0].classList.remove("active") : planNum[0].classList.add("active");
    // console.log(`sessionStorage.key(preference) = ${preference}`);
    // console.log(orderSelectionObj["preferenceOrder"]);

    // Assign the value of the string to the text of the orderSummary key of "preference" for customer's to view prior to creating their plan

    // Update variable to truthy

    // Conditional (ternary) operator of the if / else statement to update .active state; which changes the planNum color to teal; shorthand for the if/else statement below
    // if / else statement to check if preferenceSelected is truthy or falsy
      // if(preferenceSelected !== true) {
      //   planNum[0].classList.remove("active");
      //   console.log("remove planNum active");
      // } else {
      //   planNum[0].classList.add("active");
      //   // console.log(planNum[0]);
      //   console.log("add planNum active");
      // }
  }

  if(key == "beanType") {
    beanType.textContent = beanTypeString;
    beanTypeSelected = true;
    beanTypeSelected !== true ? planNum[1].classList.remove("active") : planNum[1].classList.add("active");
    // console.log(`sessionStorage.key(beanType) = ${beanTypeSelected}`);
    // console.log(orderSelectionObj["beanTypeOrder"]);
  }

  if(key == "quantity") {
    quantity.textContent = quantityString;
    quantitySelected = true;
    quantitySelected !== true ? planNum[2].classList.remove("active") : planNum[2].classList.add("active");
    // console.log(`sessionStorage.key(quantity) = ${quantitySelected}`);
    // console.log(orderSelectionObj["quantityOrder"]);
  }

  if(key == "grindOption") {
    grindOption.textContent = grindOptionString;
    grindOptionSelected = true;
    grindOptionSelected !== true ? planNum[3].classList.remove("active") : planNum[3].classList.add("active");
    // console.log(`sessionStorage.key(grindOption) = ${grindOptionSelected}`);
    // console.log(orderSelectionObj["grindOptionOrder"]);
  }

  if(key == "deliveries") {
    deliveries.textContent = deliveriesString;
    deliveriesSelected = true;
    deliveriesSelected !== true ? planNum[4].classList.remove("active") : planNum[4].classList.add("active");
    // console.log(`sessionStorage.key(deliveries) = ${deliveriesSelected}`);
    // console.log(orderSelectionObj["deliveriesOrder"]);
  }

} // for(let key of keys) end

/////////////////////////////////////////////////////////////////////////////
// ORDER BUTTONS EVENT LISTENER; SET, STORE, UPDATE ORDER SUMMARY OBJECT & UPDATE NAV TABLE NUMBER STYLE

// Iterate through each button index of the 15 order buttons; returns orderButtons NodeList of 15 buttons
for(let a = 0; a < orderButtons.length; a++) {

  // Add an event listener of "click" to each button index to style and collect data
  orderButtons[a].addEventListener("click", () => {

    if(!orderButtons[a]) {
      return;
    } else {
      if (a >= 0 && a <= 2) {
        sessionStorage.setItem("preference", `${orderButtons[a].firstElementChild.textContent}`); // sessionStorage.setItem("key", "value");
        preference.textContent = sessionStorage.getItem("preference");
        orderSelectionObj["preferenceOrder"] = orderButtons[a].firstElementChild.textContent;
        preferenceSelected = true;
        preferenceSelected !== true ? planNum[0].classList.remove("active") : planNum[0].classList.add("active");

        // console.log(orderButtons[a].firstElementChild.innerHTML);
        // console.log(orderButtons[a].dataset.value);
        // console.log(orderSelectionObj["preferenceOrder"]); // string

        // SET/ASSIGN
        // GET AND UPDATE text in separate locations
        // STORE/SAVE text in orderSelectionObj object

        // Store the preference button selection to the sessionStorage
        // sessionStorage saves to the Window.sessionStorage; session ends when current tab is exited

        // Get the value of the item and save it to the selections textContent for the orderSummary section

        // Assign new item of current button to orderSelectionObj
      }

      if (a >= 3 && a <= 5) {
        sessionStorage.setItem("beanType", `${orderButtons[a].firstElementChild.textContent}`);
        beanType.textContent = sessionStorage.getItem("beanType");
        orderSelectionObj["beanTypeOrder"] = orderButtons[a].firstElementChild.textContent;
        beanTypeSelected = true;
        beanTypeSelected !== true ? planNum[1].classList.remove("active") : planNum[1].classList.add("active");
        // console.log(orderSelectionObj["beanTypeOrder"]); // string
      }

      if(a >= 6 && a <= 8) {
        sessionStorage.setItem("quantity", `${orderButtons[a].firstElementChild.textContent}`);
        quantity.textContent = sessionStorage.getItem("quantity");
        orderSelectionObj["quantityOrder"] = orderButtons[a].firstElementChild.textContent;
        quantitySelected = true;
        quantitySelected !== true ? planNum[2].classList.remove("active") : planNum[2].classList.add("active");
        // console.log(orderSelectionObj["quantityOrder"]); // string
      }

      if(a >= 9 && a <= 11) {
        sessionStorage.setItem("grindOption", `${orderButtons[a].firstElementChild.textContent}`);
        grindOption.textContent = sessionStorage.getItem("grindOption");
        orderSelectionObj["grindOptionOrder"] = orderButtons[a].firstElementChild.textContent;
        grindOptionSelected = true;
        grindOptionSelected !== true ? planNum[3].classList.remove("active") : planNum[3].classList.add("active");
        // console.log(orderSelectionObj["grindOptionOrder"]); // string
      }

      if(a >= 12 && a <= 14) {
        sessionStorage.setItem("deliveries", `${orderButtons[a].firstElementChild.textContent}`);
        deliveries.textContent = sessionStorage.getItem("deliveries");
        orderSelectionObj["deliveriesOrder"] = orderButtons[a].firstElementChild.textContent;
        deliveriesSelected = true;
        deliveriesSelected !== true ? planNum[4].classList.remove("active") : planNum[4].classList.add("active");
        // console.log(orderSelectionObj["deliveriesOrder"]); // string
      }

    } // end of else statement

    // console.log("orderSelectionObj inside local scope of orderButtons eventListener");
    styleButtons();
    // checkSessionStorage();
    // console.log(orderSelectionObj);
    // console.log("orderButtons[a].dataset.value");

  }); // orderButtons evenListener of "click" end

} // orderButtons for loop end

function styleButtons() {
  for(let c = 0; c <= buttons.length; c++) {
    // Style button if the following conditions are met
    // Fits index range
    // Button value matches the sessionStorage value
    if ((c >= 0 && c <= 2) && (buttons[c].dataset.value !== orderSelectionObj.preferenceOrder) || (c >= 3 && c <= 5) && (buttons[c].dataset.value !== orderSelectionObj.beanTypeOrder) || (c >= 6 && c <= 8) && (buttons[c].dataset.value !== orderSelectionObj.quantityOrder) || (c >= 9 && c <= 11)  && (buttons[c].dataset.value !== orderSelectionObj.grindOptionOrder) || (c >= 12 && c <= 14) && (buttons[c].dataset.value !== orderSelectionObj.deliveriesOrder)) {

      buttons[c].classList.remove("active");

    } else if ((c >= 0 && c <= 2) && (buttons[c].dataset.value == orderSelectionObj.preferenceOrder) || (c >= 3 && c <= 5) && (buttons[c].dataset.value == orderSelectionObj.beanTypeOrder) || (c >= 6 && c <= 8) && (buttons[c].dataset.value == orderSelectionObj.quantityOrder) || (c >= 9 && c <= 11)  && (buttons[c].dataset.value == orderSelectionObj.grindOptionOrder) || (c >= 12 && c <= 14) && (buttons[c].dataset.value == orderSelectionObj.deliveriesOrder)) {

      buttons[c].classList.add("active");

    }

  } // for loop "c", buttons.length end

} // styleButtons() function end

accordionMenu();
styleButtons();
// console.log("orderSummary.innerHTML");
// console.log(orderSummary.innerHTML); // textContent

/////////////////////////////////////////////////////////////////////////////
// SUBMIT FORM & CHECKOUT MODAL W/EVENT LISTENERS

const submit = document.querySelector('#submit');
const overlay = document.querySelector('.overlay-container');
const preferenceOrder = document.querySelector('#preference-order');
const beanTypeOrder = document.querySelector('#bean-type-order');
const quantityOrder = document.querySelector('#quantity-order');
const grindOptionOrder = document.querySelector('#grind-option-order');
const deliveriesOrder = document.querySelector('#deliveries-order');
// console.log(submit);
// console.log(overlay);
// console.log(preferenceOrder);
// console.log(beanTypeOrder);
// console.log(quantityOrder);
// console.log(grindOptionOrder);
// console.log(deliveriesOrder);

// CREATE MY PLAN!
submit.addEventListener("click", () => {
  // Return if missing an order item
  if(orderSelectionObj["preferenceOrder"] == undefined || orderSelectionObj["beanTypeOrder"] == undefined || orderSelectionObj["quantityOrder"] == undefined || orderSelectionObj["grindOptionOrder"] == undefined || orderSelectionObj["deliveriesOrder"] == undefined) {
    return;
  } else {
    window.scrollTo(0, 0);
    overlay.style.display = "block";
    overlay.classList.add("active");
    preferenceOrder.textContent = orderSelectionObj["preferenceOrder"];
    beanTypeOrder.textContent = orderSelectionObj["beanTypeOrder"];
    quantityOrder.textContent = orderSelectionObj["quantityOrder"];
    grindOptionOrder.textContent = orderSelectionObj["grindOptionOrder"];
    deliveriesOrder.textContent = orderSelectionObj["deliveriesOrder"];
  }

}); // submit eventListener end

// CHECKOUT
let w = window.innerWidth;
const checkout = document.querySelector("#checkout-btn");
const orderSummaryFinal = document.querySelector("#order-summary-final");
const price = document.getElementById("price");
// console.log(w);
// console.log(checkout);
// console.log(orderSummaryFinal);

if(w < 750) {
  price.textContent = "- $14.00/mo.";
  price.style.color = "white";
  // console.log(price);
} else {
  price.textContent = "";
}

checkout.addEventListener("click", () => {
  // console.log(checkout);
  sessionStorage.clear();
  window.location = './index.html';
  // reset styles
  planQ.classList.remove("active");
  planStep.classList.remove("active");
  planNum.classList.remove("active");
  overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
  orderSummaryFinal.style.pointerEvents = "none";
  checkout.style.pointerEvents = "auto";
  overlay.style.display = "none";
});

/////////////////////////////////////////////////////////////////////////////

// function checkSessionStorage() {
//   console.log("checkSessionStorage() has been called");
//   console.log("sessionStorage"); // returns Storage object with key: 'value' pairs + length #
//   console.log(sessionStorage);
  
//   console.log("Object.keys(sessionStorage)"); // returns array of key names [''] syntax
//   console.log(Object.keys(sessionStorage));
  
//   console.log("Object.values(sessionStorage)"); // returns array of values [''] syntax
//   console.log(Object.values(sessionStorage));
  
//   console.log("sessionStorage.preference"); // returns value of dot notated key attached
//   console.log(sessionStorage.preference);
//   console.log("sessionStorage.beanType");
//   console.log(sessionStorage.beanType);
//   console.log("sessionStorage.quantity");
//   console.log(sessionStorage.quantity);
//   console.log("sessionStorage.grindOption");
//   console.log(sessionStorage.grindOption);
//   console.log("sessionStorage.deliveries");
//   console.log(sessionStorage.deliveries);

// }
// checkSessionStorage();
