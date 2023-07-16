// ####################################
// ###### ----- More Than 2 ----- #####
// ####################################

function moreThanTwo() {
  // let stop = prompt('Do u wanna stop')

  // Alert('is the number more than 2?')
  // let number = prompt('Give me a number')
  // let stop = prompt('Do u wanna stop')
  // while (stop != 'yes') {

  //   let number = prompt('Give me a number')
  //   let stop = prompt('Do u wanna stop')
  //   if (number > 2) {
  //     alert(number + ' is more than 2')
  //   }

  //   else if (number < 2) {
  //     alert(number + ' is less than 2')
  //   }

  //   else {
  //     let stop = prompt('Do u wanna stop')
  //   }
  // }
  let number = prompt('Give me a number')
  let stops = ''
  while (stops != 'stop') {
    let number = prompt('Give me a number')
    if (number > 2) {
      alert(number + ' is more than 2')
    }
    else if (number == 2) {
      alert('thats 2')
    }

    else if (number < 2) {
      alert(number + ' is less than 2')
    }

    stops = prompt('Say stop if you wanna stop')
  }
}