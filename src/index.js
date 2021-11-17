const container = document.querySelector('.challenges-list');
const retriever = new DataRetriever();
const grid = new ChallengeGrid(retriever, container);