$(document).ready(function() {

  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputtedPlace = $("input#new-place-name").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedBestTime = $("input#new-besttime").val();
    var inputtedLocation = $("input#new-location").val();


    var newPlace = {place: inputtedPlace, landmark: inputtedLandmark, bestTime: inputtedBestTime, location: inputtedLocation};


    $("ul#places").append("<li><span class='place'>" + newPlace.place + "</span></li>");

    $("input#new-place-name").val("");
    $("input#new-landmark").val("");
    $("input#new-besttime").val("");
    $("input#new-location").val("");



    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.place);
      $(".location").text(newPlace.location);
      $(".landmark").text(newPlace.landmark);
      $(".besttime").text(newPlace.bestTime);


    });
  });
});
