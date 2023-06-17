// ####################################
// ######## ----- Capital ----- #######
// ####################################

function capital() {
  // write your code here
  let name = prompt('What is your name?')
  let capital = prompt(name + ' What is the capital of france')

  if (capital == 'Paris') {
    alert('That is correct ! Good job!')
  }
  else if (capital != 'Paris') {
    alert('That wrong loser ahahhaha')
    alert("If you answered 'paris' you should try with a capital letter.")
  }
}
