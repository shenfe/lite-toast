var rand_826738140 = (function () {
    var document = window.document,
        cssText  = 'pointer-events: none;\
                    color: #fff;\
                    opacity: 0;\
                    -moz-transition: all .2s ease-in-out;\
                    -webkit-transition: all .2s ease-in-out;\
                    -o-transition: all .2s ease-in-out;\
                    transition: all .2s ease-in-out;\
                    position: fixed;\
                    background: rgba(0,0,0,0.5);\
                    border-radius: 6px;\
                    padding: 4px 8px;\
                    top: 50%;\
                    left: 50%;\
                    -moz-transform: translate(-50%, -50%);\
                    -webkit-transform: translate(-50%, -50%);\
                    -o-transform: translate(-50%, -50%);\
                    transform: translate(-50%, -50%);\
                    z-index: 999999999;\
                    display: inline-block;\
                    max-width: 80%;\
                    word-wrap: break-word;';

    return function (content, option) {
        option = option || {};
        var dom = document.createElement('span');
        dom.style.cssText = cssText + (option.cssText || '');
        document.body.appendChild(dom);
        dom.innerHTML = content;
        window.setTimeout(function () {
            dom.style.pointerEvents = 'auto';
            dom.style.opacity = '1';
            window.setTimeout(function () {
                dom.style.pointerEvents = 'none';
                dom.style.opacity = '0';
                window.setTimeout(function () {
                    option.callback && option.callback();
                    document.body.removeChild(dom);
                }, 250);
            }, option.delay || 1000);
        }, 0);
    };
})();

if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
        exports = module.exports = rand_826738140;
    }
} else {
    window.Toast = rand_826738140;
}
