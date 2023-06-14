// ####################################
// ##### ----- Conversation ----- #####
// ####################################

function conversation() {
  alert("Let's pick a sport for you.")

  alert('Do you like running? Answer yes or no.')
  let answer = prompt()
}
if (answer == 'yes')
  alert("That's good - you should try track and field sports.")
alert('Do you like track and field? Answer yes or no.')
let answer = prompt()
alert('You should do it then!')



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
