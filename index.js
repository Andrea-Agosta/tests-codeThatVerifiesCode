function greet(namePassedIn) {
  if (namePassedIn === "") {
    return "Please insert a name";
  } else {
    const splitName = namePassedIn.split(",");
    if (splitName.length > 1) {
      let namesList = "";
      for (let i = 1; i < splitName.length; i++) {
        namesList += " and " + splitName[i];
      }
      return "Welcome to SALT, " + splitName[0] + namesList;
    } else {
      return "Welcome to SALT, " + namePassedIn;
    }
  }
}

const greeting = greet("Marcus");
if (greeting === "Welcome to SALT, Marcus") {
  console.log("IT WORKS");
} else {
  console.log("IT FAILS");
}

module.exports.greet = greet;
