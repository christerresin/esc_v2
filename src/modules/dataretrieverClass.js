class DataRetriever {
    constructor() {
        this.challenges = null;
    }
    async load() {
        if(!this.challenges) {
            const apiUrl = 'https://lernia-sjj-assignments.vercel.app/api/challenges';

            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
            
                this.challenges = data.challenges
                renderChallenges(data.challenges);
    
            } catch (error){
                console.log(error);
            }
    
            return this.challenges;

        }
    }
}

export { DataRetriever };