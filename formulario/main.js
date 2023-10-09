
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
  //iteramos el arreglo  
  inputs.forEach(name => {
    //la fabrica genera el input
    let input = getInput(name);
    //lo guardamos
    localStorage.setItem(input.id.trim(), input.value.trim())
  });
  alert('Cuenta creada, exitosamente')
}
/**
 *Valida el formulario 
 *
 */
function verifyAccount(event) {
  //evitamos que recargue la pagina 
  event.preventDefault();

  //usamos la fabrica para generar los inputs
  var password = getInput('password').value
  var email = getInput('email').value

  //comparamos si las credenciales coinciden 
  //si contraseña y email son iguales a los del localstorage entonces vete a home.html
  if (password.trim() === localStorage.password && email.trim() === localStorage.email) {
    window.location.href = "./home.html";
  } else {
    //limpia el formulario
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
