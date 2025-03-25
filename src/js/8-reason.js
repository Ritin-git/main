document.addEventListener("DOMContentLoaded", function () {
    let accordionItems = document.querySelectorAll(".reasons-accrdn-card");
    let sliderItems = document.querySelectorAll(".reasonert-navfor-slider-inr-item");
    let navItems = document.querySelectorAll(".reason-slider-nav-item");
    // let prevBtn = document.getElementById("prev-btn");
    // let nextBtn = document.getElementById("next-btn");

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

    // // Prev Button Click
    // prevBtn.addEventListener("click", () => {
    //     let activeIndex = [...sliderItems].findIndex((el) => el.classList.contains("active"));
    //     let newIndex = activeIndex > 0 ? activeIndex - 1 : sliderItems.length - 1;
    //     activateItem(newIndex);
    // });

    // // Next Button Click
    // nextBtn.addEventListener("click", () => {
    //     let activeIndex = [...sliderItems].findIndex((el) => el.classList.contains("active"));
    //     let newIndex = activeIndex < sliderItems.length - 1 ? activeIndex + 1 : 0;
    //     activateItem(newIndex);
    // });
});


let scrollPosition = 0;

function slideThumbnails(direction) {
    const container = document.querySelector(".reason-slider-nav");
    const wrapper = document.querySelector(".reason-slider-nav-wrapper");
    const itemWidth = 90; // Approx width of each thumbnail including gap

    // Determine the total scrollable width
    const maxScroll = wrapper.scrollWidth - container.clientWidth;

    if (direction === "right" && scrollPosition < maxScroll) {
        scrollPosition += itemWidth * 3;
    } else if (direction === "left" && scrollPosition > 0) {
        scrollPosition -= itemWidth * 3;
    }

    // Prevent scrolling past max
    if (scrollPosition > maxScroll) scrollPosition = maxScroll;
    if (scrollPosition < 0) scrollPosition = 0;

    wrapper.style.transform = `translateX(-${scrollPosition}px)`;
}