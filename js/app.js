const accordionItems = document.querySelectorAll(".accordion__item-title");

accordionItems.forEach((accordionItem) => {
  accordionItem.addEventListener("click", () => {
    if (!accordionItem.nextElementSibling.classList.contains("accordion__item-description--visible")) {
      // Check others accordion items before to show actual item
      const checkOthersItems = document.querySelectorAll(".accordion__item-description--visible")
      checkOthersItems.forEach((otherItem) => {
      otherItem.previousElementSibling.classList.remove("accordion__item-title--active")
      otherItem.classList.remove("accordion__item-description--visible");  
    })
      // Show accordion item  
      accordionItem.classList.add("accordion__item-title--active");
      accordionItem.nextElementSibling.classList.add("accordion__item-description--visible");
    } else {
      // Hidde accordion item
      accordionItem.classList.remove("accordion__item-title--active");
      accordionItem.nextElementSibling.classList.remove("accordion__item-description--visible");
    }
  })
})