(function (exports){
  function ItemController(itemList){
    this.itemList = itemList
    itemList.addNewItem('Some stuff')
    itemLV = new ItemListView(itemList)
    this.itemLV = itemLV
  }
  ItemController.prototype.insertHTML = function(){
    html = this.itemLV.toHTML();    
    var element = document.getElementById('app');
    element.innerHTML = html
  }

  exports.ItemController = ItemController
})(this)
