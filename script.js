// Get the button that opens the modal
const btn = document.getElementById("modalBtn"); // Exist on the challenge room card
const body = document.querySelector('body'); // remove it inside createModal function lateron when link it to the base code
const h1title = "Title of room"; // import from the challenge room and remove the declaration
const minParticipants = 2; // min participants as should impot from the challenge room object
const maxparticipants = 7; // max participants as should impot from the challenge room object

// function createModal(h1title, minParticipants, maxparticipants) {

// TODO WHATS LEFT DO -- LINA WHERE ARE YOU
// - ADD CLASS NAME TO BOOKING BUTTON
// - INTEGRATE INTO MAIN BRANCH -- THAT IS, ADD THE .JS SEPARATELY -- SEPARATE FUNCTIONS. CLASSES AND MAKE THE CODE READABLE IS SECONDARY
// - THE BOOKING BUTTON IS ROOM SPECIFIC AND THUS SENDS ROOM TITLE AS WELL AS PARTICIPANTS (arguments with class name, like calling function -> send set value for arguments (min max title room))
// - FIX WHEN SELECTING ROOMS ONE AFTER ANOTHER -- CLEAR "HISTORY" -- CANCEL EVERYTHING THAT'S HAPPENED -- ADD CLEARING FUNCTIONALITY TO THE BOOKING BUTTON EVENTLISTENER ('INNERHTML = ""?')
// - DO THIRD PAGE (from Anders modals?)
// - STYLE

// IN PROGRESS:
// 

// OPTIONAL:
// - DATE - MIN MAX

// create the Modal
const modal = document.createElement('dialog');
modal.className = "modal";
modal.id = "myModal";
body.append(modal);

// create Modal content for step 1
const div1 = document.createElement('div');
div1.className = "modal-content";
modal.append(div1);

// create h1 in Modal step 1
const h1 = document.createElement('h1');
h1.class = "modal1h1";
h1.id = 'modal1h1';
div1.append(h1);

// create p in Modal step 1
const p = document.createElement('p');
p.textContent = "What date would you like to come?";
div1.append(p);

// create the date input in Modal step 1
const inp = document.createElement('input');
const lab = document.createElement('label');
const br = document.createElement('br');
inp.name = 'inpDate';
inp.type = 'text';
lab.textContent = 'Date';
div1.append(lab);
div1.append(inp);

// create search times button in Modal step 1
const btnSearch = document.createElement("button");
btnSearch.innerText = 'Search available times';
btnSearch.className = 'btnSearch';
div1.append(btnSearch);

// create new div in Modal for the step 2 booking process
const div2 = document.createElement('div');
div2.className = "modal-content";
div2.id = 'divstep2';
modal.append(div2);

// create h1 in Modal step 2
const h11 = document.createElement('h1');
h11.class = "modal2h1";
h11.id = 'modal2h1';
div2.append(h11);

// create input for the name in Modal step 2
const inp2 = document.createElement('input');
const lab2 = document.createElement('label');
inp2.name = 'inpName';
inp2.type = 'text';
lab2.textContent = 'Name';
div2.append(lab2);
div2.append(inp2);

// create input for the email in Modal step 2
const inp3 = document.createElement('input');
const lab3 = document.createElement('label');
inp3.name = 'inpEmail';
inp3.type = 'email';
lab3.textContent = 'E-mail';
div2.append(lab3);
div2.append(inp3);

// create select element for the available times in Modal step 2
const selectTime = document.createElement('select');
selectTime.name = 'timeList';
selectTime.id = 'availableTimeList';
const lab4 = document.createElement('label');
lab4.textContent = 'What time?';
div2.append(lab4);
div2.append(selectTime);

// create select element for the participants in Modal step 2
const selectPart = document.createElement('select');
selectPart.name = 'participantsList';
selectPart.id = 'availableParticipantsList';
const lab5 = document.createElement('label');
lab5.textContent = 'How many participants?';
div2.append(lab5);
div2.append(selectPart);

// create submit booking button in Modal step 2
const btnSubmit = document.createElement("button");
btnSubmit.innerText = 'Submit booking';
btnSubmit.className = 'btnSubmit';
div2.append(btnSubmit);

// }


// When the user clicks the button, open the modal 
btn.onclick = function popup1() {

    // the room title as import from the land page 

    const m1h1 = document.getElementById("modal1h1");

    m1h1.textContent = 'Book room "' + h1title + '" (step 1)';
    modal.style.display = "block";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {

    if (event.target == modal) {
        modal.style.display = "none";
    }
}

inp.onfocus = function() {
    this.type = 'date';
    // const reqDate = this.value;
    // console.log(this.value);
}

function setbookingdate() {
    if (inp.value == "") {
        alert("Error, no selected date.");
        // TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO
        // stop the process here until the date is selected
    }
    return inp.value;
}

inp.onblur = function() {
    this.type = 'text';
}

// Clicking on the search botton function

btnSearch.onclick = function() {

    const reqDate = setbookingdate();
    console.log(reqDate);

    const availableTimes = searchAvailableTimes(reqDate);
    // if (availableTimes.booking.date != reqDate) {
    // alert('No matching available date, please choose again.\nThe available date is ' + availableTimes.booking.date)
    // }

    async function searchAvailableTimes(reqDate) {
        const response = await fetch('https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=' + reqDate, {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
        }).then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    const gatheredTimes = data.slots;
                    console.log(gatheredTimes);

                    // call a function to switch the booking process to the next step
                    bookingnextstep(gatheredTimes);

                });
            };
        });
    };
}

