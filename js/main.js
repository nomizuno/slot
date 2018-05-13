(function() {
  'use strict';

  var panels = document.getElementsByClassName('panel');
  var spin = document.getElementById('spin');

  var cards = [
    ['甘い','ほとばしる情念の','情欲の','鮮やかな桃色の','粘膜同士の'],

    ['谷間からこぼれ落ちる','禁じられた','許されざる','権化のような','蜜のような'],

    ['確定拠出年金','大殺界','テキサスホールデム','中性脂肪','学歴社会','縄文土器','敷金・礼金'],
  ];

  function runSlot(n) {
    panels[n].innerHTML = cards[n][Math.floor(Math.random() * cards[n].length)]
  }

  spin.addEventListener('click', function() {
    runSlot(0);
    runSlot(1);
    runSlot(2);
  })();

  })();
