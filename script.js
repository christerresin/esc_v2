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
bookingModalDateLabel.appendChild(bookingModalDateInput);

let bookingModalSearchButton = document.createElement("button");
// I guess we should use an already existing button styling?
bookingModalContent1.appendChild(bookingModalSearchButton);
bookingModalSearchButton.innerHTML = "Search available times";

// --- MODAL PAGE 2
let bookingModalContent2 = document.createElement("div");
bookingModalContent2.classList.add("booking-modal-content2");
bookingModalContainer.appendChild(bookingModalContent2);

// --------DONE------------
// DONE! addEventListener to click on searchBtn w/ func: display none on bookingmodalcontent1 + display block på bookingmodalcontent2
// DONE! createElement: h1 innerHTML: 'Book room "title of room" (step 2)'
// DONE! name, e-mail, what time?, how many participants? input w/ labels
// DONE! "Submit booking" button w/ eventListener display none on 2, display block on content3
// --------TODO------------
// What time? (fetch data from API), How many participants? (fetch data from API)
// "Submit booking" button´s eventListener should send booking via HTTP to API
// Page 3: "Thank you!" (h1 own class - BIG font-size)
// Link: "Back to challenges" -- (display none on modal container, back to challenges page from landing page)

let bookingModalHeading2 = document.createElement("h1");
bookingModalContent2.appendChild(bookingModalHeading2);
bookingModalHeading2.innerHTML = 'Book room "Title of room" (step 2)';

let bookingModalDateLabel2 = document.createElement("label");
bookingModalContent2.appendChild(bookingModalDateLabel);
bookingModalDateLabel2.innerHTML = "Name";

let bookingModalDateInput2 = document.createElement("input");
bookingModalDateLabel2.appendChild(bookingModalDateInput2);

let bookingModalDateLabel3 = document.createElement("label");
bookingModalContent2.appendChild(bookingModalDateLabel3);
bookingModalDateLabel3.innerHTML = "E-mail";

let bookingModalDateInput3 = document.createElement("input");
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
bookingModalContent2.classList.add("booking-modal-content3");
bookingModalContainer.appendChild(bookingModalContent3);

let bookingModalHeading3 = document.createElement('h1');
bookingModalHeading3.classList.add('booking-modal-heading3')
bookingModalContent3.appendChild(bookingModalHeading3);

// --- CHRISTER´S FUNCTION FOR ADDING ELEMENT + CLASS
// const myFunc = function (elementName, className) {
//     let element = document.createElement(elementName);
//     element.classList.add(className);
//     return element;
// };

// let modalTest = myFunc("div", 'modalTest');
// console.log(modalTest);
// --- END CHRISTER´S FUNCTION

// --- IF WE WANT CLOSEBUTTON
// let modalCloseBtn = document.querySelector(".modal-closeBtn")

//change "bookingModalOpenButton" with whatever class/es booking button from landing page + challenges page has
bookingModalOpenButton.addEventListener("click", () => {
  bookingModalContainer.style.display = "block";
  bookingModalContent1.style.display = "block";
  bookingModalContent2.style.display = "none";
});

bookingModalSearchButton.addEventListener("click", () => {
  bookingModalContent1.style.display = "none";
  bookingModalContent2.style.display = "block";
});

bookingModalSubmitButton.addEventListener("click", () => {
    bookingModalContent2.style.display = "none";
    bookingModalContent3.style.display = "block";
  });

// Close when user clicks on modal container i.e. on overlay / outside modal
window.addEventListener("click", (event) => {
  if (event.target == bookingModalContainer) {
    bookingModalContainer.style.display = "none";
  }
});

// modalCloseBtn.addEventListener("click", () => {
//     modalContainer.style.display = "none"
// });