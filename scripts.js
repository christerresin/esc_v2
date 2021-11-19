class Challenge {
    constructor(data) {
        this.title = data.title;
        this.rating = data.rating;
        this.image = data.image;
        this.description = data.description;
        this.minParticipants = data.minParticipants;
        this.maxParticipants = data.maxParticipants;
    }

    render() {
        // Create elements for challenge card
        let challengesItem = document.createElement('li');
        challengesItem.classList.add('challenges-item');
        
        let challengesPicture = document.createElement('img')
        challengesPicture.classList.add('challenge-picture');
        challengesPicture.src=this.image;

        let challengeTitle = document.createElement('h3');
        challengeTitle.classList.add('challenge-title');
        challengeTitle.innerHTML = this.title;

        let challengeMeta = document.createElement('div');
        challengeMeta.classList.add('challenge-meta');

        let challengeRating = document.createElement('ul');
        challengeRating.classList.add('challenge-rating');

        // Create elements for rating stars
        for(let i = 0; i < Math.floor(this.rating); i++) {
            let challengeRatingStar = document.createElement('li');
            challengeRatingStar.classList.add('challenge-rating-star');
            challengeRatingStar.classList.add('on');
            challengeRating.appendChild(challengeRatingStar);
    
        };

        for(let i = Math.floor(this.rating); i < 5; i++) {
            let challengeRatingStar = document.createElement('li');
            challengeRatingStar.classList.add('challenge-rating-star');
            challengeRatingStar.classList.add('off');
            challengeRating.appendChild(challengeRatingStar);
        };

        let challengeSize = document.createElement('small');
        challengeSize.classList.add('challenge-size');
        challengeSize.innerHTML = `${this.minParticipants}-${this.maxParticipants} participants`;

        let challengeDescription = document.createElement('p');
        challengeDescription.classList.add('challenge-description');
        challengeDescription.innerHTML = this.description

        let challengeCta = document.createElement('a');
        challengeCta.classList.add('challenge-cta');
        challengeCta.innerHTML = "Book the room";

        // Render/append on site
        challengesItem.appendChild(challengesPicture);
        challengesItem.appendChild(challengeTitle);
        challengesItem.appendChild(challengeMeta)
        challengeMeta.appendChild(challengeRating);
        challengeMeta.appendChild(challengeSize);
        challengesItem.appendChild(challengeDescription);
        challengesItem.appendChild(challengeCta);

        return challengesItem;
    }
}

const load = async () => {
    const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';

        try {
            const response = await fetch(url);
            const data = await response.json();
            const challenges = data.challenges
            return challenges;
        } catch (error) {
            console.log(error)
        }    

}

const render = async () => {
    const data = await load();
    ratingsArray = [];
    data.forEach(challenge => {
        if(challenge.rating >= 5) {
            ratingsArray.push(challenge);
        } else if (challenge.rating < 5 && challenge.rating >= 4.5) {
            ratingsArray.push(challenge);
        } else if (challenge.rating < 4.5 && challenge.rating >= 4) {
            ratingsArray.push(challenge);
        } else if (challenge.rating < 4 && challenge.rating >= 3.5) {
            ratingsArray.push(challenge);
        }
    })
    ratingsArray.splice(3)
    const container = document.querySelector('.challenges-list');
    ratingsArray.forEach(challengeData => {
        const challengeInstance = new Challenge(challengeData);
        const challengeItem = challengeInstance.render()
        container.appendChild(challengeItem);
    })
}

render();