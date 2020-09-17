// JavaScriptがHTMLに尋ねる。
document.addEventListener("DOMContentLoaded", function (event) {
  let checkboxoOpacity = document.getElementsByClassName("classcheckboxdice");
  for (const box of checkboxoOpacity) {
    box.style.opacity = 0.0;
  }

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

  //サイコロの色をチェックボックスクリックで透明に一つずつ変える。
  let checkboxDicesArr = document.getElementsByClassName("classcheckboxdice");
  let imgDicesArr = document.getElementsByClassName("dices");

  for (let index = 0; index < checkboxDicesArr.length; index++) {
    let checkboxDice = checkboxDicesArr[index];
    let imgDice = imgDicesArr[index];

    checkboxDice.addEventListener("click", function (event) {
      //opacityの機能は、、0は透明。１は透明じゃない。id+style+cssの機能コードを書く。
      if (checkboxDice.checked) {
        imgDice.style.opacity = 1.0;
      } else {
        imgDice.style.opacity = 0.3;
      }
    });
  }
  //ボタンを押すとサイコロを振る。
  let rollDice = document.getElementById("rollButton");

  rollDice.addEventListener("click", function (event) {
    let checkboxoOpacity = document.getElementsByClassName("classcheckboxdice");
    for (const box of checkboxoOpacity) {
      box.style.opacity = 1.0;
    }

    //サイコロを振れる残りの回数の計算とその表示。
    //サイコロを振れる残りの回数をHTMLから3を得る。
    let diceThrowsLeft = document.getElementById("rollDiceLeft").innerHTML;
    //取ってきた回数を数字にする。
    let diceThrowsLeftNumber = parseInt(diceThrowsLeft);
    //残りの回数が0になったら、ボタンの最初のクリックイベントに戻る。
    if (diceThrowsLeftNumber == 0) {
      return;
    }
    //得た数字から残りのサイコロを振れる回数を引いていく。
    diceThrowsLeftNumber--;
    //引いた残りの振れる回数を数字をHTMLに表示する。
    document.getElementById("rollDiceLeft").innerHTML = diceThrowsLeftNumber;

    let checkboxDicechoiceArr = document.getElementsByClassName(
      "classcheckboxdice"
    );

    for (
      let checkboxDicechoice = 0;
      checkboxDicechoice < checkboxDicechoiceArr.length;
      checkboxDicechoice++
    ) {
      if (checkboxDicechoiceArr[checkboxDicechoice].checked == false) {
        let diceCheckboxDicechoice = Math.floor(Math.random() * 6 + 1);
        let imgDiceRollChoice = document.getElementById(
          "dice" + (checkboxDicechoice + 1)
        );
        imgDiceRollChoice.src = "img/dice" + diceCheckboxDicechoice + ".png";
      }
    }
    // for (diceIdNumber = 1; diceIdNumber <= 5; diceIdNumber++) {
    //   let diceNumber = Math.floor(Math.random() * 6 + 1);
    //   let imgDiceRoll = document.getElementById("dice" + diceIdNumber);
    //   imgDiceRoll.src = "img/dice" + diceNumber + ".png";
    // }
  });

  //ul内に入力された情報のリスト内からクリックで削除する。
  let list = document.getElementById("ul_list");
  list.addEventListener("click", function (event) {
    //event.target.remove();
    event.target.classList.add("removed");
  });

  //ボタンの情報を取ってくる。
  let btnSend = document.getElementById("btnSend");
  //ボタンを押したらイベント。
  btnSend.addEventListener("click", function (event) {
    //インプットから入力された情報を取ってくる。
    let message = document.getElementById("chatboxMessage");

    //行を作る。そこへ入力された情報を表示。
    let new_message = document.createElement("li");
    new_message.innerHTML =
      '<input type="checkbox" />' +
      message.value +
      '<input type="button" value="remove" />';

    list.appendChild(new_message);
  });
});
