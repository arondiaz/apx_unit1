const moviesWatchedByUser = {
  lucas: {
    Netflix: {
      Inception: "2025-02-01",
      "The Matrix": "2025-02-03",
    },
    Hulu: {
      "The Handmaid's Tale": "2025-02-05",
    },
  },

  sofia: {
    Netflix: {
      Inception: "2025-02-02",
      Interstellar: "2025-02-04",
    },
    AmazonPrime: {
      "The Boys": "2025-02-06",
    },
  },

  martín: {
    Hulu: {
      "The Handmaid's Tale": "2025-02-07",
      "The Great": "2025-02-08",
    },
    Netflix: {
      "The Matrix": "2025-02-10",
    },
  },

  camila: {
    AmazonPrime: {
      "The Boys": "2025-02-09",
      "The Boys: Season 2": "2025-02-11",
    },
  },
};

const filteredInfo = {};

for (const user in moviesWatchedByUser) {
  for (const plataforma in moviesWatchedByUser[user]) {
    for (const movie in moviesWatchedByUser[user][plataforma]) {
      if (!filteredInfo[plataforma]) {
        filteredInfo[plataforma] = {};
      }

      if (!filteredInfo[plataforma][movie]) {
        filteredInfo[plataforma][movie] = {};
      }

      filteredInfo[plataforma][movie] =
        moviesWatchedByUser[user][plataforma][movie];
    }
  }
}

console.log(filteredInfo);
