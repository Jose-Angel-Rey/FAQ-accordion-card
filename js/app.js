const accordionItems = document.querySelectorAll(".accordion__item-title");
// console.log(item);
// console.log(item[0].nextElementSibling);

accordionItems.forEach((accordionItem) => {
  accordionItem.addEventListener("click", () => {
    if (!accordionItem.nextElementSibling.classList.contains("accordion__item-description--visible")) {
    
      const checkOthersItems = document.querySelectorAll("accordion__item-description--visible")
    checkOthersItems.forEach((otherItem) => {
      otherItem.classList.remove("accordion__item-description--visible");  
    console.log(otherItem);
    }) 
    
      accordionItem.classList.add("accordion__item-title--active");
      accordionItem.nextElementSibling.classList.add("accordion__item-description--visible");
    } else {
      accordionItem.classList.remove("accordion__item-title--active");
      accordionItem.nextElementSibling.classList.remove("accordion__item-description--visible");
    }
  })
})
