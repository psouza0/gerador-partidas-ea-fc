const teamsData = [
    // La Liga
    {"team": "Real Madrid", "country": "Espanha - La Liga", "Overall": 86, "Ataque": 88, "Meio-campo": 85, "Defesa": 84, "image": "imagens/real-madrid.png"},
    {"team": "Barcelona", "country": "Espanha - La Liga", "Overall": 83, "Ataque": 81, "Meio-campo": 81, "Defesa": 82, "image": "imagens/barcelona.png"},
    {"team": "Atletico Madrid", "country": "Espanha - La Liga", "Overall": 82, "Ataque": 84, "Meio-campo": 81, "Defesa": 81, "image": "imagens/atletico-de-madrid.png"},
    {"team": "Athletic Club Bilbao", "country": "Espanha - La Liga", "Overall": 80, "Ataque": 79, "Meio-campo": 80, "Defesa": 79, "image": "imagens/athletic-club-bilbao.png"},
    // Premier League
    {"team": "Newcastle", "country": "Inglaterra - Premier League", "Overall": 80, "Ataque": 81, "Meio-campo": 82, "Defesa": 79, "image": "imagens/newcastle.png"},
    {"team": "Tottenham", "country": "Inglaterra - Premier League", "Overall": 81, "Ataque": 82, "Meio-campo": 80, "Defesa": 78, "image": "imagens/tottenham.png"},
    {"team": "Arsenal", "country": "Inglaterra - Premier League", "Overall": 84, "Ataque": 84, "Meio-campo": 85, "Defesa": 82, "image": "imagens/arsenal.png"},
    {"team": "Manchester United", "country": "Inglaterra - Premier League", "Overall": 80, "Ataque": 80, "Meio-campo": 80, "Defesa": 81, "image": "imagens/manchester-united.png"},
    {"team": "Chelsea", "country": "Inglaterra - Premier League", "Overall": 81, "Ataque": 81, "Meio-campo": 82, "Defesa": 79, "image": "imagens/chelsea.png"},
    {"team": "Manchester City", "country": "Inglaterra - Premier League", "Overall": 85, "Ataque": 84, "Meio-campo": 86, "Defesa": 83, "image": "imagens/manchester-city.png"},
    {"team": "Liverpool", "country": "Inglaterra - Premier League", "Overall": 84, "Ataque": 83, "Meio-campo": 84, "Defesa": 84, "image": "imagens/liverpool.png"},
    {"team": "Aston Villa", "country": "Inglaterra - Premier League", "Overall": 80, "Ataque": 84, "Meio-campo": 80, "Defesa": 79, "image": "imagens/aston-villa.png"},
    // Serie A
    {"team": "Milano (AC Milan)", "country": "Itália - Serie A", "Overall": 81, "Ataque": 79, "Meio-campo": 82, "Defesa": 80, "image": "imagens/milano.png"},
    {"team": "Juventus", "country": "Itália - Serie A", "Overall": 80, "Ataque": 82, "Meio-campo": 79, "Defesa": 77, "image": "imagens/juventus.png"},
    {"team": "Roma", "country": "Itália - Serie A", "Overall": 80, "Ataque": 84, "Meio-campo": 79, "Defesa": 81, "image": "imagens/roma.png"},
    {"team": "Lombardia FC (Inter)", "country": "Itália - Serie A", "Overall": 83, "Ataque": 86, "Meio-campo": 83, "Defesa": 83, "image": "imagens/inter.png"},
    // Bundesliga
    {"team": "FC Bayern München", "country": "Alemanha - Bundesliga", "Overall": 84, "Ataque": 90, "Meio-campo": 83, "Defesa": 82, "image": "imagens/fc-bayern mnchen.png"},
    {"team": "Bayer 04 Leverkusen", "country": "Alemanha - Bundesliga", "Overall": 83, "Ataque": 82, "Meio-campo": 83, "Defesa": 83, "image": "imagens/leverkusen.png"},
    {"team": "Borussia Dortmund", "country": "Alemanha - Bundesliga", "Overall": 81, "Ataque": 80, "Meio-campo": 81, "Defesa": 81, "image": "imagens/borussia-dortmund.png"},
    {"team": "RB Leipzig", "country": "Alemanha - Bundesliga", "Overall": 80, "Ataque": 81, "Meio-campo": 79, "Defesa": 80, "image": "imagens/rb-leipzig.png"},
    // Outros
    {"team": "Paris Saint-Germain", "country": "França - Liga 1", "Overall": 82, "Ataque": 81, "Meio-campo": 82, "Defesa": 83, "image": "imagens/psg.png"},
    // Internacional
    {"team": "França", "country": "Internacional", "Overall": 85, "Ataque": 85, "Meio-campo": 84, "Defesa": 85, "image": "imagens/franca.png"},
    {"team": "Inglaterra", "country": "Internacional", "Overall": 84, "Ataque": 87, "Meio-campo": 85, "Defesa": 82, "image": "imagens/inglaterra.png"},
    {"team": "Alemanha", "country": "Internacional", "Overall": 84, "Ataque": 79, "Meio-campo": 83, "Defesa": 84, "image": "imagens/alemanha.png"},
    {"team": "Portugal", "country": "Internacional", "Overall": 84, "Ataque": 85, "Meio-campo": 84, "Defesa": 83, "image": "imagens/portugal.png"},
    {"team": "Espanha", "country": "Internacional", "Overall": 84, "Ataque": 83, "Meio-campo": 83, "Defesa": 83, "image": "imagens/espanha.png"},
    {"team": "Netherlands", "country": "Internacional", "Overall": 83, "Ataque": 81, "Meio-campo": 83, "Defesa": 84, "image": "imagens/netherlands.png"},
    {"team": "Argentina", "country": "Internacional", "Overall": 83, "Ataque": 87, "Meio-campo": 84, "Defesa": 81, "image": "imagens/argentina.png"},
    {"team": "Itália", "country": "Internacional", "Overall": 82, "Ataque": 78, "Meio-campo": 82, "Defesa": 81, "image": "imagens/italia.png"}
];


