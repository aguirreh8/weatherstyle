//Connect to Ebay API to get clothing suggestions
const getEbayProducts = (gender, occasion, article) => {
  $.get("/api/ebay/" + gender + "&" + occasion + "&" + article, function(data) {
      let i = 1;
      data.forEach(item => {
        if (i > 5) {return};
        const productContainer = $("<div class='product-container'>");
        const productPic = $("<img>");
        const productName = $("<p>");
        const productLink = $("<a target='_blank' class='product-link'>");

        productPic.attr("src", item.galleryURL[0]);
        productName.text(item.title[0]);
        productLink.attr("href", item.viewItemURL[0]);
        productLink.text("Go to Ebay");

        productContainer.append(productPic, productName, productLink);
        $("#ebayProducts").append(productContainer);
        i++;
      })
    })
}

// Start listening after page is loaded
$(document).ready(function() {
  // If name exists in local storage, then display on page.
  if (localStorage.getItem("name") === null) {
    $("#userName").text("Please login or register to fully use this app.");
  } else {
    $("#userName").text("Welcome, " + localStorage.getItem("name") + "!");
  };

  // Create new user
  $("#create").click(function(event) {
      event.preventDefault();
      // Create object to send to api
      const sendData = {
        name: $("#inputName").val(),
        password: $("#inputPassword4").val(),
        gender: $("#inputGender").find("option:selected").val(),
        email: $("#inputEmail4").val(),
        zip: $("#inputZip").val(),
      };

      // Set local storage to be used in next page
      localStorage.setItem('name', sendData.name);
      localStorage.setItem('gender', sendData.gender);
      localStorage.setItem('zip', sendData.zip);

      // Send data to server and go to main page
      $.post("/api/newUser", sendData)
      .then(function(data) {
        location.assign("/" + sendData.zip);
      })
  })

  // Display outfit based on weather
  $("#occasion").click(function(event) {
    event.preventDefault();
    // Empty carousel if something already exists
    $(".carousel-inner").empty();
    $("#ebayProducts").empty();
    // Get temperature from DOM
    const temp = parseInt($("#temp").text().replace("°", ""));
    // Get selected style from dropdown box
    const occasion = $("#occasionSelect").find("option:selected").text();
    
    // Create a temperature range to send to server
    let range = "";
    if (temp < 20) {
      range = "tempbl20";
    } else if (temp > 20 && temp < 44) {
      range = "tempbt2044";
    } else if (temp > 44 && temp < 65) {
      range = "tempbt4565"; 
    } else if (temp > 65 && temp < 85) {
      range = "tempbt6585";
    } else if (temp > 85) {
      range = "temp85up";
    }

    // Get gender from local storage
    const gender = localStorage.getItem("gender")

    // Get outfits from api. Create Carousel items to be shown to user
    $.get("/api/" + gender + "&" + range + "&" + occasion, function(data) {
      data.forEach((outfit, index) => {
        let carouselInner = "";
        
        if (index === 0) {
          carouselInner = $("<div class='carousel-item active'>");
        } else {
          carouselInner = $("<div class='carousel-item'>")
        }

        let photo = $("<img class='d-block w-60 outfit-img'>");
        photo.attr("src", outfit.photo);
        let outfitName = $("<div class='carousel-caption d-md-block' >");
        let outfitText = $("<h5 class='outfit-name'>");
        outfitText.text(outfit.outfit);
        outfitName.append(outfitText);

        carouselInner.append(photo, outfitName);
        $(".carousel-inner").append(carouselInner);
      })
    })
    
    // Get general items based on gender and occasion
    getEbayProducts(gender, occasion, "");
    // Get pants based on gender and occasion
    getEbayProducts(gender, occasion, "pants");
    // Get shoes based on gender and occasion
    getEbayProducts(gender, occasion, "shoes");

  })

  $("#loginBtn").click(function(event) {
    // Function check to if all fields have valid inputs. Continue if true, else notify the user
    const validateForm = () => {
      let isValid = true;
      //Check text bar inputs
      $(".validate").each(function() {
        if($(this).val() === "") {
          isValid = false;
        }
      });
      //return boolean
      return isValid;
    }

    if (validateForm()) {
      event.preventDefault();
      const email = $("#loginEmail").val();
      const password = $("#loginPassword").val();

      console.log(email + " " + password);

      $.get("/api/users/" + email + "&" + password, function(data) {
        console.log(data);
        const resultLength = 1;
        if (data.length < resultLength) {
          alert("No user information found. Please try again");
        } else {
          localStorage.setItem("name", data[0].name);
          localStorage.setItem("gender", data[0].gender);
          localStorage.setItem("zip", data[0].zip);
          location.assign("/" + data[0].zip); 
        }
      }) 
  } else {
    alert("Please complete the login form.")
  }
  })

  $("#logoutBtn").click(function(event) {
    event.preventDefault();
    localStorage.clear();
    window.location.reload();
  }) 
})

