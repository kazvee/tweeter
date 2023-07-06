$(document).ready(function() {
  $(".new-tweet textarea").on("input", function() {
    const textLength = $(this).val().length;
    console.log("Characters left: 😃", 140 - textLength);
  });
});