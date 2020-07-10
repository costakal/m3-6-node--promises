// Exercise 1
// ------------
const arrayOfWords = ["cucumber", "tomatos", "avocado"];
const complicatedArray = ["cucumber", 44, true];

const makeAllCaps = (array) => {
  firstPromise = new Promise((resolve, reject) => {
    if (
      array.every((word) => {
        return typeof word === "string";
      })
    ) {
      const turnUpperCaps = array.map((item) => {
        console.log(item, item.toUpperCase());
        return item.toUpperCase();
      });
      resolve(turnUpperCaps);
    } else {
      reject("This will not work");
    }
  });
  return firstPromise;
};

const sortWords = (array) => {
  secondPromise = new Promise((resolve, reject) => {
    const sortWords = array.sort();
    resolve(sortWords);
    reject("This will not work");
  });
  return secondPromise;
};

// Calling (testing)
makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => console.log("This is the result of good array", result))
  .catch((error) => console.log("This is the error of good array", error));

makeAllCaps(complicatedArray)
  .then(sortWords)
  .then((result) =>
    console.log("This is the result of complicating array", result)
  )
  .catch((error) =>
    console.log("This is the error of complicating array", error)
  );
