$("#create").click(function(event) {
  event.preventDefault();
  const sendData = {
    name: $("#inputEmail4").val(),
    password: $("#inputPassword4").val(),
    gender: $("#inputStyle").find("option:selected").text(),
    email: $("#inputEmail4").val(),
    zip: $("#inputZip").val(),
  };

  $.post("/api/newUser", sendData)
  .then(function(data) {
    console.log("Check database");
  })
})