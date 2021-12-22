// export function isWebp() {
//     function testWebP(callback) {
//         let webP = new Image();
//         webP.onload = webP.onerror = function () {
//             callback(webP.width == 2 && webP.height == 1);
//         };
//         webP.src = "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA=="
//     }
//
//     testWebP(function (support) {
//         let className = support === true ? 'webp' : 'no-webp';
//         document.documentElement.classList.add(className);
//     });
// }
export function isWebp() {
    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    testWebP(function (support) {

        if (support == true) {
            document.querySelector('body').classList.add('webp');
        } else {
            document.querySelector('body').classList.add('no-webp');
        }
    });
}