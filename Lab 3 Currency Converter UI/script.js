
function Convert() {
currency = document.getElementById("money1").value;
  x = currency * 1376.02;
  alert("That is " + x + " in South Korean Won.");

currency = document.getElementById("money2").value;
  x = currency / 1376.02;
  alert("That is " + x + " in US Dollars.");
}
