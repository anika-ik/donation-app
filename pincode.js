var firebaseConfig = {
    apiKey: "AIzaSyBnTvcPcH1wQfGzXWmzUEkQ2-pGVvX4ULY",
    authDomain: "donation-app-412af.firebaseapp.com",
    databaseURL: "https://donation-app-412af-default-rtdb.firebaseio.com",
    projectId: "donation-app-412af",
    storageBucket: "donation-app-412af.appspot.com",
    messagingSenderId: "307156826364",
    appId: "1:307156826364:web:bc49e78b7f6f531a28bf79"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "welcome " + user_name + "!";


function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location= "chat_page.html";
}






function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name- " + Room_names);
      row= "<div class='room_name' id="+ Room_names +"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+= row ;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "chat_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}
