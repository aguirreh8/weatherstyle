$("#create").click(function(event) {
  event.preventDefault();
  const sendData = {
    name: $("#inputName").val(),
    password: $("#inputPassword4").val(),
    gender: $("#inputGender").find("option:selected").text(),
    email: $("#inputEmail4").val(),
    zip: $("#inputZip").val(),
  };

  $.post("/api/newUser", sendData)
  .then(function(data) {
    console.log("Check database");
  })
 
  $("#name-display").text(name);

  sessionStorage.clear();

  sessionStorage.setItem("name", name);
  sessionStorage.setItem("email", email);
  sessionStorage.setItem("password", password);
  sessionStorage.setItem("gender", gender);
  sessionStorage.setItem("zip", zip);

});

 $("#name-display").text(sessionStorage.getItem("name"));


