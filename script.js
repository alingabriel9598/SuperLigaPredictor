const title = 'SuperLiga Predictor - Etapa 9 Sezonul 23/24';
const date = new Date();
const matches = ['UTA Arad vs U Cluj', 'Dinamo Bucuresti vs U Craiova 1948', 'Universitatea Craiova vs Sepsi Sf. Gheorghe', 'Hermannstadt vs Voluntari', 'Otelul Galati vs Rapid Bucuresti', 'Farul Constanta vs FCSB', 'Poli Iasi vs FC Botosani', 'CFR Cluj vs Petrolul Ploiesti'];
const score1 = Math.floor(Math.random() * 4);
const score2 = Math.floor(Math.random() * 4);
console.log(title);
console.log(`Data: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`);
console.log('Meci: ' + matches[2]);
console.log('Scor: ' + score1 + ' - ' + score2);