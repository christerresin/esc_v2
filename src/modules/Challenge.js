import modalFunc from './modal.js'

export class Challenge {
    constructor(data) {
        this.title = data.title;
        this.rating = data.rating;
        this.image = data.image;
        this.type = data.type;
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
        challengeSize.innerHTML = this.type === 'onsite' ? `${this.minParticipants}-${this.maxParticipants} participants` : `${this.minParticipants}-${this.maxParticipants} participants (networked)`;

        let challengeDescription = document.createElement('p');
        challengeDescription.classList.add('challenge-description');
        challengeDescription.innerHTML = this.description

        let challengeCta = document.createElement('a');
        challengeCta.classList.add('challenge-cta');
        challengeCta.innerText = this.type === 'onsite' ? "Book the room" : "Take challenge online";

        challengeCta.addEventListener('click', () => {
            modalFunc(this.title, this.minParticipants, this.maxParticipants);
        });

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