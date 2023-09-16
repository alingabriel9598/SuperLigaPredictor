const title = 'SuperLiga Predictor - Etapa 9 Sezonul 23/24';
const date = new Date();
const matches = ['UTA Arad vs U Cluj', 'Dinamo Bucuresti vs U Craiova 1948', 'Universitatea Craiova vs Sepsi Sf. Gheorghe', 'Hermannstadt vs Voluntari', 'Otelul Galati vs Rapid Bucuresti', 'Farul Constanta vs FCSB', 'Poli Iasi vs FC Botosani', 'CFR Cluj vs Petrolul Ploiesti'];
const score1 = Math.floor(Math.random() * 4);
const score2 = Math.floor(Math.random() * 4);
console.log(title);
console.log(`Data: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`);
console.log('Meci: ' + matches[2]);
console.log('Scor: ' + score1 + ' - ' + score2);

// Function to Generate Random Scores from 0 to 4
const generateRandomScore = () => {
    return Math.floor(Math.floor(Math.random() * 5))
}

// Function to Return Title of this Project
const titleProject = () => {
    return 'SuperLiga Predictor - Etapa 9 Sezonul 23/24';
}

// Function to Return Current Date
const currentDate = () => {
    new Date();
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

//Function to iterate from Matches Array and Return Random Match
const currentMatch = () => {
 return matches[Math.floor(Math.random() * matches.length)];
}

//Function to return the body of the projects
const superLigaPredictor = () => {
    console.log(titleProject());
    console.log(`Data: ${currentDate()}`);
    console.log('Meci: ' + currentMatch());
    console.log('Scor: ' + generateRandomScore() + ' - ' + generateRandomScore());
}

superLigaPredictor();