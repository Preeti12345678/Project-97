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
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
  function addRoom(){
    console.log("Yes");
     room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"

    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
  }
  function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey =childSnapshot.key;
     Room_names = childKey;
     //Start code
     row="<div  class='room_name'id"+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
     console.log("Room name"+Room_names);

     //End code
  });});}
  getData();
  function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="kwitter_page.html";
  }
