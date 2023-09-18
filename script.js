// Array of Current Matches
const matches = {
    firstTeam: { name: ['UTA Arad', 'Dinamo Bucuresti', 'Universitatea Craiova', 'Hermannstadt', 'Otelul Galati', 'Farul Constanta', 'Poli Iasi', 'CFR Cluj'],
                 dateEvent: [new Date("09/15/2023").getTime(), new Date("09/16/2023").getTime(), new Date("09/17/2023").getTime(), new Date("09/18/2023, 23:59").getTime()] },
    secondTeam: ['U Cluj', 'U Craiova 1948', 'Sepsi Sf. Gheorghe', 'Voluntari', 'Rapid Bucuresti', 'FCSB', 'FC Botosani', 'Petrolul Ploiesti']
};

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
// Function to Return Current Date for Comparasion
const currentDateDay = () => {
    let day = new Date().getTime();
    return day;
}

//Function to check real events

const checkMatch = ()=> {
    let check = [];
    for (let i = 0; i < matches.firstTeam.name.length; i++){
        if(matches.firstTeam.name[i] === 'UTA Arad' && matches.firstTeam.dateEvent[0] < currentDateDay()){continue;};
        if(matches.firstTeam.name[i] === 'Dinamo Bucuresti' && matches.firstTeam.dateEvent[0] < currentDateDay()){continue;};
        if(matches.firstTeam.name[i] === 'Universitatea Craiova' && matches.firstTeam.dateEvent[1] < currentDateDay()){continue;}
        if(matches.firstTeam.name[i] === 'Hermannstadt' && matches.firstTeam.dateEvent[2] < currentDateDay()){continue;}
        if(matches.firstTeam.name[i] === 'Otelul Galati' && matches.firstTeam.dateEvent[2] < currentDateDay()){continue;}
        if(matches.firstTeam.name[i] === 'Farul Constanta' && matches.firstTeam.dateEvent[2] < currentDateDay()){continue;}
        if(matches.firstTeam.name[i] === 'Poli Iasi' && matches.firstTeam.dateEvent[3] < currentDateDay()){continue;}
        if(matches.firstTeam.name[i] === 'CFR Cluj' && matches.firstTeam.dateEvent[3] < currentDateDay()){continue;}
        check.push(matches.firstTeam.name[i]);
    }
    return check;
}

//Function to gather teams into real events
const realEvents = ()=> {
    let randomIndex = Math.floor(Math.random() * checkMatch().length);
    let generateMatch = checkMatch()[randomIndex];
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
    console.log('Meci: ' + realEvents());
    console.log('Scor: ' + generateRandomScore() + ' - ' + generateRandomScore());
};


superLigaPredictor();