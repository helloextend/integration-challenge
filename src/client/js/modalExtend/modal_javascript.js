//create function to submit - close the modal by removing overlay
function submitForm(){
  var modalWrapper = parent.document.getElementById("modal_wrapper");
  modalWrapper.classList.remove("overlay");
}
var noSelection = function(e){
  var modalWrapper = parent.document.getElementById("modal_wrapper");
  modalWrapper.classList.remove("overlay");
}

if(document.addEventListener) {
  document.getElementById("modal_no_selection").addEventListener("click", noSelection, false);
} else {
  document.getElementById("modal_no_selection").attachEvent("click", noSelection, false);
}