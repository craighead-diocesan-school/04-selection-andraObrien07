// ####################################
// ###### ----- Driving Age ----- #####
// ####################################

function drivingAge() {
  let age = prompt('How old are you?')

  //if they are 16 and older they will be told they can dirver 
  if (age > 16) {
    alert("You're old enough to drive.")
  }
  //if the are under 16 they will be told tehir not old enough to drive
  else {
    alert('You are not old enough to drive')
  }
}