let recentMatches = [];
const MAX_RECENT_MATCHES = 5;

function generateMatch() {
    const filteredTeams = teamsData.filter(team => team.Overall >= 79);

    let team1, team2;
    
    while (true) {
        const index1 = Math.floor(Math.random() * filteredTeams.length);
        let index2 = Math.floor(Math.random() * filteredTeams.length);
        
        while (index1 === index2) {
            index2 = Math.floor(Math.random() * filteredTeams.length);
        }

        team1 = filteredTeams[index1];
        team2 = filteredTeams[index2];

        const matchKey = [team1.team, team2.team].sort().join('-');

        if (Math.abs(team1.Overall - team2.Overall) <= 2 && !recentMatches.includes(matchKey)) {
            
            recentMatches.push(matchKey);
            
            if (recentMatches.length > MAX_RECENT_MATCHES) {
                recentMatches.shift();
            }

            break;
        }
    }
    
    updateDOM(team1, team2);
}

function updateDOM(team1, team2) {
    document.getElementById('match-container').classList.remove('d-none');

    document.getElementById('team1-img').src = 'static/' + team1.image.split('/').pop();
    document.getElementById('team1-name').textContent = team1.team;
    document.getElementById('team1-country').textContent = team1.country;
    document.getElementById('team1-ovr').textContent = team1.Overall;
    document.getElementById('team1-atk').textContent = team1.Ataque;
    document.getElementById('team1-mid').textContent = team1['Meio-campo'];
    document.getElementById('team1-def').textContent = team1.Defesa;
    
    document.getElementById('team2-img').src = 'static/' + team2.image.split('/').pop();
    document.getElementById('team2-name').textContent = team2.team;
    document.getElementById('team2-country').textContent = team2.country;
    document.getElementById('team2-ovr').textContent = team2.Overall;
    document.getElementById('team2-atk').textContent = team2.Ataque;
    document.getElementById('team2-mid').textContent = team2['Meio-campo'];
    document.getElementById('team2-def').textContent = team2.Defesa;
}