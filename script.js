function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var password = document.forms["myForm"]["password"].value;
  var email = document.forms["myForm"]["email"].value;
  var dob = document.forms["myForm"]["dob"].value;
  var agreement = document.forms["myForm"]["agreement"].checked;

  if (name.length < 4) {
    alert("Name must be at least 4 characters long.");
    return false;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    return false;
  }

  if (!email.endsWith(".com")) {
    alert("Email must end with '.com'.");
    return false;
  }

  var currentDate = new Date();
  var enteredDate = new Date(dob);
  var minAge = 17;
  enteredDate.setFullYear(enteredDate.getFullYear() + minAge);

  if (enteredDate > currentDate) {
    alert("You must be at least 17 years old to register.");
    return false;
  }

  if (!agreement) {
    alert("You must agree to the terms and conditions to proceed.");
    return false;
  }

  
  window.location.href = "home.html";
  return false; 
}
