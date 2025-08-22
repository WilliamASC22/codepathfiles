/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");
// Step 2: Write the callback function
const toggleDarkMode = () => {
    // Write your code here
    // This section will run whenever the button is clicked
    document.body.classList.toggle("dark-mode");
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleDarkMode);

/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here
const rsvpButton = document.getElementById('rsvp-button');

let count = 3;


const addParticipant = (event, person) => {
    // Step 2: Write your code to manipulate the DOM here

    // event.preventDefault();


    // const name = document.getElementById('name').value;
    // const interest = document.getElementById('interest').value;
    

    const newParticipant = document.createElement('p');
    
    newParticipant.textContent = "🎟️ " + person.name + " is interested in " + person.interest + ".";
    
    const participantList = document.querySelector('.rsvp-participants');
    participantList.appendChild(newParticipant);
    
    const oldCount = document.getElementById('rsvp-count');
    oldCount.remove();
    count = count + 1;
    
    const newCount = document.createElement('p');
    newCount.id = 'rsvp-count';
    newCount.textContent = "⭐ "+  count + " people have RSVP'd to this event!";
    
    participantList.appendChild(newCount);

    // document.getElementById('name').value = '';
    // document.getElementById('email').value = '';
    // document.getElementById('interest').value = '';
}

// Step 3: Add a click event listener to the submit RSVP button here

/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = () => {

  
  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  // TODO: Loop through all inputs

  // TODO: Inside loop, validate the value of each input
  for (let x = 0; x < rsvpInputs.length; x++) {
      let aInput = rsvpInputs[x];

      if (aInput.value.length < 2) {
        containsErrors = true;
        aInput.classList.add("error");
      } 

      else {
        aInput.classList.remove("error");
      }
    }


    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    
    if (!emailValue.includes("@")) {
      containsErrors = true;
      emailInput.classList.add("error");
    } 
    else {
      emailInput.classList.remove("error");
    }

    const person = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      interest: document.getElementById("interest").value
    };


  // TODO: If no errors, call addParticipant() and clear fields

  if (containsErrors == false) {
    addParticipant(null, person);
    toggleModal(person);

    for (let x = 0; x < rsvpInputs.length; x++) {
      rsvpInputs[x].value = "";
    }
  }
}

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener("click", validateForm);

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
    // let modal = 0; // TODO
    

    // TODO: Update modal display to flex
    let modal = document.getElementById("success-modal");
    let modalText = document.getElementById("modal-text");

    modal.style.display = "flex";

    // TODO: Update modal text to personalized message
    modalText.textContent = ("Thanks for RSVPing, " + person.name + "! We can't wait to see you at the event.");

    if (!reduceMotion) {
      intervalId = setInterval(animateImage, 500);
    }

    // Set modal timeout to 5 seconds
    setTimeout(() => {
      modal.style.display = "none";
      clearInterval(intervalId);
    }, 5000);
    
}

// TODO: animation variables and animateImage() function

let rotateFactor = 0;

let modalImage = document.querySelector("#success-modal img");

const animateImage = () => {
    if (rotateFactor === 0) {
        rotateFactor = -10;
    } 
    else {
        rotateFactor = 0;
    }

    modalImage.style.transform = `rotate(${rotateFactor}deg)`;
};

const closeModalButton = document.getElementById("close-modal");
const modal = document.getElementById("success-modal");

const closeModal = () => {
  modal.style.display = "none";
};

closeModalButton.addEventListener("click", closeModal);







const motionButton = document.getElementById("motion-button");

let reduceMotion = false;

const toggleReduceMotion = () => {
  reduceMotion = !reduceMotion;
  
  if (reduceMotion) {
    clearInterval(intervalId);
    if (modalImage) {
      modalImage.style.transform = "";
    }
  }
};

motionButton.addEventListener("click", toggleReduceMotion);
