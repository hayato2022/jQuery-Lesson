$(function() {
  // .on('click', function()で.menu-triggerがクリックされたときに、処理が行われるように設定
  $('.menu-trigger').on('click', function(event) {
    // .toggleClass()は、指定されているclass（ここではactive）をトグル処理するメソッド
    // トグル処理では、該当のclass属性がある場合にはclassが削除され、ない場合にはclassが追加される
    // $(this)は、クリックされた要素自身を表す
    $(this).toggleClass('active');
    // .fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッド
    // このメソッドを使って、ハンバーガーメニューを開いたときの状態を設定する
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  })
})