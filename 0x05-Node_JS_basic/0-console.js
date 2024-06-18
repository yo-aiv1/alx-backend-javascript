function displayMessage(message) {
  if (message) {
    console.log(message);
  } else {
    console.log('No message provided');
  }
}

module.exports = displayMessage;
