// Array of Current Matches
const matches = {
    firstTeam: ['UTA Arad', 'Dinamo Bucuresti', 'Universitatea Craiova', 'Hermannstadt', 'Otelul Galati', 'Farul Constanta', 'Poli Iasi', 'CFR Cluj'],
    secondTeam: ['U Cluj', 'U Craiova 1948', 'Sepsi Sf. Gheorghe', 'Voluntari', 'Rapid Bucuresti', 'FCSB', 'FC Botosani', 'Petrolul Ploiesti']
};

//Array of Generated Match
let event = [];

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
    let date = new Date();
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

//Function to generate real events
const randomMatch = ()=> {
    let randomIndex = Math.floor(Math.random() * matches.firstTeam.length);
    let generateMatch = matches.firstTeam[randomIndex];
    switch(generateMatch) {
        case 'UTA Arad':
            return generateMatch + ' vs. ' + matches.secondTeam[0];
            break;
        case 'Dinamo Bucuresti':
            return generateMatch + ' vs. ' + matches.secondTeam[1];
            break;
        case 'Universitatea Craiova':
            return generateMatch + ' vs. ' + matches.secondTeam[2];
            break;
        case 'Hermannstadt':
            return generateMatch + ' vs. ' + matches.secondTeam[3];
            break;
        case 'Otelul Galati':
            return generateMatch + ' vs. ' + matches.secondTeam[4];
            break;
        case 'Farul Constanta':
            return generateMatch + ' vs. ' + matches.secondTeam[5];
            break;
        case 'Poli Iasi':
            return generateMatch + ' vs. ' + matches.secondTeam[6];
            break;
        case 'CFR Cluj':
            return generateMatch + ' vs. ' + matches.secondTeam[7];
        default:
            return 'Error'
    }
}

//Function to return the body of the projects
const superLigaPredictor = () => {
    console.log(titleProject());
    console.log(`Data: ${currentDate()}`);
    console.log('Meci: ' + randomMatch());
    console.log('Scor: ' + generateRandomScore() + ' - ' + generateRandomScore());
}

superLigaPredictor();