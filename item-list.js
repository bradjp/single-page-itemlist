(function(exports){
  var ItemList = function(){
    this.items = []
  }

  ItemList.prototype.addItem = function(item){
    this.items.push(item)
  }

  ItemList.prototype.getItems = function(){
    return this.items
  }

  exports.ItemList = ItemList

})(this)