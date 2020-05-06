// eslint-disable-next-line no-unused-vars
function subForm(successName, name, email, phone, businessName) {
  document.querySelector(`#${successName}`).innerText =
    'Thank you ' +
    (name || email) +
    '. We will be in contact with you. We look forward to working with your business, ' +
    businessName +
    '.'
}

window.onload = function () {
  document.querySelectorAll('button').forEach((button) => {
    if (button.innerText.toLowerCase().trim() === 'get in contact') {
      button.addEventListener('click', function () {
        document.querySelector('#sidebar-form').dispatchEvent(new Event('submit'))
      })
    }
  })
}
