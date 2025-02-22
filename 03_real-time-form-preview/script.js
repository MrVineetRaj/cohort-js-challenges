let profileForm = document.getElementById("profileForm");

let namePreview = document.getElementById("name-preview");
let jobTitlePreview = document.getElementById("jobTitle-preview");
let agePreview = document.getElementById("age-preview");
let bioPreview = document.getElementById("bio-preview");

profileForm.addEventListener("input", () => {
  namePreview.innerText = profileForm[0].value;
  jobTitlePreview.innerText = profileForm[1].value;
  agePreview.innerText = profileForm[2].value;
  bioPreview.innerText = profileForm[3].value;
});
