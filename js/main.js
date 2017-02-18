'use strict';
$(document).ready(function () {

    var tab1 = new TabMenu({
        selector : '.tab1'
    });


    var tab2 = new TabMenu({
        selector : '.tab2',
        fade: true,
        duration: 400
    });

/*
    //절차지향 코딩
    
    var $tabMenu = $('.tab_menu li');
    var $tabContens = $('.tab_contents li');
    var oldIndex = null;
    var currentIndex = 0;
    $tabMenu.on('click', function() {

        // 번호 갱신
        oldIndex = currentIndex;
        currentIndex = $(this).index();

        // 메뉴 변경 기능
        $tabMenu.not($(this)).removeClass('active');
        $(this).addClass('active');

        // 이미지 변경 기능
        $tabContens.eq(oldIndex).hide();
        $tabContens.eq(currentIndex).show();
    });
    
*/

});