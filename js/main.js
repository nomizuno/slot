(function() {
  'use strict';

  var panels = document.getElementsByClassName('panel');
  var spin = document.getElementById('spin');
  var text = document.getElementById('index');
  var sentence = document.getElementById('sentence');
  var comment = document.getElementById('comment');
  var button = document.getElementById('button');

  var timers = [];
  var stopCount = 0;
  var index = 0;

  var cards = [
    ['豊満な肢体の','ほとばしる情念の','吐出する情欲の','鮮やかな桃色の','粘膜同士の','快楽の果ての','いやらしい匂いの','はち切れそうなワイシャツの',
     '艶めく','抑えきれない衝動の'],

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
   ['自分で作る年金。現役時代に掛金を納め、自身で運用し、損益が反映されたものが老後の受給額として支払われる。個人型、企業型がある。',
   '六星占術でよくないとされる運気の流れ。運命盤の運気のうち「陰影」、「停止」、「減退」があてはまる。宿命大殺界というとてつもなくやばそうな時期もあるらしい。',
   '真理を論理的に追求する。古い常識を疑い、新しい価値観、世界観を創造する学問。',
   '体を動かすエネルギー源となるが、使われなかった分は皮膚の下の脂肪組織や肝臓に蓄えられる。蓄えられる場所によって皮下脂肪、内臓脂肪とよばれる。内臓脂肪は生活習慣病気を引き起こす原因となる。',
   '学歴が職業、所得、社会的地位を決定する度合いが強い社会。学歴が人の能力を表すとは限らないが、これに文句をいっている暇があったら何かしらで成果を出しなさい。',
   '縄文時代に作られた土器。砕く、煮る。',
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
          button.className = '';
          sentence.innerHTML = exam[index];

        }
      });
    }
  }

  runSlot(0);
  runSlot(1);
  runSlot_words(2);

  initPanel();

  spin.addEventListener('click', function() {
    stopCount = 0;
    runSlot(0);
    runSlot(1);
    runSlot_words(2);
    button.className = 'hide';
    comment.className = 'comment hide';

    panels[0].className = "panel"
    panels[1].className = "panel"
    panels[2].className = "panel"

  })();

  twttr.widgets.createShareButton(
  'https://dev.twitter.com/',
  document.getElementById('container'),
  {
    text: 'Hello World'
  }
);

  })();
