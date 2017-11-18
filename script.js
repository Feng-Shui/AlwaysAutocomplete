
for (let element of document.querySelectorAll("*[autocomplete][autofill]")) {
  element.removeAttribute("autocomplete");
  element.removeAttribute("autofill");
}
