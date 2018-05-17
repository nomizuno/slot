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
     '艶めく','抑えきれない衝動の','滴る液体の','溢れそうな喘ぎ声の','破れたストッキングの'],

    ['谷間からこぼれ落ちる','禁じられた','許されざる','アワビのような','蜜のような','肉体を置き去りにする','悶絶する','倒錯する','グラマラスな',
  '芳しい','ふしだらな','たわやかな','生暖かい','浸み出してくる','生い茂る','いやらしく指先でなぞる'],

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
   '知覚過敏',
   'ブロックチェーン',
   '人工知能',
 ];

   var exam =
   ['自分で作る年金。現役時代に掛金を納め、自身で運用し、損益が反映されたものが老後の受給額として支払われる。個人型、企業型がある。',
   '六星占術でよくないとされる運気の流れ。運命盤の運気のうち「陰影」、「停止」、「減退」があてはまる。宿命大殺界というとてつもなくやばそうな時期もあるらしい。結婚、転職、引っ越しはしちゃいけないとのことだが、君の人生は君が決めてくれ。',
   '真理を論理的に追求する。古い常識を疑い、新しい価値観、世界観を創造する学問。神は死んだ。',
   '体を動かすエネルギー源となるが、使われなかった分は皮膚の下の脂肪組織や肝臓に蓄えられる。蓄えられる場所によって皮下脂肪、内臓脂肪とよばれる。内臓脂肪は生活習慣病気を引き起こす原因となる。やーい、お前のかあちゃん中性脂肪〜',
   '学歴が職業、所得、社会的地位を決定する度合いが強い社会。学歴が人の能力を表すとは限らないが、これに文句をいっている暇があったら何かしらで成果を出しなさい。',
   '縄文時代に作られた土器。螺旋状に積み上げた粘土で形成され、野焼きで焼成される。ついでに土偶とかも作られた。',
   '敷金は家賃などの債務の担保として預けておく、保証金のようなもの。礼金は昔からの慣習のひとつ。部屋を貸してくれる大家さんにお礼の気持ちを込めて渡されていたもの。なんやねんそれ。家賃払っとるやないかこちらは。',
   'ある商品の「買う権利」を買うこと。例えばある株を10月1日に1000円で買うことができる権利　（=コールオプション）ということ。それが何と言われてもそれは自分で調べてくれ。',
   'そもそも企業が資金を調達するには「借金をすること」、「発行した株式を買ってもらうこと」の主に2つの方法がある。株式を発行して資金調達をし、事業活動を行う会社を「株式会社」と呼ぶ。株式の売買ができる株式市場（証券取引所）の審査基準をクリアすると上場できる。上場の目的は資金調達だが、世間からの信用が高まるということも大きい。信用があるところには人材もお金もあつまる。君が友達もお金もないのはつまりそういうことです',
   '電子機器などを長時間使用し、眼球の動きがない状態が続くと、眼球を動かすための7本の筋肉と、ピントを合わせるための水晶体の厚さを調節している筋肉が筋肉疲労を起こしてしまう。そんなに画面ばっかりみつめてると大事なものが見えなくなっちまうぜ。',
   '日本固有の雇用戦略。「終身雇用」、「年功序列」、「企業別組合」の3つの雇用システムとも大きな関わりを持つ。社員を長期的に教育するための前提条件として「終身雇用」があり、その長期的教育の成果に応えるために「年功序列」が必要とされる。新卒であるというだけで未経験者を採用するという、専門性を有すことを前提に採用を行う海外企業からすると摩訶不思議な仕組みだが、日本の風土にはリンクしていた。ただもう時代に合ってないよね。',
   '重力は光を曲げる。重力は空間を曲げる。重力は時間を遅らせる。何を言っているんだアインシュタイン。',
   '国や自治体の基礎的な財政収支。税収、租税収入と国債費を除く歳出との収支。要するに出て行くお金と入ってくるお金のバランス。支出の方が大きくなると「プライマリーバランスは赤字」となる。使用例『彼との恋のプライマリーバランスはいつも赤字だわ』',
   '歯茎が下がる、歯のエナメル質が摩耗するなど、一般的な歯のトラブルが原因でしみたり、痛みを感じたりする状態のこと。シュ○テクト使おう。',
   '分散型台帳技術。だれが誰にどれくらいお金を渡したか、というような取引データをそのネットワークに参加する全ての人が共有し、お互いに管理するシステム。前の取引履歴を元に次の取引が行われるので不正を行うのは難しい。投機とかは本質じゃないよ。',
   '人間が行うように、目や耳から得た情報を経験、知識と照らし合わせ、それが何かを判断する脳の動きをコンピュータが再現すること。深層学習、機械学習というのはその人工知能が判断に必要な経験や知識を学習する手法。君はもう働かなくていいから漫画でも読んでなさい。'
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
