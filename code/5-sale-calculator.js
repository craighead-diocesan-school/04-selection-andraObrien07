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
  discount = discount / 100
  // discount = Number(discount)
  olddiscount = discount * price
  newprice = price - olddiscount



  // if (money < NewTotal) {
  //   alert('You do not have enough money!')
  // }
  if (money < newprice) {
    alert('You do not have enough money ')
    alert('even with the' + discount + '%')
  }

  else if (money > newprice) {
    alert('You have enough money.')
    alert('with the discount of ' + discount)
  }

  // discount = discount / 100
}
