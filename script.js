// --------DONE------------
// DONE! addEventListener to click on searchBtn w/ func: display none on bookingmodalcontent1 + display block på bookingmodalcontent2
// DONE! createElement: h1 innerHTML: 'Book room "title of room" (step 2)'
// DONE! name, e-mail, what time?, how many participants? input w/ labels
// DONE! "Submit booking" button w/ eventListener display none on 2, display block on content3
// DONE! Page 3: "Thank you!"
// DONE! Link: "Back to challenges"

// --------TODO-----------
// ADD API FUNCTIONALITY:
//                          * ALL input fields should send data -> API on button-click
//                          * ONLY first Search Button has to request data (based on date from bookingModalDateInput), then await response, then display page2 after received
//                          * add to Eventlistener on bookingModalSearchButton: fetch times from API based on date (with async await?)
//                          * "What time-input" / bookingModalDateInput4 (page 2) should show available times fetched from API data
//                          * "Participants-input" / bookingModalDateInput5 (page 2) should show options between min and max participants from API data
//                          * "Submit booking" should send / submit all page 2 input data to API via HTTP

// Link: "Back to challenges" -- display none on modal container, back to challenges page from landing page?
// Create a form with input type "submit" to get everything working with API? https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit
// Change labels to explicit: https://css-tricks.com/html-inputs-and-labels-a-love-story/
// Styling

// this code block w/ openButton is to be replaced w/ booking-buttons on challenges page + landing page
let bookingModalOpenButton = document.createElement("button");
bookingModalOpenButton.classList.add("booking-modal-openButton");
document.body.appendChild(bookingModalOpenButton);
bookingModalOpenButton.innerHTML = "Click";

let bookingModalContainer = document.createElement("div");
bookingModalContainer.classList.add("booking-modal-container");
document.body.appendChild(bookingModalContainer);

// --- MODAL PAGE 1
let bookingModalContent1 = document.createElement("div");
bookingModalContent1.classList.add("booking-modal-content1");
bookingModalContainer.appendChild(bookingModalContent1);

let bookingModalHeading1 = document.createElement("h1");
bookingModalContent1.appendChild(bookingModalHeading1);
bookingModalHeading1.innerHTML = 'Book room "Title of room (step 1)"';

let bookingModalParagraph = document.createElement("p");
bookingModalContent1.appendChild(bookingModalParagraph);
bookingModalParagraph.innerHTML = "What date would you like to come?";

let bookingModalDateLabel = document.createElement("label");
bookingModalContent1.appendChild(bookingModalDateLabel);
bookingModalDateLabel.innerHTML = "Date";

let bookingModalDateInput = document.createElement("input");
bookingModalDateInput.setAttribute('type', 'date');
bookingModalDateLabel.appendChild(bookingModalDateInput);

let bookingModalSearchButton = document.createElement("button");
// Existing CSS-class w/ button styling?
bookingModalContent1.appendChild(bookingModalSearchButton);
bookingModalSearchButton.innerHTML = "Search available times";

// --- MODAL PAGE 2
let bookingModalContent2 = document.createElement("div");
bookingModalContent2.classList.add("booking-modal-content2");
bookingModalContainer.appendChild(bookingModalContent2);

let bookingModalHeading2 = document.createElement("h1");
bookingModalContent2.appendChild(bookingModalHeading2);
bookingModalHeading2.innerHTML = 'Book room "Title of room" (step 2)';

let bookingModalDateLabel2 = document.createElement("label");
bookingModalContent2.appendChild(bookingModalDateLabel2);
bookingModalDateLabel2.innerHTML = "Name";

let bookingModalDateInput2 = document.createElement("input");
bookingModalDateLabel2.appendChild(bookingModalDateInput2);

let bookingModalDateLabel3 = document.createElement("label");
bookingModalContent2.appendChild(bookingModalDateLabel3);
bookingModalDateLabel3.innerHTML = "E-mail";

let bookingModalDateInput3 = document.createElement("input");
bookingModalDateInput.setAttribute('type', 'email');
bookingModalDateLabel3.appendChild(bookingModalDateInput3);

let bookingModalDateLabel4 = document.createElement("label");
bookingModalContent2.appendChild(bookingModalDateLabel4);
bookingModalDateLabel4.innerHTML = "What time?";

let bookingModalDateInput4 = document.createElement("input");
bookingModalDateLabel4.appendChild(bookingModalDateInput4);

let bookingModalDateLabel5 = document.createElement("label");
bookingModalContent2.appendChild(bookingModalDateLabel5);
bookingModalDateLabel5.innerHTML = "How many participants?";

let bookingModalDateInput5 = document.createElement("input");
bookingModalDateLabel5.appendChild(bookingModalDateInput5);

let bookingModalSubmitButton = document.createElement("button");
// I guess we should use an already existing button styling?
bookingModalContent2.appendChild(bookingModalSubmitButton);
bookingModalSubmitButton.innerHTML = "Submit booking";

// --- MODAL PAGE 3
let bookingModalContent3 = document.createElement("div");
bookingModalContent3.classList.add("booking-modal-content3");
bookingModalContainer.appendChild(bookingModalContent3);

let bookingModalHeading3 = document.createElement('h1');
bookingModalHeading3.classList.add('booking-modal-heading3')
bookingModalContent3.appendChild(bookingModalHeading3);
bookingModalContent3.innerHTML = "Thank you!";

let bookingModalLink = document.createElement('a');
bookingModalLink.setAttribute('href', 'challenges.html');
bookingModalContent3.appendChild(bookingModalLink);
bookingModalLink.innerHTML = "Back to challenges"

//change "bookingModalOpenButton" with whatever class/es booking button from landing page + challenges page has
bookingModalOpenButton.addEventListener("click", () => {
  bookingModalContainer.style.display = "block";
  bookingModalContent1.style.display = "flex";
  bookingModalContent2.style.display = "none";
  bookingModalContent3.style.display = "none";
});

bookingModalSearchButton.addEventListener("click", () => {
  bookingModalContent1.style.display = "none";
  bookingModalContent2.style.display = "flex";
});

bookingModalSubmitButton.addEventListener("click", () => {
    bookingModalContent2.style.display = "none";
    bookingModalContent3.style.display = "flex";
  });

// Close when user clicks on modal container i.e. on overlay / outside modal
window.addEventListener("click", (event) => {
  if (event.target == bookingModalContainer) {
    bookingModalContainer.style.display = "none";
  }
});

// --- CHRISTER´S FUNCTION FOR ADDING ELEMENT + CLASS
// const myFunc = function (elementName, className) {
//     let element = document.createElement(elementName);
//     element.classList.add(className);
//     return element;
// };

// let modalTest = myFunc("div", 'modalTest');
// console.log(modalTest);
// --- CHRISTER´S FUNCTION END