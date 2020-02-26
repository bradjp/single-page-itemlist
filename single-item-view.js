(function(exports){
  var SingleItemView = function(item){
    this.item = item
  }

  SingleItemView.prototype.getHTML = function(){
    return '<div>' + this.item.text + '</div>'
  }

  exports.SingleItemView = SingleItemView
})(this)