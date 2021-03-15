;(function ($) {
  'use strict'

  // nav stuff
  var navcoll = function () {
    if ($('#mainNav').offset().top > 100) {
      $('#mainNav').addClass('navbar-shrink')
    } else {
      $('#mainNav').removeClass('navbar-shrink')
    }
  }
  // collapse nav
  navcoll()
  // Collapse nav scroll
  $(window).scroll(navcoll)
  $('#customSolutions').click(function () {
    $('#sidebar-overlay').show()
    $('#sidebar').show()
  })
  $('#closeSidebar').click(function () {
    $('#sidebar-overlay').hide()
    $('#sidebar').hide()
  })

  function s(event) {
    event.preventDefault()
    var name = $('#name').val()
    var email = $('#email').val()
    var phone = $('#phone').val()
    var businessName = $('#business').val();
    //VFALK this function is called when clicking "Send Inquiry"
    openModal(event);
    subForm('success1', name, email, phone, businessName)
  }

  document.querySelector('#sidebar-form').addEventListener(
    'submit',
    function () {
      subForm('success2', null, document.querySelector('#e2').value, null, 'have a good day')
    },
    true,
  )


    //Modal wrapped ensures the parent page cannot be interacted with while the modal is showing.
    var modalWrapper = document.getElementById("modal_wrapper");
    var modalWindow  = document.getElementById("modal_window");

  var openModal = function(e){
    console.log('TEST')
    modalWrapper.className = "overlay";
    var overflow = modalWindow.offsetHeight - document.documentElement.clientHeight;
    console.log(overflow);
    if(overflow > 0) {
      modalWindow.style.maxHeight = (parseInt(window.getComputedStyle(modalWindow).height) - overflow) + "px";
    }
    modalWindow.style.marginTop = (-modalWindow.offsetHeight)/2 + "px";
    modalWindow.style.marginLeft = (-modalWindow.offsetWidth)/2 + "px";
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  };

    
  window.s = s
})(jQuery)
