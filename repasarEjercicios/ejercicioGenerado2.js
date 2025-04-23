const gamesPlayedByUser = {
  dimitry: {
    action: {
      "Call of Duty": "2025-03-01",
      "Doom Eternal": "2025-03-05",
    },
    strategy: {
      "Age of Empires II": "2025-03-10",
    },
  },
  emma: {
    adventure: {
      "The Legend of Zelda": "2025-03-02",
    },
    strategy: {
      "Age of Empires II": "2025-03-06",
      "Civilization VI": "2025-03-09",
    },
  },
  mark: {
    action: {
      "Doom Eternal": "2025-03-03",
    },
    adventure: {
      "The Legend of Zelda": "2025-03-04",
    },
  },
  sofia: {
    strategy: {
      "Civilization VI": "2025-03-07",
    },
    action: {
      "Call of Duty": "2025-03-08",
    },
  },
};

const usersByGenreAndGame = {}

for (const userId in gamesPlayedByUser) {
  for (const category in gamesPlayedByUser[userId]) {
    for (const game in gamesPlayedByUser[userId][category]) {
      
        if(!usersByGenreAndGame[category]){
            usersByGenreAndGame[category] = {}
        }

        if(!usersByGenreAndGame[category][game]){
            usersByGenreAndGame[category][game] = {}
        }

        usersByGenreAndGame[category][game][userId] = gamesPlayedByUser[userId][category][game]

    }
  }
}

console.log(usersByGenreAndGame);