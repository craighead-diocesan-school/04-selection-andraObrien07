// ####################################
// #### ----- Sale Calculator ----- ###
// ####################################

function saleCalculator() {
  // write your code here

  let money = prompt('How much money do you have?')
  let price = prompt('How much is the price of the item you want to buy?')
  let discount = prompt('What is the discount percentage? for that item')

  money = Number(money)
  price = Number(price)
  discount = Number(discount)
  decimaldiscount = discount / 100
  decimaldiscount = Number(decimaldiscount)
  NewTotal = decimaldiscount * price

  // if (money < NewTotal) {
  //   alert('You do not have enough money!')
  // }
  if (money < price) {
    alert('You do not have enough money ')
  }

  else if (money > price) {
    alert('You have enough money.')

  }




}
