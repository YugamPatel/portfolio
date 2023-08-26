const scriptURL =
"https://script.google.com/macros/s/AKfycbxslZ-mL_3gxmxT-Z2sG2eCYaVNNqDBN-2GLRV6PUY_qd9GDHw9-p4sBiT6Tw9VP1iv/exec";
const form = document.forms["submit-to-google-sheet"];
const message = document.getElementById("message");
form.addEventListener("submit", (e) => {
e.preventDefault();
fetch(scriptURL, { method: "POST", body: new FormData(form) })
  .then((response) => {
    message.innerHTML = "Message sent successfully."
    setTimeout(function(){
      message.innerHTML = ""
    },4000)
    form.reset()
  })
  .catch((error) => console.error("Error!", error.message));
});