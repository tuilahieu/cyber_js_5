function forLoop(destination, step, callback) {
  for (var i = 0; i < destination; i += step) {
    callback(i);
  }
}

// bài 1
var oddNumber = document.querySelector("#b1 .oddNumber");
var evenNumber = document.querySelector("#b1 .evenNumber");
function showListNumber() {
  //   for (var i = 0; i < 100; i++) {
  //     if (i % 2 === 0) {
  //       evenNumber.textContent += i + " ";
  //     } else {
  //       oddNumber.textContent += i + " ";
  //     }
  //   }
  forLoop(100, 1, function (i) {
    if (i % 2 === 0) {
      evenNumber.textContent += i + " ";
    } else {
      oddNumber.textContent += i + " ";
    }
  });
}

// bài 2
var resultB2 = document.querySelector("#b2 .result-bt2 span");

function counterNumber() {
  var counter = 0;
  //   for (var i = 0; i < 1000; i++) {
  //     if (i % 3 === 0) {
  //       counter++;
  //     }
  //   }
  forLoop(1000, 1, function (i) {
    if (i % 3 === 0) {
      counter++;
    }
  });
  resultB2.textContent = `Số các số nhỏ hơn 1000 chia hết cho 3 là: ${counter} số`;
}

//bài 3
var resultB3 = document.querySelector("#b3 .result-bt3 span");
function checkSum() {
  var total = 0;
  forLoop(10000, 1, function (i) {
    if (+total <= 10000) {
      total += i;
      resultB3.textContent = `Số nguyên dương nhỏ nhất là: ${i}`;
    }
  });
}

//bài 4
var resultB4 = document.querySelector("#b4 .result-bt4 span");
var numberX = document.getElementById("numberX");
var numberN = document.getElementById("numberN");

function caculateSum() {
  var result = 0;
  forLoop(+numberN.value, 1, function (i) {
    result += Math.pow(+numberX.value, i + 1);
  });
  resultB4.textContent = `Tổng lũy thừa: ${result}`;
}

//bài 5
var resultB5 = document.querySelector("#b5 .result-bt5 span");
var numberN2 = document.getElementById("numberN-2");

function caculatePow() {
  var pow = 1;
  forLoop(+numberN2.value, 1, function (i) {
    pow *= i + 1;
  });
  resultB5.textContent = `Lũy thừa của ${+numberN2.value} bằng ${pow}`;
}

// bài 6
var tagsName = document.getElementById("tags");
var resultB6 = document.querySelector("#b6 .result-bt6 span");

function renderTags() {
  var tagName = tagsName.value || "div";
  forLoop(10, 1, function (i) {
    if (i % 2 === 0) {
      resultB6.innerHTML += `
            <${tagName} class="tagEven">Thẻ ${tagName} chẵn</${tagName}>
        `;
    } else {
      resultB6.innerHTML += `
            <${tagName} class="tagOdd">Thẻ ${tagName} lẻ</${tagName}>
        `;
    }
  });
}

// bài 7
var numberN3 = document.getElementById("numberN3");
var resultB7 = document.querySelector("#b7 .result-bt7 span");

function printNumbers() {
  var data = +numberN3.value;
  if (data < 2) {
    resultB7.textContent = `Không có số nguyên tố`;
    return;
  }
  forLoop(data, 1, function (i) {
    if (i >= 1) {
      resultB7.textContent = `Khó quá em hông làm được T.T`;
    }
  });
}
