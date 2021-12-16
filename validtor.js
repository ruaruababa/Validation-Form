// Step 1: writting function print err

function printErr(elemID, hintMsg) {
  document.getElementById(elemID).innerHTML = hintMsg;
}

function validateForm(){
  // Step 2: Retrieving the values of form elements
  var name = document.contactForm.name.value;
  var email = document.contactForm.email.value;
  var mobile = document.contactForm.mobile.value;
  var country = document.contactForm.country.value;
  var gender = document.contactForm.gender.value;
  var hobbies = [];
  var checkboxes = document.getElementsByName("hobbies[]");
  // Get value hobbie
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      hobbies.push(checkboxes[i].value);
    }
  }

  // Step 3: Defining error variables with a default value
  var nameErr = (emailErr = mobileErr = countryErr = genderErr = true);

  // Validate name
  if (nameErr == "") {
    printErr("nameErr", "Pls enter your name");
  } else {
    var regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) === false) {
      printErr("nameErr", "Pls enter a valid your name");
    } else {
      printErr("nameErr", "");
      nameErr = false;
    }
  }

  // Validate email
  if (emailErr == "") {
    printErr("emailErr", "Pls enter your email");
  } else {
    var regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printErr("emailErr", "Pls enter a valid your email");
    } else {
      printErr("emailErr", "");
      emailErr = false;
    }
  }

  // Validate phone
  if (mobile == "") {
    printErr("mobileErr", "Pls enter your mobile number");
  } else {
    var regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    if (regex.test(mobile) === false) {
      printErr("mobileErr", "Pls enter a valid your mobile number");
    } else {
      printErr("mobileErr", "");
      mobileErr = false;
    }
  }

  // Validate Country
  if ((countryErr == "Select")) {
    printErr("countryErr", "Pls select your country");
  } else {
    printErr("countryErr", "");
    countryErr = false;
  }

  // Validate Gender
  if (gender == "") {
    printErr("genderErr", "Please select your gender");
  } else {
    printErr("genderErr", "");
    genderErr = false;
  }

  // Prevent the form from being submitted if there are any errors
  if ((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
      return false;
  }else{
      // Creating a string from input data for preview
      var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Country: " + country + "\n" +
                          "Gender: " + gender + "\n";
       if (hobbies.length) {
           dataPreview += "Hobbies: " + hobbies.join(", ");
       }
       alert(dataPreview);                   
  }
};