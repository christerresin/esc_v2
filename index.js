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
            challengesPicture.src=obj.imgUrl;

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
            tags: ["Coding", "Linux"]
        },
        {
            title: "Title of ROOM",
            description: "Reprehenderit voluptate ullamco pariatur. Deserunt sit irure consequat consequat elit aliquip eiusmod aliquip et ipsum ipsum.",
            minParticipants: 2,
            maxParticipants: 4,
            rating: 3,
            imgUrl: "https://raw.githubusercontent.com/richardolsson/lernia-sjj-assignments/main/02-esc-website/images/hero.png",
            type: 'online',
            tags: ["Coding", "Linux"]
        }
    ]
}


renderChallenges(mockupJson.challenges);

