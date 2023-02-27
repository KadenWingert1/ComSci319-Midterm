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
  /*Used to put user entered info into JSON*/
  const formEl = document.querySelector(".form");
  if(formEl){
    console.log("It is working");
  formEl.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    fetch('https://reqres/in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log('error '))
  }); 
}
/*End of code for convertnig to JSON*/