function bookingnextstep(gatheredTimes) {
    // console.log(gatheredTimes);
    // forming the title header for step 2
    const m2h1 = document.getElementById("modal2h1");
    m2h1.textContent = 'Book room "' + h1title + '" (step 2)';

    // adding available time options to the time list 
    let option;
    for (let i = 0; i < gatheredTimes.length; i++) {
        option = document.createElement('option');
        option.text = gatheredTimes[i];
        option.value = gatheredTimes[i];
        selectTime.add(option);
    };

    // adding available participants to the participants list
    let option2
    for (let i = minParticipants; i <= maxparticipants; i++) {
        option2 = document.createElement('option');
        option2.text = i + ' participants';
        option2.value = i;
        selectPart.add(option2);
    };

    // changing from step 1 to step 2
    div1.style.display = 'none';
    div2.style.display = 'block';
};

function setParticipantName() {
    if (inp2.value == "") {
        alert("Error, no entered participant name.");
        // TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO
        // stop the process here until the date is selected
    }
    return inp2.value;
}


function setEmail() {
    var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
    if (inp3.value == "") {
        alert("Error, no entered e-mail.");
        // TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO
        // stop the process here until the date is selected
    } else if (!inp3.value.match(pattern)) {
        alert("Error, the entered email is invalid.");
        // TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO
        // stop the process here until the date is selected
    } else {
        return inp3.value;
    }

}

function setBookingTime() {
    if (selectTime.value == "") {
        alert("Error, no selected time.");
        // TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO
        // stop the process here until the date is selected
    }
    return selectTime.value;
}

function setParticipantsNumber() {
    if (selectPart.value == "") {
        alert("Error, no selected participants number.");
        // TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO
        // stop the process here until the date is selected
    }
    return selectPart.value;
}

// Clicking on the submit botton function

btnSubmit.onclick = function() {
    // set booking date
    const reqDate = setbookingdate();
    console.log(reqDate);

    // set participant name
    const reqName = setParticipantName();
    console.log(reqName);

    // set participant email
    const reqEmail = setEmail();
    console.log(reqEmail);

    // set time period
    const reqTime = setBookingTime();
    console.log(reqTime);

    // set number of participants
    const reqPart = setParticipantsNumber();
    console.log(reqPart);
    postbookingdata(reqName, reqEmail, reqDate, reqTime, reqPart);

    // build the post object to the server
    async function postbookingdata(reqName, reqEmail, reqDate, reqTime, reqPart) {
        const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/booking/reservations', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: reqName,
                email: reqEmail,
                date: reqDate,
                time: reqTime,
                participants: parseInt(reqPart),
            }),
        });
        const bookingstatus = await res.json();
        console.log(bookingstatus);

    }

};



// function retrievebookingdata(reqDate) {
//     if (loadindex == undefined)
//         var loadindex = false;
//     console.log(loadindex);
//     if (!loadindex) {
//         loadindex = true;
//         console.log(loadindex);
//         // return fetchbookingdata();
//         return searchAvailableTimes(reqDate);
//     }
//     // return availableTimes;
// }

// async function fetchbookingdata() {
//     const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/booking/reservations', {
//         method: 'POST',
//         mode: 'cors',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             name: "Richard",
//             email: "richard@zetkin.org",
//             date: "2021-11-18",
//             time: "11:00",
//             participants: 3,
//         }),
//     });
//     const bookingstatus = await res.json();
//     const bookinggg = bookingstatus.booking;
//     console.log(bookinggg);
//     return bookinggg;
// }

// class ManageBooking {
//     constructor() {
//         this.availableTimes = null;
//     }
//     const availableTimes = {};
//     availableTimes.slots = [];
//     const reqDate = setbookingdate();
//     console.log(reqDate);
//     if (reqDate == "") {
//         alert("Error, no selected date.");
//         // TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO
//         // stop the process here until the date is selected
//     }

//     // searchAvailableTimes(reqDate);
//     // if (availableTimes.booking.date != reqDate) {
//     // alert('No matching available date, please choose again.\nThe available date is ' + availableTimes.booking.date)
//     // }

//     async function searchAvailableTimes(reqDate) {
//         // console.log('https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=' + reqDate);
//         const response = await fetch('https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=' + reqDate, {
//             method: 'GET',
//             mode: 'cors',
//             headers: { 'Content-Type': 'application/json' },
//         }).then(function(response) {
//             // if (response.ok) {
//             response.json().then(function(data) {
//                 availableTimes.slots = data.slots;
//                 console.log(availableTimes.slots);
//                 return availableTimes; // Array of available times
//             });
//             // };
//         });
//     };
//     console.log(availableTimes.slots);
// }

/*
  let dropdown = document.getElementById('locality-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose State/Province';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https://api.myjson.com/bins/7xq2x';

  fetch(url)  
    .then(  
      function(response) {  
        if (response.status !== 200) {  
          console.warn('Looks like there was a problem. Status Code: ', 
            response.status);  
          return;  
        }
  
        // Examine the text in the response  
        response.json().then(function(data) {  
          let option;
      
          for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = data[i].name;
            option.value = data[i].abbreviation;
            dropdown.add(option);
          }    
        });  
      }  
    )  
    .catch(function(err) {  
      console.error('Fetch Error -', err);  
    });

    */