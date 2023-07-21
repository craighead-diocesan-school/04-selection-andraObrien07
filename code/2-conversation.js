// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {

  alert('lets have a convo!')
  let sports = prompt('do you like sports? yes or no')

  // if they say 'yes' to liking sports thatn the 'run' code will go
  if (sports == 'yes') {
    let run = prompt('Thats great! Do you enjoy running? yes or no')
    //if they say 'yes' to liking running then they will be told to try track and field
    if (run == 'yes') {
      alert('You should try track and field sports then!')
    }
    //if they say 'no' to liking running then they will be told to try swimming
    if (run == 'no') {
      alert('Maybe you should try swimming, that includes no running')
    }
  }
  //if they dont reply with either of those then they will be told i dont wanna talk anymore
  else {
    alert('i dont wanna talk anymore')
  }
}



function age() {
  // write your code here
  let name = prompt('What is your name?')
  let age = prompt('What is your age?')
  age = Number(age)

  //if the age given is less than 1 it will say invaild
  if (age < 1) {
    alert('that age is invalid please try again with a different age')
  }
  // if the age give in more than 130 it will say invaild
  if (age > 130) {
    alert('that age is invalid please try again with a different age')
  }
  //if the age given is more than 65 they will be told to retire
  if (age > 65) {
    alert(name + ', you should retire.')
    // if they are less than 5 they will be asked if they are supervised
  } else if (age < 5) {
    alert(name + ',you better have an adult with you while being on a device.')
  }
  // if they are more than or equal to they will be told they can vote
  else if (age >= 18) {
    alert(name + ',you can vote if u wanna cause your old enough')
  }
  // if they are not equal to 15 they will be told that were not the same age
  if (age != 15) {
    alert(name + ", We're not the same age")
  }



}
