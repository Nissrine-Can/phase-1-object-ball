function gameObject() {
return {
  home: {
      teamName:"Brooklyn Nets",
      colors : ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
          },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
  
    away: {
      teamName: "Charlotte Hornets",
      colors : ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points:10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
   }
}
}

function homeTeam() {
    return gameObject().home
}

function awayTeam() {
    return gameObject().away
}

function players() {
    return Object.assign({}, homeTeam().players, awayTeam().players)
}
function playersObj(playerName) {
  return players()[playerName]
}

function numPointsScored(playerName) {
    return players()[playerName].points
}

function shoeSize(playerName) {
  return players()[playerName].shoe
}

function teamColors(name) {

    const game = gameObject();

    for (const gameKey in game) {
       if (name === game[gameKey].teamName)
        return game[gameKey].colors
    }
}

function homeTeamName() {
  return homeTeam().teamName
}
function awayTeamName() {
    return awayTeam().teamName
}

function teamNames() {
    return [homeTeamName(), awayTeamName()]
}

function playerNumbers(team) {

    const game = gameObject();
    const result = [];
    
    for (const gameKey in game) {
      if (team === game[gameKey].teamName) {

        const players = game[gameKey].players

        for (const player in players) {

          const singlePlayers = players[player]
          
          for (const key in singlePlayers) {

             if (key === "number") {
               result.push(singlePlayers[key]);
             }
          }
        }
      }
    }
  return result;
}
playerNumbers("Charlotte Hornets");


function playerStats(playerName) {

    const game = gameObject();
    
    for (const gameKey in game) {
    
       const players = game[gameKey].players
        
        for (const player in players) {

          const singlePlayers = players[player]
          
          if (playerName === player) {

           return singlePlayers
          }
        }
    }
}
playerStats("Bismak Biyombo");


function bigShoeRebounds() {
    
    let currentPlayer = {'shoe': 0}
    
    for (let key in players()) {

      if (players()[key].shoe > currentPlayer.shoe) {

        currentPlayer = players()[key]
      }
    }
     return currentPlayer.rebounds
  }
debugger