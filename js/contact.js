// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDRSo9gVnLcoZUtaXXtSmp0KuTpjgdl7Jo",
    authDomain: "bigtyme-35057.firebaseapp.com",
    databaseURL: "https://bigtyme-35057.firebaseio.com",
    projectId: "bigtyme-35057",
    storageBucket: "bigtyme-35057.appspot.com",
    messagingSenderId: "226470763553",
    appId: "1:226470763553:web:9e6c41df099eb295005760"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('message');

// Listen for form submit
document.getElementById('contacts').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, email, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 1 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 1000);

    // Clear form
    document.getElementById('contacts').reset();
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