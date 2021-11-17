const renderChallenges = function (arr) {
 
    // Check that input is array with values
    if (arr === undefined || arr.length < 1) {
        let noChallenges = document.createElement('h3');
        // create new className in CSS and change code to add created className
        noChallenges.classList.add('challenge-title');
        noChallenges.innerHTML = "No matching challenges";

        challengesList.appendChild(noChallenges);

    } else {

        // Creates array of labels to be rendered as filter options
        let labelsArray = [];

        arr.map(obj => {
            obj.labels.forEach(label => {
                if(!labelsArray.includes(label)) {
                    labelsArray.push(label);
                }
            });
        });

        // Loops over all filtered objs in arr to render elements on page
        arr.forEach(obj => {
            // Create elements for challenge card
            let challengesItem = document.createElement('li');
            challengesItem.classList.add('challenges-item');

            let challengesPicture = document.createElement('img')
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
            for(let i = 0; i < Math.floor(obj.rating); i++) {
                let challengeRatingStar = document.createElement('li');
                challengeRatingStar.classList.add('challenge-rating-star');
                challengeRatingStar.classList.add('on');
                challengeRating.appendChild(challengeRatingStar);
        
            };

            for(let i = Math.floor(obj.rating); i < 5; i++) {
                let challengeRatingStar = document.createElement('li');
                challengeRatingStar.classList.add('challenge-rating-star');
                challengeRatingStar.classList.add('off');
                challengeRating.appendChild(challengeRatingStar);
            };

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

export {renderChallenges};