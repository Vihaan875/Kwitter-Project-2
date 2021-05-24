var firebaseConfig = {
  apiKey: "AIzaSyCe_PAAmf7Ke0NvTXyc8yUlVVefCtDjIVY",
  authDomain: "kwitter-project-1-7778e.firebaseapp.com",
  databaseURL: "https://kwitter-project-1-7778e-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-1-7778e ",
  storageBucket: "kwitter-project-1-7778e.appspot.com",
  messagingSenderId: "614333216893",
  appId: "1:614333216893:web:fa3c58941efbca72b71914",
  measurementId: "G-5ZLEGVQLRN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"checking"
    });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code

 //End code
 });});}
getData();