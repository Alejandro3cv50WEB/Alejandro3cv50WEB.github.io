const signInForm = document.querySelector("#login-form");


signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  // Authenticate the User
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.location="Principal.html";
    window.alert("Bienvenido");
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    //window.alert("Correo o contraseña incorrectos, corrige información");//comentarios
    window.alert("Mensaje : "+ errorMessage);
  });
})



$("#btn-reset").click(function(){
  
  var auth = firebase.auth();
  var email = $("#res-email").val();
  if(email != ""){
    auth.sendPasswordResetEmail(email).then(function(){
      window.alert("Se envio el cambio de contraseña exitosamente a tu correo");
      document.getElementById("res-email").value = "";
    }).catch(function(error){
      var errorCode = error.code;
      var errorMessage = error.message; 
      window.alert("Mesage : "+ errorMessage);
    });
  }else{
    window.alert("Campo vacio. Ingresa tu correo");
  }
});

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".cta")[0];
let modal = document.querySelectorAll(".modal")[0];
let ModalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click",function(e){
    e.preventDefault();
    ModalC.style.opacity="1";
    ModalC.style.visibility="visible";
    modal.classList.toggle("modal-close");
});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
        ModalC.style.opacity="0";
        ModalC.style.visibility="hidden";
    },850)
})