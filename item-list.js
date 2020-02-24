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

  ItemList.prototype.addNewItem = function(text){
    this.addItem(new Item(text))
  }

  exports.ItemList = ItemList

})(this)