/* knows % of the page scrolled */
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

/* bonus skills appear / disappear */
function skillAppear() {
  var element = document.getElementById("bonusText");
  element.classList.toggle("disappear");
}