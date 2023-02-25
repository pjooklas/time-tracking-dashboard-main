function selection(selected) {
  let selections = document.getElementsByClassName('selection');

  for (let index = 0; index < selections.length; index++) {
    const element = selections[index];
    element.classList.contains(selected) ? element.className += " active" : element.classList.remove("active");
  }

}