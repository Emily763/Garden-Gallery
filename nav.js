function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// CONTACT PAGE
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

// END CONTACT PAGE

// STORE 
// Get the Sequence element
var sequenceElement = document.getElementById("sequence");

// Place your Sequence options here to override defaults
// See: http://sequencejs.com/documentation/#options
var options = {
  animateCanvas: false,
  phaseThreshold: false,
  preloader: true,
  reverseWhenNavigatingBackwards: true
}

// Launch Sequence on the element, and with the options we specified above
var mySequence = sequence(sequenceElement, options);
// END STORE
