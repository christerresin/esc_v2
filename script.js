// --------DONE------------
// DONE! addEventListener to click on searchBtn w/ func: display none on bookingmodalcontent1 + display block på bookingmodalcontent2
// DONE! createElement: h1 innerHTML: 'Book room "title of room" (step 2)'
// DONE! name, e-mail, what time?, how many participants? input w/ labels
// DONE! "Submit booking" button w/ eventListener display none on 2, display block on content3
// DONE! Page 3: "Thank you!"
// DONE! Link: "Back to challenges"

// --------TODO-----------
// ADD API FUNCTIONALITY TO MODAL:
//                          * ALL input fields should send data -> API on button-click
//                          * ONLY first Search Button has to request data (based on date from bookingModalDateInput), then await response, then display page2 after received
//                          * add to Eventlistener on bookingModalSearchButton: fetch times from API based on date (with async await?)
//                          * "What time-input" / bookingModalTimeInput (page 2) should show available times fetched from API data
//                          * "Participants-input" / bookingModalPartiInput (page 2) should show options between min and max participants from API data
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
bookingModalDateInput.setAttribute('placeholder', 'YYYY-mm-dd');
bookingModalDateInput.id = 'inputDate';

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

let bookingModalNameLabel = document.createElement("label");
bookingModalContent2.appendChild(bookingModalNameLabel);
bookingModalNameLabel.innerHTML = "Name";

let bookingModalNameInput = document.createElement("input");
bookingModalNameLabel.appendChild(bookingModalNameInput);

let bookingModalEmailLabel = document.createElement("label");
bookingModalContent2.appendChild(bookingModalEmailLabel);
bookingModalEmailLabel.innerHTML = "E-mail";

let bookingModalEmailInput = document.createElement("input");
bookingModalDateInput.setAttribute('type', 'email');
bookingModalEmailLabel.appendChild(bookingModalEmailInput);

let bookingModalTimeLabel = document.createElement("label");
bookingModalContent2.appendChild(bookingModalTimeLabel);
bookingModalTimeLabel.innerHTML = "What time?";

let bookingModalTimeInput = document.createElement("input");
bookingModalTimeLabel.appendChild(bookingModalTimeInput);

let bookingModalPartiLabel = document.createElement("label");
bookingModalContent2.appendChild(bookingModalPartiLabel);
bookingModalPartiLabel.innerHTML = "How many participants?";

let bookingModalPartiInput = document.createElement("input");
bookingModalPartiLabel.appendChild(bookingModalPartiInput);

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

let inputDate = document.getElementById("inputDate");
// function to get date on page 1
function getDate() {
    // Selecting the input element and get its value 
    
    // USE CHRISTERS FETCH FUNCTION, BUT HOW TO APPEND DATE TO FETCH URL? 
    // Displaying the value
    alert(inputValueDate);
  }

// function to fetch times from API
  let timesData = async () => {
    const apiUrl = `https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=${inputDate.value}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
    
        // console.log(data);

        // renderChallenges(data.challenges); -- gör något liknande men en funktion för att skjuta in data.slots -> bookingModalTimeInput

    } catch (error){
        console.log(error);
    }

};

//change "bookingModalOpenButton" with whatever class/es booking button from landing page + challenges page has
bookingModalOpenButton.addEventListener("click", () => {
  bookingModalContainer.style.display = "block";
  bookingModalContent1.style.display = "flex";
  bookingModalContent2.style.display = "none";gi
  bookingModalContent3.style.display = "none";
});

bookingModalSearchButton.addEventListener("click", () => {
    timesData();
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