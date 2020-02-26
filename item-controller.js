(function (exports){
  function ItemController(itemList){
    this.itemList = itemList
    itemList.addNewItem('Some stuff')
    itemLV = new ItemListView(itemList)
  }
  exports.ItemController = ItemController
})(this)

// (function(exports){
//   function ItemController(itemList){
//     this.itemList = itemList;
//     itemList.addNewItem('You used to be alright, what happened?')
//     this.itemLV = new ItemListView(itemList)
//   }
//   ItemController.prototype.insertHTML = function(){
//     html = this.itemLV.toHTML();
//     var element = document.getElementById('app');
//     element.innerHTML = html
//   }
//   exports.ItemController = ItemController
// })(this)