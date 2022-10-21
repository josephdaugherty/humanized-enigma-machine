function dropdown(){
  const selectHtmlElement = document.querySelector("#letter");

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for(let letter of alphabet ){
    let optionHtmlElement = document.createElement("option");
    optionHtmlElement.value = letter.toLowerCase();
    optionHtmlElement.textContent = letter;
    selectHtmlElement.appendChild(optionHtmlElement);
  }
}
