// Get User's name.
var userName = prompt("Hello, what\'s your name?");
// Using switch to troll
switch (userName) {
  case "Ed":
  case "ed":
  case "edd":
  case "Edd":
  greeting = "Egggg, roll another"
    break;
  case "Jack":
  greeting = "Wagwan"
    break;
};
// If no username was added, ask again.
if (!userName) {
  userName = prompt ("You didn\'t enter a name. Really, what\'s your name?")
};
// Create phone number pattern
var phoneNumberPattern = /\+1-\d{3}-\d{3}-\d{4}/;
var phoneMatches = null;

while (!phoneMatches) {
  // Get User's phone number
  var phoneNumber = prompt("Please enter a number in the format +1-123-456-7890");
  // Get matches from phoneNumber
  phoneMatches = phoneNumberPattern.exec(phoneNumber);
}
// If the phone number is 999-555-5309, then phone matches will be
// ["999-555-5309", "901"]
var areaCode = phoneMatches[1];
// Get the location using the bracket syntax
var userLocation = kbValues.areaCodes[areaCode];
// Create variable to store the output
var output = "<h1>Hello, " + userName + "!<h1>";
// Is the phone number valid?
if (phoneNumberPattern.test(phoneNumber)) {
  // Yes, the phone number is valid! Add the success message to the output.
  output = output + "<p>" + kbValues.projectName + " " + kbValues.versionNumber + " viewed on: " + kbValues.currentTime + "<p>";
}   else{
  // No, the phone number is not valid. Tell the user about the problem.
  output = output + "<h2>That phone number is invalid: " + phoneNumber;
};
// Insert the output into the web page.
for (var i = 0; i < images; i++) {
  console.log(images[i]);
};
// document.body.innerHTML = output;
// Insert HTML onto webpage.
document.body.HTML = output;

document.body.innerHTML = "<h1>Hello, " + userName + "!<h1>" +
                          "<p>" + kbValues.projectName + " " + kbValues.versionNumber +
                          " viewed on: " + kbValues.currentTime + "</p>";
