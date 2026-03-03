const donateInput = document.getElementById("donate-input");
const donateBtn = document.getElementById("donate-btn");

const amountButtons = document.querySelectorAll(".amount-btn");
amountButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const amount = button.getAttribute("data-amount");
    donateInput.value = amount;
  });
});
donateBtn.addEventListener("click", function () {
  const amount = donateInput.value;
  if (amount !== "") {
    alert("Thank you for donating " + amount + " Taka!");
  } else {
    alert("Please enter an amount first.");
  }
});

const emailInput = document.getElementById("email");
document.getElementById("subscribe-btn").addEventListener("click", function () {
  const email = emailInput.value;
  if (email !== "") {
    alert("Thanks to " + email + " for subscribing Bangladesh 2.0.");
  } else {
    alert("Please enter your email to subscribe Bangladesh 2.0.");
  }
  // console.log('subscribe-btn is clicked');
});
