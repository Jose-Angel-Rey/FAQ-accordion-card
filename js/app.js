const item = document.querySelectorAll(".accordion-list__item");

console.log(item.length);
console.log(item.children);

console.log(item[0].parentElement);
console.log(item[0].children[1].classList);
console.log(item[0].children[0].firstElementChild);

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", checkClass);
}

function checkClass(){
    return !item[0].children[1].classList.contains("accordion-list__item-description--visible")
    ? addEffects()
    : removeEffects();
}

function addEffects() {
  item[0].children[1].classList.add("accordion-list__item-description--visible");
  item[0].children[0].firstElementChild.classList.add("accordion-list__item-title--active");
  item[0].children[0].lastElementChild.classList.add("accordion-list__arrow-icon--rotate");
}
function removeEffects() {
  item[0].children[1].classList.remove("accordion-list__item-description--visible");
  item[0].children[0].firstElementChild.classList.remove("accordion-list__item-title--active");
  item[0].children[0].lastElementChild.classList.remove("accordion-list__arrow-icon--rotate");
}
// console.log(item[0].children[0].lastElementChild);
