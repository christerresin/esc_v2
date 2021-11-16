let challengesData = async (func) => {
    let apiUrl = 'https://lernia-sjj-assignments.vercel.app/api/challenges';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
    
        // renderChallenges(data.challenges);
        return func(data.challenges);
        

    } catch (error){
        console.log(error);
    }

};

export {challengesData};