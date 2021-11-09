const challengesList = document.querySelector('.challenges-list');

const renderRatingStars = function (num) {
    let challengeRatingStar = document.createElement('li');
    challengeRatingStar.classList.add('challenge-rating-star on');

}

const renderChallenges = function (arr) {

    

    if (arr === undefined) {
        let noChallenges = document.createElement('h3');
        noChallenges.classList.add('challenge-title');
        noChallenges.innerHTML = "No matching challenges";

        challengesList.appendChild(noChallenges);
        console.log(arr)
    } else {

    for(let i = 0; i < arr.length; i++) {

    // Create elements for challenge card
    let challengesItem = document.createElement('li');
    challengesItem.classList.add('challenges-item')

    let challengesPicture = new Image();
    challengesPicture.classList.add('challenge-picture')
    challengesPicture.src="images/challenge.png";

    let challengeTitle = document.createElement('h3');
    challengeTitle.classList.add('challenge-title');
    challengeTitle.innerHTML = 'Title of room (on-site)'

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
    challengeSize.innerHTML = '2-6 participants'

    let challengeDescription = document.createElement('p');
    challengeDescription.classList.add('challenge-description');
    challengeDescription.innerHTML = "Reprehenderit voluptate ullamco pariatur labore cupidatat consectetur est adipisicing enim. Deserunt sit irure consequat consequat elit aliquip eiusmod aliquip et ipsum ipsum."
    
    let challengeCta = document.createElement('a');
    challengeCta.classList.add('challenge-cta');
    challengeCta.innerHTML = "Book the room"

    // Render/append on site
    challengesList.appendChild(challengesItem);
    challengesItem.appendChild(challengesPicture);
    challengesItem.appendChild(challengeTitle);
    challengesItem.appendChild(challengeMeta)
    challengeMeta.appendChild(challengeRating);
    challengeMeta.appendChild(challengeSize);
    challengesItem.appendChild(challengeDescription);
    challengesItem.appendChild(challengeCta);

    }
    }
}

let myArr = [1, 2, 3];

renderChallenges(myArr)

