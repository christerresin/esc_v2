// Get the button that opens the modal
const btn = document.getElementById("modalBtn"); // Exist on the challenge room card
const body = document.querySelector('body'); // remove it inside createModal function lateron when link it to the base code
const h1title = "Title of room"; // import from the challenge room and remove the declaration

// function createModal(h1title, minParticipants, maxparticipants) {

// create the Modal
const modal = document.createElement('dialog');
modal.className = "modal";
modal.id = "myModal";
body.append(modal);

// create Modal content
const div1 = document.createElement('div');
div1.className = "modal-content";
modal.append(div1);

// create h1 in Modal
const h1 = document.createElement('h1');
h1.class = "modal1h1";
h1.id = 'modal1h1';
div1.append(h1);

// create p in Modal
const p = document.createElement('p');
p.textContent = "What date would you like to come?";
div1.append(p);

// create input in Modal
const inp = document.createElement('input');
const lab = document.createElement('label');
const br = document.createElement('br');
inp.name = 'inpDate';
inp.type = 'text';
lab.textContent = 'Date';
div1.append(lab, br);
div1.append(inp);

// Get the button that opens the modal
const btnSearch = document.createElement("button");
btnSearch.innerText = 'Search available times';
btnSearch.className = 'btnSearch';
div1.append(btnSearch);

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
    return inp.value;
}

inp.onblur = function() {
    this.type = 'text';
}



// Clicking on the search botton function

btnSearch.onclick = function() {

    const reqDate = setbookingdate();
    console.log(reqDate);
    if (reqDate == "") {
        alert("Error, no selected date.");
        // TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO
        // stop the process here until the date is selected
    }

    const availableTimes = searchAvailableTimes(reqDate);
    // if (availableTimes.booking.date != reqDate) {
    // alert('No matching available date, please choose again.\nThe available date is ' + availableTimes.booking.date)
    // }

    async function searchAvailableTimes(reqDate) {
        // console.log('https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=' + reqDate);
        const response = await fetch('https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=' + reqDate, {
            method: 'GET',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
        }).then(function(response) {
            if (response.ok) {
                response.json().then(function(data) {
                    const gatheredTimes = data.slots;
                    console.log(gatheredTimes);
                    // return gatheredTimes; // Array of available times;

                    // call a function to switch the booking process to the next step
                    bookingnextstep(gatheredTimes);

                    function bookingnextstep(gatheredTimes) {
                        // div1 "modal-content"
                        div1.style.display = 'none';

                        // const div2=document.createElement('div');

                        const select = document.createElement('select');
                        select.name = 'timeList';
                        select.id = 'availableTimeList';
                        const lab = document.createElement('label');
                        lab.textContent = 'What time?';


                        let option;

                        /* 
                        <label for="cars">Choose a car:</label>
                        <select name="cars" id="cars">
                          <optgroup label="Swedish Cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                          </optgroup>
                          <optgroup label="German Cars">
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                          </optgroup>
                        </select> 
                        */

                        for (let i = 0; i < gatheredTimes.length; i++) {
                            option = document.createElement('option');
                            option.text = gatheredTimes[i].name;
                            option.value = gatheredTimes[i].abbreviation;
                            dropdown.add(option);
                        }
                    };

                });
            };
        });
    };
    setTimeout(console.log(availableTimes), 5000);
}

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