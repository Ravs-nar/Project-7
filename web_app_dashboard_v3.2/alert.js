const alertBanner = document.getElementById("alert");


///create the html for the banner
alertBanner.innerHTML =
`<div class="alert-banner">
<p><strong>Alert :</strong> You have unread messages</p>
<p  style = "padding-left: 20px;"class="alert-banner-close">x</p>
</div>
` 
  


/// alert banner function
alertBanner.addEventListener("click", e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
        alertBanner.style.display="none"
    }
}); 



