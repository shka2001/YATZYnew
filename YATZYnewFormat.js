// JavaScriptがHTMLに尋ねる。
document.addEventListener("DOMContentLoaded", function (event) {
  //入力された数字を取る。

  function loopinput() {
    let sum = 0;
    var upPlayer1Inputs = document.getElementsByClassName("upPlayer1");
    for (let input of upPlayer1Inputs) {
      sum += parseInt(input.value);
    }

    if (sum > 63) {
      document.querySelector("#player1Bonus").innerHTML = 50;
    }
    document.querySelector("#player1Sum").innerHTML = sum;
  }

  let upPlayer1InputNumbers = document.getElementsByClassName("upPlayer1");
  for (let upPlayer1InputNumbersArr of upPlayer1InputNumbers) {
    upPlayer1InputNumbersArr.addEventListener("change", function (event) {
      loopinput();
    });
  }

  //短い方法で下のコードをまとめて上に書いた。
  /*var OnesPlayer1 = document.getElementById("OnesPlayer1");
  OnesPlayer1.addEventListener("change", function (event) {
    loopinput();
  });
  var TowsPlayer1 = document.getElementById("TowsPlayer1");
  TowsPlayer1.addEventListener("change", function (event) {
    loopinput();
  });
  var threesPlayer1 = document.getElementById("threesPlayer1");
  threesPlayer1.addEventListener("change", function (event) {
    loopinput();
  });
  var FoursPlayer1 = document.getElementById("FoursPlayer1");
  FoursPlayer1.addEventListener("change", function (event) {
    loopinput();
  });
  var FivesPlayer1 = document.getElementById("FivesPlayer1");
  FivesPlayer1.addEventListener("change", function (event) {
    loopinput();
  });
  var SixesPlayer1 = document.getElementById("SixesPlayer1");
  SixesPlayer1.addEventListener("change", function (event) {
    loopinput();
  });'´*/

  function calcDownBox() {
    let total = 0;
    let upSum = parseInt(document.getElementById("player1Sum").innerHTML);
    let bonus = parseInt(document.getElementById("player1Bonus").innerHTML);

    var downPlayer1Inputs = document.getElementsByClassName("downPlayer1");
    for (let downInput of downPlayer1Inputs) {
      upSum += parseInt(downInput.value);
    }

    total += upSum;
    total += bonus;
    console.log(total);
    document.querySelector("#player1Total").innerHTML = total;
  }

  let downPlayer1InputNumbers = document.getElementsByClassName("downPlayer1");
  for (let downPlayer1InputNumbersArr of downPlayer1InputNumbers) {
    downPlayer1InputNumbersArr.addEventListener("change", function (event) {
      calcDownBox();
    });
  }
  let checkboxDice1 = document.getElementById("checkboxdice1");
  checkboxDice1.addEventListener("click", function (event) {
    let imgDice1 = document.getElementById("dice1");

    if (checkboxDice1.checked) {
      //opacityの機能は、、0は透明。１は透明じゃない。id+style+cssの機能コードを書く。
      imgDice1.style.opacity = 0.3;
    } else {
      imgDice1.style.opacity = 1.0;
    }
  });
});
