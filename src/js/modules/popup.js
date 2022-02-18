export function popup() {
    const popupLinks = document.querySelectorAll('.popup-link');
    const body = document.querySelectorAll('.container');
    const lockPadding = document.querySelectorAll('.lock-padding');

    let unlock = true;

    const timeout = 500;

    if (popupLinks.length > 0) {
        for (let index = 0; index < popupLinks.length; index++) {
            const popupLink = popupLinks[index];
            popupLink.addEventListener("click", function (e) {
                const popupName = popupLink.getAttribute('href').replace('#', '');
                const currentPopup = document.getElementById(popupName);
                popupOpen(currentPopup);
                e.preventDefault();
            });
        }
    }

    const popupCloseIcon = document.querySelectorAll('.popup_close');
    if (popupCloseIcon.length > 0) {
        for (let index = 0; index < popupCloseIcon.length; index++) {
            const el = popupCloseIcon[index];
            el.addEventListener('click', function (e) {
                popupClose(el.closest('.popup'));
                e.preventDefault();
            });
        }
    }

    function popupOpen(currentPopup) {
        if (currentPopup && unlock) {
            const popupActive = document.querySelector('.popup.open');
            if (popupActive) {
                popupClose(popupActive, false);
            } else {
                bodyLock();
            }
            currentPopup.classList.add('open');
            currentPopup.addEventListener('click', function (e) {
                if (!e.target.closest('.popup_content')) {
                    popupClose(e.target.closest('.popup'));
                }
            });
        }
    }

    function popupClose(popupActive, doUnlock = true) {
        if (unlock) {
            popupActive.classList.remove('open');
            if (doUnlock) {
                bodyUnLock();
            }
        }
    }

    function bodyLock() {
        const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
           el.style.paddingRight = lockPaddingValue;
        }
        document.body.style.paddingRight = lockPaddingValue;
        document.body.classList.add('lock');

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    function bodyUnLock() {
        setTimeout(function () {
            if (lockPadding.length > 0) {
                for (let index = 0; index < lockPadding.length; index++) {
                    const el = lockPadding[index];
                    el.style.paddingRight = '0px';
                }
            }
            document.body.style.paddingRight = '0px';
            document.body.classList.remove('lock');
        }, timeout);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout);
    }

    document.addEventListener('keydown', function (e) {
        if (e.width === 27) {
            const popupActive = document.querySelector('.popup.open');
            popupClose(popupActive);

        }
    });

    (function () {
        if (!Element.prototype.closest) {
            Element.prototype.closest = function (css) {
                var node = this;
                while (node) {
                    if (node.matches(css)) return node;
                    else node = node.parentElement;
                }
                return null;
            };
        }
    })();
    (function () {
        if (!Element.prototype.matches) {
            Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
        }
    })();

}
