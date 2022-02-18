export function width() {
    const name = document.querySelector('.user_name');
    let nameWidth = name.offsetWidth;
    if (nameWidth > 550){
        name.style.fontSize = '25px';
    }
}
