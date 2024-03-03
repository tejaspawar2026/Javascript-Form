
function printError(id, msg) {
  document.getElementById(id).textContent = msg;
}

function validateForm() {
  var fname = document.getElementById("fname").value.trim();
  var dob = document.getElementById("dob").value.trim();
  var email = document.getElementById("email").value.trim();
  var mobno = document.getElementById("mobno").value.trim();
  var gender = document.getElementById("gender").value.trim();
  var occupation = document.getElementById("occupation").value.trim();
  var idproof = document.getElementById("idproof").value.trim();
  var idnumber = document.getElementById("idnumber").value.trim();
  var issuedautho = document.getElementById("issuedautho").value.trim();
  var isssuedstate = document.getElementById("isssuedstate").value.trim();
  var issueddate = document.getElementById("issueddate").value.trim();
  var expirydate = document.getElementById("expirydate").value.trim();

  document.querySelectorAll('.error-message').forEach(function(element) {
    element.textContent = '';
  });

  var isValid = true;

  if (fname === "") {
    printError("fnameError", "Please enter your name");
    isValid = false;
  }

  if (dob === "") {
    printError("dobError", "Please enter your date of birth");
    isValid = false;
  }

  /// Email validation
  if (email === "") {
    printError("emailError", "Please enter your email address");
    isValid = false;
  } else {
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      printError("emailError", "Please enter a valid email address");
      isValid = false;
    }
  }

  /// Mobile number validation
  if (mobno === "") {
    printError("mobnoError", "Please enter your mobile number");
    isValid = false;
  } else if (!/^\d{10}$/.test(mobno)) {
    printError("mobnoError", "Please enter a 10-digit mobile number");
    isValid = false;
  }

  if (gender === "Select Gender") {
    printError("genderError", "Please select your gender");
    isValid = false;
  }

  if (occupation === "") {
    printError("occupationError", "Please enter your occupation");
    isValid = false;
  }

  if (idproof === "Select Id Proof") {
    printError("idproofError", "Please select your ID proof");
    isValid = false;
  }

  if (idnumber === "") {
    printError("idnumberError", "Please enter your ID number");
    isValid = false;
  }

  if (issuedautho === "") {
    printError("issuedauthoError", "Please enter issued authority");
    isValid = false;
  }

  if (isssuedstate === "") {
    printError("isssuedstateError", "Please enter issued state");
    isValid = false;
  }

  if (issueddate === "") {
    printError("issueddateError", "Please enter issued date");
    isValid = false;
  }

  if (expirydate === "") {
    printError("expirydateError", "Please enter expiry date");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }

  return isValid;
}
