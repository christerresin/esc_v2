const challengesList = document.querySelector('.challenges-list');

// Use case!
const renderRatingStars = function (num) {
    let challengeRatingStar = document.createElement('li');
    challengeRatingStar.classList.add('challenge-rating-star on');

}

const renderChallenges = function (arr) {

    

    if (arr === undefined || arr.length < 1) {
        let noChallenges = document.createElement('h3');
        // create new className in CSS and change code to add created className
        noChallenges.classList.add('challenge-title');
        noChallenges.innerHTML = "No matching challenges";

        challengesList.appendChild(noChallenges);

    } else {

        arr.map(obj => {
            // Create elements for challenge card
            let challengesItem = document.createElement('li');
            challengesItem.classList.add('challenges-item');

            let challengesPicture = new Image();
            challengesPicture.classList.add('challenge-picture');
            challengesPicture.src=obj.image;

            let challengeTitle = document.createElement('h3');
            challengeTitle.classList.add('challenge-title');
            challengeTitle.innerHTML = obj.title;

            let challengeMeta = document.createElement('div');
            challengeMeta.classList.add('challenge-meta');

            let challengeRating = document.createElement('ul');
            challengeRating.classList.add('challenge-rating');

            // Create elements for rating stars
            for (let i = 0; i < 5; i++) {
                let challengeRatingStar = document.createElement('li');
                challengeRatingStar.classList.add('challenge-rating-star');
                challengeRatingStar.classList.add('on');
                challengeRating.appendChild(challengeRatingStar);
            }

            let challengeSize = document.createElement('small');
            challengeSize.classList.add('challenge-size');
            challengeSize.innerHTML = `${obj.minParticipants}-${obj.maxParticipants} participants`;

            let challengeDescription = document.createElement('p');
            challengeDescription.classList.add('challenge-description');
            challengeDescription.innerHTML = obj.description

            let challengeCta = document.createElement('a');
            challengeCta.classList.add('challenge-cta');
            challengeCta.innerHTML = "Book the room";

            // Render/append on site
            challengesList.appendChild(challengesItem);
            challengesItem.appendChild(challengesPicture);
            challengesItem.appendChild(challengeTitle);
            challengesItem.appendChild(challengeMeta)
            challengeMeta.appendChild(challengeRating);
            challengeMeta.appendChild(challengeSize);
            challengesItem.appendChild(challengeDescription);
            challengesItem.appendChild(challengeCta);
                        
        });
    };
};

let mockupJson = {
    challenges: [
        {
            title: "Title of challenge",
            description: "Reprehenderit voluptate ullamco pariatur. Deserunt sit irure consequat consequat elit aliquip eiusmod aliquip et ipsum ipsum.",
            minParticipants: 2,
            maxParticipants: 6,
            rating: 3,
            imgUrl: "https://raw.githubusercontent.com/richardolsson/lernia-sjj-assignments/main/02-esc-website/images/hero.png",
            type: 'online',
            tags: ["Coding", "Linux"]
        },
        {
            title: "Title of room",
            description: "Reprehenderit voluptate ullamco pariatur. Deserunt sit irure consequat consequat elit aliquip eiusmod aliquip et ipsum ipsum.",
            minParticipants: 2,
            maxParticipants: 4,
            rating: 4,
            imgUrl: "https://raw.githubusercontent.com/richardolsson/lernia-sjj-assignments/main/02-esc-website/images/hero.png",
            type: 'online',
            tags: ["Coding", "Cryptography"]
        } ]
}

// renderChallenges(mockupJson.challenges);

// Varje filter motsvaras av en index-plats. Och en funktion kollar om ett "index" / "filter" är på / 1 / true eller av / 0 / false. -- klumpigare än EventListener?
// Lägg till eventlistener på varje filter - dvs om det är "togglat" -> filterfunktion. Map-funktion för att göra ny array och inte repetera samma objects?
// Does map function allow to combine different arrays? Nope, you chain them :D Hehe, oki. I think... Yeah, we'll see when we try. Same with .filter()
// function w/ eventListener == true or false?
// New array that has gone through filter functions top -> bottom

// ADD and REMOVE filters / filter results according to EventListeners (add and remove eventlistener results) to push / make new array that's dynamic -- e.g. changes "on the fly" with user input (add remove filters)?

// Compare objects in array with objects in another array? To filter...?

// Splice function replaces or removes

//------

// API -> JSON data Obj, Arr, Obj

// API OBJ 15 challenges

// filterByType(array); 
// filterByRating(array);
// filterByTags(array);
// filterByText(array);

let filters = {
    byOnline: false,
    byOnsite: false,
    byLabel: false,
    byRating: false,
    byChar: false
}

// WEBPAGE
// -----------------------
// O - Includes online

// (WEB) (LINUX)

// let tags = ['Cryptography', 'Linux'] 
// let checkTrue = function () {

//     push indexOf(buttonContent) = 1
//     tags.splice(indexOf('Web', 0, 'Linux')

//     reduce

//     if (tags.length > 0) {
//         filters.byTag === true
//     } else {
        
//     }
// }


let filterArray = function (array) {

    let filteredArray = array
    
    if (filters.byOnline) {
        filteredArray = filteredArray.filter(obj => {
            return obj.type === 'online'
        })
    }

     else if (filters.byLabel) {
        filteredArray = filteredArray.filter(obj => {
            for(let i = 0; i < labels.length; i++) {
                return obj.labels.includes(tags[i])

            }
        })
    }

    console.log(filteredArray)
    return filteredArray
}


let apiUrl = 'https://lernia-sjj-assignments.vercel.app/api/challenges'

