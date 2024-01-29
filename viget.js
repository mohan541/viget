$(document).ready(function () {
  $(".close").hide();
  $(".bar-contact-details").hide();
  $(".bar-details").hide();
  $(".bar-contact-details-main").hide();
  $(".display-bar").click(function () {
    $(".nav-list").hide();
    $(".main").hide();
    $(".hr").hide();
    $(".viget-contact").hide();
    $(".viget-footer").hide();
    $(".signup-newsletter").hide();
    $(".viget-signup").hide();
    $(".close").show();
    $(".bar-contact-details-main").show();
    $(".bar-contact-details").show();
    // -----------------------------
    // $(".nav-bar").hide();
  });
  $(".close").click(function () {
    $(".nav-list").show();
    $(".main").show();
    $(".hr").show();
    $(".viget-contact").show();
    $(".viget-footer").show();
    $(".signup-newsletter").show();
    $(".close").hide();
    $(".bar-contact-details").hide();
  });
});
