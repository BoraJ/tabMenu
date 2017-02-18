'use strict';
$(document).ready(function () {

    var tab = new TabMenu();

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


function TabMenu() {
    this.init();
    this.initEvent();
}


/*

//아래 객체 표기와 같음

TabMenu.prototype.init = function() {};
TabMenu.prototype.initEvent = function() {};

*/

TabMenu.prototype = {

    // 구조 정리
    init : function () {
        this.$tabMenu = $('.tab_menu li');
        this.$tabContens = $('.tab_contents li');
        this.oldIndex = null;
        this.currentIndex = 0;
    },

    // 시작하자마자 실행할 이벤트들
    initEvent : function () {
        var _this = this; // TabMenu 클래스의 this가 제이쿼리 객체 this 와 중복되니 변수선언으로 해결한다

        _this.$tabMenu.on('click',function () {
           _this.renewIndex( $(this) );
           _this.toggleMenu( $(this) );
           _this.toggleContent();
        });
    },

    // 번호 갱신 기능
    renewIndex: function($this) {
        this.oldIndex = this.currentIndex;
        this.currentIndex = $this.index();
    },

    // 메뉴 변경 기능
    toggleMenu: function ($this) {
        this.$tabMenu.not($this).removeClass('active');
        $this.addClass('active');
    },

    // 이미지 변경 기능
    toggleContent: function () {
        this.$tabContens.eq(this.oldIndex).hide();
        this.$tabContens.eq(this.currentIndex).show();
    }

};