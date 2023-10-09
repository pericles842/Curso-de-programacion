
var inputs = ['name', 'last_name', 'email', 'password']

/**
 *Captura los id en los formularios
 *
 * @param {*} id string
 */
function getInput(id) {
  let input = document.getElementById(id)
  return input
}
/**
 *Crea la cuenta
 *
 */
function createAccount() {
  inputs.forEach(name => {
    let input = getInput(name);
    localStorage.setItem(input.id.trim(), input.value.trim())
  });
  alert('Cuenta creada, exitosamente')
}
/**
 *Valida el formulario 
 *
 */
function verifyAccount(event) {

  event.preventDefault();

  password = getInput('password').value
  email = getInput('email').value

  if (password.trim() === localStorage.password && email.trim() === localStorage.email) {
    window.location.href = "./home.html";
  } else {
    password = ''
    email = ''
    alert('El correo o la contraseña no coinciden, verificar')
  }
}

/**
 *Setae los valores en el  hombre
 *
 */
function setValuesInHome() {
  var user = document.getElementById("username");
  user.innerHTML = ` Hola ${localStorage.name} ${localStorage.last_name}`;
}
