element = document.getElementById("animatedCube");
cat = document.getElementById("catImage");

element.addEventListener(
  "click",
  function (e) {
    e.preventDefault;
    element.classList.remove("animationWonders");
    cat.classList.remove("animationWonders");
    void element.offsetWidth;
    void cat.offsetWidth;
    cat.classList.add("animationWonders");
    element.classList.add("animationWonders");
  },
  false
);
