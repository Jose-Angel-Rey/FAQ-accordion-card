const item = document.querySelectorAll(".accordion-list__item");
const itemTitle = document.querySelectorAll(".accordion-list__item-title");
const itemDesc = document.querySelectorAll(".accordion-list__item-description");
const arrowIcon = document.querySelectorAll(".accordion-list__arrow-icon");

console.log(item);
console.log(item.length);

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener("click", () => {
    console.log(item[i].lastElementChild);
    if (
      !item[i].lastElementChild.classList.contains(
        "accordion-list__item-description--visible"
      )
    ) {
      itemTitle[i].classList.add("accordion-list__item-title--active");
      itemDesc[i].classList.add("accordion-list__item-description--visible");
      arrowIcon[i].classList.add("accordion-list__arrow-icon--rotate");
    } else {
      itemTitle[i].classList.remove("accordion-list__item-title--active");
      itemDesc[i].classList.remove("accordion-list__item-description--visible");
      arrowIcon[i].classList.remove("accordion-list__arrow-icon--rotate");
    }
  });
}