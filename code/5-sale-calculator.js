// ####################################
// #### ----- Sale Calculator ----- ###
// ####################################

function saleCalculator() {
  // write your code here

  let money = prompt('How much money do you have?')
  let price = prompt('How much is the price of the item you want to buy?')
  let discount = prompt('What is the discount percentage? for that item')
  // makes sure the computer reads all these as proper numbers
  money = Number(money)
  price = Number(price)
  discount = Number(discount)
  //calculates the discount by diving the discount by 100
  discount = discount / 100

  olddiscount = discount * price
  newprice = price - olddiscount
  // if the ampount of money they have is less than the disounted price it will say they dont have enough money
  if (money < newprice) {
    alert('You do not have enough money ')
    alert('even with the' + discount + '%')
  }
  //if the ampount of money they have is more than the disounted price it will say they have enough money
  else if (money > newprice) {
    alert('You have enough money.')
    alert('with the discount of ' + discount)
  }


}
