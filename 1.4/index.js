let element = document.querySelector(`#dis`)
console.log(element);

element.style.color = "white"
let x = 0;

document.querySelector(`#close`).onclick = function() {
    element.style.display = "none"
    console.log('Close');
}
document.querySelector(`#open`).onclick = function() {
    element.style.display = "block"
    console.log('Open');
}