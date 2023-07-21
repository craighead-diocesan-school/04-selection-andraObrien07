// ####################################
// ###### ----- More Than 2 ----- #####
// ####################################

function moreThanTwo() {

  let stops = ''
  // loop that if 'stop' is not inputed in the value of stops will run
  while (stops != 'stop') {
    let number = prompt('Give me a number')

    // if the number given is more than 2 is will say that
    if (number > 2) {
      alert(number + ' is more than 2')
    }
    // if the number given is 2 it will say that
    else if (number == 2) {
      alert('thats 2')
    }
    // if the number given is less than 2 it will say that
    else if (number < 2) {
      alert(number + ' is less than 2')
    }
    // asks if they wanna stop to then if they say so the loop will stop asking questions
    stops = prompt('Say stop if you wanna stop')
  }
}