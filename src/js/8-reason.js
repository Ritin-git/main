document.addEventListener("DOMContentLoaded", function () {
    let accordionItems = document.querySelectorAll(".reasons-accrdn-card");
    let sliderItems = document.querySelectorAll(".reasonert-navfor-slider-inr-item");
    let navItems = document.querySelectorAll(".reason-slider-nav-item");

    function activateItem(index) {
        accordionItems.forEach((el) => el.classList.remove("active"));
        sliderItems.forEach((el) => el.classList.remove("active"));
        navItems.forEach((el) => el.classList.remove("active"));

        accordionItems[index].classList.add("active");
        sliderItems[index].classList.add("active");
        navItems[index].classList.add("active");
    }

    // Accordion Click Event
    accordionItems.forEach((item, index) => {
        item.addEventListener("click", () => activateItem(index));
    });

    // Thumbnail Click Event
    navItems.forEach((item, index) => {
        item.addEventListener("click", () => activateItem(index));
    });

});
