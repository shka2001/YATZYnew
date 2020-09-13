// JavaScriptがHTMLに尋ねる。
document.addEventListener("DOMContentLoaded", function (event) {
  //入力された数字を取る。
  //上のフォーマットの部分を計算し、合計を出し、合計が63以上なボーナスを表示する。
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

  //下のフォーマットの部分を計算し、表全体の合計を出す。
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

  //サイコロの色をチェックボックスクリックで透明に変える。
  let checkboxDicesArr = document.getElementsByClassName("classcheckboxdice");
  let imgDicesArr = document.getElementsByClassName("dices");

  for (let index = 0; index < checkboxDicesArr.length; index++) {
    let checkboxDice = checkboxDicesArr[index];
    let imgDice = imgDicesArr[index];

    checkboxDice.addEventListener("click", function (event) {
      //opacityの機能は、、0は透明。１は透明じゃない。id+style+cssの機能コードを書く。
      if (checkboxDice.checked) {
        imgDice.style.opacity = 0.3;
      } else {
        imgDice.style.opacity = 1.0;
      }
    });
  }

  let rollDice = document.getElementById("rollButton");
  rollDice.addEventListener("click", function (event) {
    for (diceIdNumber = 1; diceIdNumber <= 5; diceIdNumber++) {
      let diceNumber = Math.floor(Math.random() * 6 + 1);
      let imgDiceRoll = document.getElementById("dice" + diceIdNumber);
      imgDiceRoll.src = "img/dice" + diceNumber + ".png";
    }
  });
});
