// JavaScriptがHTMLに尋ねて、準備ができたか返事を得る。

function loopinput() {
  let sum = 0;
  var Player1Inputs = document.getElementsByClassName("upPlayer1");
  for (let input of Player1Inputs) {
    sum += parseInt(input.value);
  }

  if (sum > 63) {
    sum += 50;
    let bonus;
    document.querySelector("#player1Bonus").innerHTML = 50;
  }
  document.querySelector("#player1Sum").innerHTML = sum;
}

document.addEventListener("DOMContentLoaded", function (event) {
  //let calc_button = document.querySelectorAll("#Summa1");

  var OnesPlayer1 = document.getElementById("OnesPlayer1");
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
  });

  let calc_button = document.querySelectorAll("#Summa1");
  calc_button[0].addEventListener("chenge", function (event) {
    //HTMLからボックスの値を文字で取ってくる。querySelect...のときは、(.名前)をする。CSSも。配列ができた。
    let player1Elements = document.querySelectorAll(".upPlayer1");
    console.log(player1Elements);

    //配列のボックスを作って文字を数字にし全て終えるまでループする。
    let player1Numbers = [0, 0, 0, 0, 0, 0];
    for (let index = 0; index < player1Numbers.length; index++) {
      //文字を数字にする。
      player1Numbers[index] = parseInt(player1Elements[index].value);
    }
    //数字化した配列を合計する。

    let player1Sum = 0;
    for (let index2 = 0; index2 < player1Numbers.length; index2++) {
      player1Sum += player1Numbers[index2];
      console.log(player1Sum);
    }

    //ボーナスをチェック。
    if (player1Sum > 63) {
      let player1bonus = 50;
      console.log(player1bonus);
      //HTMLから一つ要素を取ってきてHTML内の空欄部分に表示する。
      document.querySelector("#player1Bonus").innerHTML = player1bonus;
      document.querySelector("#player1Sum").innerHTML =
        player1Sum + player1bonus;
    } else {
      let player1bonus = 0;
      document.querySelector("#player1Bonus").innerHTML = player1bonus;
      document.querySelector("#player1Sum").innerHTML =
        player1Sum + player1bonus;
    }
  });
});
