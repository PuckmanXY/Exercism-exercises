var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  var result = '';
  if (who == undefined){
    return 'One for you, one for me.'
  }
  else{
    result = 'One for ' + who + ', one for me.';
    return result;
  }
};

module.exports = TwoFer;
