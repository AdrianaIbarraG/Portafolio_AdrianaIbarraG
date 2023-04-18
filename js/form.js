/** Campos */
let txtName = document.getElementById("txtName");
let txtPhone = document.getElementById("txtPhone");
let txtEmail = document.getElementById("txtEmail");
let txtMsg = document.getElementById("txtMsg");
const form = document.getElementById("formSend");
console.log(form);


let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto= document.getElementById("alertValidacionesTexto");

let isValid= true;
let idTimeout;

/** Botones*/
let btnSubmit = document.getElementById("btnSubmit");
let btnClear = document.getElementById("btnClear");

/** Validar */
function validarNombre() {
    if (txtName.value.length < 2) {
      return false;
    }
    return true;
  } //Validar Nombre
  
  function validarTelefono() {
    if (txtPhone.value.length == 0) {
      return false;
    }
    if (isNaN(txtPhone.value)) {
      console.log("no es un número");
      isValid = false;
      return false;
    }
    if (txtPhone.value.length > 10) {
      console.log("es mayor a 10 dígitos");
      isValid = false;
      return false;
    }
  
    if (txtPhone.value.length < 10) {
      console.log("es menor a 10 dígitos");
      isValid = false;
      return false;
    }
    txtPhone.style.border = "";
    return true;
  } //Validar teléfono
  
  function validateEmail() {
    const email = document.getElementById("txtEmail");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Validar el correo electrónico y limpia el input si es correcto
    if (emailRegex.test(email.value)) {
      return true;
    } else {
      return false;
    }
  }
  
  function validarMensaje() {
    // .replace quita los espacios
    if (txtMsg.value.replace(/\s+/g, "").length < 1) {
      return false;
    } else {
      return true;
    }
  }

  btnSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    isValid = true;
    console.log("Enviando");
    clearTimeout(idTimeout);
  
    /* Limpiar mensaje de alerta después del click en agregar */
    alertValidacionesTexto.innerHTML = "";
    alertValidaciones.style.display = "none";
  
    /* Validación de campos vacíos */
    txtName.value = txtName.value.trim(); //* Eliminar espacios - necesita click
  
    let lista = "Los siguientes campos deben ser llenados correctamente:<ul>";
  
    if (!validarNombre()) {
      txtName.style.border = "solid thin red";
      lista += "<li>Se debe escribir un nombre válido</li>";
      alertValidaciones.style.display = "block";
      isValid = false;
    } else {
      txtName.style.border = "";
    } // validar si el campo "Nombre" está vacio"
  
    if (!validateEmail()) {
      txtEmail.style.border = "solid thin red";
      lista +=
        "<li>Enter a valid Email Address with '@' and a domain; example: someone@example.com </li>";
      alertValidaciones.style.display = "block";
      isValid = false;
    } else {
      txtEmail.style.border = "";
    } // validar campo email
  
    if (!validarTelefono()) {
      txtPhone.style.border = "solid thin red";
      lista += "<li>Enter 10 digit Mobile Number</li>";
      alertValidaciones.style.display = "block";
      isValid = false;
    } else {
      txtPhone.style.border = "";
    } // validar campo telefono
  
    if (!validarMensaje()) {
      txtMsg.style.border = "solid thin red";
      lista +=
        "<li>Message should not be empty</li>";
      alertValidaciones.style.display = "block";
      isValid = false;
    } else {
      txtMsg.style.border = "";
    } // validar campo mensaje
  
    lista += "</ul>";
    alertValidacionesTexto.insertAdjacentHTML("beforeend", lista);
    idTimeout = setTimeout(function () {
      alertValidaciones.style.display = "none";
    }, 9000); //tiempo de mensaje

    //Enviar formulario
    if(isValid){
        form.submit();
    }

    console.log(form);
    //Limpia los campos cuando ya se enviaron
    if (isValid) {
      txtName.value = "";
      txtPhone.value = "";
      txtEmail.value = "";
      txtMsg.value = "";
    }
  }); //btnEnviar

  /* Botón limpiar */
btnClear.addEventListener("click", function (event) {
    event.preventDefault();
  
    /* Limpiar campos */
    txtName.value = "";
    txtPhone.value = "";
    txtEmail.value = "";
    txtMsg.value = "";
  }); // click btnClear
  
  /* Eliminar espacios en el inicio y fin del campo */
  txtPhone.addEventListener("blur", function (event) {
    event.preventDefault();
    txtPhone.value = txtPhone.value.trim();
  }); /* txtTelefono.blur */
  
  txtName.addEventListener("blur", function (event) {
    event.preventDefault();
    txtName.value = txtName.value.trim();
  }); /* txtName.blur */
  
  txtEmail.addEventListener("blur", function (event) {
    event.preventDefault();
    txtEmail.value = txtEmail.value.trim();
  }); /* txtMail.blur */

  
