const watchedVideosByUser = {
  juan: {
    video1: "2025-01-01",
    video2: "2025-01-03",
  },
  maria: {
    video2: "2025-01-04",
    video3: "2025-01-05",
  },
  pedro: {
    video1: "2025-01-06",
  },
};

const usersByVideoUrl = {};

for (const user in watchedVideosByUser) {
  for (const video in watchedVideosByUser[user]) {
    const date = watchedVideosByUser[user][video];
    if (!usersByVideoUrl[video]) {
      usersByVideoUrl[video] = {};
    }

    usersByVideoUrl[video][user] = date;
  }
}

console.log(usersByVideoUrl);
