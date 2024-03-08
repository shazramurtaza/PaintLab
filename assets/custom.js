function currencyFormSubmit(event) {
  event.target.form.submit();
}

document.querySelectorAll('.shopify-localization-form input').forEach(function(element) {
  element.addEventListener('change', currencyFormSubmit);
});


function closeCab(event) {
  document.getElementById("custom-announcement-bar").style.display = "none";
}
