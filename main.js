// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
// Constants for heart symbols

// Hide the error modal on page load
const errorModal = document.getElementById('modal');
errorModal.classList.add('hidden');

// Add event listeners to all heart elements
const hearts = document.querySelectorAll('.like-glyph');
hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.classList.add('activated-heart');
        } else {
          heart.textContent = EMPTY_HEART;
          heart.classList.remove('activated-heart');
        }
      })
      .catch(error => {
        const errorMessage = document.getElementById('modal-message');
        errorMessage.textContent = error;
        errorModal.classList.remove('hidden');
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  });
});
