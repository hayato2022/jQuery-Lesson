$(function() {
  $('#back a').on('click',function(event){
    // $('#id名 要素名')と指定すると、id内の子要素に対してのみ指定される
    // ここでは、id="back"内のaタグがクリックされたときに、処理が行われるように記述している
    // function(event)のeventはイベントオブジェクトというもので、今回はclickイベントが発生した際の様々な情報をeventという名前の引数に渡される

    // #back内のaタグがクリックされたときの処理
    // animate()は、アニメーション効果を設定するjQueryの関数
    $('body, html').animate({
      // scrollTop は、スクロール位置を取得できるメソッド
      scrollTop:0   //最上部に移動する
    }, 800);  //アニメーションの動作時間を「800」で指定しているので、「800ミリ秒間（0.8秒間）かけてページの最上部まで移動する」の意味
    event.preventDefault();
    // event.preventDefault(); は、aタグの機能を無効にするメソッド
    // aタグは画面遷移をする機能を保ちますが、今回は必要ないため無効化
  });
});