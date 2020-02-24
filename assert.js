var assert = {
  isTrue: function(assertionCheck){
    if (!assertionCheck) {
      throw new Error('Assertion ' + assertionCheck + ' is not true.')
    }
  }
};