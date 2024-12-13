// We use the Objects below to control toggling like / unlike status

const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};
const colorStates = {
  "red" : "",
  "": "red"
};
function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
    
      alert("You notified the server!");

    })
    .catch(function(error) {
      alert("Something went wrong!");
    });
}
function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}













