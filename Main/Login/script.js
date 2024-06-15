function togglePass() {
  var password = document.getElementById("pass");
  if (password.type ==="password") {
    password.type ="text";
  } else {
    password.type ="password";
  }
}

function togglePasswords() {
            var pass = document.getElementsByName('pwsd');
            for (var i = 0; i < pass.length; i++) {
                if (pass[i].type === "password") {
                    pass[i].type = "text";
                } else {
                    pass[i].type = "password";
                }
            }
        }

const wrapper = document.querySelector('.wrapper');
const signupLink = document.querySelector('.signup_link');
const loginLink = document.querySelector('.signin_link');


function signUp(){
    wrapper.classList.add('active');
}

function signIn(){
    wrapper.classList.remove('active');
}


const edishing = document.querySelector('.blur');
const lagay = document.querySelector('.labo');
const alis = document.querySelector('.signup_link');


function lumabo(){
    edishing.classList.add('active');
}

function yyff (){
    wrapper.classList.remove('active');
}


document.getElementById("back").addEventListener("click", () => {
  history.back();
});