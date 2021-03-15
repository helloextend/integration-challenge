var checkForm = function(e)
{
  var form = (e.target) ? e.target : e.srcElement;
  console.log(form.radioSize.value  + " here");
  console.log(form.noselection + " no selection");
};

var noSelection = function(e){
  var form = document.getElementById('modal_feedback');
  form.submit();
}

if(document.addEventListener) {
  document.getElementById("modal_feedback").addEventListener("submit", checkForm, false);
  document.getElementById("modal_no_selection").addEventListener("click", noSelection, false);
  
} else {
  document.getElementById("modal_feedback").attachEvent("onsubmit", checkForm);
  document.getElementById("modal_no_selection").attachEvent("click", noSelection, false);
  window.attachEvent("onload", modal_init);
}