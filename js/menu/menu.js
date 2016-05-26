'use strict';
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
var MenuHandler = function () {
    function MenuHandler() {
        _classCallCheck(this, MenuHandler);
        this.menuTrigger = $('#menu-trigger');
        this.menu = $('.menu');
        this.toggleMenu();
    }
    MenuHandler.prototype.toggleMenu = function toggleMenu() {
        var _this = this;
        this.menuTrigger.on('click', function () {
            _this.menuTrigger.toggleClass('is-open');
            _this.menu.toggleClass('is-open');
        });
    };
    return MenuHandler;
}();