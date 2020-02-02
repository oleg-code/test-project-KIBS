
(function validateEmailFild(){
  var email = document.getElementById("emailAddress");
  var pattern = {
    email: /^\d{5}$/ //whatever pattern can be used
  }

  function validateEmailAddress(fild, regex) {

    if (regex.test(fild.value)) {
      if (message.classList.contains("hide")) {
        message.classList.replace("show", "hide");
      }
    } else {
      message.classList.add("show");
    }
  }

email.addEventListener('keyup', function (e) {
    validateEmailAddress(e.target, pattern[e.target.attributes.name.value]);
  });


} )();