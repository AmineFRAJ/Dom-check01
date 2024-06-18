 

var plusArray = Array.from(document.querySelectorAll(".fa-plus-circle"));
var minusArray = Array.from(document.querySelectorAll(".fa-minus-circle"));
var cardArray = Array.from(document.querySelectorAll(".card"));
var favsArray = Array.from(document.querySelectorAll(".fa-heart"));
var trashArray = Array.from(document.querySelectorAll(".fa-trash-alt"));

//plus
for (let plusButton of plusArray) {
  plusButton.addEventListener("click", function () {
    plusButton.nextElementSibling.innerHTML++;
    total();
  });
}
//Minus
for (let minusButton of minusArray) {
  minusButton.addEventListener("click", function () {
    if (minusButton.previousElementSibling.innerHTML > 0)
      minusButton.previousElementSibling.innerHTML--;
    total();
  });
}

//Remove
for (let card of cardArray) {
  let trashButton = card.querySelector(".fa-trash-alt");
  if (trashButton) {
    
    trashButton.addEventListener("click", function () {
      card.remove();
      total();
    });
  }
}

//2 eme methode

// for (let trashButton of trashArray) {
//     trashButton.addEventListener("click", function () {
//         trashButton.closest('.card').remove();
//      });
//    }

//    Favourites

for (let favButton of favsArray) {
  favButton.addEventListener("click", function () {
    if (favButton.style.color != "red") {
      favButton.style.color = "red";
      favButton.style.transform = "scale(1.5)";
    } else {
      favButton.style.color = "black";
      favButton.style.transform = "scale(1)";
    }
  });
}

// total price
function total() {
  var totalPrice = 0;
  var cardList = Array.from(document.querySelectorAll(".card")); // nouveau tableau pour les cartes pour les updates
  for (let card of cardList) {
    let price = parseInt(card.querySelector(".price").textContent);
    console.log("le prix egal=" + price);
    let qty = parseInt(card.querySelector(".quantity").textContent);
    console.log("la qté =" + qty);
    totalPrice += price * qty;
    console.log("le total=" + totalPrice);
  }
  var sum = document.getElementById("Total");
  sum.innerHTML = totalPrice;
}
