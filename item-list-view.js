(function(exports){
  var ItemListView = function(itemList){
    this.itemList = itemList
  }

  ItemListView.prototype.toHTML = function(){
    html = '<ul>'
    for (let i = 0; i < this.itemList.items.length; i++) {
     html = html + '<li><div>' + this.itemList.items[i].text + '</div></li>' 
    }
    return html + '</ul>';
  }

  exports.ItemListView = ItemListView
})(this)