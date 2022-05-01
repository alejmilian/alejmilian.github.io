document.querySelector(".navbar-burger").addEventListener("click", (e) => {
  document.querySelector(".navbar-burger").classList.toggle("is-active");
  document.querySelector(".navbar-menu").classList.toggle("is-active");
});

document.querySelector("#year").textContent = new Date().getFullYear();

(function () {
  emailjs.init("035XWfZqBzOLcI61O");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      // this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("service_ft0wjph", "template_1oetjab", this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
