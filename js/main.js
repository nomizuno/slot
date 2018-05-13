(function() {
  'use strict';

  var panels = document.getElementsByClassName('panel');
  var spin = document.getElementById('spin');

  var timers = [];
  var stopCount = 0;

  var cards = [
    ['豊満な肢体の','ほとばしる情念の','吐出する情欲の','鮮やかな桃色の','粘膜同士の'],

    ['谷間からこぼれ落ちる','禁じられた','許されざる','アワビのような','蜜のような'],

    ['確定拠出年金',
     '大殺界',
     '西洋哲学',
     '中性脂肪',
     '学歴社会',
     '縄文土器',
     '敷金・礼金',
     'コールオプション',
     '東証一部上場企業',
      '眼精疲労',
      '新卒一括採用']
  ];


  function runSlot(n) {
    timers[n] = setTimeout(function(){
    panels[n].innerHTML = cards[n][Math.floor(Math.random() * cards[n].length)];
    runSlot(n);
  },20);
}

  function initPanel(){
    var i;
    for (i=0; i< panels.length; i++){
    panels[i].addEventListener('click',function(){
        clearTimeout(timers[this.dataset.index]);
        stopCount++;
        this.className = 'panel';
        if (stopCount === panels.length) {
          stopCount = 0;
          // checkResults();
          spin.className = '';
        }
      });
    }
  }
  initPanel();

  spin.addEventListener('click', function() {
    runSlot(0);
    runSlot(1);
    runSlot(2);
    this.className = 'inactive';
    panels[0].className = "panel inactive"
    panels[1].className = "panel inactive"
    panels[2].className = "panel inactive"

  })();

  })();