let challengesData = async function () {
    const response = await fetch(apiUrl);
    const data = await response.json();

    renderChallenges(filterArray(data.challenges))
}

challengesData()


const filterButton = document.querySelector('.filter-cta');

filterButton.addEventListener('click',() => 
    {
        const filterBoard = document.querySelector('.filter-board');
        
        const filterMenu  = document.createElement('div');
        filterMenu.classList.add("filter-menu");
        filterBoard.appendChild(filterMenu);
        
        const filterBoxTitle = document.createElement('h3');
        filterBoxTitle.classList.add("filter-box-title");
        filterMenu.appendChild(filterBoxTitle);
        filterBoxTitle.innerHTML = "Filter challenges";

        const xButton = document.createElement('a');
        xButton.classList.add("x-button-style");
        const btnSpan = document.createElement('p');
        btnSpan.innerHTML = "&#10005;";
        xButton.appendChild(btnSpan);
        filterMenu.appendChild(xButton);

        const filtersToChoose = document.createElement('div');
        filtersToChoose.classList.add('choose-filter-box');
        filterMenu.appendChild(filtersToChoose);

        const filterType= document.createElement('div');
        filterType.classList.add("filter-by-type");
        filtersToChoose.appendChild(filterType);

        const filterTypeTitle = document.createElement('h4');
        filterTypeTitle.innerHTML = "By Type";
        filterType.appendChild(filterTypeTitle);

        const filterTypeList = document.createElement('ul');
        filterType.appendChild(filterTypeList);

        const filterListPoint1 = document.createElement('li');
        filterTypeList.appendChild(filterListPoint1);

        const filterTypeCheck1 = document.createElement('input');
        filterTypeCheck1.type = "checkbox";
        filterListPoint1.appendChild(filterTypeCheck1);

        const filterTypeText1 = document.createElement('label');
        filterTypeText1.innerHTML = "&nbspInclude online challenges";
        filterListPoint1.appendChild(filterTypeText1);

        const filterListPoint2 = document.createElement('li');
        filterTypeList.appendChild(filterListPoint2);

        const filterTypeCheck2 = document.createElement('input');
        filterTypeCheck2.type = "checkbox";
        filterListPoint2.appendChild(filterTypeCheck2);

        const filterTypeText2 = document.createElement('label');
        filterTypeText2.innerHTML = "&nbspInclude on-site challenges";
        filterListPoint2.appendChild(filterTypeText2);
        
        const filterRating = document.createElement('div');
        filterRating.classList.add("filter-by-rating");
        filterRating.innerHTML = "By Rating";
        filtersToChoose.appendChild(filterRating);

        const filterTag = document.createElement('div');
        filterTag.classList.add("filter-by-tag");
        filtersToChoose.appendChild(filterTag);

        const filterTagTitle = document.createElement('h4');
        filterTagTitle.innerHTML = "By Tag";
        filterTag.appendChild(filterTagTitle);


        //let apiUrl = 'https://lernia-sjj-assignments.vercel.app/api/challenges'

        //let challengesData = async function () {
        //const response = await fetch(apiUrl);
        //const data = await response.json();
        //}

        //challengesData();

        

        //for (let i = 0; i < data.challenges.length; i++) {
        //    for (let j = 0; j <data.challenges.labels.length; j++) {
        const filterTagItem = document.createElement('label');
        filterTagItem.classList.add("filter-by-tag-item");
        filterTagItem.innerHTML = "Web"//data.challenges.labels[i];
        filterTag.appendChild(filterTagItem);

        filterTagItem.addEventListener('click', () => 
            {
                if (filterTagItem.style.backgroundColor == "white") {
                        filterTagItem.style.backgroundColor = "lightslategray";
                        filterTagItem.style.color = "white";
                }
                else {
                    filterTagItem.style.backgroundColor = "white";
                    filterTagItem.style.color = "lightslategray";
                }
            }    
        );

        //    )
        //    } 
        //}

        const filterSearchText = document.createElement('div');
        filterSearchText.classList.add("filter-search-text");
        filterMenu.appendChild(filterSearchText);

        const filterSearchTextTitle = document.createElement('h4');
        filterSearchTextTitle.innerHTML = "Or type to search for keyword";
        filterSearchText.appendChild(filterSearchTextTitle);

        const searchText = document.createElement('input');
        searchText.type = "text";
        searchText.placeholder = "Start typing to filter";
        filterSearchText.appendChild(searchText);

        
        filterButton.style.display = 'none'; 
        
        xButton.addEventListener('click',() => 
            {
                filterButton.style.display = 'block';
                filterBoard.removeChild(filterMenu);
            }
        );
    }
);



//----

// .booking {
//     display: grid;
//     grid-template: "type rating tags" 1fr
//                    "search search search" 1fr
//                    / 1fr 1fr 1fr;
//   }
  
//   @media(max-width: 800px) {
//     .booking {
//       grid-template: "a"
//                      "b"
//                      "c"
//                      "d" ;
//       overflow:auto;
//     }
//   }
  
//   .booking__img1 {
//     grid-area: a;
//   }
  
//   .booking__btn {
//     font: bold 24px Roboto;
//     color: #ffffff;
//     background-color: #e3170a;
//     border-radius: 4px;
//     padding: 19px 53px;
//     }
  
//   .booking__textBtnWrapper1 {
//     grid-area: b;
//     margin: 0;
//     padding: 60px 96px;
//   }
  
//   .booking__img2 {
//     grid-area: c;
//   }
  
//   .booking__textBtnWrapper2 {
//     grid-area: d;
//     padding: 60px 96px;
//   }
  
//   .booking__description {
//     font-size: 24px;
//   }
  
//   .booking__imgs {
//   width:100%;
//   height:100%;
//   }
  