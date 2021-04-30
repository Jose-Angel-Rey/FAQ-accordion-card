const item = document.querySelectorAll(".accordion-list__item");

console.log(item[0].children);
console.log(item[0].children[0].firstElementChild);

item[0].addEventListener("click", () => {
  console.log(item[0].children);

  console.log(item[0].children[1].classList);

  return !item[0].children[1].classList.contains(
    "accordion-list__item-description--visible"
  )
    ? addEffects()
    : removeEffects();
});

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
