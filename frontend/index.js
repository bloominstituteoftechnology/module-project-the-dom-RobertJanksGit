// const { people } = require("./data");

function moduleProject1() {
  const footer = document.querySelector("footer");
  const currentYear = new Date().getFullYear();
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`;

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  const body = document.querySelector("body");
  const section = body.querySelector("section");
  const sectionDiv = section.querySelectorAll("div");
  sectionDiv.forEach((div) => div.classList.add("widget"));

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //Create div's
  const quoteDiv = document.createElement("div");
  const author = document.createElement("div");

  // Random number generator between 1-9;
  const randomNum = Math.floor(Math.random() * 10);

  //Add content to quoteDiv and add it to widget
  quoteDiv.textContent = quotes[randomNum]["quote"];
  document.querySelector(".quoteoftheday").appendChild(quoteDiv);

  //Add content to author and add it to widget
  author.textContent = `${quotes[randomNum]["author"]} in ${
    quotes[randomNum]["date"] ? quotes[randomNum]["date"] : "an unknown date"
  }`;
  document.querySelector(".quoteoftheday").appendChild(author);

  // 👉 TASK 3 - Build a "Corporate Speak" widget

  //Creating the p tag;
  const corprateSpeakP = document.createElement("p");

  //Adding text content to p tag
  corprateSpeakP.textContent = `We need to ${
    verbs[Math.floor(Math.random() * 10)]
  } our ${nouns[Math.floor(Math.random() * 10)]} ${
    adverbs[Math.floor(Math.random() * 10)]
  }
    in order to ${verbs[Math.floor(Math.random() * 10)]} our ${
    nouns[Math.floor(Math.random() * 10)]
  } ${adverbs[Math.floor(Math.random() * 10)]}.`;

  //Adding p tag to worporate speak widget
  document.querySelector(".corporatespeak").appendChild(corprateSpeakP);

  // 👉 TASK 4 - Build a "Countdown" widget

  //Creating the p tag
  const countDownP = document.createElement("p");

  //Adding countdaoun to p tag
  let countDown = 5;

  let intervalId = setInterval(() => {
    // countDown--;
    countDownP.textContent = `T-minus ${countDown}...`;
    if (countDown === 0) {
      countDownP.textContent = "Liftoff! 🚀";
      clearInterval(intervalId);
    }
    countDown--;
  }, 1000);

  document.querySelector(".countdown").appendChild(countDownP);
  // 👉 TASK 5 - Build a "Friends" widget
  //Crating the p tag
  const randomPerson = people[Math.floor(Math.random() * people.length)];
  const friendsP = document.createElement("p");
  document.querySelector(".friends").appendChild(friendsP);
  const year = randomPerson.dateOfBirth.split("-")[0];
  let sentence = `${randomPerson.fname} ${randomPerson.lname} was born in ${year} and `;
  if (!randomPerson.friends.length) {
    sentence += "and has no friends.";
  } else {
    sentence += "is friends with ";
    for (let i = 0; i < randomPerson.friends.length; i++) {
      const friendId = randomPerson.friends[i];
      const friend = people.find((p) => p.id === friendId);
      const fullName = `${friend.fname} ${friend.lname}`;
      let isLastIdx = i === randomPerson.friends.length - 1;
      let isNextToLastIdx = i === randomPerson.friends.length - 2;
      if (isLastIdx) {
        sentence += `${fullName}.`;
      } else if (isNextToLastIdx) {
        sentence += `${fullName} and `;
      } else {
        sentence += `${fullName}, `;
      }
    }
  }
  friendsP.textContent = sentence;

  // 👉 TASK 6 - Make it so user can tab through the widgets
  let tabCounter = 1;
  sectionDiv.forEach((div) => (div.tabIndex = tabCounter++));

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== "undefined" && module.exports)
  module.exports = { moduleProject1 };
else moduleProject1();
