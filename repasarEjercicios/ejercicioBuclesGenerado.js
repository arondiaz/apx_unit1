const booksReadByUser = {
  alice: {
    "The Hobbit": "2025-01-10",
    1984: "2025-01-12",
    Dune: "2025-01-15",
  },
  bob: {
    "The Hobbit": "2025-01-11",
    "Brave New World": "2025-01-13",
    "Fahrenheit 451": "2025-01-16",
  },
  charlie: {
    Dune: "2025-01-17",
    "Brave New World": "2025-01-18",
    1984: "2025-01-20",
  },
  diana: {
    "Fahrenheit 451": "2025-01-21",
    Dune: "2025-01-22",
    "The Hobbit": "2025-01-24",
  },
};

const usersByBook = {};

for (const userId in booksReadByUser) {
  for (const bookTitle in booksReadByUser[userId]) {
    if (!usersByBook[bookTitle]) {
      usersByBook[bookTitle] = {};
    }

    usersByBook[bookTitle][userId] = booksReadByUser[userId][bookTitle];
  }
}

console.log(usersByBook);
