

const button = document.querySelector('input[type="button"]');
button.addEventListener('click', function() {
  // Get the dropdown element
  const colorSelect = document.getElementById('colorSelect');
  
  // Get the selected index
  const selectedIndex = colorSelect.selectedIndex;
  
  // Remove the selected option if any
  if (selectedIndex !== -1) {
    colorSelect.remove(selectedIndex);
  }
});
