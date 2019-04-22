window.onload = function() { // waits for react to load up first before running js

  let pick = document.getElementById('pick');
  let drop = document.getElementById('drop');
  let autoPick = new google.maps.places.Autocomplete(pick);
  let autoDrop = new google.maps.places.Autocomplete(drop);

  $("#infoForm").onkeypress = function(e) { // prevents user from submitting with enter key
    var key = e.charCode || e.keyCode || 0;
    if (key == 13) {
      e.preventDefault();
    }
  }


  // when user clicks on Review button, it should have the input in diff. color for them to review
  // then it should prevent them from entering values in this state
  $('#review-button').click(function(e) {
    if($('input').attr('disabled')) { // active when user presses edit
      $('input').removeAttr('disabled'); // removes disable to allow edits
      $('input[type=text]').css('border', "2px solid black");
      $('#review-button').text("Review"); // indicates if they need to review info
    } else {
      $('input').prop('disabled', true); // prevents user from changing input
      $('#review-button').text("Edit"); // allows user to edit
    }
    $('input').each(function() { // alerts the user that all must be filled
      if($(this).val() == "") {
        $(this).css("border", "2px solid red");
        $('input').removeAttr('disabled'); // removes disable to allow edits
        $('#review-button').text("Review"); // indicates if they need to review info
        $('#warning').text("* Please fill out all the boxes.")
      } else {
        $(this).css("border", "2px solid green");
        $('#warning').empty();
      }
    })
  })

  $('#review-button').click(function() {
    let pattern=/^(.+)@(.+).com$/;
    let weight = $.isNumeric($("#weight").val());
    if($("#email").val().match(pattern) == null) { // checks if email format is valid
      $("#warning").append("<p id='valid-email' style='color: red'>* Please provide a valid email.</p>");
    } else {
      $('#valid-email').remove();
    }
    if(!weight || $("#weight").val() < 0) { // enter valid values for the weight
      $("#warning").append("<p id='valid-weight' style='color: red'>* Please give us the weight of the assets.</p>");
      $("#weight").css('border', "2px solid red");
    } else {
      $('#valid-weight').remove();
    }
  })

  // check inputs



}
