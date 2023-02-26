//Opens have bar and gets rid of company logo image
function openNavBar() {
    var x = document.getElementById("navbarHeader");
    var logo = document.getElementById("companyLogo");
    if (x.style.display === "none") {
      x.style.display = "block";
      logo.style.display = "none";
    } else {
      x.style.display = "none";
      logo.style.display = "block";
    }
  }
