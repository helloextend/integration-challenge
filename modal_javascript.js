// Original JavaScript code by Chirp Internet: chirpinternet.eu
// Please acknowledge use of this code by including this header.

var checkForm = function(e)
{
  var form = (e.target) ? e.target : e.srcElement;
  console.log(form.radioSize.value  + " here");
  console.log(form.noselection + " no selection");
};

var noSelection = function(e){
  //var form = (e.target) ? e.target : e.srcElement;
  var form = document.getElementById('modal_feedback');
  form.submit();
}

var modal_init = function() {
  //Modal wrapped ensures the parent page cannot be interacted with while the modal is showing.
  var modalWrapper = document.getElementById("modal_wrapper");
  var modalWindow  = document.getElementById("modal_window");

  var openModal = function(e)
  {
    console.log('TEST')
    modalWrapper.className = "overlay";
    var overflow = modalWindow.offsetHeight - document.documentElement.clientHeight;
    if(overflow > 0) {
      modalWindow.style.maxHeight = (parseInt(window.getComputedStyle(modalWindow).height) - overflow) + "px";
    }
    modalWindow.style.marginTop = (-modalWindow.offsetHeight)/2 + "px";
    modalWindow.style.marginLeft = (-modalWindow.offsetWidth)/2 + "px";
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  };

  var closeModal = function(e)
  {
    modalWrapper.className = "";
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  };

  var keyHandler = function(e) {
    if(e.keyCode == 27) closeModal(e);
  };

  if(document.addEventListener) {
    document.getElementById("modal_open").addEventListener("click", openModal, false);
    document.getElementById("modal_close").addEventListener("click", closeModal, false);
    //document.addEventListener("click", clickHandler, false);
    document.addEventListener("keydown", keyHandler, false);
  } else {
    document.getElementById("modal_open").attachEvent("onclick", openModal);
    document.getElementById("modal_close").attachEvent("onclick", closeModal);
    //document.attachEvent("onclick", clickHandler);
    document.attachEvent("onkeydown", keyHandler);
  }

};

if(document.addEventListener) {
  document.getElementById("modal_feedback").addEventListener("submit", checkForm, false);
  document.getElementById("modal_no_selection").addEventListener("click", noSelection, false);
  document.addEventListener("DOMContentLoaded", modal_init, false);
  
} else {
  document.getElementById("modal_feedback").attachEvent("onsubmit", checkForm);
  document.getElementById("modal_no_selection").attachEvent("click", noSelection, false);
  window.attachEvent("onload", modal_init);
}