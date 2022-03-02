$("document").ready(() => {
  $("h1").html("light mode");
  $(".container").css({
    "background-color": "#f0f8ff",
  });
  $("img").click(() => {
    if ($("h1").html() == "light mode") {
      $("img").attr("src", "lamp.png");
      $("h1").html("dark mode");
      $("h1").css({
        color: "#fff",
      });
      $(".container").css({
        "background-color": "#363636",
      });
      $("body").css({
        "background-color": "#000",
      });
    } else {
      $("img").attr("src", "moon.png");
      $("h1").html("light mode");
      $("h1").css({
        color: "#000",
      });
      $(".container").css({
        "background-color": "#f0f8ff",
      });
      $("body").css({
        "background-color": "#fff",
      });
    }
  });
});
