
var firebaseConfig = {
      apiKey: "AIzaSyBM9fPCBb8eFRW0rGoJDCq8XvZSMB4WjgU",
      authDomain: "kwitter-b4d8d.firebaseapp.com",
      databaseURL: "https://kwitter-b4d8d-default-rtdb.firebaseio.com",
      projectId: "kwitter-b4d8d",
      storageBucket: "kwitter-b4d8d.appspot.com",
      messagingSenderId: "277736769036",
      appId: "1:277736769036:web:c817e9899a73e90efc1029",
      measurementId: "G-95RSXN2KHM"
    };
    
    // Initialize Firebase
    initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Bienvenido" + user_name;

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();
