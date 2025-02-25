const accordionContainers = document.querySelectorAll(".accordion-container");
const accordionHeader = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content");
const accordionOpenIndicator = document.querySelectorAll(
  ".accordion-open-indicator"
);
// alert();
let currOpenAccordion = -1;

// console.log(accordionHeader);
accordionContainers.forEach((container, index) => {
  container.addEventListener("click", () => {
    console.log("Clicked", currOpenAccordion);
    if (currOpenAccordion !== -1) {
      accordionContainers[currOpenAccordion].style.background = "transparent";
      accordionContainers[currOpenAccordion].style.color = "rgb(197, 197, 197)";
      accordionOpenIndicator[currOpenAccordion].style.transform =
        "rotate(0deg)";
      accordionContents[currOpenAccordion].style.display = "none";
    }

    if (currOpenAccordion === index) {
      accordionContents[currOpenAccordion].style.display = "none";
      currOpenAccordion = -1;
      return;
    }

    setTimeout(() => {
      currOpenAccordion = index;
      accordionContents[index].style.display = "inline-block";
      container.style.background = "#d4d4d4";
      container.style.color = "black";
      accordionOpenIndicator[index].style.transform = "rotate(-90deg)";
      console.log("Here", container);
    }, 100);
  });

  container.addEventListener("mouseover", () => {
    container.style.background = "#d4d4d4";
    container.style.color = "black";
  });
  container.addEventListener("mouseleave", () => {
    container.style.background = "transparent";
    container.style.color = "rgb(197, 197, 197)";
  });
});
