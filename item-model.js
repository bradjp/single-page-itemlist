(function(exports){
  var Item = function(text){
    this.text = text;
  }

  Item.prototype.getText = function(){
    return this.text
  }
  exports.Item = Item
})(this)