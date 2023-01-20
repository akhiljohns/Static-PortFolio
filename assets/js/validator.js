$(document).ready(function () {
    jQuery.validator.addMethod(
      "lettersonly",
      function (value, element) {
        return this.optional(element) || /^[a-z ]+$/.test(value);
      },
      "Letters only please"
    );
    jQuery.validator.addMethod(
      "minlength5",
      function (value, element) {
        return this.optional(element) || (value.trim().length >= 5);
      },
      "Minimum 5 characters without space"
    );
    $(".submit-form").validate({
      rules: {
        fname: {
          minlength5: true,
          lettersonly: true,
          required: true,
          minlength: 4,
        },
        femail: {
          required: true,
          email: true,
        },
        fsubject: {
          required: true,
          minlength: 10,
          minlength5: true,
          lettersonly: true,
        },
        fmessage: {
          minlength5: true,
          required: true,
          minlength: 10,
          maxlength: 200,
        },
      },
      messages: {
fname: {
          minlength: "Please Enter Your Full Name",
        },
        femail: {
          email: "Please enter a valid Email id",
        },
        fmessage: {
          minlength: "Its too short! minimum 10 characters",
          maxlength: "Oh no! it's too large",
        },
      },
      submitHandler: function (form) {
        console.log("True");
        console.log("in function submit");
        submit();
      },
    });
  });
    function submit() {
      $.ajax({
        url: "https://script.google.com/macros/s/AKfycbytwi8yQR-HwWro3KqDc34aHuMXxFk5XwNEJZXRlqoI5xokEOEjy9CMUvCE-kmTM6O1/exec",
        data: $(".submit-form").serialize(),
        method: "POST",
        success: function (response) {
          alert("Form submitted successfully");
          window.location.reload();
        },
        error: function (err) {
          alert("Something Error");
        },
      });
    }
  