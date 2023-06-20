/*
 * Modify the contents of the function below, such that:
 *
 * If we're not hungry, we want to tell ourselves to get back to work.
 * Otherwise, we want to pick something up and eat it in the lab when
 * we've got less than 20 minutes or to try a place nearby if we've
 * got between 20 and 30 minutes. If we have any more time than that,
 * we want to remind ourselves that we're in a bootcamp and that we
 * should reconsider how much time we actually have to spare.
 *
 * hungry is a Boolean, representing if you're hungry or not.
 * availableTime is a Number representing the time you have for lunch,
 * in minutes.
 */

//My Pseudocode
// if I am hungry:
//   check if time is less than 20 minutes:
//     print "eat a snack in the lab"
//   else check if time is at least 20 minutes but less / equal to 30 minutes:
//     print "try a place nearby"
//   else check if time is more than 30 minutes:
//     print "program is intense afterall, you should probably reconsider how time time you have to spare"
// Otherwise if I am not hungry:
//   print "get back to work"

//The function below checks if I am hungry or not, then checks how much time I've got to spare to eat lunch and tells me what to do in each scenerio.
const whatToDoForLunch = function(hungry, availableTime) {
  if (hungry) {
    if (availableTime < 20) {
      return "Grab a snack and eat in the lab!";
    } else if (availableTime <= 30) {
      return "You've got sometime to try the new Chinese restaurant close by!";
    } else if (availableTime > 30) {
      return "You should probably reconsider how much time you have to spare and get back as quickly as you can!";
    }
  } else {
    return "Get back to work until you are hungry!";
  }
};


console.log(whatToDoForLunch(true, 20));
console.log(whatToDoForLunch(true, 50));
console.log(whatToDoForLunch(false, 30));
console.log(whatToDoForLunch(true, 15));
