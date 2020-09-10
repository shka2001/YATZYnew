// JavaScriptがHTMLに尋ねて、準備ができたか返事を得る。
document.addEventListener("DOMContentLoaded", function (event) {
  let calc_button = document.querySelectorAll("#Summa1");
  calc_button[0].addEventListener("click", function (event) {
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
      let player1bonus = 30;
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
