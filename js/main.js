console.log("main.js loaded");

// Create a reference variable to the div element with the id of resources.
const resources = document.getElementById("resources");

// Create a reference variable to the button with the id of show-resources.
const showResources = document.getElementById("show-resources");

// Add an event listener on the button that will listen to the click event.
showResources.addEventListener("click", onHandleViewResources);

// Create an event handler function for the button element id that removes the class d-none from the div element.
function onHandleViewResources() {
  resources.classList.remove("d-none");
}

/*
    Task 2 Making the text links bold.
    1. add an event listener on to the div element with the id of resources that listens to the click event.
    2. Make sure to pass the event object to the event handler function.
    3. Using the console.log() method, display the target property of the event object.
    4. On the event.target use the method classList.add to add the class named fw-bold.
*/

// Get all link elements within the resources div
let links = resources.getElementsByTagName("a");

// Add mouseover and mouseout event listeners to each link
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", function () {
    // Add the fw-bold class to the parent div of the link
    this.parentElement.classList.add("fw-bold");
  });
  links[i].addEventListener("mouseout", function () {
    // Remove the fw-bold class from the parent div of the link
    this.parentElement.classList.remove("fw-bold");
  });
}

// Add an event listener to the resources div that listens for the mouseout event.
resources.addEventListener("mouseout", onHandleMouseOut);

// Create an event handler function that removes the class fw-bold from the event.target.
function onHandleMouseOut(event) {
  event.target.classList.remove("fw-bold");
  console.log(event.target);
}
