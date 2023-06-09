// main.js
//Login Page

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const enrollmentButton = document.getElementById("enrollment");

enrollmentButton.addEventListener("click", (e) => {
  console.log("Clicking this ");
})

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  const loginData = {
    username: username,
    password: password,
  }

  fetch('http://localhost:9000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginData)
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("You have successfully logged in.");
        // window.location.href = "/home";
      }
      // else {
      //   // loginErrorMsg.style.opacity = 1;
      // }
    })
    .catch(error => {
      console.log(error);
    });

  if (username === "user" && password === "user") {
    // location.reload();
    location.href = './enrollment.html';
  } else {
    loginErrorMsg.style.opacity = 1;
  }
})

//Enrollment page

function showForm() {
  var selopt = document.getElementById("opts").value;
  if (selopt == 1) {
    document.getElementById("f1").style.display = "block";
    document.getElementById("f2").style.display = "none";
    document.getElementById("f3").style.display = "none";
    document.getElementById("f4").style.display = "none";
  }
  if (selopt == 2) {
    document.getElementById("f2").style.display = "block";
    document.getElementById("f1").style.display = "none";
    document.getElementById("f3").style.display = "none";
    document.getElementById("f4").style.display = "none";
  }
  if (selopt == 0) {
    document.getElementById("f2").style.display = "none";
    document.getElementById("f1").style.display = "none";
    document.getElementById("f4").style.display = "none";
  }
  if (selopt == 3) {
    document.getElementById("f2").style.display = "none";
    document.getElementById("f1").style.display = "none";
    document.getElementById("f3").style.display = "block";
    document.getElementById("f4").style.display = "none";
  }

  if (selopt == 4) {
    document.getElementById("f2").style.display = "none";
    document.getElementById("f1").style.display = "none";
    document.getElementById("f3").style.display = "block";
    document.getElementById("f4").style.display = "block";
  }
}
