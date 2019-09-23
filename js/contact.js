 // Your web app's Firebase configuration
 var firebaseConfig = {
     apiKey: "AIzaSyBpmUe9YGyH9hJaI06oNOqGFhy-oARmFl4",
     authDomain: "contactform-74abd.firebaseapp.com",
     databaseURL: "https://contactform-74abd.firebaseio.com",
     projectId: "contactform-74abd",
     storageBucket: "contactform-74abd.appspot.com",
     messagingSenderId: "926993576523",
     appId: "1:926993576523:web:74d776c781fd40237753ce"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 // Reference messages collection
 var messagesRef = firebase.database().ref('messages');

 // Listen for form submit
 document.getElementById('contact-right').addEventListener('submit', submitForm);

 // Submit form
 function submitForm(e) {
     e.preventDefault();

     // Get values
     var name = getInputVal('name');
     var email = getInputVal('email');
     var message = getInputVal('messages');

     // Save message
     saveMessage(name, email, message);

     // Show alert
     document.querySelector('.alert').style.display = 'block';

     // Hide alert after 3 seconds
     setTimeout(function () {
         document.querySelector('.alert').style.display = 'none';
     }, 3000);

     // Clear form
     document.getElementById('contact-right').reset();
 }

 // Function to get get form values
 function getInputVal(id) {
     return document.getElementById(id).value;
 }

 // Save message to firebase
 function saveMessage(name, email, message) {
     var newMessageRef = messagesRef.push();
     newMessageRef.set({
         name: name,
         email: email,
         message: message
     });
 }