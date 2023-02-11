const navList = document.querySelectorAll("nav li");
const contentList = document.querySelectorAll(".content");

navList.forEach((navItem, index) => {
  navItem.addEventListener("click", () => {
    navList.forEach((item) => item.classList.remove("active"));
    contentList.forEach((content) => content.classList.remove("show"));
    navItem.classList.add("active");
    contentList[index].classList.add("show");
  });
});
