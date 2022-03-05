pticeList = []
const DiamondPrice = document.getElementById('price')
const modalPrice = document.getElementById('modalPrice')
const prices = document.querySelectorAll('.price')
let selectNumber = 0
function showPrice(element, price) {
  element.classList.toggle('select')
  // console.log(element.value)
  for (let i = 0; i < prices.length; i++) {
    const element_ = prices[i]
    if (element_.value !== element.value) {
      element_.classList.remove('select')
    }
  }
  DiamondPrice.innerHTML = price + ' ' + 'tk'
  modalPrice.innerHTML = price + ' ' + 'tk'
}

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = `<div class="alert alert-dismissible" role="alert" style='background: #03ff22'> ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>`

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Place order successfully, diamond added on your account in 5 minutes')
  })
}
