$(document).ready(function() {
  const icecreamFlavors = ["chocolate", "vanilla", "strawberry", "cookie dough", "hazelnut"];
  icecreamFlavors.forEach(function(icecreamFlavor) {
    $("#icecream").append("<li>" + icecreamFlavor + "</li>")
  });
});