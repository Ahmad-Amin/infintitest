function toggleMenu() {
  var navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

let count = 1;
var interval_id = setInterval(change_img, 6000);

function change_img() {
  if (count == 1) {
    // let source = "url('img/slider" + count + ".png')";
    // document.getElementById("slider").style.backgroundImage = source;
    document.querySelector(".home-head").innerHTML =
      "We Build Powerful <span class='banner-main-heading' style='color: #9442fe;'>Digital Solutions</span>";
    document.querySelector(".home-para").textContent =
      "Unlock the potential of your business with our tailored business development solutions. Our team at INFINITI specializes in crafting powerful digital solutions tailored to your unique need covering all aspects of your business. Let us transform your vision into reality and propel your business to new heights in the digital age.";
    count++;
  } else if (count == 2) {
    // let source = "url('img/slider" + count + ".jpg')";
    // document.getElementById("slider").style.backgroundImage = source;
    document.querySelector(".home-head").innerHTML =
      "Empowering your <span class='banner-main-heading' style='color: #9442fe;'>StartUp Journey</span>";
    document.querySelector(".home-para").textContent =
      "Unleashing MVP Excellence for Idea Validation, Rapid Launch, and Cost-Efficient Concept Realization. Elevate with us for Seamless Design, Development, Upgrades, and Pivots – Where Innovation Meets Precision!";
    count++;
  } else if (count == 3) {
    // let source = "url('img/slider" + count + ".jpg')";
    // document.getElementById("slider").style.backgroundImage = source;
    document.querySelector(".home-head").innerHTML =
      "Unleash the Power Of <span class='banner-main-heading' style='color: #9442fe;'>Generative AI</span>";
    document.querySelector(".home-para").textContent =
      "We harness the potential of Generative AI to create dynamic and customizable content, designs, and experiences. Experience the future of AI-driven creativity with our Generative AI solutions.";
    count++;
  } else if (count == 4) {
    // let source = "url('img/slider" + count + ".jpg')";
    // document.getElementById("slider").style.backgroundImage = source;
    document.querySelector(".home-head").innerHTML =
      "Empower your software development needs with a <span class='banner-main-heading' style='color: #9442fe;'>dedicated team</span>";
    document.querySelector(".home-para").textContent =
      "From front-end development to backend architecture, our team is equipped to tackle projects of any scale or complexity. Partner with us to elevate your software initiatives and unlock new opportunities for growth.";
    count++;
  } else {
    count = 1;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  function removeBorders() {
    document.querySelectorAll(".slide-click").forEach(function (button) {
      button.removeAttribute("id");
    });
  }

  document.querySelector(".btn1").addEventListener("click", function () {
    count = 1;
    change_img();
    // removeBorders();
    // document.getElementById("slider").style.backgroundImage =
    //   "url('img/slider1.jpg')";
    // this.setAttribute("id", "button-borders");
  });
  document.querySelector(".btn2").addEventListener("click", function () {
    count = 2;
    change_img();
    // removeBorders();
    // document.getElementById("slider").style.backgroundImage =
    //   "url('img/slider2.jpg')";
    // this.setAttribute("id", "button-borders");
  });

  document.querySelector(".btn3").addEventListener("click", function () {
    count = 3;
    change_img();
    // removeBorders();
    // document.getElementById("slider").style.backgroundImage =
    //   "url('img/slider3.jpg')";
    // count = 3;
    // this.setAttribute("id", "button-borders");
  });

  document.querySelector(".btn4").addEventListener("click", function () {
    count = 4;
    change_img();
    // removeBorders();
    // document.getElementById("slider").style.backgroundImage =
    //   "url('img/slider4.jpg')";
    // count = 4;
    // this.setAttribute("id", "button-borders");
    // document.querySelector(".home-head").textContent =
    //   "Empower your software development needs with a dedicated team";
    // document.querySelector(".home-para").textContent =
    //   " From front-end development to backend architecture, our team is equipped to tackle projects of any scale or complexity. Partner with us to elevate your software initiatives and unlock new opportunities for growth.";
  });
});
