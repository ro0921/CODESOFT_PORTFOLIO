<script>
  document.addEventListener("DOMContentLoaded", function () {
    // Typed.js initialization
    var typed = new Typed("#element", {
      strings: ["Web Developer", "Data Analyst", "Video Editor"],
      typeSpeed: 50,
    });



    // Observe the text elements in the "About" section
    const animatedElements = document.querySelectorAll(".text-animation");
    animatedElements.forEach((el) => observer.observe(el));
  });
</script>
