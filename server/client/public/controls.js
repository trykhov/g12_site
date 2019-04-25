 // waits for react to load up first before running js
window.onload = function() {

  $("#infoForm").onkeypress = function(e) { // prevents user from submitting with enter key
    var key = e.charCode || e.keyCode || 0;
    if (key == 13) {
      e.preventDefault();
    }
  }

  $('#phone').prop('placeholder', "123-456-7890");

  let inputsFilled = {
    name: false, email: false, phone: false, pick: false,
    drop: false, weight: false, price: false
  };

  $('#review-button').click(function() {

    $('#valid-email').remove();
    $('#valid-weight').remove();
    $('#valid-price').remove();
    $('#valid-phone').remove();

    $('input').each(function() { // checks if each input is empty
      let key = $(this).attr('id');
      if($(this).val() == "") {
        $(this).css('border', "2px solid red");
        inputsFilled[key] = false;
        $('#warning').text('* Please fill in all the boxes.')
      } else {
        inputsFilled[key] = true;
        inputsFilled[$(this).attr('id')] = true;
        $(this).css('border', '2px solid green');
        $('#warning').text("");
      }
    });

    // check email formatInfo
    let pattern=/^(.+)@(.+).com$/;
    if($("#email").val().match(pattern) == null) { // checks if email format is valid
      $("#warning").append("<p id='valid-email' style='color: red'>* Please provide a valid email.</p>");
      $("#email").css('border', "2px solid red");
      inputsFilled.email = false;
    } else {
      inputsFilled.email = true;
      $('#valid-email').remove();
    };

    // check weight format
    let weight = $.isNumeric($("#weight").val());
    if(!weight || $("#weight").val() < 0) { // enter valid values for the weight
      $("#warning").append("<p id='valid-weight' style='color: red'>* Please give us the weight of the assets.</p>");
      $("#weight").css('border', "2px solid red");
      inputsFilled.weight = false;
    } else {
      inputsFilled.weight = true;
      $('#valid-weight').remove();
    };

    // check cost of assets
    let price = $.isNumeric($("#price").val());
    if(!price || $("#price").val() < 0) { // check if price of assets are valid values
      $("#warning").append("<p id='valid-price' style='color: red'>* Please provide us a cost of the assets.</p>");
      $("#price").css('border', "2px solid red");
      inputsFilled.price = false;
    } else {
      inputsFilled.price = true;
      $('#valid-price').remove();
    };

    // check phone
    let phonePattern = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
    if($("#phone").val().match(phonePattern) == null) {
      $("#warning").append("<p id='valid-phone' style='color: red'>* Please provide a valid phone number.</p>");
      $("#phone").css('border', "2px solid red");
      inputsFilled.phone = false;
    } else {
      inputsFilled.phone = true;
      $('#valid-phone').remove();
    };

    if($('#review-button').text() == "Edit") {
      $('input').removeAttr('disabled');
      $('#review-button').text("Review");
      $('form').remove("#submit-button");
    } else {
      $('input').prop('disabled', true);
      $('#review-button').text("Edit");
      $('form').append("<button id='submit-button' type='submit'>Submit</button>");
    }


    for(let i in inputsFilled) {
      if(!inputsFilled[i]) {
        $('input').removeAttr('disabled');
        $('#review-button').text("Review");
        $('form').remove("#submit-button");
        break;
      }
    }
  })
}
