const item = document.querySelectorAll(".accordion-list__item");

console.log(item[0].children);
item[0].addEventListener("click", () => {
  console.log(item[0].children);

  console.log(item[0].children[1].classList);

  return !item[0].children[1].classList.contains(
    "accordion-list__item-description--visible"
  )
    ? item[0].children[1].classList.add(
        "accordion-list__item-description--visible"
      )
    : item[0].children[1].classList.remove(
        "accordion-list__item-description--visible"
      );
});
