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
    var businessName = $('#business').val()
    subForm('success1', name, email, phone, businessName)
  }

  document.querySelector('#sidebar-form').addEventListener(
    'submit',
    function () {
      subForm('success2', null, document.querySelector('#e2').value, null, 'have a good day')
    },
    true,
  )

  window.s = s
})(jQuery)
