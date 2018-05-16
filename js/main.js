(function() {
  'use strict';

  var panels = document.getElementsByClassName('panel');
  var spin = document.getElementById('spin');
  var text = document.getElementById('index');
  var sentence = document.getElementById('sentence');
  var comment = document.getElementById('comment')

  var timers = [];
  var stopCount = 0;
  var index = 0;

  var cards = [
    ['豊満な肢体の','ほとばしる情念の','吐出する情欲の','鮮やかな桃色の','粘膜同士の','快楽の果ての','いやらしい匂いの','はち切れそうなワイシャツの',
     '艶やかな'],

    ['谷間からこぼれ落ちる','禁じられた','許されざる','アワビのような','蜜のような','肉体を置き去りにする','悶絶する','倒錯する','グラマラスな',
  '芳しい','ふしだらな','たわやかな','生暖かい'],

  ];

  var words =
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
   '新卒一括採用',
   '一般性相対性理論',
   'プライマリーバランス',
   '尊王攘夷運動',
   '排他的経済水域'];

   var exam =
   ['自分で作る年金',
   '悪げな日',
   '真理を追求するアプローチ',
   '脂っこいものばかりたべるとね',
   'わかりやすいから',
   'どきどき',
   '部屋はいると渡す',
   'よくわからん',
   'メルカリはまだ',
   'ブルーベルたべよ',
   '日本だけ',
   'アインシュタイン',
   '財政均衡',
   '天皇万歳',
   '２００海里'
 ];


  function runSlot(n) {
    timers[n] = setTimeout(function(){
    panels[n].innerHTML = cards[n][Math.floor(Math.random() * cards[n].length)];
    runSlot(n);
  },20);
}

function runSlot_words(n) {
  timers[n] = setTimeout(function(){
  var search = words[Math.floor(Math.random() * words.length)];
  index = words.indexOf(search)
  panels[n].innerHTML = search;
  runSlot_words(n);
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
          comment.className = 'comment';
          text.innerHTML = words[index];
          spin.className = '';
          sentence.innerHTML = exam[index];

        }
      });
    }
  }
  initPanel();

  spin.addEventListener('click', function() {
    stopCount = 0;
    runSlot(0);
    runSlot(1);
    runSlot_words(2);
    this.className = 'hide';
    comment.className = 'comment hide';

    panels[0].className = "panel"
    panels[1].className = "panel"
    panels[2].className = "panel"

  })();

  })();
