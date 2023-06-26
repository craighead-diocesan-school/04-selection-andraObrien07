// ####################################
// ###### ----- More Than 2 ----- #####
// ####################################

function moreThanTwo() {
  let stop = prompt('Do u wanna stop')

  // let number = prompt('Give me a number')
  while (stop != 'yes') {
    // let number = prompt('Give me a number')
    let number = prompt('Give me a number')
    if (number > 2) {
      alert(number + ' is more than 2')
    }

    else if (number < 2) {
      alert(number + ' is less than 2')
    }

    // let stop = prompt('Do u wanna stop')

  }
  // let no = go
}