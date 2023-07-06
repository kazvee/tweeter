$(document).ready(function() {
  const maxTextLength = 140;
  $(".new-tweet textarea").on("input", function() {
    const textLength = $(this).val().length;
    const charactersRemaining = maxTextLength - textLength;
    $(this).parent().find(".counter").text(charactersRemaining);
    $(this).parent().find(".counter").toggleClass("warning", charactersRemaining < 0);
  });
});