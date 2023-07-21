// ####################################
// ######## ----- Capital ----- #######
// ####################################

function capital() {
  // write your code here
  let name = prompt('What is your name?')
  let capital = prompt(name + ', What is the capital of france')

  // if they reply with 'Paris' then the good job code will run
  if (capital == 'Paris') {
    alert('That is correct ! Good job!')
  }
  // if they reply with anything that is not 'Paris' this code will run telling them to try witha captial letter
  else if (capital != 'Paris') {
    alert('That wrong loser ahahhaha')
    alert("If you answered 'paris' you should try with a capital letter.")
  }
}
