// Accordion menu elements question and group of option buttons
const planQ = document.querySelectorAll(".plan-q");
const optionButtons = document.querySelectorAll(".option-btns");

// Desktop view plan navigation table and steps
const planNavigation = document.querySelectorAll(".plan-navigation");
const planStep = document.querySelectorAll(".plan-step");

// Accordion Menu: For loop to iterate over each item in .plan-q {question} and toggle the active state to rotate the arrow and open the accordion menu for the node that is being iterated over
for (let i = 0; i < planQ.length; i++) {
  // iterate through each .plan-step node
  for (let j = 0; j < planStep.length; j++) {
    planQ[i].addEventListener("click", function() {
      // toggle rotating question arrow
      this.classList.toggle("active");

      // target .option-btns and toggle to .option-btns.active
      this.nextElementSibling.classList.toggle("active");

      // toggle color of .plan-text to light grey or black (default) while selection is open
      planStep[i].lastElementChild.classList.toggle("active");
    });

    // conditional statement to compare planQ[i] and planStep[j]
    if(j == i) {

      // when planStep[j] is clicked toggle accordion menu and arrow
      planStep[j].addEventListener("click", function() {

        // when .plan-step element is clicked, toggle arrow rotation
        planQ[i].classList.toggle("active");

        // open corresponding accordion menu options
        planQ[i].nextElementSibling.classList.toggle("active");

        // toggle color of .plan-text to light grey or black (default) when clicked
        planStep[j].lastElementChild.classList.toggle("active");
      });
    }
  }
}
