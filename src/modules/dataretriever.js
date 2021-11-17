const dataretriever = async function () {
    const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.challenges;
    } catch (error) {
        console.log(error)
    }
    
}

export {dataretriever};