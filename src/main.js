import { DataRetriever } from './modules/DataRetriever'
import { ChallengeGrid } from './modules/ChallengeGrid'

const container = document.querySelector('.challenges-list');
const retriever = new DataRetriever();
const grid = new ChallengeGrid(retriever, container);

grid.run()