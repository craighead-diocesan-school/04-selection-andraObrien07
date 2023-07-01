// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {

  alert('lets have a convo!')
  let sports = prompt('do you like sports? yes or no')

  if (sports == 'yes') {
    let run = prompt('Thats great! Do you enjoy running? yes or no')

    if (run == 'yes') {
      alert('You should try track and field sports then!')
    }

    if (run == 'no') {
      alert('Maybe you should try swimming, that includes no running')
    }
  }
  else {
    alert('i dont wanna talk anymore')
  }
}



function age() {
  // write your code here
  let name = prompt('What is your name?')
  let age = prompt('What is your age?')
  age = Number(age)


  if (age < 1) {
    alert('that age is invalid please try again with a different age')
  }

  if (age > 130) {
    alert('that age is invalid please try again with a different age')
  }

  if (age > 65) {
    alert('you should retire.')
  } else if (age < 5) {
    alert('you better have an adult with you while being on a device.')
  } else if (age >= 18) {
    alert('you can vote if u wanna cause your old enough')
  } if (age != 15) {
    alert("We're not the same age")
  }



}
