
/* La funcion canVote determinará si una persona puede votar basada en su edad y si está registrada para votar. */
function canVote(age, isRegistered) {
  if (age < 18) {
    return false;
  } else {
    if (isRegistered) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = canVote;
