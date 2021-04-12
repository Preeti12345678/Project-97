var firebaseConfig = {
    apiKey: "AIzaSyBlrfQflWVERJ6FiygmN86ImxV0v0KkhPU",
    authDomain: "kwitter-2d701.firebaseapp.com",
    databaseURL: "https://kwitter-2d701-default-rtdb.firebaseio.com",
    projectId: "kwitter-2d701",
    storageBucket: "kwitter-2d701.appspot.com",
    messagingSenderId: "268592771083",
    appId: "1:268592771083:web:6a430136bce3fdcdda570e",
    measurementId: "G-QXBMTLHG5L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("User_name");
 room_name=localStorage.getItem("room_name");
 
 function send(){
     message=document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
         name: user_name,
         message: message,
         likes: 0
     });
     document.getElementById("msg").value="";
 }
 function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
var name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4 class='name'>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='h4Message'>"+message+"</h4>";
like_button="<button class='btn btn-warning'id="+firebase_message_id+"value="+like+"onclick=updateLike(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button>";

row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
 
//End code
 } });  }); }
getData();

function updateLike(message_id){
console.log("Clicked on the like button"+message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
  updatedLikes=Number(likes)+1;
  console.log(updatedLikes);
  firebase.database().ref(room_name).child(message_id).update({
      likes:updatedLikes
  });
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}

