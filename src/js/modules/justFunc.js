export function justFunc() {
    document.querySelectorAll('.valueNull').forEach(function(elem){
        if (elem.innerText === 'Отсутствует' || elem.innerText === 'Отсутствуют' || elem.innerText === '0'){
            elem.style.color = 'red';
        }
    });
}