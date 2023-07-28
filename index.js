
  function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Get the values from the form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var date = document.getElementById('date').value;
  
    // Remove any existing error messages
    var errorMessages = document.getElementsByClassName('error-message');
    for (var i = 0; i < errorMessages.length; i++) {
      errorMessages[i].remove();
    }
  
    // Check if any of the required fields are empty
    if (!name) {
      displayErrorMessage('name', 'Please enter your Full Name.');
      return;
    }
  
    
  // Add the code for checking the validity of the email address using the regexEmail regular expression

  let regexEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
  if (!regexEmail.test(email)) {
    displayErrorMessage('email', 'Invalid email address. Please enter a valid email.');
    return; // Stop form submission if there's an error
  }

  // Add the code for checking the validity of the phone number using the regexPhone regular expression

  let regexPhone = /^(?:\+212|0)([5-7]\d{8})$/;
  if (!regexPhone.test(phone)) {
    displayErrorMessage('phone', 'Invalid phone number. It should start with \'+212\' || \`0\` and have 9 digits.');
    return; // Stop form submission if there's an error
  }
  
    if (!message) {
      displayErrorMessage('message', 'Please enter your Message to know what you need from us.');
      return;
    }
  
    if (!date) {
      displayErrorMessage('date', 'Please select a Date.');
      return;
    }
  
    // Build the HTML to display the submitted data
    var submittedData = `
      <p><strong>Full Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Date:</strong> ${date}</p>
    `;
  
    // Display the submitted data in the div with id "submitted-data"
    var submittedDataDiv = document.getElementById('submitted-data');
    submittedDataDiv.innerHTML = submittedData;
  
    // Reset the form inputs
    event.target.reset();
  }
    
  function displayErrorMessage(inputId, message) {
    var inputElement = document.getElementById(inputId);
    var errorMessage = document.createElement('span');
    errorMessage.classList.add('error-message');
    errorMessage.textContent = message;
    inputElement.parentNode.appendChild(errorMessage);
  }
 