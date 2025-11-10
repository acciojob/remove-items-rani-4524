//your JS code here. If required.
// const selectElement=document.getElementById("colorSelect");
// const selectedIndex = selectElement.selectedIndex;

// if (selectedIndex !== -1) {
//   selectElement.remove(selectedIndex);
// }


const selectElement = document.getElementById("colorSelect");

for (let i = 0; i < selectElement.options.length; i++) {
  if (selectElement.options[i].text === "Green") {
    selectElement.remove(i);
    break;
  }
}
