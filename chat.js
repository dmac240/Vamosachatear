// Configuración de Firebase de tu app web
//AGREGA TUS ENLACES DE FIREBASE AQUÍ

const firebaseConfig = {
    apiKey: "AIzaSyDfJAMU7-doYiSfBD-yUJs01ZwRX_2bLvg",
    authDomain: "adv100-ac28a.firebaseapp.com",
    databaseURL: "https://adv100-ac28a-default-rtdb.firebaseio.com",
    projectId: "adv100-ac28a",
    storageBucket: "adv100-ac28a.appspot.com",
    messagingSenderId: "488835354129",
    appId: "1:488835354129:web:62fc7a019c184177146bb0"
  };
  
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



