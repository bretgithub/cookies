// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-crumbled").on("click", function(event) {
    let id = $(this).data("id");
    let newCrumbled = $(this).data("newcrumbled");

    let newCrumbledState = {
      crumbled: newCrumbled
    };

    // Send the PUT request.
    $.ajax("/api/cookies/" + id, {
      type: "PUT",
      data: newCrumbledState
    }).then(function() {
      console.log("changed crumbled to", newCrumbled);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newCookie = {
      cookie_flavor: $("#ca")
        .val()
        .trim()
    };

    console.log(newCookie);

    // Send the POST request.
    $.ajax("/api/cookies", {
      type: "POST",
      data: newCookie
    }).then(function() {
      console.log("added new cookie");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-cookie").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/cookies/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted cookie", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
