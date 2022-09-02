const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const [players1, players2] = game.players;
const [gk, ...fieldPlayer] = players1;
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
const {
    odds: { team1, x: draw, team2 },
} = game;
const playersFinal = ['Thiago', 'Couthnho', 'Perisic', ...players1];
const printGoals = (...players) => {
    console.log(`${players.length} goals were scored`);
};

printGoals(...game.scored);

team1 < team2 && console.log('team1 is more likely to win');
team1 > team2 && console.log('team2 is more likely to win');

/**
 * *part 2
 */

// for (const [i, player] of game.scored.entries()) {
//     console.log(`goal ${goal [i] +1}: + player[i]`);
// }
const value = Object.values(game.odds);
avg = 0;
for (const i of value) avg += i;
avg /= value.length;
console.log(avg);

for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;

    console.log(`odd of ${teamStr} ${odd}`);
}
