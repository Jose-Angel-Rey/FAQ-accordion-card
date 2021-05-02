const item = document.querySelectorAll(".accordion__item");
// console.log(item);
// console.log(item.length);

item.forEach((element) => {
  element.addEventListener("click", () => {
    if (!element.lastElementChild.classList.contains("accordion__item-description--visible")) {
      itemId = 1;
      element.firstElementChild.classList.add("accordion__item-title--active");
      element.lastElementChild.classList.add("accordion__item-description--visible");
      console.log(itemId);
    } else {
      element.firstElementChild.classList.remove("accordion__item-title--active");
      element.lastElementChild.classList.remove("accordion__item-description--visible");
    }
  })
})