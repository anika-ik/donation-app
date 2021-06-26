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
    room_name= localStorage.getItem("room_name");






function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

name= message_data['name'];
message= message_data['message'];


name_width_tag= '<h4>' + name +  '</h4>' ;
message_width_tag= '<h4 class="message_h4">' + message + '</h4>';

row= name_width_tag + message_width_tag ;
document.getElementById("output").innerHTML+= row;
console.log("test");
//End code
      } });  }); }
getData();



function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}

function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            
      });
      document.getElementById("msg").value="";
      console.log("test1");
}