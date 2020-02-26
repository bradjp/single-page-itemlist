(function(exports){
  counter = -1
  var Item = function(text){
    this.text = text;
    this.id = this.assignID()
  }

  Item.prototype.assignID = function(){
    counter ++;
    return counter;
  }

  Item.prototype.getText = function(){
    return this.text
  }
  exports.Item = Item
})(this)